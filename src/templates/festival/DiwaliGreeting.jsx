'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── Diwali decorative motifs ──────────────────────────────────────────── */

/** A glowing brass diya with a teardrop flame. */
function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 90 70" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* flame glow */}
      <ellipse cx="45" cy="20" rx="9" ry="15" fill="#fde68a" fillOpacity="0.35" stroke="none" />
      {/* flame */}
      <path d="M45 6c5 7 7 12 7 17a7 7 0 0 1-14 0c0-3 2-7 7-17Z" fill="#fbbf24" stroke="#f59e0b" />
      <path d="M45 14c2 3 3 5 3 7a3 3 0 0 1-6 0c0-2 1-4 3-7Z" fill="#fff7ed" stroke="none" />
      {/* wick line */}
      <path d="M45 36v6" />
      {/* clay lamp bowl */}
      <path d="M14 48c0 10 14 16 31 16s31-6 31-16c0-3-3-5-8-5H22c-5 0-8 2-8 5Z" fill="currentColor" fillOpacity="0.28" />
      <path d="M22 43h46" opacity="0.7" />
      <path d="M30 56c4 3 9 4 15 4s11-1 15-4" opacity="0.55" />
    </svg>
  )
}

/** Concentric rangoli rosette built from petals and dots. */
function Rangoli({ className = '' }) {
  const petals = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="100" cy="100" r="14" fill="currentColor" fillOpacity="0.25" />
      <circle cx="100" cy="100" r="7" fill="currentColor" fillOpacity="0.5" stroke="none" />
      {petals.map((_, i) => {
        const a = (i * 360) / 12
        return (
          <g key={i} transform={`rotate(${a} 100 100)`}>
            <path d="M100 78c8 6 8 18 0 28c-8-10-8-22 0-28Z" fill="currentColor" fillOpacity="0.16" />
            <path d="M100 50c6 8 6 18 0 26c-6-8-6-18 0-26Z" fill="currentColor" fillOpacity="0.1" />
            <circle cx="100" cy="40" r="2.6" fill="currentColor" stroke="none" />
          </g>
        )
      })}
      <circle cx="100" cy="100" r="36" strokeDasharray="2 6" opacity="0.6" />
      <circle cx="100" cy="100" r="62" strokeDasharray="1 9" opacity="0.45" />
    </svg>
  )
}

/** Radiating firework burst. */
function Firework({ className = '' }) {
  const rays = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {rays.map((_, i) => {
        const a = ((i * 360) / 16) * (Math.PI / 180)
        const x1 = 60 + Math.cos(a) * 16
        const y1 = 60 + Math.sin(a) * 16
        const x2 = 60 + Math.cos(a) * 52
        const y2 = 60 + Math.sin(a) * 52
        const dx = 60 + Math.cos(a) * 58
        const dy = 60 + Math.sin(a) * 58
        return (
          <g key={i}>
            <path d={`M${x1} ${y1}L${x2} ${y2}`} opacity="0.85" />
            <circle cx={dx} cy={dy} r="2.2" fill="currentColor" stroke="none" />
          </g>
        )
      })}
      <circle cx="60" cy="60" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Diwali greeting card — deep maroon/purple base with a glowing gold core,
 * diyas, a rangoli rosette and bursting fireworks. Rich and luminous.
 * Natural design size: 720 × 900.
 */
export default function DiwaliGreeting({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'The Sharma Family'
  const message =
    values.message?.trim() ||
    'May the festival of lights fill your home with health, happiness and endless prosperity.'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[720px] flex-col items-center justify-between overflow-hidden bg-[#1a0626] px-16 py-16 text-center font-serif text-amber-100"
    >
      {/* layered glow: warm core + purple silk */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a0d4e] via-[#4a1042] to-[#160521]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.30),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_92%,rgba(217,119,6,0.28),transparent_45%)]" />

      {/* fireworks in the sky */}
      <Firework className="absolute left-10 top-12 h-24 w-24 text-amber-300/70" />
      <Firework className="absolute right-8 top-20 h-16 w-16 text-rose-300/60" />
      <Firework className="absolute right-20 top-6 h-12 w-12 text-amber-200/60" />

      {/* gold double frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-400/60" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-gold-300/25" />

      {/* a glowing rangoli behind the message */}
      <Rangoli className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 text-gold-300/25" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="font-display text-3xl tracking-wide text-gold-200">{t('template.common.om', 'ॐ')}</p>
        <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-300">
          {t('template.common.warmWishes', 'Warm wishes on')}
        </p>
        <h1 className="mt-3 font-display text-[68px] leading-[0.95]">
          <span
            data-pdf-color="#fbbf24"
            className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent"
          >
            {t('template.common.happyDiwali', 'Happy Diwali')}
          </span>
        </h1>
        <div className="mt-4 flex items-center gap-3 text-gold-400">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
          <span className="text-lg">✦</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>
      </header>

      {/* Message */}
      <main className="relative max-w-[27rem]">
        <p className="text-[20px] italic leading-relaxed text-amber-50/95">{message}</p>
      </main>

      {/* Row of diyas */}
      <div className="relative flex items-end justify-center gap-6 [filter:drop-shadow(0_3px_12px_rgba(251,191,36,0.4))]">
        <Diya className="h-12 w-16 -translate-y-1 text-gold-500" />
        <Diya className="h-16 w-20 text-gold-400" />
        <Diya className="h-12 w-16 -translate-y-1 text-gold-500" />
      </div>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <p className="text-[13px] uppercase tracking-[0.35em] text-gold-300">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <p className="mt-2 font-display text-3xl text-amber-100">{name}</p>
      </footer>
    </div>
  )
}
