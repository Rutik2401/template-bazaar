'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Achievement motifs ────────────────────────────────────────────────── */

/** Classic trophy on a plinth. */
function Trophy({ className = '' }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 18h40v26a20 20 0 0 1-40 0V18Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M40 24H22v8a16 16 0 0 0 16 16" />
      <path d="M80 24h18v8a16 16 0 0 1-16 16" />
      <path d="M60 64v22" />
      <path d="M44 86h32" />
      <path d="M38 86h44l-4 22H42l-4-22Z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

/** A laurel half-wreath (mirror for the other side). */
function LaurelBranch({ className = '' }) {
  return (
    <svg viewBox="0 0 60 120" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M44 112C20 96 18 56 40 14" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 24 + i * 14
        const x = 40 - i * 4
        return <path key={i} d={`M${x} ${y}c-12 -2 -18 4 -22 12`} fill="currentColor" fillOpacity="0.18" />
      })}
    </svg>
  )
}

/** Confetti piece. */
function Confetti({ className = '', rounded = false }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="currentColor">
      {rounded ? <circle cx="6" cy="6" r="5" /> : <rect x="0" y="0" width="12" height="12" rx="2" />}
    </svg>
  )
}

/**
 * Achievement celebration — festive royal purple with celebratory gold, a
 * trophy crowned by laurels and a scatter of confetti. Triumphant party feel.
 * Natural design size: 640 × 900.
 */
export default function AchievementCongrats({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Rohan Mehta'
  const message =
    values.message?.trim() ||
    'Wishing you continued success and happiness in this new chapter!'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#1d0b39] px-14 py-16 text-center font-serif text-purple-50"
    >
      {/* royal purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#34145f] via-[#1d0b39] to-[#0f0522]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_28%,rgba(250,204,21,0.28),transparent_55%)]" />

      {/* confetti scatter */}
      <Confetti className="pointer-events-none absolute left-12 top-16 h-3 w-3 rotate-12 text-gold-300/80" />
      <Confetti rounded className="pointer-events-none absolute right-14 top-24 h-2.5 w-2.5 text-fuchsia-300/70" />
      <Confetti className="pointer-events-none absolute right-24 top-12 h-2 w-2 -rotate-6 text-amber-200/70" />
      <Confetti rounded className="pointer-events-none absolute left-24 top-32 h-2 w-2 text-violet-300/70" />
      <Confetti className="pointer-events-none absolute left-16 bottom-28 h-2.5 w-2.5 rotate-45 text-gold-300/70" />
      <Confetti rounded className="pointer-events-none absolute right-16 bottom-32 h-2 w-2 text-fuchsia-300/60" />

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-md border border-gold-400/50" />
      <div className="pointer-events-none absolute inset-[30px] rounded-md border border-gold-300/20" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-300">
          {t('template.common.timeToCelebrate', 'time to celebrate')}
        </p>
        <h1 className="mt-4 max-w-[24rem] font-display text-[40px] leading-[1.05]">
          <span
            data-pdf-color="#facc15"
            className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            Achievement Unlocked — Congratulations!
          </span>
        </h1>
      </header>

      {/* Trophy crowned with laurels */}
      <div className="relative flex items-center justify-center">
        <LaurelBranch className="h-32 w-16 text-gold-300/80" />
        <div className="mx-2 grid h-32 w-32 place-items-center rounded-full border-2 border-gold-400/60 bg-[#250e47] shadow-[inset_0_0_30px_rgba(250,204,21,0.25)]">
          <Trophy className="h-24 w-24 text-gold-300" />
        </div>
        <LaurelBranch className="h-32 w-16 -scale-x-100 text-gold-300/80" />
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.4em] text-gold-300">
          {t('template.common.raiseAToast', 'raise a toast to')}
        </p>
        <p className="mt-3 font-display text-4xl text-purple-50">{name}</p>
        <p className="mt-6 max-w-[25rem] text-[18px] italic leading-relaxed text-purple-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <div className="mb-3 flex items-center gap-3 text-gold-300">
          <span className="h-px w-12 bg-gold-400/60" />
          <Confetti rounded className="h-2.5 w-2.5" />
          <span className="h-px w-12 bg-gold-400/60" />
        </div>
        <p className="text-[12px] uppercase tracking-[0.35em] text-gold-300">
          {t('template.common.wellEarned', 'well earned')}
        </p>
      </footer>
    </div>
  )
}
