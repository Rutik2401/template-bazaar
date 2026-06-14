# SEO Checklist — Template Bazaar

Technical SEO is implemented in code (metadata, canonicals, sitemap, robots,
JSON-LD, hreflang, manifest, OG image, cache headers). The items below are the
**manual steps only you can do** to actually start ranking.

## 1. Set the production domain (required)

Canonicals, Open Graph, the sitemap and robots all derive from one env var.

- In **Vercel → Project → Settings → Environment Variables**, add:
  - `NEXT_PUBLIC_SITE_URL = https://your-real-domain.com` (Production, no trailing slash)
- Locally, copy `.env.example` → `.env.local` and set the same.
- Without it, the site falls back to the Vercel deployment host — fine for
  previews, wrong as the indexed canonical for production.

## 2. Add a custom domain

- Add your domain in **Vercel → Project → Settings → Domains** and point DNS.
- Pick ONE canonical host (www **or** non-www) and let the other 301-redirect to
  it (Vercel does this automatically once both are added).

## 3. Verify the site in search engines

- **Google Search Console** (https://search.google.com/search-console): add the
  domain property, verify (DNS TXT is easiest on Vercel).
- **Bing Webmaster Tools** (https://www.bing.com/webmasters): add + verify (you
  can import directly from Google Search Console).

## 4. Submit the sitemap

- In Google Search Console → **Sitemaps**, submit: `https://your-domain.com/sitemap.xml`
- Do the same in Bing Webmaster Tools.
- Sanity-check these URLs in a browser after deploy:
  - `/sitemap.xml` — lists home + all categories + all templates
  - `/robots.txt` — allows `/`, disallows `/api/` and `/print/`, links the sitemap
  - `/manifest.webmanifest`

## 5. Replace the placeholder brand assets

The generated assets are functional placeholders — swap them for designed ones:

- `public/og.png` — 1200×630 social share card (the image people see on
  WhatsApp / X / Facebook). Use your real brand art.
- `public/apple-touch-icon.png` — 180×180 iOS home-screen icon.
- `public/favicon.svg` — already present; keep or refresh.

## 6. Run a quality pass after deploy

- **Lighthouse** (Chrome DevTools → Lighthouse) — aim for SEO 100, plus a green
  Performance / Accessibility / Best Practices.
- **PageSpeed Insights** (https://pagespeed.web.dev) — check **mobile** Core Web
  Vitals (LCP, CLS, INP); mobile is what Google ranks on.
- **Rich Results Test** (https://search.google.com/test/rich-results) — confirm
  the FAQ, Breadcrumb, Organization and CreativeWork structured data validate.
- **Mobile-Friendly / live URL inspection** in Search Console for a few key URLs.

## 7. Off-page (what actually moves you to #1)

Code gets you *eligible* for page 1. Ranking #1 also needs:

- **Content depth** — the category/template pages are thin (mostly UI). Add real
  descriptive copy, use-case text, and internal links targeting the phrases
  people search (e.g. "free Marathi wedding invitation card maker").
- **Backlinks** — links from real Indian wedding/parenting/jobs sites, blogs,
  directories and social profiles.
- **Freshness & engagement** — keep adding templates (they auto-enter the
  sitemap) and improve dwell time / reduce bounce.

---

## Known limitation — multilingual (mr / hi) SEO

i18n is **client-side** (locale in `localStorage`, switched in the browser).
Marathi/Hindi content is therefore surfaced via a `?lang=mr` / `?lang=hi` query
param, and `hreflang` alternates point at those URLs (see
`src/utils/siteUrl.js` → `languageAlternates`). The server still renders English
first, so the language variants carry **limited** ranking weight.

**Recommended upgrade for serious mr/hi ranking:** move to path-based locales
(`/mr/...`, `/hi/...`) via a Next.js middleware/route segment that sets the
locale server-side, so each language has its own indexable, server-rendered URL.
That is a larger change (routing + provider reads locale from the path) and was
intentionally deferred to avoid destabilising the current build.

## What was implemented in code

- `metadataBase`, title template, canonical URLs on every route
- Open Graph + Twitter cards + `public/og.png`
- Per-page `generateMetadata` for category & template pages (unique titles/desc)
- `generateStaticParams` (pre-render categories + templates for fast CWV)
- `app/sitemap.js`, `app/robots.js`, `app/manifest.js`
- JSON-LD: Organization, WebSite, WebPage, FAQPage (home), BreadcrumbList +
  CollectionPage (category), BreadcrumbList + CreativeWork (template)
- `/print/*` marked `noindex` and disallowed in robots
- `hreflang` alternates (en-IN / mr-IN / hi-IN / x-default) via `?lang=`
- `apple-touch-icon`, PWA manifest, immutable cache headers for static assets
