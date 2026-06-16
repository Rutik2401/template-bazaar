'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Traditional godh-bharai ornaments ─────────────────────────────────── */

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 116" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="18" rx="10" ry="12" fill="currentColor" fillOpacity="0.22" />
      <path d="M40 7c-3 3-4 7-4 11M40 7c3 3 4 7 4 11" opacity="0.55" />
      {/* mango leaves */}
      <path d="M40 32c-11 0-19-3-25-9 8-1 17 1 25 8 8-7 17-9 25-8-6 6-14 9-25 9Z" fill="currentColor" fillOpacity="0.26" />
      <path d="M22 26c5 3 11 5 18 6M58 26c-5 3-11 5-18 6" opacity="0.4" />
      {/* pot body */}
      <path d="M27 36h26l-3 9c11 5 17 15 17 27 0 15-13 25-27 25S13 92 13 77c0-12 6-22 17-27l-3-14Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M21 60h38" />
      <path d="M25 73h30" opacity="0.7" />
      <path d="M30 86h20" opacity="0.5" />
      {/* belly diamonds */}
      <path d="M40 64l5 5-5 5-5-5 5-5Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  )
}

function Paisley({ className = '' }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M30 86c20-4 24-26 12-40C30 32 18 38 18 50c0 9 8 12 13 7 4-4 1-12-5-11" fill="currentColor" fillOpacity="0.14" />
      <path d="M33 76c10-4 13-18 6-28" opacity="0.45" />
      <circle cx="31" cy="56" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="38" cy="64" r="1.4" fill="currentColor" fillOpacity="0.6" stroke="none" />
      <path d="M30 6c0 8-2 14-6 18M30 6c0 8 2 14 6 18M30 8v14" opacity="0.55" />
    </svg>
  )
}

function MarigoldBloom({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="24" cy="11" rx="3.4" ry="6" fill="currentColor" fillOpacity="0.2" transform={`rotate(${i * 30} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="6.5" fill="currentColor" fillOpacity="0.35" stroke="none" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ToranBorder({ className = '' }) {
  // hanging marigold + mango-leaf toran strip
  return (
    <svg viewBox="0 0 640 50" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M0 4h640" opacity="0.7" />
      <path d="M0 7h640" opacity="0.3" />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 16 + i * 30.5
        const long = i % 2 === 0
        const drop = long ? 30 : 20
        return (
          <g key={i}>
            <path d={`M${x} 6c-6 ${drop * 0.32} -6 ${drop * 0.78} 0 ${drop}c6 -${drop * 0.22} 6 -${drop * 0.68} 0 -${drop}Z`} fill="currentColor" fillOpacity="0.16" />
            <circle cx={x} cy={6 + drop + 4} r="3.2" fill="currentColor" stroke="none" />
            <circle cx={x} cy={6 + drop + 4} r="1.3" fill="currentColor" fillOpacity="0.45" stroke="none" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-600 via-maroon-700 to-[#36090f]" />
      {/* radial silk sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_18%,rgba(249,115,22,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_55%_at_50%_100%,rgba(226,189,102,0.12),transparent_65%)]" />

      {/* marigold pallu bands top & bottom */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-r from-[#9a2c08] via-[#f97316] to-[#9a2c08]" />
      <div className="absolute inset-x-0 top-8 h-px bg-gold-300/70" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-[#9a2c08] via-[#f97316] to-[#9a2c08]" />
      <div className="absolute inset-x-0 bottom-8 h-px bg-gold-300/70" />

      {/* toran hanging from the top band */}
      <ToranBorder className="absolute inset-x-0 top-8 h-12 text-gold-300" />

      {/* woven gold frame */}
      <div className="absolute inset-x-6 inset-y-[74px] rounded-[3px] border-2 border-gold-400/80" />
      <div className="absolute inset-x-[34px] inset-y-[84px] rounded-[2px] border border-gold-300/40" />
      <div className="absolute inset-x-[42px] inset-y-[92px] rounded-[2px] border border-dashed border-gold-300/25" />

      {/* corner paisleys */}
      <Paisley className="absolute left-[42px] top-[100px] h-16 w-12 text-gold-300/70" />
      <Paisley className="absolute right-[42px] top-[100px] h-16 w-12 text-gold-300/70 [transform:scaleX(-1)]" />
      <Paisley className="absolute bottom-[100px] left-[42px] h-16 w-12 text-gold-300/70 [transform:scaleY(-1)]" />
      <Paisley className="absolute bottom-[100px] right-[42px] h-16 w-12 text-gold-300/70 [transform:scale(-1,-1)]" />

      {/* small marigold accents at frame mid-points */}
      <MarigoldBloom className="absolute left-1/2 top-[70px] h-9 w-9 -translate-x-1/2 text-orange-300/80" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-20 pb-[72px] pt-[108px] text-center">
        <header className="flex flex-col items-center">
          <Kalash className="h-[88px] w-16 text-gold-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" />
          <p className="mt-3 font-display text-[24px] tracking-wide text-gold-200">॥ श्री गणेशाय नमः ॥</p>
          <div className="mt-3 flex items-center gap-2 text-gold-400/70">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/70" />
            <span className="text-[10px]">✦</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/70" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.42em] text-orange-200/90">
            {t('template.common.youAreInvited', 'You are invited to the')}
          </p>
          <h1 className="mt-4 font-display text-[54px] font-semibold leading-[1.0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              Godh Bharai
            </span>
          </h1>
          <div className="my-5 flex items-center gap-3 text-gold-300">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold-400/70" />
            <span className="text-xl">✦</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold-400/70" />
          </div>
          <p className="text-[15px] italic text-orange-100/85">
            {t('template.common.inHonourOf', 'In honour of the mother-to-be')}
          </p>
          <p className="mt-3 font-display text-[38px] leading-tight text-gold-100">{mother}</p>
          <MarigoldBloom className="mt-4 h-8 w-8 text-orange-300/80" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-gold-400/50 bg-gradient-to-b from-[#c2410c]/35 to-[#7a2606]/25 px-9 py-3 shadow-[inset_0_1px_0_rgba(226,189,102,0.25)]">
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
