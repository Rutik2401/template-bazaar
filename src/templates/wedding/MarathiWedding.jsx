'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Paithani-inspired ornamental pieces ───────────────────────────────── */

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="20" rx="12" ry="14" fill="currentColor" fillOpacity="0.18" />
      {/* mango leaves */}
      <path d="M40 34c-10 0-18-3-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 6-14 9-24 9Z" fill="currentColor" fillOpacity="0.22" />
      {/* pot neck + body */}
      <path d="M28 38h24l-3 8c10 5 16 14 16 26 0 14-12 24-25 24S15 92 15 78c0-12 6-21 16-26l-3-14Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M22 60h36" />
      <path d="M26 72h28" opacity="0.7" />
    </svg>
  )
}

function PeacockFeather({ className = '' }) {
  return (
    <svg viewBox="0 0 60 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M30 138c0-40 0-70 0-86" />
      <ellipse cx="30" cy="34" rx="20" ry="30" fill="currentColor" fillOpacity="0.10" />
      <ellipse cx="30" cy="34" rx="12" ry="18" fill="currentColor" fillOpacity="0.18" />
      <circle cx="30" cy="32" r="6" fill="currentColor" fillOpacity="0.45" stroke="none" />
      <circle cx="30" cy="32" r="2.6" fill="currentColor" stroke="none" />
      <path d="M30 12c-6 6-9 14-9 22M30 12c6 6 9 14 9 22" opacity="0.6" />
    </svg>
  )
}

function ToranBorder({ className = '' }) {
  // hanging marigold/mango-leaf toran strip
  return (
    <svg viewBox="0 0 640 46" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 4h640" opacity="0.7" />
      {Array.from({ length: 16 }).map((_, i) => {
        const x = 20 + i * 40
        return (
          <g key={i}>
            <path d={`M${x} 4c-7 8-7 22 0 30c7-8 7-22 0-30Z`} fill="currentColor" fillOpacity="0.16" />
            <circle cx={x} cy="40" r="3" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Traditional Marathi wedding invitation — paithani green, gold & purple.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MarathiWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Anushka'
  const groom = values.groomName?.trim() || 'Laksh'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0f3d2e] font-serif text-gold-100"
    >
      {/* Rich silk gradient base (paithani green) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13513a] via-[#0f3d2e] to-[#0a2c20]" />

      {/* Purple paithani pallu bands top & bottom */}
      <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-r from-[#5b2a83] via-[#7e3aa8] to-[#5b2a83]" />
      <div className="absolute inset-x-0 bottom-0 h-7 bg-gradient-to-r from-[#5b2a83] via-[#7e3aa8] to-[#5b2a83]" />

      {/* Toran hanging from the top band */}
      <ToranBorder className="absolute inset-x-0 top-7 h-11 text-gold-300" />

      {/* Woven gold frame */}
      <div className="absolute inset-x-6 inset-y-[68px] rounded-sm border-2 border-gold-400/80" />
      <div className="absolute inset-x-[34px] inset-y-[78px] rounded-sm border border-gold-300/40" />

      {/* Side peacock feathers (paithani signature) */}
      <PeacockFeather className="absolute left-8 top-1/2 h-40 w-16 -translate-y-1/2 text-gold-300/70" />
      <PeacockFeather className="absolute right-8 top-1/2 h-40 w-16 -translate-y-1/2 text-gold-300/70 [transform:translateY(-50%)_scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-20 pb-16 pt-24 text-center">
        <header className="flex flex-col items-center">
          <Kalash className="h-20 w-16 text-gold-300" />
          <p className="mt-2 text-4xl leading-none text-gold-200">{t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}</p>
          <p className="mt-4 font-display text-[26px] tracking-wide text-gold-200">॥ शुभमंगल सावधान ॥</p>
          <div className="mt-3 h-px w-28 bg-gold-400/60" />
        </header>

        <main className="flex flex-col items-center">
          <p className="text-[13px] uppercase tracking-[0.4em] text-gold-300/80">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <h1 className="mt-5 font-display text-[56px] font-semibold leading-[1.04]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>
          <div className="my-3 flex items-center gap-3 text-gold-300">
            <span className="h-px w-12 bg-gold-400/60" />
            <span className="font-display text-2xl italic text-purple-200">{t('template.common.weds', 'weds')}</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h1 className="font-display text-[56px] font-semibold leading-[1.04]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-bl from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-gold-400/50 bg-[#5b2a83]/30 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.38em] text-gold-300">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-gold-100">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-gold-300/80">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-gold-100">{venue}</p>
          </div>
          <p className="mt-1 text-[14px] italic text-gold-300/80">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-lg not-italic text-gold-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
