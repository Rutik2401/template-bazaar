'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Promotion motifs ──────────────────────────────────────────────────── */

/** Upward chevron arrow built from stacked rising rows — ascent of office. */
function RisingArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 12 60 106" strokeWidth="6" opacity="0.95" />
      <path d="M96 48 60 12 24 48" strokeWidth="6.5" />
      <path d="M86 72 60 46 34 72" strokeWidth="5" opacity="0.55" />
      <path d="M78 96 60 78 42 96" strokeWidth="4" opacity="0.3" />
    </svg>
  )
}

/** Four-point shining star. */
function ShineStar({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1 6.4 5.6 11 12 12-6.4 1-11 5.6-12 12-1-6.4-5.6-11-12-12 6.4-1 11-5.6 12-12Z" />
    </svg>
  )
}

/** A laurel half-wreath, leaves curling inward — a crest of distinction. */
function LaurelHalf({ className = '' }) {
  return (
    <svg viewBox="0 0 60 120" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M46 114C20 98 18 54 42 12" opacity="0.9" />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 22 + i * 13
        const x = 42 - i * 4.2
        return <path key={i} d={`M${x} ${y}c-13 -3 -20 3 -24 12`} fill="currentColor" fillOpacity="0.16" />
      })}
    </svg>
  )
}

/** Slim ribbon banner ornament. */
function RibbonRule({ className = '' }) {
  return (
    <svg viewBox="0 0 120 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h36" />
      <path d="M82 8h36" />
      <path d="M44 4l8 4-8 4M76 4l-8 4 8 4" />
      <circle cx="60" cy="8" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Promotion congratulations — prestigious deep-navy with champagne gold, a
 * laurel-crowned ascent crest, rising stars and a refined double frame. The
 * mood is dignified and triumphant: a corner-office moment, beautifully framed.
 * Natural design size: 640 × 900.
 */
export default function PromotionCongrats({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Rohan Mehta'
  const message =
    values.message?.trim() ||
    'Wishing you continued success and happiness in this new chapter!'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#0a1530] px-14 py-16 text-center font-serif text-amber-50"
    >
      {/* deep navy gradient + warm halo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16264f] via-[#0a1530] to-[#04081a]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_28%,rgba(212,164,55,0.34),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_120%,rgba(13,30,70,0.7),transparent_45%)]" />
      {/* faint vertical light beams of ascent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 [background:linear-gradient(to_top,transparent,rgba(212,164,55,0.06)_60%,transparent)] [mask-image:repeating-linear-gradient(90deg,transparent,transparent_46px,#000_46px,#000_48px)]" />

      {/* rising stars */}
      <ShineStar className="pointer-events-none absolute left-12 top-24 h-5 w-5 text-gold-200/75" />
      <ShineStar className="pointer-events-none absolute right-16 top-32 h-4 w-4 text-gold-200/65" />
      <ShineStar className="pointer-events-none absolute right-28 top-16 h-3 w-3 text-amber-100/55" />
      <ShineStar className="pointer-events-none absolute left-24 top-44 h-2.5 w-2.5 text-gold-200/50" />
      <ShineStar className="pointer-events-none absolute right-12 bottom-44 h-3 w-3 text-gold-200/40" />

      {/* gold double frame with corner pips */}
      <div className="pointer-events-none absolute inset-5 rounded-md border border-gold-400/60" />
      <div className="pointer-events-none absolute inset-[30px] rounded-md border border-gold-300/25" />
      <ShineStar className="pointer-events-none absolute left-[26px] top-[26px] h-2.5 w-2.5 text-gold-300/70" />
      <ShineStar className="pointer-events-none absolute right-[26px] top-[26px] h-2.5 w-2.5 text-gold-300/70" />
      <ShineStar className="pointer-events-none absolute left-[26px] bottom-[26px] h-2.5 w-2.5 text-gold-300/70" />
      <ShineStar className="pointer-events-none absolute right-[26px] bottom-[26px] h-2.5 w-2.5 text-gold-300/70" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.55em] text-gold-300">
          {t('template.common.withPride', 'with pride we say')}
        </p>
        <RibbonRule className="mt-4 h-3.5 w-32 text-gold-400/70" />
        <h1 className="mt-5 max-w-[24rem] font-display text-[44px] font-semibold leading-[1.0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <span
            data-pdf-color="#d4a437"
            className="bg-gradient-to-b from-amber-50 via-gold-300 to-gold-600 bg-clip-text text-transparent"
          >
            Congratulations on your Promotion!
          </span>
        </h1>
      </header>

      {/* Laurel-crowned ascent crest */}
      <div className="relative flex items-center justify-center">
        <LaurelHalf className="h-36 w-[4.5rem] text-gold-300/80" />
        <div className="relative mx-1 grid h-36 w-36 place-items-center rounded-full border-2 border-gold-400/65 bg-gradient-to-b from-[#14264f] to-[#0a1632] shadow-[inset_0_0_36px_rgba(212,164,55,0.28),0_12px_40px_rgba(0,0,0,0.45)]">
          <span className="pointer-events-none absolute inset-2 rounded-full border border-gold-300/30" />
          <RisingArrow className="h-[5.5rem] w-[5.5rem] text-gold-300 drop-shadow-[0_0_8px_rgba(212,164,55,0.35)]" />
        </div>
        <LaurelHalf className="h-36 w-[4.5rem] -scale-x-100 text-gold-300/80" />
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.45em] text-gold-300">
          {t('template.common.toHonor', 'in honour of')}
        </p>
        <p className="mt-3 font-display text-[40px] leading-tight text-amber-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          {name}
        </p>
        <div className="mt-4 mb-1 flex items-center gap-3 text-gold-300">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/80" />
          <ShineStar className="h-3 w-3" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/80" />
        </div>
        <p className="mt-4 max-w-[25rem] text-[18px] italic leading-relaxed text-amber-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <RibbonRule className="mb-3 h-3.5 w-36 text-gold-400/65" />
        <p className="text-[12px] uppercase tracking-[0.4em] text-gold-300">
          {t('template.common.onwardAndUpward', 'onward and upward')}
        </p>
      </footer>
    </div>
  )
}
