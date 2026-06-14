'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── New Year motifs ───────────────────────────────────────────────────── */

/** Radiating firework burst with sparkle tips. */
function Firework({ className = '' }) {
  const rays = Array.from({ length: 20 })
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {rays.map((_, i) => {
        const a = ((i * 360) / 20) * (Math.PI / 180)
        const inner = i % 2 === 0 ? 18 : 14
        const outer = i % 2 === 0 ? 60 : 44
        const x1 = 70 + Math.cos(a) * inner
        const y1 = 70 + Math.sin(a) * inner
        const x2 = 70 + Math.cos(a) * outer
        const y2 = 70 + Math.sin(a) * outer
        const dx = 70 + Math.cos(a) * (outer + 6)
        const dy = 70 + Math.sin(a) * (outer + 6)
        return (
          <g key={i}>
            <path d={`M${x1} ${y1}L${x2} ${y2}`} opacity="0.9" />
            <circle cx={dx} cy={dy} r={i % 2 === 0 ? 2.4 : 1.6} fill="currentColor" stroke="none" />
          </g>
        )
      })}
      <circle cx="70" cy="70" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Two champagne flutes clinking, with rising bubbles. */
function ChampagneToast({ className = '' }) {
  return (
    <svg viewBox="0 0 160 150" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* left flute */}
      <path d="M58 22c-2 18-8 28-18 34c10 6 16 16 18 34" fill="currentColor" fillOpacity="0.14" />
      <path d="M50 90l-4 38M40 132h20" />
      {/* right flute */}
      <path d="M102 22c2 18 8 28 18 34c-10 6-16 16-18 34" fill="currentColor" fillOpacity="0.14" />
      <path d="M110 90l4 38M100 132h20" />
      {/* fizz / bubbles */}
      <circle cx="62" cy="14" r="2" fill="currentColor" stroke="none" />
      <circle cx="72" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="88" cy="10" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="98" cy="16" r="2" fill="currentColor" stroke="none" />
      <circle cx="80" cy="4" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** A small five-point sparkle. */
function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0l2.2 7.8L22 10l-7.8 2.2L12 20l-2.2-7.8L2 10l7.8-2.2L12 0Z" />
    </svg>
  )
}

/**
 * New Year greeting — midnight navy/black with champagne gold, bursting
 * fireworks, a toast of flutes and scattered sparkles. Glamorous countdown feel.
 * Natural design size: 720 × 900.
 */
export default function NewYearGreeting({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'The Sharma Family'
  const message =
    values.message?.trim() ||
    "Here's to new beginnings, brighter days and a year filled with success, laughter and good health."

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[720px] flex-col items-center justify-between overflow-hidden bg-[#050813] px-16 py-16 text-center font-serif text-amber-50"
    >
      {/* midnight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1430] via-[#070b1c] to-[#02040b]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_22%,rgba(212,164,55,0.30),transparent_50%)]" />

      {/* fireworks across the sky */}
      <Firework className="absolute left-6 top-10 h-28 w-28 text-gold-300/80" />
      <Firework className="absolute right-4 top-24 h-20 w-20 text-amber-200/65" />
      <Firework className="absolute right-24 top-6 h-14 w-14 text-gold-200/55" />

      {/* sparkle dust */}
      <Sparkle className="pointer-events-none absolute left-20 top-48 h-4 w-4 text-gold-200/70" />
      <Sparkle className="pointer-events-none absolute right-16 top-52 h-3 w-3 text-gold-200/60" />
      <Sparkle className="pointer-events-none absolute left-1/3 top-36 h-2.5 w-2.5 text-amber-100/60" />

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-400/55" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-gold-300/20" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.5em] text-gold-300">
          {t('template.common.warmWishes', 'Warm wishes on')}
        </p>
        <h1 className="mt-3 font-display text-[58px] leading-[0.96]">
          <span
            data-pdf-color="#d4a437"
            className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
          >
            {t('template.common.happyNewYear', 'Happy New Year')}
          </span>
        </h1>
        {/* big year numeral */}
        <p className="mt-2 font-display text-[88px] leading-none tracking-[0.06em] text-gold-200/90">2026</p>
      </header>

      {/* Toast */}
      <ChampagneToast className="relative h-36 w-40 text-gold-300" />

      {/* Message */}
      <main className="relative max-w-[27rem]">
        <p className="text-[19px] italic leading-relaxed text-amber-50/95">{message}</p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <div className="mb-4 flex items-center gap-3 text-gold-300">
          <span className="h-px w-12 bg-gold-400/70" />
          <Sparkle className="h-3.5 w-3.5" />
          <span className="h-px w-12 bg-gold-400/70" />
        </div>
        <p className="text-[13px] uppercase tracking-[0.35em] text-gold-300">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <p className="mt-2 font-display text-3xl text-amber-50">{name}</p>
      </footer>
    </div>
  )
}
