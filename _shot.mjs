import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'

const URL = process.argv[2] || 'https://laksh-mocha.vercel.app'
const OUT = process.argv[3] || 'B:/Laksh/_shots'
const TAG = process.argv[4] || 'home'
const path = process.argv[5] || '/'
mkdirSync(OUT, { recursive: true })

// width, label  — representative breakpoints for phones/tablets/laptops
const sizes = [
  [360, 'xs'],   // small Android
  [390, 'mobile'], // iPhone
  [768, 'tablet'], // iPad portrait
  [1024, 'ipadL'], // iPad landscape / small laptop
  [1280, 'desktop'],
  [1536, 'wide'],
]

const browser = await puppeteer.launch({ channel: 'chrome', headless: true })
for (const [w, name] of sizes) {
  const page = await browser.newPage()
  await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 })
  await page.goto(URL + path, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluateHandle('document.fonts.ready')
  await new Promise((r) => setTimeout(r, 400))
  await page.screenshot({ path: `${OUT}/${TAG}-${String(w).padStart(4, '0')}-${name}.png`, fullPage: true })
  await page.close()
  console.log('shot', name, w)
}
await browser.close()
console.log('done')
