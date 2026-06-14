'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Sacred motifs ─────────────────────────────────────────────────────── */

function Lotus({ className = '' }) {
  return (
    <svg viewBox="0 0 120 84" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      {/* outer petals */}
      <path d="M60 80C28 70 8 48 8 30c14-2 26 4 34 16-2-16 4-30 18-38 14 8 20 22 18 38 8-12 20-18 34-16 0 18-20 40-52 50Z" fill="currentColor" fillOpacity="0.12" />
      {/* mid petals */}
      <path d="M60 78C40 70 26 54 24 40c10 0 19 5 25 14-1-12 3-23 11-30 8 7 12 18 11 30 6-9 15-14 25-14-2 14-16 30-36 38Z" fill="currentColor" fillOpacity="0.22" />
      {/* centre */}
      <path d="M60 76c-10-6-16-16-16-26 6 1 12 5 16 12 4-7 10-11 16-12 0 10-6 20-16 26Z" fill="currentColor" fillOpacity="0.4" />
      <circle cx="60" cy="56" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Shankh({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M20 54c-6-4-10-12-8-22C14 20 24 12 36 12c10 0 16 8 16 18 0 12-10 24-26 24h-6Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M34 18c-7 1-12 7-12 16 0 7 4 13 10 16" opacity="0.6" />
      <path d="M40 14c4 2 6 7 6 14" opacity="0.5" />
      <path d="M16 54l-6 4" />
    </svg>
  )
}

/**
 * Shri Satyanarayan Pooja — saffron, gold & red with a lotus throne.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function SatyanarayanPooja({ values }) {
  const { t } = useI18n()
  const event = values.eventName?.trim() || 'Shri Satyanarayan Pooja'
  const family = values.familyName?.trim() || 'The Joshi Family'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || '12, Shanti Nagar, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fff5db] via-[#ffe7b3] to-[#ffd27a] px-16 py-16 text-center font-serif text-orange-900"
    >
      {/* radiant sun halo behind the deity */}
      <div className="pointer-events-none absolute left-1/2 top-[230px] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,77,0.55)_0%,rgba(255,196,77,0)_62%)]" />

      {/* double sacred border */}
      <div className="pointer-events-none absolute inset-4 rounded-[4px] border-2 border-red-500/50" />
      <div className="pointer-events-none absolute inset-6 rounded-[2px] border border-orange-400/60" />

      {/* corner conch shells */}
      <Shankh className="absolute left-7 top-7 h-12 w-12 text-red-500/70" />
      <Shankh className="absolute right-7 top-7 h-12 w-12 -scale-x-100 text-red-500/70" />
      <Shankh className="absolute bottom-7 left-7 h-12 w-12 -scale-y-100 text-red-500/70" />
      <Shankh className="absolute bottom-7 right-7 h-12 w-12 -scale-100 text-red-500/70" />

      <header className="relative flex flex-col items-center">
        <span className="font-display text-5xl leading-none text-orange-600">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-4 text-[12px] uppercase tracking-[0.34em] text-red-600">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
        <div className="mt-3 h-px w-24 bg-red-400/60" />
      </header>

      <main className="relative flex flex-col items-center gap-4">
        <Lotus className="h-16 w-24 text-orange-500" />
        <p className="text-[13px] uppercase tracking-[0.4em] text-orange-700/80">{t('template.common.youAreInvited', 'You are invited')}</p>
        <h1 className="font-display text-[46px] font-semibold leading-[1.06]">
          <span
            data-pdf-color="#b45309"
            className="bg-gradient-to-b from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-orange-700/80">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl text-red-700">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-3">
        <div className="rounded-md border border-red-400/50 bg-white/30 px-8 py-3 backdrop-blur-[1px]">
          <p className="font-display text-2xl text-red-800">{date}{time && ` · ${time}`}</p>
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-orange-900">{venue}</p>
        <p className="mt-2 text-[12px] uppercase tracking-[0.3em] text-red-600">
          {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
        </p>
      </footer>
    </div>
  )
}
