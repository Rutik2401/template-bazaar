'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold-foil ornaments on warm ivory (light & gilded) ─────────────────── */

/** Ornate corner — art-nouveau filigree scrolls with beaded tips. */
function FiligreeCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 150 150" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* sweeping mother-vine */}
      <path d="M14 14C14 64 40 100 96 100" opacity="0.9" />
      <path d="M14 14C64 14 100 40 100 96" opacity="0.9" />
      {/* inner echo vines */}
      <path d="M14 32C14 70 38 92 74 96" opacity="0.55" />
      <path d="M32 14C70 14 92 38 96 74" opacity="0.55" />
      {/* art-nouveau curls */}
      <path d="M48 18c0 13-7 21-20 22 0-13 7-21 20-22Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M18 48c13 0 21-7 22-20-13 0-21 7-22 20Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M84 30c10 2 16 9 17 19" opacity="0.5" />
      <path d="M30 84c2 10 9 16 19 17" opacity="0.5" />
      {/* leaf flourish */}
      <path d="M70 70c14-2 26-12 30-28-16 4-26 14-30 28Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
      {/* beadwork */}
      <circle cx="14" cy="14" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="96" cy="100" r="2.6" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="100" cy="96" r="2.6" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  )
}

/** Top monogram crest — layered shield with a radiant sunburst. */
function MonogramCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 96 110" className={className} fill="none">
      <path d="M48 5 L88 19 V52 C88 80 70 96 48 105 C26 96 8 80 8 52 V19 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M48 13 L80 24 V52 C80 75 65 88 48 96 C31 88 16 75 16 52 V24 Z" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.55" />
      {/* radiant sunburst rays */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        <path d="M48 32V24M48 72V64M30 52H22M74 52H66M35 39l-6-6M67 39l6-6M35 65l-6 6M67 65l6 6" />
      </g>
      {/* central diamond bloom */}
      <path d="M48 36 l9 16 -9 16 -9 -16 Z" fill="currentColor" fillOpacity="0.9" stroke="none" />
      <circle cx="48" cy="52" r="3" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  )
}

/** Filigree divider — twin scrolls flanking a diamond bloom. */
function FiligreeDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 320 26" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M14 13h104M202 13h104" opacity="0.85" />
      <path d="M118 13c10 0 16-5 16-13M202 13c-10 0-16-5-16-13" opacity="0.6" />
      <path d="M118 13c10 0 16 5 16 13M202 13c-10 0-16 5-16 13" opacity="0.6" />
      <path d="M160 1l12 12-12 12-12-12 12-12Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M160 6l7 7-7 7-7-7 7-7Z" />
      <circle cx="118" cy="13" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="202" cy="13" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="14" cy="13" r="2" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="306" cy="13" r="2" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  )
}

/**
 * Luxury champagne-gold engagement invitation — warm ivory/cream base with
 * rich gold-foil filigree, ornate gold double border, monogram crest and
 * art-nouveau flourishes. Light, gilded, wedding-house quality.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function LuxuryGoldEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f7efe0] font-serif text-[#8a6a1f]"
    >
      {/* Warm ivory/champagne gradient + soft gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8ee] via-[#f7efe0] to-[#efe2cb]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(201,162,73,0.18),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(184,134,11,0.14),transparent_70%)]" />

      {/* Ornate gold double border */}
      <div className="absolute inset-[18px] rounded-[10px] border-[2px] border-[#c9a249]/80" />
      <div className="absolute inset-[26px] rounded-[7px] border border-[#c9a249]/45" />
      <div className="absolute inset-[31px] rounded-[5px] border border-[#b8860b]/25" />

      {/* Corner filigree */}
      <FiligreeCorner className="absolute left-6 top-6 h-28 w-28 text-[#c9a249]" />
      <FiligreeCorner className="absolute right-6 top-6 h-28 w-28 text-[#c9a249] [transform:scaleX(-1)]" />
      <FiligreeCorner className="absolute bottom-6 left-6 h-28 w-28 text-[#c9a249] [transform:scaleY(-1)]" />
      <FiligreeCorner className="absolute bottom-6 right-6 h-28 w-28 text-[#c9a249] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 py-[78px] text-center">
        <header className="flex flex-col items-center gap-4">
          <MonogramCrest className="h-[84px] w-[72px] text-[#b8860b] drop-shadow-[0_2px_6px_rgba(184,134,11,0.25)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.58em] text-[#b8860b]">
            {t('template.common.engagementCeremony', 'Engagement Ceremony')}
          </p>
        </header>

        <main className="flex flex-col items-center gap-6">
          <p className="text-[15px] italic tracking-wide text-[#9c8a5e]">
            {t('template.common.engagementOf', 'on the engagement of')}
          </p>
          <h1 className="font-script text-[76px] font-semibold leading-[1.02] tracking-[-0.005em]">
            <span
              data-pdf-color="#b8860b"
              className="bg-gradient-to-b from-[#e6c46a] via-[#c9a249] to-[#9a6e0c] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <FiligreeDivider className="h-5 w-72 text-[#c9a249]" />
        </main>

        <footer className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-[30px] tracking-wide text-[#7a5c12]">
              {date}
              {time && <span className="text-[#b8860b]"> · {time}</span>}
            </p>
          </div>

          <div className="rounded-sm border border-[#c9a249]/60 bg-[#fffaf0]/40 px-9 py-3.5">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#b8860b]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-1 text-[17px] leading-snug text-[#6b500f]">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
