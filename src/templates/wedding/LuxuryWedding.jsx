'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold-foil ornamental pieces (deco filigree on onyx) ───────────────── */

/** Ornate corner — deco rays, filigree scroll and beaded fan. */
function DecoCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* stacked deco brackets */}
      <path d="M8 8h66M8 8v66" strokeLinecap="square" />
      <path d="M16 16h48M16 16v48" opacity="0.65" strokeLinecap="square" />
      <path d="M8 8l44 44" opacity="0.4" />
      {/* radiating fan */}
      <path d="M24 24c0 18 8 33 24 40M24 24c18 0 33 8 40 24" opacity="0.9" />
      <path d="M24 24c0 26 12 47 34 56M24 24c26 0 47 12 56 34" opacity="0.45" />
      {/* filigree curl */}
      <path d="M70 18c14 0 22 8 22 22" opacity="0.55" />
      <path d="M18 70c0 14 8 22 22 22" opacity="0.55" />
      {/* beadwork */}
      <circle cx="24" cy="24" r="3.4" fill="currentColor" stroke="none" />
      <path d="M60 28l9-9 9 9-9 9-9-9Z" fill="currentColor" fillOpacity="0.28" />
      <circle cx="100" cy="100" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Crowned deco crest medallion for the header. */
function DecoCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 170 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      {/* layered diamond */}
      <path d="M85 6l26 20-26 20-26-20 26-20Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M85 16l13 10-13 10-13-10 13-10Z" />
      <circle cx="85" cy="26" r="3" fill="currentColor" stroke="none" />
      {/* tapering wings */}
      <path d="M2 34h46M122 34h46" strokeLinecap="round" />
      <path d="M30 34l-9-9M30 34l-9 9" opacity="0.7" />
      <path d="M140 34l9-9M140 34l9 9" opacity="0.7" />
      <path d="M48 34c8 0 12-4 14-12M122 34c-8 0-12-4-14-12" opacity="0.5" />
      {/* drop bead */}
      <circle cx="85" cy="64" r="3.5" fill="currentColor" stroke="none" />
      <path d="M85 50v10" opacity="0.6" />
    </svg>
  )
}

/** Slim filigree rule with a paisley diamond centre. */
function DecoRule({ className = '' }) {
  return (
    <svg viewBox="0 0 300 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 11h106M184 11h106" strokeLinecap="round" />
      <path d="M150 2l11 9-11 9-11-9 11-9Z" fill="currentColor" fillOpacity="0.24" />
      <path d="M150 6l6 5-6 5-6-5 6-5Z" />
      <path d="M116 11c8 0 12-4 12-9M184 11c-8 0-12-4-12-9" opacity="0.55" />
      <circle cx="128" cy="11" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="172" cy="11" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Luxury gold wedding invitation — onyx black & gold-foil filigree, art-deco
 * jharokha frame, gold-foil gradient names. Opulent and very premium.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function LuxuryWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0b0b0d] font-serif text-gold-200"
    >
      {/* Deep onyx gradient + warm gold vignette + faint top sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1812] via-[#0b0b0d] to-[#000000]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(212,164,55,0.20),_transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,_rgba(236,212,155,0.10),_transparent_70%)]" />

      {/* Triple deco frame with gold keyline */}
      <div className="absolute inset-5 border-[2px] border-gold-500/70" />
      <div className="absolute inset-[30px] border border-gold-400/35" />
      <div className="absolute inset-[36px] border border-gold-500/20" />

      {/* Jharokha arch hairline */}
      <div className="pointer-events-none absolute inset-x-[58px] top-[58px] bottom-[72px] rounded-t-[160px] rounded-b-[8px] border border-gold-500/25" />

      {/* deco corners */}
      <DecoCorner className="absolute left-7 top-7 h-24 w-24 text-gold-400" />
      <DecoCorner className="absolute right-7 top-7 h-24 w-24 text-gold-400 [transform:scaleX(-1)]" />
      <DecoCorner className="absolute bottom-7 left-7 h-24 w-24 text-gold-400 [transform:scaleY(-1)]" />
      <DecoCorner className="absolute bottom-7 right-7 h-24 w-24 text-gold-400 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[76px] py-[72px] text-center">
        <header className="flex flex-col items-center">
          <DecoCrest className="h-16 w-48 text-gold-400" />
          <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.55em] text-gold-400">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <p className="mt-4 max-w-[20rem] text-[15px] italic leading-relaxed tracking-wide text-gold-200/70">
            {t('template.common.requestPresence', 'request the pleasure of your company')}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-display text-[60px] font-semibold leading-[1.0] tracking-tight">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>

          <DecoRule className="my-4 h-5 w-60 text-gold-400" />

          <span className="font-script text-4xl leading-none tracking-wide text-gold-300">
            {t('template.common.and', '&')}
          </span>

          <DecoRule className="my-4 h-5 w-60 text-gold-400 [transform:scaleX(-1)]" />

          <h1 className="font-display text-[60px] font-semibold leading-[1.0] tracking-tight">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1.5 border-y border-gold-500/40 px-12 py-4">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.45em] text-gold-400">
              {t('template.common.saveTheDate', 'Save the Date')}
            </p>
            <p className="font-display text-[26px] tracking-wide text-gold-100">{date}{time && ` · ${time}`}</p>
          </div>
          <p className="max-w-[22rem] text-[16px] leading-snug tracking-wide text-gold-200/90">{venue}</p>
          <p className="text-[13px] italic leading-relaxed tracking-wide text-gold-300/70">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-gold-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
