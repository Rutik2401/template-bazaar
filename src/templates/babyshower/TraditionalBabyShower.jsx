'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Traditional godh-bharai ornaments ─────────────────────────────────── */

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="20" rx="11" ry="13" fill="currentColor" fillOpacity="0.18" />
      {/* mango leaves */}
      <path d="M40 33c-10 0-18-3-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 6-14 9-24 9Z" fill="currentColor" fillOpacity="0.22" />
      {/* pot body */}
      <path d="M28 37h24l-3 8c10 5 16 14 16 26 0 14-12 24-25 24S15 91 15 77c0-12 6-21 16-26l-3-14Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M22 60h36" />
      <path d="M26 72h28" opacity="0.7" />
    </svg>
  )
}

function Paisley({ className = '' }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M30 86c20-4 24-26 12-40C30 32 18 38 18 50c0 9 8 12 13 7 4-4 1-12-5-11" fill="currentColor" fillOpacity="0.12" />
      <circle cx="31" cy="56" r="3" fill="currentColor" stroke="none" />
      <path d="M30 6c0 8-2 14-6 18M30 6c0 8 2 14 6 18" opacity="0.6" />
    </svg>
  )
}

function ToranBorder({ className = '' }) {
  // hanging marigold + mango-leaf toran strip
  return (
    <svg viewBox="0 0 640 48" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 4h640" opacity="0.7" />
      {Array.from({ length: 16 }).map((_, i) => {
        const x = 20 + i * 40
        return (
          <g key={i}>
            <path d={`M${x} 4c-7 8-7 22 0 30c7-8 7-22 0-30Z`} fill="currentColor" fillOpacity="0.16" />
            <circle cx={x} cy="42" r="3.4" fill="currentColor" stroke="none" />
            <circle cx={x} cy="42" r="1.4" fill="currentColor" fillOpacity="0.4" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Traditional Indian baby shower (godh-bharai) invitation.
 * Marigold orange & maroon silk, kalash, paisley and a hanging toran.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function TraditionalBabyShower({ values }) {
  const { t } = useI18n()
  const mother = values.motherName?.trim() || 'Priya Sharma'
  const date = formatDate(values.date, 'Date to be announced')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-maroon-700 font-serif text-gold-100"
    >
      {/* warm silk base */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-600 via-maroon-700 to-[#3a0d15]" />

      {/* marigold pallu bands top & bottom */}
      <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-r from-[#c2410c] via-[#f97316] to-[#c2410c]" />
      <div className="absolute inset-x-0 bottom-0 h-7 bg-gradient-to-r from-[#c2410c] via-[#f97316] to-[#c2410c]" />

      {/* toran hanging from the top band */}
      <ToranBorder className="absolute inset-x-0 top-7 h-12 text-gold-300" />

      {/* woven gold frame */}
      <div className="absolute inset-x-6 inset-y-[72px] rounded-sm border-2 border-gold-400/80" />
      <div className="absolute inset-x-[34px] inset-y-[82px] rounded-sm border border-gold-300/40" />

      {/* corner paisleys */}
      <Paisley className="absolute left-9 top-[96px] h-16 w-12 text-gold-300/70" />
      <Paisley className="absolute right-9 top-[96px] h-16 w-12 text-gold-300/70 [transform:scaleX(-1)]" />
      <Paisley className="absolute bottom-[96px] left-9 h-16 w-12 text-gold-300/70 [transform:scaleY(-1)]" />
      <Paisley className="absolute bottom-[96px] right-9 h-16 w-12 text-gold-300/70 [transform:scale(-1,-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-20 pb-16 pt-24 text-center">
        <header className="flex flex-col items-center">
          <Kalash className="h-20 w-16 text-gold-300" />
          <p className="mt-2 font-display text-[26px] tracking-wide text-gold-200">॥ श्री गणेशाय नमः ॥</p>
          <div className="mt-3 h-px w-28 bg-gold-400/60" />
        </header>

        <main className="flex flex-col items-center">
          <p className="text-[13px] uppercase tracking-[0.4em] text-orange-200/90">
            {t('template.common.youAreInvited', 'You are invited to the')}
          </p>
          <h1 className="mt-4 font-display text-[52px] font-semibold leading-[1.02]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              Godh Bharai
            </span>
          </h1>
          <div className="my-4 flex items-center gap-3 text-gold-300">
            <span className="h-px w-12 bg-gold-400/60" />
            <span className="text-2xl">✦</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <p className="text-[15px] italic text-orange-100/80">
            {t('template.common.inHonourOf', 'In honour of the mother-to-be')}
          </p>
          <p className="mt-2 font-display text-[36px] leading-tight text-gold-100">{mother}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-gold-400/50 bg-[#c2410c]/25 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.38em] text-orange-200">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-gold-100">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-orange-200/80">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-gold-100">{venue}</p>
          </div>
          <p className="mt-1 text-[14px] italic text-orange-200/80">
            {t('template.common.withLoveFrom', 'With love from')}
            <br />
            <span className="font-display text-lg not-italic text-gold-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
