/**
 * Print-quality export — headless Chrome renders the template's /print page and
 * captures it as a VECTOR PDF (selectable text, crisp at any zoom) or an HD PNG
 * (3× device pixels). One real-Chrome engine drives both, so outputs match the
 * live preview exactly. This replaces the html2canvas screenshot-into-PDF path.
 *
 * POST body: { templateId, values, locale, format: 'pdf'|'png', width, height, fileName }
 */
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'
import { auth } from '@/auth'
import { getTemplateById } from '@/templates'
import { isEntitled } from '@/lib/entitlements'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

/**
 * Launch a browser that works both on Vercel (bundled @sparticuz/chromium) and
 * in local dev (an installed Chrome via the `chrome` channel).
 */
async function launchBrowser({ width, height, deviceScaleFactor }) {
  const onVercel = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME

  if (onVercel) {
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width, height, deviceScaleFactor },
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  }

  // Local development — use the system Chrome/Chromium install.
  return puppeteer.launch({
    channel: 'chrome',
    headless: true,
    defaultViewport: { width, height, deviceScaleFactor },
  })
}

export async function POST(request) {
  let browser
  try {
    const {
      templateId,
      values = {},
      locale = 'en',
      format = 'pdf',
      width,
      height,
      fileName,
    } = await request.json()

    if (!templateId || !width || !height) {
      return Response.json({ error: 'templateId, width and height are required' }, { status: 400 })
    }

    const isPng = format === 'png'

    // ── Paywall (server-side, authoritative) ───────────────────────────────
    // Resolve the template's tier from the registry (NOT the client payload),
    // read the signed-in session, and decide entitlement in one place. Free
    // designs are always clean; an unentitled premium download is watermarked.
    // The client cannot bypass this by editing its request.
    const template = getTemplateById(templateId)
    const tier = template?.tier ?? 'free'
    let session = null
    try {
      session = await auth()
    } catch {
      session = null // auth not configured / unavailable → treat as signed out
    }
    const watermark = !isEntitled({ tier, session })

    // Self-navigate to the headless render page on this same deployment.
    const proto = request.headers.get('x-forwarded-proto') || 'https'
    const host = request.headers.get('host')
    const hash = encodeURIComponent(JSON.stringify(values))
    const url =
      `${proto}://${host}/print/${encodeURIComponent(templateId)}` +
      `?locale=${encodeURIComponent(locale)}${watermark ? '&watermark=1' : ''}#${hash}`

    browser = await launchBrowser({
      width,
      height,
      deviceScaleFactor: isPng ? 3 : 1, // 3× = HD raster; PDF text is vector regardless.
    })

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
    // Wait for the template to apply values + finish painting fonts.
    await page.waitForSelector('[data-print-ready="1"]', { timeout: 15000 }).catch(() => {})
    await page.evaluateHandle('document.fonts.ready')

    let body
    let contentType
    let ext
    if (isPng) {
      body = await page.screenshot({
        type: 'png',
        clip: { x: 0, y: 0, width, height },
        omitBackground: false,
      })
      contentType = 'image/png'
      ext = 'png'
    } else {
      body = await page.pdf({
        width: `${width}px`,
        height: `${height}px`,
        printBackground: true,
        margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
        pageRanges: '1',
      })
      contentType = 'application/pdf'
      ext = 'pdf'
    }

    const safe =
      (fileName && String(fileName).replace(/[^\w.\-]+/g, '-').replace(/-+/g, '-')) ||
      `template-bazaar.${ext}`
    const finalName = safe.toLowerCase().endsWith(`.${ext}`) ? safe : `${safe}.${ext}`

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${finalName}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[export] failed:', err)
    return Response.json(
      { error: 'Export failed', detail: String(err?.message || err) },
      { status: 500 },
    )
  } finally {
    if (browser) await browser.close()
  }
}
