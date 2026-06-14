/**
 * Canonical site URL resolution — the single source of truth for absolute URLs
 * used by metadata, canonicals, Open Graph, the sitemap and robots.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL   — your production domain (set this in Vercel).
 *   2. VERCEL_URL             — the auto-assigned preview/prod deployment host.
 *   3. http://localhost:3000  — local development fallback.
 */
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/config'

/** @returns {string} Absolute origin, no trailing slash. */
export function siteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

/**
 * Join a path onto the site origin → a fully-qualified absolute URL.
 *
 * The root resolves to the bare origin (no trailing slash) to match Next's
 * canonical normalisation (trailingSlash: false), so canonical tags, the
 * sitemap and JSON-LD all reference the home page identically — no
 * duplicate-URL ambiguity for crawlers.
 *
 * @param {string} [path='/']
 * @returns {string}
 */
export function absoluteUrl(path = '/') {
  const base = siteUrl()
  if (!path || path === '/') return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Build the `alternates.languages` map (hreflang) for a given path.
 *
 * NOTE: i18n is currently client-side (locale stored in localStorage + ?lang),
 * so non-English variants are surfaced via a `?lang=` query param rather than a
 * dedicated `/mr` `/hi` URL path. This is the lightweight hreflang strategy —
 * see SEO-CHECKLIST.md for the recommended upgrade to path-based routing, which
 * carries more ranking weight for Marathi/Hindi.
 *
 * @param {string} [path='/']
 * @returns {Record<string,string>}
 */
export function languageAlternates(path = '/') {
  const base = absoluteUrl(path)
  /** @type {Record<string,string>} */
  const languages = { 'x-default': base }
  for (const { code } of LOCALES) {
    const hreflang = `${code}-IN`
    languages[hreflang] =
      code === DEFAULT_LOCALE ? base : `${base}${base.includes('?') ? '&' : '?'}lang=${code}`
  }
  return languages
}
