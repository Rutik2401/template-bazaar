'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Promotion motifs ──────────────────────────────────────────────────── */

/** Upward chevron arrow built from stacked rising rows. */
function RisingArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 14 96 50" strokeWidth="6" />
      <path d="M60 14 24 50" strokeWidth="6" />
      <path d="M60 14 60 104" strokeWidth="6" opacity="0.9" />
      <path d="M86 70 60 44 34 70" strokeWidth="5" opacity="0.55" />
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

/**
 * Promotion congratulations — prestigious navy with champagne gold, an
 * upward arrow of ascent flanked by rising stars and a laurel-free crest feel.
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
      {/* deep navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13224a] via-[#0a1530] to-[#050b1c]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(212,164,55,0.30),transparent_55%)]" />

      {/* rising stars */}
      <ShineStar className="pointer-events-none absolute left-12 top-24 h-5 w-5 text-gold-200/70" />
      <ShineStar className="pointer-events-none absolute right-16 top-32 h-4 w-4 text-gold-200/60" />
      <ShineStar className="pointer-events-none absolute right-28 top-16 h-3 w-3 text-amber-100/50" />
      <ShineStar className="pointer-events-none absolute left-24 top-44 h-2.5 w-2.5 text-gold-200/50" />

      {/* gold double frame */}
      <div className="pointer-events-none absolute inset-5 rounded-md border border-gold-400/55" />
      <div className="pointer-events-none absolute inset-[30px] rounded-md border border-gold-300/20" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-300">
          {t('template.common.withPride', 'with pride we say')}
        </p>
        <h1 className="mt-4 max-w-[24rem] font-display text-[42px] leading-[1.02]">
          <span
            data-pdf-color="#d4a437"
            className="bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent"
          >
            Congratulations on your Promotion!
          </span>
        </h1>
      </header>

      {/* Ascent crest */}
      <div className="relative flex flex-col items-center">
        <div className="grid h-32 w-32 place-items-center rounded-full border-2 border-gold-400/60 bg-[#0c193a] shadow-[inset_0_0_30px_rgba(212,164,55,0.25)]">
          <RisingArrow className="h-20 w-20 text-gold-300" />
        </div>
        <div className="mt-6 flex items-center gap-3 text-gold-300">
          <span className="h-px w-10 bg-gold-400/70" />
          <ShineStar className="h-3 w-3" />
          <span className="h-px w-10 bg-gold-400/70" />
        </div>
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.4em] text-gold-300">
          {t('template.common.toHonor', 'in honour of')}
        </p>
        <p className="mt-3 font-display text-4xl text-amber-50">{name}</p>
        <p className="mt-6 max-w-[25rem] text-[18px] italic leading-relaxed text-amber-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <span className="mb-3 h-px w-24 bg-gold-400/60" />
        <p className="text-[12px] uppercase tracking-[0.35em] text-gold-300">
          {t('template.common.onwardAndUpward', 'onward and upward')}
        </p>
      </footer>
    </div>
  )
}
