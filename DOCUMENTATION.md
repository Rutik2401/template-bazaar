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

# Premium, login & the paywall

The three near-term pillars are **Premium Designs**, **Login**, and **Pricing
for all** — one connected feature set (log in → to buy → to unlock premium).
**A and B are implemented; C (payments) is the remaining step.** They slot in
cleanly because templates are config objects, every export funnels through one
server endpoint (`/api/export`), and the API already serves template data as
JSON — giving three natural gates: a `tier` flag, an auth check, and an export
paywall.

## A. Premium Designs — ✅ implemented

Free designs stay a broad funnel; the best designs are marked **Premium** and
download clean only for entitled users.

- **`tier: 'free' | 'premium'` on every template.** `src/templates/index.js`
  resolves it: an explicit config `tier` wins, else the `PREMIUM_IDS` seed set,
  else `'free'`. `isPremium(template)` is the shared helper. Mark a design
  premium by adding its id to `PREMIUM_IDS` (or setting `tier` on the config).
- **Premium badge** on `TemplateCard` — shown only when `isPremium`; free cards
  stay clean (no badge).
- **Free / Premium filter** on the category page (`TemplateSelectPage`), shown
  only for categories that actually have premium designs.
- **Watermark** — `/print/[templateId]` overlays a tiled "Template Bazaar" mark
  only when the URL carries `watermark=1`. **Free templates are never
  watermarked.**
- **Server-side paywall** — `app/api/export` resolves the tier *from the
  registry* (not the client payload), reads the session, calls
  `isEntitled({ tier, session })` (`src/lib/entitlements.js`), and appends
  `&watermark=1` only for an unentitled premium download. **The client never
  decides entitlement** — buttons are UX only; the export handler is the gate.
- **Editor hint** — a premium design viewed while signed out shows a
  "downloads include a watermark · sign in to remove it" bar above the export
  buttons.

## B. Login / Authentication — ✅ implemented (Google live, OTP scaffolded)

Identifies the user so premium unlocks persist — without adding any friction to
the free funnel.

- **NextAuth (Auth.js v5)**, JWT sessions, **no database required** to sign in.
  Split config: `src/auth.config.js` (edge-safe base, shared with middleware)
  and `src/auth.js` (`handlers`, `auth`, `signIn`, `signOut`).
- **Google** is the active provider (enabled when `AUTH_GOOGLE_ID/SECRET` are
  set). **Email OTP** is scaffolded with a documented seam in `auth.config.js`
  (needs an email sender + a short-lived code store to go live).
- **Endpoints** at `app/api/auth/[...nextauth]`; client `SessionProvider` via
  `src/components/AuthProvider.jsx`; navbar **Sign in / avatar** via
  `AuthButton.jsx`.
- **Middleware** (`middleware.js`) uses the edge-safe config and is scoped to
  `/account/:path*` only — every public route (browse, preview, **download free
  templates**) is untouched.
- **Login unlocks premium (for now):** `isEntitled` treats any signed-in user as
  entitled. Payments (C) become an extra check at that one line — nothing else
  changes.
- **Graceful when unconfigured:** with no `AUTH_*` env, the app still builds and
  the free experience is unaffected; premium downloads simply stay watermarked.
- **Principle:** login is required **only at the moment of unlocking premium** —
  never to browse, preview, or use free templates.

## C. Pricing for all (plans & payments) — next

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

**The one line that changes:** entitlement already has a single decision point —
`isEntitled({ tier, session })` in `src/lib/entitlements.js`. Today it returns
`true` for any signed-in user on a premium template. Payments just tighten that
to `Boolean(session?.user) && hasActivePlan(session)`. Nothing in the UI or the
export route changes.

**Persistence:** introducing money means introducing a **database** (the current
static `templateList` is fine for catalog, but users/purchases need storage).
Recommended: **Vercel Postgres** (or Supabase) with tables `users`,
`purchases`, `subscriptions`, `entitlements`, plus the NextAuth Postgres/Prisma
adapter (which also unlocks email-link/OTP login). Because `/api/templates`
already returns JSON, the catalog stays static while only user/billing data goes
to the DB — minimal blast radius.

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
- The premium paywall is enforced in **`/api/export`** (server-side), never the
  client — keep it that way. Tier is resolved from the registry, not the request.
- Mark a design premium via `PREMIUM_IDS` (or `tier` on its config); change the
  unlock rule only in `src/lib/entitlements.js`.
- Auth uses the **split config** pattern: keep `src/auth.config.js` edge-safe
  (no Node-only imports) since `middleware.js` shares it.
</content>
</invoke>
