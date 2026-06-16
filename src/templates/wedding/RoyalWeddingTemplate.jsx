'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Decorative SVG pieces (gold-foil filigree, mandala & jharokha) ──────── */

/** Ornate corner filigree — layered scrolls, paisley bud and beadwork. */
function CornerFlourish({ className = '' }) {
  return (
    <svg
      viewBox="0 0 130 130"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      {/* sweeping double scroll */}
      <path d="M6 6c40 0 60 5 80 25s25 40 25 80" opacity="0.95" />
      <path d="M6 24c28 0 44 4 59 19s19 31 19 59" opacity="0.5" />
      {/* inner curl */}
      <path d="M14 14c0 20 9 33 29 33" opacity="0.8" />
      <path d="M22 12c10 4 16 11 18 22" opacity="0.45" />
      {/* paisley bud */}
      <path
        d="M44 14c9 0 16 2 22 9s9 13 9 22c-9 0-16-2-22-9s-9-13-9-22Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="none"
      />
      <path d="M52 22c5 1 9 4 11 11" opacity="0.5" />
      {/* beaded dots */}
      <circle cx="14" cy="14" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="92" cy="92" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="78" cy="34" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="34" cy="78" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Concentric mandala medallion for the header crest. */
function Mandala({ className = '' }) {
  const petals = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="60" cy="60" r="54" opacity="0.35" />
      <circle cx="60" cy="60" r="40" opacity="0.6" />
      <g>
        {petals.map((_, i) => {
          const a = (i / petals.length) * 360
          return (
            <path
              key={i}
              d="M60 8c5 12 5 22 0 32-5-10-5-20 0-32Z"
              fill="currentColor"
              fillOpacity="0.18"
              stroke="none"
              transform={`rotate(${a} 60 60)`}
            />
          )
        })}
      </g>
      <circle cx="60" cy="60" r="22" opacity="0.7" />
      <circle cx="60" cy="60" r="11" fill="currentColor" fillOpacity="0.22" stroke="none" />
      <circle cx="60" cy="60" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornate centre divider — paisley diamond flanked by tapering rules + buds. */
function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 260 26" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14 13h74" strokeLinecap="round" />
      <path d="M172 13h74" strokeLinecap="round" />
      {/* central lotus diamond */}
      <path d="M130 3l11 10-11 10-11-10 11-10Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M130 7l6 6-6 6-6-6 6-6Z" />
      {/* flanking paisley swirls */}
      <path d="M88 13c8 0 12-4 12-9M172 13c-8 0-12-4-12-9" opacity="0.6" />
      <circle cx="100" cy="13" r="3" fill="currentColor" stroke="none" />
      <circle cx="160" cy="13" r="3" fill="currentColor" stroke="none" />
      <circle cx="22" cy="13" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="238" cy="13" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Royal Indian wedding invitation — regal maroon, gold-foil filigree and a
 * jharokha-arch frame. Opulent, symmetrical and worth paying for.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function RoyalWeddingTemplate({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'Date to be announced')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const familyName = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-paper font-serif text-maroon-700"
    >
      {/* Warm ivory base with subtle radial gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf7ec] via-[#fbf1df] to-[#f6e6c9]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,_rgba(184,134,11,0.12),_transparent_60%)]" />

      {/* Maroon outer mat with gold keyline */}
      <div className="absolute inset-[14px] rounded-[6px] border-[6px] border-maroon-600/90" />
      <div className="absolute inset-[14px] rounded-[6px] ring-1 ring-inset ring-gold-300/60" />

      {/* Double gold inner frame */}
      <div className="absolute inset-[26px] rounded-[4px] border-[2.5px] border-gold-400" />
      <div className="absolute inset-[34px] rounded-[3px] border border-gold-300/70" />

      {/* Jharokha arch — fine gold hairline within the frame */}
      <div className="pointer-events-none absolute inset-x-[52px] top-[52px] bottom-[64px] rounded-t-[170px] rounded-b-[12px] border border-gold-400/45" />
      <div className="pointer-events-none absolute inset-x-[60px] top-[60px] bottom-[72px] rounded-t-[160px] rounded-b-[10px] border border-gold-300/30" />

      {/* Corner flourishes */}
      <CornerFlourish className="absolute left-9 top-9 h-24 w-24 text-gold-500" />
      <CornerFlourish className="absolute right-9 top-9 h-24 w-24 text-gold-500 [transform:scaleX(-1)]" />
      <CornerFlourish className="absolute bottom-9 left-9 h-24 w-24 text-gold-500 [transform:scaleY(-1)]" />
      <CornerFlourish className="absolute bottom-9 right-9 h-24 w-24 text-gold-500 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[72px] py-[68px] text-center">
        <header className="flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <Mandala className="h-20 w-20 text-gold-500/80" />
            <span className="absolute text-[26px] leading-none text-maroon-600" data-pdf-color="#5e1822">🕉</span>
          </div>
          <p className="mt-4 font-sans text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-600">
            {t('template.wedding.blessing')}
          </p>
          <p className="mt-5 max-w-[19rem] text-[15px] italic leading-relaxed text-maroon-500/90">
            {t('template.wedding.invite')}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.46em] text-gold-600/80">
            {t('template.wedding.weds')}
          </p>
          <h1 className="font-script text-[72px] font-medium leading-[0.92]">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-br from-gold-600 via-gold-400 to-maroon-500 bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          <div className="my-2 flex items-center justify-center text-gold-500">
            <span className="font-display text-2xl italic tracking-wide text-maroon-400">
              {t('template.wedding.weds')}
            </span>
          </div>

          <h1 className="font-script text-[72px] font-medium leading-[0.92]">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-bl from-gold-600 via-gold-400 to-maroon-500 bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <Divider className="mt-5 h-6 w-56 text-gold-500" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1.5 rounded-[4px] border border-gold-400/60 bg-maroon-600/[0.04] px-9 py-3">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-600">
              {t('template.wedding.saveDate')}
            </span>
            <span className="font-display text-[26px] leading-none tracking-wide text-maroon-600">{weddingDate}</span>
          </div>

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-600">
              {t('template.wedding.venue')}
            </span>
            <span className="text-[17px] leading-snug text-maroon-600">{venue}</span>
          </div>

          <p className="mt-1 text-[15px] italic leading-relaxed text-maroon-500/80">
            {t('template.wedding.compliments')}
            <br />
            <span className="font-display text-xl not-italic tracking-wide text-maroon-600">{familyName}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
