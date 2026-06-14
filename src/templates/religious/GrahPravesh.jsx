'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Threshold & marigold toran motifs ─────────────────────────────────── */

function MarigoldToran({ className = '' }) {
  // hanging marigold + mango-leaf toran strip
  return (
    <svg viewBox="0 0 640 60" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 6h640" opacity="0.6" />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 16 + i * 30.4
        const long = i % 2 === 0
        const len = long ? 38 : 26
        return (
          <g key={i}>
            <path d={`M${x} 6v${len - 12}`} opacity="0.5" />
            {/* mango leaf */}
            <path d={`M${x} ${len - 6}c-6 6-6 16 0 22c6-6 6-16 0-22Z`} fill="currentColor" fillOpacity="0.18" />
            {/* marigold pom */}
            <circle cx={x} cy={len + 16} r="5.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
            <circle cx={x} cy={len + 16} r="2.4" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

function DiyaLamp({ className = '' }) {
  return (
    <svg viewBox="0 0 60 56" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      {/* flame */}
      <path d="M30 6c-3 5-6 8-6 13a6 6 0 0012 0c0-5-3-8-6-13Z" fill="currentColor" fillOpacity="0.55" stroke="none" />
      {/* lamp bowl */}
      <path d="M8 36c0 8 10 14 22 14s22-6 22-14c0-3-3-4-6-4H14c-3 0-6 1-6 4Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M52 32c4 0 6 2 6 5" />
    </svg>
  )
}

/**
 * Grah Pravesh — warm-orange housewarming card framed as an ornate doorway.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function GrahPravesh({ values }) {
  const { t } = useI18n()
  const event = values.eventName?.trim() || 'Grah Pravesh'
  const family = values.familyName?.trim() || 'The Deshmukh Family'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'New Home, 7 Sunrise Avenue, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff1df] to-[#ffdcab] font-serif text-[#7c2d12]"
    >
      {/* warm wash + soft floor glow */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#f59e0b]/30 to-transparent" />

      {/* doorway arch frame */}
      <div className="absolute inset-x-10 inset-y-12 rounded-t-[200px] border-[6px] border-[#c2410c]/70 bg-[#fff7ec]/40" />
      <div className="absolute inset-x-[52px] inset-y-[60px] rounded-t-[180px] border-2 border-[#ea580c]/50" />

      {/* marigold toran hanging inside the arch top */}
      <MarigoldToran className="absolute inset-x-14 top-[60px] h-14 text-[#ea580c]" />

      {/* threshold rangoli line at the doorstep */}
      <div className="absolute inset-x-16 bottom-[78px] h-[3px] bg-gradient-to-r from-transparent via-[#c2410c]/70 to-transparent" />
      <div className="absolute inset-x-24 bottom-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#ea580c]/50 to-transparent" />

      {/* welcome diyas on the threshold */}
      <DiyaLamp className="absolute bottom-[40px] left-24 h-10 w-12 text-[#ea580c]" />
      <DiyaLamp className="absolute bottom-[40px] right-24 h-10 w-12 -scale-x-100 text-[#ea580c]" />

      <div className="relative flex h-full flex-col items-center justify-between px-20 pb-24 pt-32 text-center">
        <header className="flex flex-col items-center">
          <span className="font-display text-4xl leading-none text-[#ea580c]">{t('template.common.om', 'ॐ')}</span>
          <p className="mt-3 text-[12px] uppercase tracking-[0.34em] text-[#c2410c]">
            {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
          </p>
        </header>

        <main className="flex flex-col items-center gap-4">
          <p className="text-[13px] uppercase tracking-[0.4em] text-[#9a3412]/80">{t('template.common.joinUs', 'Join us as we celebrate')}</p>
          <h1 className="font-display text-[52px] font-semibold leading-[1.04]">
            <span
              data-pdf-color="#c2410c"
              className="bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] bg-clip-text text-transparent"
            >
              {event}
            </span>
          </h1>
          <p className="max-w-[20rem] text-[15px] italic leading-snug text-[#9a3412]/90">
            {t('template.common.requestPresence', 'request the pleasure of your presence as we step into our new home')}
          </p>
          <p className="font-display text-2xl text-[#b91c1c]">{family}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-2">
          <p className="text-[11px] uppercase tracking-[0.36em] text-[#c2410c]">{t('template.common.saveTheDate', 'Save the Date')}</p>
          <p className="font-display text-[26px] text-[#7c2d12]">{date}{time && ` · ${time}`}</p>
          <p className="mt-1 max-w-[22rem] text-[16px] leading-snug">{venue}</p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.3em] text-[#c2410c]">
            {t('template.common.cordiallyInvite', 'cordially invite you with family to')}
          </p>
        </footer>
      </div>
    </div>
  )
}
