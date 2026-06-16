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
      <circle cx="48" cy="20" r="2" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  )
}

/** A standing diya with a steady flame, set on a stepped base. */
function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 64 78" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* aura */}
      <ellipse cx="32" cy="20" rx="11" ry="16" fill="currentColor" fillOpacity="0.16" stroke="none" />
      {/* flame */}
      <path d="M32 4c-4 7-7 11-7 17a7 7 0 0014 0c0-6-3-10-7-17Z" fill="currentColor" fillOpacity="0.65" stroke="none" />
      <path d="M32 16c-2 3-3 5-3 8a3 3 0 006 0c0-3-1-5-3-8Z" fill="currentColor" fillOpacity="0.9" stroke="none" />
      {/* oil bowl */}
      <path d="M8 44c0 9 11 15 24 15s24-6 24-15c0-4-3-5-7-5H15c-4 0-7 1-7 5Z" fill="currentColor" fillOpacity="0.2" />
      {/* stepped pedestal */}
      <path d="M18 60h28l-4 8H22Z" fill="currentColor" fillOpacity="0.28" />
      <path d="M16 70h32" opacity="0.6" />
    </svg>
  )
}

/** A swag of sacred bells hanging from a thread. */
function BellSwag({ className = '' }) {
  return (
    <svg viewBox="0 0 640 56" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M0 6q320 26 640 0" opacity="0.55" />
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 32 + i * 48
        const dip = Math.sin((i / 12) * Math.PI) * 11
        const y = 6 + dip
        return (
          <g key={i}>
            <path d={`M${x} ${y}v8`} opacity="0.5" />
            <path d={`M${x - 5} ${y + 22}c0-7 2-12 5-12s5 5 5 12Z`} fill="currentColor" fillOpacity="0.4" />
            <path d={`M${x - 7} ${y + 22}h14`} />
            <circle cx={x} cy={y + 27} r="1.8" fill="currentColor" stroke="none" />
          </g>
        )
      })}
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fff7e1] via-[#ffe7b3] to-[#ffcf78] px-16 py-16 text-center font-serif text-orange-900"
    >
      {/* warm vignette to deepen the edges */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_38%,transparent_46%,rgba(180,83,9,0.18))]" />

      {/* radiant sun halo behind the deity */}
      <div className="pointer-events-none absolute left-1/2 top-[238px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,206,99,0.7)_0%,rgba(255,196,77,0)_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[238px] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),transparent_68%)]" />

      {/* double sacred border */}
      <div className="pointer-events-none absolute inset-4 rounded-[6px] border-2 border-red-500/55" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[3px] border border-amber-500/70" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[3px] border border-orange-400/30 [box-shadow:inset_0_0_22px_rgba(180,83,9,0.18)]" />

      {/* bell swag beneath the top border */}
      <BellSwag className="pointer-events-none absolute inset-x-12 top-[40px] h-12 text-red-600/70" />

      {/* corner conch shells */}
      <Shankh className="absolute left-7 top-7 h-12 w-12 text-red-500/75" />
      <Shankh className="absolute right-7 top-7 h-12 w-12 -scale-x-100 text-red-500/75" />
      <Shankh className="absolute bottom-7 left-7 h-12 w-12 -scale-y-100 text-red-500/75" />
      <Shankh className="absolute bottom-7 right-7 h-12 w-12 -scale-100 text-red-500/75" />

      <header className="relative flex flex-col items-center pt-3">
        <span className="font-display text-[58px] leading-none text-orange-600 [text-shadow:0_2px_10px_rgba(234,88,12,0.35)]">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-2 font-display text-[19px] tracking-[0.12em] text-red-700">॥ ॐ श्री सत्यनारायणाय नमः ॥</p>
        <p className="mt-3 text-[12px] uppercase tracking-[0.34em] text-red-600">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
        <div className="mt-3 flex items-center gap-2 text-orange-600/80">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-400/70" />
          <span className="text-[11px]">✦</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-400/70" />
        </div>
      </header>

      <main className="relative flex flex-col items-center gap-3">
        <Lotus className="h-16 w-24 text-orange-500" />
        <p className="text-[13px] uppercase tracking-[0.42em] text-orange-700/85">{t('template.common.youAreInvited', 'You are invited')}</p>
        <h1 className="font-display text-[46px] font-semibold leading-[1.06]">
          <span
            data-pdf-color="#b45309"
            className="bg-gradient-to-b from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent [text-shadow:0_1px_0_rgba(255,255,255,0.25)]"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-orange-700/85">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl tracking-wide text-red-700">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-3">
        <div className="flex items-end gap-6">
          <Diya className="h-12 w-9 text-amber-500" />
          <div className="rounded-md border border-red-400/55 bg-white/45 px-9 py-3 shadow-[0_4px_18px_rgba(180,83,9,0.18)] backdrop-blur-[1px]">
            <p className="font-display text-2xl text-red-800">{date}{time && ` · ${time}`}</p>
          </div>
          <Diya className="h-12 w-9 -scale-x-100 text-amber-500" />
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-orange-900">{venue}</p>
        <div className="mt-1 flex items-center gap-3 text-red-600">
          <span className="h-px w-8 bg-red-400/55" />
          <p className="text-[12px] uppercase tracking-[0.3em]">
            {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
          </p>
          <span className="h-px w-8 bg-red-400/55" />
        </div>
      </footer>
    </div>
  )
}
