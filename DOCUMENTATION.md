# Template Bazaar — Project Documentation

> India's handcrafted marketplace of designer templates. Pick a design → fill a
> simple form (English / मराठी / हिंदी) → see a live preview → download a
> print-ready **PDF or HD image** in minutes. No sign-up. Mobile-first.

This document is the single reference for **what the product is**, **how it is
built**, and **where it is going** (see [Future Scope](#future-scope--roadmap) —
premium designs, login, and pricing).

- **Repo / dir:** `b:\Laksh`
- **Live:** `laksh-mocha.vercel.app` (Vercel project slug `laksh`)
- **Brand:** *Template Bazaar* (the directory and Vercel slug still read "laksh"
  for historical reasons — only the product brand changed).

---

## 1. Product at a glance

| | |
|---|---|
| **What** | A template marketplace: invitations, biodatas, resumes, festival greetings, business collateral. |
| **Who for** | Everyday users in India who need a beautiful card or document fast, on a phone, with zero design skill. |
| **Core promise** | The *designs are the product*. No Canva-style freeform editor — just fill the blanks. |
| **Catalog** | **10 categories × 5 templates = 50 production-ready templates.** |
| **Languages** | English (default), Marathi, Hindi — switchable instantly. |
| **Output** | Vector PDF (selectable text) or 3× HD PNG, rendered by real Chrome so it matches the preview exactly. |
| **Sign-up** | None today — frictionless. (Login arrives with premium — see roadmap.) |

### Product philosophy
1. **Extremely simple** — a single form, a live preview, one download button.
2. **Mobile-first** — most users arrive on a phone.
3. **Designs are the product** — quality templates, not an editor.
4. **Config-driven** — adding a template is data, not code paths.

---

## 2. Tech stack

- **Next.js 14 (App Router) + React 18** — frontend and backend deploy together
  as one Vercel project.
- **Tailwind CSS** — utility styling; decorative keyframes live in
  `tailwind.config.js`.
- **Fonts** — `next/font` for Inter / Playfair / Cormorant / Poppins;
  *Great Vibes* (calligraphy) is **self-hosted** via `@font-face` in
  `globals.css` (bundling a 5th Google font through `next/font` crashed the
  static-build step with OOM).
- **State** — local `useState` + small custom hooks. No global store.
- **Export engine** — server-side **headless Chrome** (`puppeteer-core` +
  `@sparticuz/chromium`). Client `html2canvas + jsPDF` remains only as a
  fallback.
- **Backend** — Next.js **Route Handlers** under `app/api/`.

---

## 3. Architecture

### 3.1 Routes (App Router)

```
app/
├─ layout.jsx                 Root layout — fonts, <I18nProvider>, metadata/SEO
├─ page.jsx                   /                       → HomePage
├─ category/[categoryId]/     /category/:id           → TemplateSelectPage
├─ editor/[templateId]/       /editor/:id             → EditorPage   (client island)
├─ print/[templateId]/        /print/:id              → chromeless render target for export
├─ not-found.jsx              404                     → NotFoundPage
└─ api/                       Backend (Route Handlers)
   ├─ health/                 GET  /api/health
   ├─ templates/              GET  /api/templates       (all metadata)
   ├─ templates/[id]/         GET  /api/templates/:id   (one template)
   └─ export/                 POST /api/export          (PDF/PNG via headless Chrome)
```

> **Why `src/views/` and not `src/pages/`** — Next treats a top-level `pages/`
> directory as the legacy Pages Router and would expose those files as stray
> routes. Page bodies therefore live in `src/views/`; the `app/` route files are
> thin wrappers that pass route params into them.

### 3.2 Server / client boundary

- **Server components (default):** `app/` route wrappers, `HomePage`,
  `TemplateSelectPage` — fast first paint.
- **Client islands (`'use client'`):** `TemplateCard`, `TemplateStage`,
  `EditorPage` — anything that measures the DOM, holds form state, or exports.

A template's `Preview` is a **React function**, so it cannot cross the
server→client boundary. Client islands receive a **serializable `templateId`**
and resolve the full template (with its `Preview`) on the client. Nothing
non-serializable is ever passed across the boundary.

### 3.3 Template engine (the scalability core)

```
src/templates/
├─ <category>/
│  ├─ SomeTemplate.jsx        Preview component: ({ values }) => JSX, fixed size
│  └─ index.js                export const <category>Templates = [ {config}, … ]
├─ _shared/fields.js          Reusable field schemas (weddingFields, …)
└─ index.js                   Concatenates all 10 category arrays → templateList
```

**Config shape** (everything is data — no behaviour hardcoded in the UI):

```js
{
  id, category, name, description,
  width, height,        // natural design size — drives live preview AND PDF
  fields,               // input schema (from _shared/fields.js or inline)
  Preview,              // React component ({ values }) => JSX
  colors, fonts,        // theme metadata
  i18n: { mr: { name, description }, hi: { … } }   // optional, co-located
}
```

- **Add a template:** create the `.jsx`, add its config to the category's
  `index.js`. The category page, editor form, live preview, PDF export, and
  `/api/templates` all pick it up automatically.
- **Add a category:** add a folder + one import line in `src/templates/index.js`,
  one entry in `src/data/categories.js`, **plus** a `CategoryDecor` case and a
  `HOVER_FX` entry (else the homepage card silently gets no motif).
- **Localised template strings** are co-located per config and resolved by
  `localizedTemplate(template, key, locale)` — *not* the central dictionary —
  so the dictionary stays small as the catalog grows to thousands.

Natural sizes: invites `640×900`, resume/biodata `794×1123` (A4), visiting card
`1000×580`, posters/flyers `720×960`.

### 3.4 Internationalisation (i18n)

- Custom React-context engine at `src/i18n/`. `useI18n()` → `t('dotted.key',
  fallback)`.
- Dictionaries: `src/i18n/locales/{en,mr,hi}.js` — **en is the source of truth
  and fallback**.
- Choice persists in `localStorage` (key `laksh.locale`); server always renders
  `en` to avoid a hydration mismatch, then hydrates to the saved locale.
- Always pass a fallback to `t()` so unknown keys degrade gracefully.

### 3.5 Export pipeline (Canva-grade output)

The editor has **two buttons — PDF and Image** — both rendered server-side by
real Chrome so output is crisp and matches the preview.

```
EditorPage ──POST /api/export──► headless Chrome ──navigates──► /print/[templateId]
 (values)     {templateId,         (puppeteer-core +              (re-renders the SAME
              values, locale,       @sparticuz/chromium)           Preview component)
              format, w, h)                │
                                           ├─ format 'pdf' → page.pdf()        → vector PDF (selectable text)
                                           └─ format 'png' → page.screenshot() → 3× HD raster
```

Key facts:
- `POST /api/export` → `runtime='nodejs'`, `maxDuration=60`.
- Values are passed in the **URL hash**
  (`#<encodeURIComponent(JSON.stringify(values))>`) — unlimited Unicode, never
  logged. Locale is a query param.
- `/print` sets `data-print-ready="1"` on `<html>` after fonts paint; the API
  waits on that selector before capturing.
- Because real Chrome renders gradient `bg-clip-text` natively, the
  `data-pdf-color` flatten hack is **only** needed for the html2canvas fallback.
- `next.config.mjs`: both packages are in `serverComponentsExternalPackages`;
  the Chromium binary is force-included via
  `experimental.outputFileTracingIncludes['/api/export']` (it's loaded from disk,
  not `require`d, so tracing misses it).
- **Gotcha:** import the puppeteer packages as **top-level static imports** —
  a dynamic `import()` in the route breaks `next build`'s "collect page data"
  step with `PageNotFoundError`.

### 3.6 Backend API

| Method & path | Returns |
|---|---|
| `GET /api/health` | Liveness check |
| `GET /api/templates` | `{ categories, templates }` — all metadata (the React `Preview` is stripped so the payload is JSON-serializable) |
| `GET /api/templates/:id` | One template's metadata |
| `POST /api/export` | Streams a PDF or PNG file (`Content-Disposition: attachment`) |

The handlers currently read from the **static** `templateList`. Swapping that
source for a database requires **no UI change** — the contract is JSON.

---

## 4. Catalog (10 categories × 5)

| Category | id | What it covers |
|---|---|---|
| 💍 Wedding Invitation | `wedding` | Royal, floral, minimal, luxury, boho |
| 💑 Engagement Invitation | `engagement` | Ring / Sakharpuda / couple / modern |
| 🎉 Birthday Invitation | `birthday` | Party, kids, elegant, luxury, surprise |
| 👶 Baby Naming (Baras) | `baras` | Boy / girl / cute / premium / traditional |
| 🛕 Religious Invitation | `religious` | Satyanarayan, Grah Pravesh, Ganpati, Vastu, Mata ki Chowki |
| 🕯️ Shradhanjali | `funeral` | Tribute, prayer meeting, 10th/13th-day, memorial |
| 📄 Resume | `resume` | ATS, fresher, engineer, corporate, two-column |
| 📋 Marriage Biodata | `biodata` | Traditional, Marathi, photo, modern, premium |
| 🪔 Festival Greetings | `festival` | Diwali, Ganesh, Eid, Christmas, New Year |
| 💼 Business Templates | `business` | Card, invoice, flyer, opening, offer |

Homepage cards each get a meaningful animated motif (`CategoryDecor.jsx`, a
`switch(id)`) and a unique hover transform (`HOVER_FX` in `CategoryCard.jsx`).
All motion pauses under `prefers-reduced-motion`.

---

## 5. User flow

```
Home ──► Category page ──► Editor ──► Download
 │          │                │           │
 pick a     pick a           fill the    PDF (vector)
 category   template         form;       or HD PNG
            (card grid)      live        — rendered by
                             preview     real Chrome
                             updates
                             as you type
```

No account, no payment, no watermark today. Everything is free.

---

## 6. Local development, build & deploy

```bash
npm install
npm run dev      # dev server      → http://localhost:3000
npm run build    # production build → .next/
npm start        # run the production build
```

- **Local export** uses your installed Chrome (`channel: 'chrome'`); on Vercel it
  uses the bundled `@sparticuz/chromium`. The route auto-detects via
  `process.env.VERCEL` / `AWS_LAMBDA_FUNCTION_NAME`.
- **Deploy:** push to GitHub and import on Vercel — Next.js is auto-detected,
  no config needed. Frontend and `/api/*` ship as one project.

---

## 7. Directory map

```
app/                  Next.js App Router — routes + backend (see §3.1)
src/
├─ components/         Reusable UI — Navbar, Footer, cards, FormField,
│                      TemplateStage, ExportBar, FeatureShowcase, Faq,
│                      Brand, CategoryDecor, LanguageSwitcher, Toast …
├─ views/             Page bodies — HomePage, TemplateSelectPage, EditorPage,
│                      NotFoundPage  (NOT src/pages/ — see §3.1)
├─ templates/         10 category folders + _shared/fields.js + registry index.js
├─ data/              categories.js (category metadata)
├─ i18n/              config, I18nProvider, locales/{en,mr,hi}.js
├─ hooks/             useTemplateForm, useElementSize
└─ utils/             cn, format, slug, exportPdf (fallback), exportRemote (server)
public/               favicon.svg, self-hosted fonts, static assets
```

---

# Future Scope / Roadmap

The architecture was deliberately built to grow. The three near-term pillars the
business wants next are **Premium Designs**, **Login**, and **Pricing for all** —
they are one connected feature set (you log in → to buy → to unlock premium).
Below is a concrete design for each, in build order, followed by the longer-term
roadmap.

> **Why these slot in cleanly today:** templates are config objects, the editor
> already funnels every export through one server endpoint (`/api/export`), and
> the API already serves template data as JSON. That gives us exactly three
> natural gates — a `tier` flag on the config, an auth check, and a paywall on
> export.

## A. Premium Designs (free vs. paid templates)

**Goal:** keep a strong free catalog as the funnel; mark the best designs as
*Premium*, unlockable by purchase.

**Data model** — add one field to the template config (§3.3):

```js
{
  id, category, name, …,
  tier: 'free' | 'premium',     // NEW — defaults to 'free'
  price: 4900,                   // OPTIONAL — paise (₹49); falls back to plan default
}
```

**UI surface:**
- A **"Premium" badge** on `TemplateCard` when `tier === 'premium'`.
- A **"Premium" filter/sort** on category pages.
- The live preview stays **fully visible** (premium designs sell themselves),
  but a free user's *download* of a premium template is either blocked or
  **watermarked** (see below).

**Watermark strategy (the conversion lever):**
- `/print/[templateId]` reads a `watermark=1` flag and overlays a tiled, low-
  opacity "Template Bazaar" mark.
- The export route sets that flag whenever the requester is unauthenticated /
  unpaid for a premium template. Paid → clean output.
- Free templates always export clean — no behaviour change for today's users.

**Enforcement point:** all gating happens **server-side in `/api/export`**, never
in the client. The client can hide buttons for UX, but the actual paywall is the
export handler refusing (or watermarking) a premium render. This is the single
most important security property of the whole premium system.

## B. Login / Authentication

**Goal:** identify the user so purchases and unlocks persist across devices —
while keeping the no-sign-up experience for free templates.

**Recommended approach:**
- **NextAuth.js (Auth.js)** or **Clerk** — both integrate with App Router via a
  route handler + middleware. Clerk is faster to ship; NextAuth is
  dependency-light and free.
- **Providers:** Google + Email OTP first (lowest friction in India), phone OTP
  later.
- **Session gate:** App Router **middleware** protects the *purchase* and
  *account* routes; browsing and previewing stay public.

**Where it plugs in:**
- `app/middleware.js` — guards `/account/*` and the purchase API.
- Navbar gains a sign-in / avatar slot (next to the language switcher).
- A new `/account` view: purchases, downloads, plan status.

**Principle:** **login is required only at the moment of unlocking a premium
asset**, not to browse, preview, or download free templates. Sign-up must never
become friction for the free funnel.

## C. Pricing for all (plans & payments)

**Goal:** monetise without killing the free funnel. Offer pricing that fits both
one-off users and frequent creators.

**Suggested tiers:**

| Plan | Price (illustrative) | What you get |
|---|---|---|
| **Free** | ₹0 | All free templates, English/Marathi/Hindi, watermark-free downloads of free designs. |
| **Single unlock** | ₹49–₹99 / template | One premium template, clean PDF + HD PNG, no subscription. |
| **Pro (subscription)** | ₹199 / month or ₹999 / year | Unlimited premium downloads, no watermark, priority new templates. |
| **Business** | Custom | Bulk/branded exports, invoice templates, team seats. |

**Payment gateway:**
- **Razorpay** is the primary recommendation (India-first: UPI, cards, netbanking,
  wallets; INR-native). **Stripe** as the international fallback.
- Server-side order creation + **webhook verification** (never trust the client
  on payment success). Razorpay's webhook → mark the purchase/subscription
  active in the DB.

**New API surface:**

```
POST /api/checkout            Create a Razorpay order (one-off or subscription)
POST /api/webhooks/razorpay   Verify signature → record purchase / activate plan
GET  /api/me/entitlements     What this user has unlocked (drives UI + export gate)
```

**The gate, end to end:**

```
User clicks Download on a PREMIUM template
        │
        ├─ not signed in? ──► prompt login (B)
        │
        ├─ signed in, no entitlement? ──► checkout (C: /api/checkout → Razorpay)
        │        │
        │        └─ webhook verifies payment ──► entitlement recorded
        │
        └─ entitled? ──► /api/export renders CLEAN (no watermark) ──► download
```

**Persistence:** introducing money means introducing a **database** (the current
static `templateList` is fine for catalog, but users/purchases need storage).
Recommended: **Vercel Postgres** (or Supabase) with tables `users`,
`purchases`, `subscriptions`, `entitlements`. Because `/api/templates` already
returns JSON, the catalog can stay static while only user/billing data goes to
the DB — minimal blast radius.

## D. Longer-term roadmap

- **AI-generated text** — `useTemplateForm` is the single write-point for all
  field values, so an "AI suggest" button can fill invitation wording, biodata
  bios, or resume bullet points by writing into the same `update(name, value)`
  path. (Use the latest Claude models for generation.)
- **More languages** — the i18n engine and per-config `i18n` block already scale;
  add Gujarati / Tamil / Telugu / Bengali by adding a locale dictionary + per-
  template strings.
- **More categories & templates** — the registry is built to reach thousands
  (see §3.3).
- **User accounts dashboard** — saved drafts, re-download past purchases,
  favourites (depends on B + the DB from C).
- **Mobile app** — a thin native shell over the mobile-first web, or React
  Native reusing the template configs.
- **Real backend / CMS** — move the catalog into a DB or headless CMS so non-
  developers can publish templates; the `/api/templates` contract stays the same.
- **Sharing & collaboration** — shareable preview links (the export already
  encodes values in a URL hash, a natural basis for shareable state).

---

## Appendix — key gotchas (don't trip on these)

- Page bodies go in **`src/views/`**, never `src/pages/`.
- A template's `Preview` cannot cross the server→client boundary — pass
  `templateId`, resolve on the client.
- Adding a category needs **four** touch-points: folder + registry import,
  `categories.js`, `CategoryDecor` case, `HOVER_FX` entry.
- Puppeteer packages must be **static top-level imports** in `/api/export`.
- Add `data-pdf-color="#hex"` to any new gradient-clipped text (html2canvas
  fallback only).
- Always pass a fallback string to `t('key', 'English fallback')`.
- When premium ships: **enforce the paywall in `/api/export`**, never the client.
</content>
</invoke>
