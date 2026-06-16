'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Achievement motifs ────────────────────────────────────────────────── */

/** Classic trophy on a plinth with handles and a winner's star. */
function Trophy({ className = '' }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 16h40v28a20 20 0 0 1-40 0V16Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M40 22H22v8a16 16 0 0 0 16 16" />
      <path d="M80 22h18v8a16 16 0 0 1-16 16" />
      <path d="M60 64v22" />
      <path d="M44 86h32" />
      <path d="M38 86h44l-4 24H42l-4-24Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 24l2.6 6.4L69 32l-5 4.4 1.6 6.6L60 39.6 54.4 43 56 36.4 51 32l6.4-1.6L60 24Z" fill="currentColor" stroke="none" opacity="0.85" />
    </svg>
  )
}

/** A laurel half-wreath (mirror for the other side). */
function LaurelBranch({ className = '' }) {
  return (
    <svg viewBox="0 0 60 120" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M44 112C20 96 18 56 40 14" />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 22 + i * 13
        const x = 40 - i * 4
        return <path key={i} d={`M${x} ${y}c-12 -2 -18 4 -22 12`} fill="currentColor" fillOpacity="0.2" />
      })}
    </svg>
  )
}

/** Confetti piece — square or round. */
function Confetti({ className = '', rounded = false }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="currentColor">
      {rounded ? <circle cx="6" cy="6" r="5" /> : <rect x="0" y="0" width="12" height="12" rx="2" />}
    </svg>
  )
}

/** A radiant burst of celebratory rays. */
function Burst({ className = '' }) {
  const rays = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {rays.map((_, i) => {
        const a = ((i * 360) / 12) * (Math.PI / 180)
        const inner = i % 2 === 0 ? 26 : 22
        const outer = i % 2 === 0 ? 46 : 36
        return (
          <path
            key={i}
            d={`M${50 + Math.cos(a) * inner} ${50 + Math.sin(a) * inner}L${50 + Math.cos(a) * outer} ${50 + Math.sin(a) * outer}`}
            opacity={i % 2 === 0 ? 0.7 : 0.4}
          />
        )
      })}
    </svg>
  )
}

/**
 * Achievement celebration — festive royal purple with celebratory gold, a
 * radiant trophy crowned by laurels, a star-topped cup and a joyful scatter of
 * confetti. Triumphant, prestigious and full of party energy.
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
      {/* royal purple gradient + golden spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a1768] via-[#1d0b39] to-[#0d041f]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(250,204,21,0.30),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_120%,rgba(15,5,34,0.7),transparent_42%)]" />

      {/* confetti scatter */}
      <Confetti className="pointer-events-none absolute left-12 top-16 h-3 w-3 rotate-12 text-gold-300/85" />
      <Confetti rounded className="pointer-events-none absolute right-14 top-24 h-2.5 w-2.5 text-fuchsia-300/75" />
      <Confetti className="pointer-events-none absolute right-24 top-12 h-2 w-2 -rotate-6 text-amber-200/75" />
      <Confetti rounded className="pointer-events-none absolute left-24 top-32 h-2 w-2 text-violet-300/75" />
      <Confetti className="pointer-events-none absolute left-16 bottom-28 h-2.5 w-2.5 rotate-45 text-gold-300/75" />
      <Confetti rounded className="pointer-events-none absolute right-16 bottom-32 h-2 w-2 text-fuchsia-300/65" />
      <Confetti className="pointer-events-none absolute left-1/2 top-20 h-2 w-2 rotate-12 text-violet-200/60" />
      <Confetti rounded className="pointer-events-none absolute right-1/3 bottom-44 h-2 w-2 text-amber-200/60" />

      {/* gold double frame with corner sparkles */}
      <div className="pointer-events-none absolute inset-5 rounded-md border border-gold-400/55" />
      <div className="pointer-events-none absolute inset-[30px] rounded-md border border-gold-300/25" />
      <Confetti className="pointer-events-none absolute left-[26px] top-[26px] h-2.5 w-2.5 rotate-45 text-gold-300/70" />
      <Confetti className="pointer-events-none absolute right-[26px] top-[26px] h-2.5 w-2.5 rotate-45 text-gold-300/70" />
      <Confetti className="pointer-events-none absolute left-[26px] bottom-[26px] h-2.5 w-2.5 rotate-45 text-gold-300/70" />
      <Confetti className="pointer-events-none absolute right-[26px] bottom-[26px] h-2.5 w-2.5 rotate-45 text-gold-300/70" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.55em] text-gold-300">
          {t('template.common.timeToCelebrate', 'time to celebrate')}
        </p>
        <div className="mt-4 flex items-center gap-3 text-gold-300/80">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/80" />
          <Confetti rounded className="h-2 w-2" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/80" />
        </div>
        <h1 className="mt-5 max-w-[24rem] font-display text-[42px] leading-[1.04] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <span
            data-pdf-color="#facc15"
            className="bg-gradient-to-b from-amber-50 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            Achievement Unlocked — Congratulations!
          </span>
        </h1>
      </header>

      {/* Trophy crowned with laurels, set in a burst of light */}
      <div className="relative flex items-center justify-center">
        <Burst className="pointer-events-none absolute h-56 w-56 text-gold-300/45" />
        <LaurelBranch className="relative h-36 w-16 text-gold-300/85" />
        <div className="relative mx-1 grid h-36 w-36 place-items-center rounded-full border-2 border-gold-400/65 bg-gradient-to-b from-[#2c1056] to-[#190935] shadow-[inset_0_0_34px_rgba(250,204,21,0.28),0_12px_40px_rgba(0,0,0,0.45)]">
          <span className="pointer-events-none absolute inset-2 rounded-full border border-gold-300/30" />
          <Trophy className="h-[6.5rem] w-[6.5rem] text-gold-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
        </div>
        <LaurelBranch className="relative h-36 w-16 -scale-x-100 text-gold-300/85" />
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.45em] text-gold-300">
          {t('template.common.raiseAToast', 'raise a toast to')}
        </p>
        <p className="mt-3 font-display text-[40px] leading-tight text-purple-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          {name}
        </p>
        <div className="mt-4 mb-1 flex items-center gap-3 text-gold-300">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/75" />
          <Confetti rounded className="h-2.5 w-2.5" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/75" />
        </div>
        <p className="mt-4 max-w-[25rem] text-[18px] italic leading-relaxed text-purple-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <div className="mb-3 flex items-center gap-3 text-gold-300">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/65" />
          <Confetti rounded className="h-2.5 w-2.5" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/65" />
        </div>
        <p className="text-[12px] uppercase tracking-[0.4em] text-gold-300">
          {t('template.common.wellEarned', 'well earned')}
        </p>
      </footer>
    </div>
  )
}
