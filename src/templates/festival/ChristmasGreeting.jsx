'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── Christmas motifs ──────────────────────────────────────────────────── */

/** A tiered evergreen tree with a star and baubles. */
function ChristmasTree({ className = '' }) {
  return (
    <svg viewBox="0 0 140 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      {/* star topper */}
      <path d="M70 6l5 13 14 .7-11 9 4 14-12-8-12 8 4-14-11-9 14-.7 5-13Z" fill="#fcd34d" stroke="#f59e0b" />
      {/* tiers */}
      <path d="M70 36l34 46H36l34-46Z" fill="currentColor" fillOpacity="0.85" />
      <path d="M70 64l40 52H30l40-52Z" fill="currentColor" fillOpacity="0.85" />
      <path d="M70 96l46 60H24l46-60Z" fill="currentColor" fillOpacity="0.85" />
      {/* trunk */}
      <path d="M60 156h20v22H60Z" fill="#7c4a1e" stroke="none" />
      {/* baubles */}
      <circle cx="58" cy="78" r="3.4" fill="#dc2626" stroke="none" />
      <circle cx="84" cy="106" r="3.4" fill="#fcd34d" stroke="none" />
      <circle cx="56" cy="120" r="3.4" fill="#fcd34d" stroke="none" />
      <circle cx="88" cy="138" r="3.4" fill="#dc2626" stroke="none" />
      <circle cx="60" cy="146" r="3.4" fill="#fcd34d" stroke="none" />
    </svg>
  )
}

/** A hanging round ornament. */
function Ornament({ className = '', accent = '#fcd34d' }) {
  return (
    <svg viewBox="0 0 50 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M25 4v12" strokeLinecap="round" />
      <rect x="20" y="14" width="10" height="8" rx="2" fill="currentColor" fillOpacity="0.4" />
      <circle cx="25" cy="48" r="22" fill={accent} fillOpacity="0.35" stroke={accent} />
      <path d="M8 42c10 6 24 6 34 0M10 56c8 4 22 4 30 0" stroke={accent} opacity="0.7" />
      <path d="M25 26v44" stroke={accent} opacity="0.5" />
    </svg>
  )
}

/** A six-armed snowflake. */
function Snowflake({ className = '' }) {
  const arms = Array.from({ length: 6 })
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      {arms.map((_, i) => (
        <g key={i} transform={`rotate(${i * 60} 30 30)`}>
          <path d="M30 30V6" />
          <path d="M30 14l-6-6M30 14l6-6" />
          <path d="M30 22l-5-5M30 22l5-5" opacity="0.8" />
        </g>
      ))}
    </svg>
  )
}

/**
 * Christmas greeting — deep forest-green base with crimson and gold,
 * a decorated tree, falling snow, ornaments and a warm glow.
 * Natural design size: 720 × 900.
 */
export default function ChristmasGreeting({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'The Sharma Family'
  const message =
    values.message?.trim() ||
    'Wishing you a Christmas wrapped in love, lit with joy and filled with warm moments together.'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[720px] flex-col items-center justify-between overflow-hidden bg-[#0a2e22] px-16 py-16 text-center font-serif text-emerald-50"
    >
      {/* forest gradient + warm hearth glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3d2e] via-[#0a2e22] to-[#071f18]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_82%,rgba(220,38,38,0.22),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_26%,rgba(252,211,77,0.22),transparent_48%)]" />

      {/* falling snow */}
      <Snowflake className="pointer-events-none absolute left-14 top-28 h-8 w-8 text-white/70" />
      <Snowflake className="pointer-events-none absolute right-16 top-20 h-6 w-6 text-white/55" />
      <Snowflake className="pointer-events-none absolute left-1/3 top-12 h-5 w-5 text-white/50" />
      <Snowflake className="pointer-events-none absolute right-24 top-52 h-7 w-7 text-white/45" />
      <div className="pointer-events-none absolute left-24 top-44 text-white/60">·</div>
      <div className="pointer-events-none absolute right-1/3 top-36 text-lg text-white/50">·</div>

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-300/55" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-rose-200/15" />

      {/* hanging ornaments from the top */}
      <Ornament className="absolute left-12 -top-2 h-24 w-12 text-gold-300" accent="#fcd34d" />
      <Ornament className="absolute right-12 -top-2 h-28 w-12 text-rose-300" accent="#fda4af" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.5em] text-gold-300">
          {t('template.common.warmWishes', 'Warm wishes on')}
        </p>
        <h1 className="mt-3 font-display text-[60px] leading-[0.95]">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-b from-amber-100 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            {t('template.common.merryChristmas', 'Merry Christmas')}
          </span>
        </h1>
        <div className="mt-4 flex items-center gap-3 text-rose-300">
          <span className="h-px w-12 bg-rose-300/70" />
          <span className="text-lg">❄</span>
          <span className="h-px w-12 bg-rose-300/70" />
        </div>
      </header>

      {/* Tree */}
      <ChristmasTree className="relative h-52 w-40 text-emerald-300" />

      {/* Message */}
      <main className="relative max-w-[27rem]">
        <p className="text-[19px] italic leading-relaxed text-emerald-50/95">{message}</p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <p className="text-[13px] uppercase tracking-[0.35em] text-gold-300">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <p className="mt-2 font-display text-3xl text-emerald-50">{name}</p>
      </footer>
    </div>
  )
}
