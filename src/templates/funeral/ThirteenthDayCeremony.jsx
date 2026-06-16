'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Slender muted-gold corner flourish. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      <path d="M8 8h26M8 8v26" strokeWidth="1.2" />
      <path d="M8 8c14 0 24 10 24 24" strokeWidth="0.9" opacity="0.55" />
      <circle cx="8" cy="8" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* A small lotus glyph framed by the XIII numeral. */
function LotusGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 34 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true">
      <path d="M17 4c-1.8 5-1.8 10 0 15 1.8-5 1.8-10 0-15Z" />
      <path d="M17 7c-4.4 3.2-6.6 7-7.2 12 3.8-2.1 6.2-6.6 7.2-12Z" />
      <path d="M17 7c4.4 3.2 6.6 7 7.2 12-3.8-2.1-6.2-6.6-7.2-12Z" />
      <path d="M5 19h24" strokeWidth="0.9" opacity="0.6" />
    </svg>
  )
}

/**
 * Thirteenth Day Ceremony (Terahvin / Shraddh) — minimal and dignified.
 * Warm ivory ground with muted-gold corner flourishes, a lotus glyph and a thin double rule.
 * Natural size 640 × 900.
 */
export default function ThirteenthDayCeremony({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#fbfaf8] to-[#f4f1ea] px-16 py-24 text-center font-serif text-[#46443f]"
    >
      {/* soft ivory vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,_rgba(255,255,255,0.85),_transparent_60%)]" />

      {/* thin double frame */}
      <div className="pointer-events-none absolute inset-8 border border-[#d8d2c6]" />
      <div className="pointer-events-none absolute inset-[38px] border border-[#ebe6db]" />

      {/* muted-gold corner flourishes */}
      <CornerFlourish className="pointer-events-none absolute left-7 top-7 h-12 w-12 text-[#b59b5e]" />
      <CornerFlourish className="pointer-events-none absolute right-7 top-7 h-12 w-12 text-[#b59b5e] [transform:scaleX(-1)]" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 left-7 h-12 w-12 text-[#b59b5e] [transform:scaleY(-1)]" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 right-7 h-12 w-12 text-[#b59b5e] [transform:scale(-1)]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[26px] leading-none text-[#b59b5e]" data-pdf-color="#b59b5e">
          {t('template.common.om', 'ॐ')}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.45em] text-[#9c9384]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main */}
      <main className="relative flex flex-col items-center">
        <h1 className="font-display text-[46px] leading-tight text-[#2c2a25]">{person}</h1>
        <div className="my-7 flex items-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8d2c6]" />
          <span className="font-display text-[15px] tracking-[0.22em] text-[#b59b5e]">XIII</span>
          <LotusGlyph className="h-5 w-7 text-[#b59b5e]" />
          <span className="font-display text-[15px] tracking-[0.22em] text-[#b59b5e]">XIII</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8d2c6]" />
        </div>
        <p className="max-w-[24rem] text-[14px] italic leading-relaxed text-[#7d7667]">
          {t('template.common.prayerHeld', 'A prayer meeting will be held to pay homage to')}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center gap-2 text-[#58523f]">
        <span className="mb-1 h-px w-16 bg-gradient-to-r from-transparent via-[#cdc2a8] to-transparent" />
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#9c9384]">
          {t('template.funeral.thirteenthDay', 'Thirteenth Day Ceremony')}
        </p>
        <p className="font-display text-xl text-[#2c2a25]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px] leading-snug text-[#5c5648]">{venue}</p>
        <p className="mt-3 text-[13px] italic text-[#7d7667]">— {family}</p>
      </footer>
    </div>
  )
}
