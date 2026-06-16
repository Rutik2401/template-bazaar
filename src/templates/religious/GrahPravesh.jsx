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
      {/* aura */}
      <ellipse cx="30" cy="16" rx="9" ry="13" fill="currentColor" fillOpacity="0.18" stroke="none" />
      {/* flame */}
      <path d="M30 6c-3 5-6 8-6 13a6 6 0 0012 0c0-5-3-8-6-13Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
      {/* lamp bowl */}
      <path d="M8 36c0 8 10 14 22 14s22-6 22-14c0-3-3-4-6-4H14c-3 0-6 1-6 4Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M52 32c4 0 6 2 6 5" />
    </svg>
  )
}

/** A footed kalash with mango leaves and a coconut crown for the threshold. */
function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 70 96" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="35" cy="16" rx="10" ry="12" fill="currentColor" fillOpacity="0.28" />
      {/* mango leaves */}
      <path d="M35 28c-9 0-15-3-20-8 7-1 13 1 20 6 7-5 13-7 20-6-5 5-11 8-20 8Z" fill="currentColor" fillOpacity="0.22" />
      {/* pot */}
      <path d="M24 32h22l-2 7c8 4 13 11 13 21 0 11-9 19-22 19s-22-8-22-19c0-10 5-17 13-21l-2-7Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M19 50h32" opacity="0.7" />
      <path d="M23 60h24" opacity="0.5" />
    </svg>
  )
}

/** Auspicious Swastik mark. */
function Swastik({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6v36M6 24h36" />
      <path d="M24 6h10M42 24v10M24 42H14M6 24V14" />
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
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff3e2] via-[#ffe4c4] to-[#ffd2a0] font-serif text-[#7c2d12]"
    >
      {/* warm wash + soft floor glow */}
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#f59e0b]/35 to-transparent" />
      {/* radiant welcome glow within the arch */}
      <div className="pointer-events-none absolute left-1/2 top-[260px] h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,140,0.55),transparent_68%)]" />

      {/* doorway arch frame */}
      <div className="absolute inset-x-10 inset-y-12 rounded-t-[200px] border-[6px] border-[#c2410c]/75 bg-[#fff7ec]/45 shadow-[inset_0_0_40px_rgba(194,65,12,0.12)]" />
      <div className="absolute inset-x-[52px] inset-y-[60px] rounded-t-[180px] border-2 border-[#ea580c]/55" />
      <div className="absolute inset-x-[60px] inset-y-[70px] rounded-t-[168px] border border-[#f59e0b]/35" />

      {/* keystone swastik atop the arch */}
      <Swastik className="absolute left-1/2 top-[26px] h-9 w-9 -translate-x-1/2 text-[#c2410c]/80" />

      {/* marigold toran hanging inside the arch top */}
      <MarigoldToran className="absolute inset-x-14 top-[64px] h-14 text-[#ea580c]" />

      {/* flanking kalash inside the arch */}
      <Kalash className="absolute left-[58px] top-[300px] h-20 w-14 text-[#c2410c]/65" />
      <Kalash className="absolute right-[58px] top-[300px] h-20 w-14 -scale-x-100 text-[#c2410c]/65" />

      {/* threshold rangoli line at the doorstep */}
      <div className="absolute inset-x-16 bottom-[78px] h-[3px] bg-gradient-to-r from-transparent via-[#c2410c]/70 to-transparent" />
      <div className="absolute inset-x-24 bottom-[70px] h-[2px] bg-gradient-to-r from-transparent via-[#ea580c]/50 to-transparent" />

      {/* welcome diyas on the threshold */}
      <DiyaLamp className="absolute bottom-[40px] left-24 h-10 w-12 text-[#ea580c]" />
      <DiyaLamp className="absolute bottom-[40px] right-24 h-10 w-12 -scale-x-100 text-[#ea580c]" />

      <div className="relative flex h-full flex-col items-center justify-between px-20 pb-24 pt-32 text-center">
        <header className="flex flex-col items-center">
          <span className="font-display text-[42px] leading-none text-[#ea580c] [text-shadow:0_2px_8px_rgba(234,88,12,0.3)]">{t('template.common.om', 'ॐ')}</span>
          <p className="mt-2 font-display text-[18px] tracking-[0.1em] text-[#b91c1c]">॥ शुभ गृह प्रवेश ॥</p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.34em] text-[#c2410c]">
            {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
          </p>
        </header>

        <main className="flex flex-col items-center gap-4">
          <p className="text-[13px] uppercase tracking-[0.4em] text-[#9a3412]/85">{t('template.common.joinUs', 'Join us as we celebrate')}</p>
          <h1 className="font-display text-[52px] font-semibold leading-[1.04]">
            <span
              data-pdf-color="#c2410c"
              className="bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] bg-clip-text text-transparent [text-shadow:0_1px_0_rgba(255,255,255,0.25)]"
            >
              {event}
            </span>
          </h1>
          <p className="max-w-[20rem] text-[15px] italic leading-snug text-[#9a3412]/90">
            {t('template.common.requestPresence', 'request the pleasure of your presence as we step into our new home')}
          </p>
          <p className="font-display text-2xl tracking-wide text-[#b91c1c]">{family}</p>
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
