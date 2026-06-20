'use client'

import { useEffect, useState } from 'react'
import { I18nProvider } from '@/i18n/I18nProvider'
import { getTemplateById } from '@/templates'

/**
 * Headless render target for server-side export.
 *
 * The export API (`/api/export`) navigates a real headless Chrome to the
 * `/print/<id>` route, waits for the `data-print-ready` flag, then captures
 * `page.pdf()` (vector, selectable text) or `page.screenshot()` (HD PNG) at the
 * template's natural size. Because it re-uses the SAME Preview component +
 * Tailwind + next/font as the editor, the output is pixel-identical to the live
 * preview — and Chrome renders gradient `bg-clip-text` text natively, so no
 * html2canvas workarounds.
 *
 * Form values arrive in the URL *hash* (not the query): unlimited Unicode
 * (Marathi/Hindi) survives without edge URL-length limits and never hits logs.
 *   /print/<id>?locale=mr#<encodeURIComponent(JSON.stringify(values))>
 *
 * Rendered from a thin server `page.jsx` that marks the route `noindex` (these
 * capture pages must never appear in search results).
 */
export default function PrintView({ templateId }) {
  const template = getTemplateById(templateId)
  const [state, setState] = useState(null) // { values, locale, watermark } — resolved after mount

  // Decode values from the hash + locale/watermark from the query (client-only).
  // `watermark` is set by the export API ONLY when an unentitled user downloads a
  // premium design — the server is the single source of truth for it.
  useEffect(() => {
    let values = {}
    try {
      const raw = window.location.hash.slice(1)
      if (raw) values = JSON.parse(decodeURIComponent(raw))
    } catch {
      values = {}
    }
    const params = new URLSearchParams(window.location.search)
    const locale = params.get('locale') || 'en'
    const watermark = params.get('watermark') === '1'
    setState({ values, locale, watermark })
  }, [])

  // Signal "ready to capture" once values are applied AND web fonts + any
  // uploaded photos have painted (so a data-URL image never captures half-decoded).
  useEffect(() => {
    if (!state || !template) return
    let cancelled = false
    const flag = () => {
      if (!cancelled) document.documentElement.setAttribute('data-print-ready', '1')
    }
    const ready = async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready
        const imgs = Array.from(document.querySelectorAll('[data-export-capture] img'))
        await Promise.all(imgs.map((img) => (img.decode ? img.decode().catch(() => {}) : null)))
      } catch {
        /* best-effort — fall through to flag regardless */
      }
      // Two rAFs ensure layout/paint settled after fonts/images swap in.
      requestAnimationFrame(() => requestAnimationFrame(flag))
    }
    ready()
    return () => {
      cancelled = true
    }
  }, [state, template])

  // Hard reset so the capture box sits flush at (0,0) for an exact clip.
  const reset = (
    <style>{`html,body{margin:0!important;padding:0!important;background:#fff!important}`}</style>
  )

  if (!template) {
    return (
      <div data-print-ready="1" style={{ padding: 24, fontFamily: 'sans-serif' }}>
        {reset}
        Template not found
      </div>
    )
  }

  const { width, height, Preview } = template

  // Pre-decode placeholder (kept un-flagged so the API never captures too early).
  if (!state) {
    return (
      <div style={{ width, height, background: '#fff' }}>
        {reset}
      </div>
    )
  }

  return (
    <I18nProvider initialLocale={state.locale}>
      {reset}
      <div
        data-export-capture
        style={{ position: 'relative', width, height, background: '#fff', overflow: 'hidden' }}
      >
        <Preview values={state.values} />
        {state.watermark && <Watermark />}
      </div>
    </I18nProvider>
  )
}

/**
 * Tiled diagonal "Template Bazaar" watermark, painted over the whole capture
 * area so it is baked into both the PDF and the PNG. Used only for unentitled
 * downloads of premium designs (free templates never get this). Rendered as a
 * repeating inline-SVG background so headless Chrome reproduces it exactly.
 */
function Watermark() {
  const tile = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'>" +
      "<text x='30' y='120' transform='rotate(-30 160 100)' " +
      "font-family='Helvetica, Arial, sans-serif' font-size='26' font-weight='700' " +
      "fill='rgba(15,23,42,0.12)' letter-spacing='2'>Template Bazaar</text></svg>",
  )
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,${tile}")`,
        backgroundRepeat: 'repeat',
      }}
    />
  )
}
