'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Playful nursery motifs ────────────────────────────────────────────── */

function Cloud({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="currentColor">
      <path d="M30 50c-14 0-22-8-22-19 0-9 7-16 16-16 2-10 11-15 20-15 11 0 19 7 21 17 11 0 19 6 19 16s-9 17-21 17H30Z" />
    </svg>
  )
}

function Star({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5l2.5 6 6.5.5-5 4.3 1.6 6.4L12 16.6 6.4 19.7 8 13.3 3 9l6.5-.5L12 2.5Z" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.6 6.6 4.8 10.8 11.4 11.4C16.8 12 12.6 16.2 12 22.8 11.4 16.2 7.2 12 .6 11.4 7.2 10.8 11.4 6.6 12 0Z" />
    </svg>
  )
}

function Rattle({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="48" cy="34" r="22" fill="currentColor" fillOpacity="0.15" />
      <circle cx="48" cy="34" r="9" />
      <path d="M30 50 14 68" />
      <rect x="6" y="64" width="16" height="16" rx="5" fill="currentColor" fillOpacity="0.18" />
      <circle cx="40" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="64" cy="20" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function BabyFeet({ className = '' }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="currentColor">
      <g>
        <ellipse cx="28" cy="48" rx="15" ry="20" />
        <circle cx="14" cy="30" r="4" />
        <circle cx="23" cy="25" r="4.5" />
        <circle cx="33" cy="24" r="4.5" />
        <circle cx="42" cy="28" r="4" />
      </g>
      <g>
        <ellipse cx="86" cy="48" rx="15" ry="20" />
        <circle cx="72" cy="30" r="4" />
        <circle cx="81" cy="25" r="4.5" />
        <circle cx="91" cy="24" r="4.5" />
        <circle cx="100" cy="28" r="4" />
      </g>
    </svg>
  )
}

function Bunting({ className = '' }) {
  // gentle swag of pastel flags
  return (
    <svg viewBox="0 0 640 70" preserveAspectRatio="none" className={className} fill="none">
      <path d="M0 10C150 54 490 54 640 10" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 24 + i * 49.5
        const dip = Math.sin((i / 12) * Math.PI) * 30
        const y = 12 + dip
        const cols = ['#f9a8d4', '#bae6fd', '#fde68a', '#bbf7d0']
        return (
          <path
            key={i}
            d={`M${x - 12} ${y} L${x + 12} ${y} L${x} ${y + 26} Z`}
            fill={cols[i % cols.length]}
            fillOpacity="0.85"
          />
        )
      })}
    </svg>
  )
}

/**
 * Cute pastel baby shower invitation — sky-blue & pink, clouds, twinkling
 * stars, a rattle and tiny baby feet. Soft, playful and rounded.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function CuteBabyShower({ values }) {
  const { t } = useI18n()
  const mother = values.motherName?.trim() || 'Priya Sharma'
  const date = formatDate(values.date, 'Date to be announced')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-sky-100 font-party text-slate-600"
    >
      {/* soft sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-pink-50 to-rose-100" />
      {/* dreamy glow pools */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_45%_at_28%_22%,rgba(186,230,253,0.6),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_45%_at_75%_82%,rgba(251,207,232,0.55),transparent_60%)]" />

      {/* bunting across the top */}
      <Bunting className="absolute inset-x-0 top-4 h-16" />

      {/* scattered clouds */}
      <Cloud className="absolute left-4 top-24 h-16 w-32 text-white/85" />
      <Cloud className="absolute right-2 top-48 h-12 w-24 text-white/75" />
      <Cloud className="absolute -left-4 bottom-32 h-14 w-28 text-white/75" />
      <Cloud className="absolute bottom-20 right-6 h-12 w-24 text-white/85" />

      {/* twinkling stars + sparkles */}
      <Star className="absolute left-14 top-52 h-5 w-5 text-pink-300" />
      <Star className="absolute right-16 top-28 h-6 w-6 text-sky-300" />
      <Sparkle className="absolute left-24 top-80 h-4 w-4 text-amber-300" />
      <Star className="absolute right-24 top-72 h-5 w-5 text-pink-300" />
      <Sparkle className="absolute right-10 bottom-48 h-5 w-5 text-sky-300" />
      <Sparkle className="absolute left-10 bottom-56 h-3.5 w-3.5 text-rose-300" />

      {/* Content card */}
      <div className="relative flex h-full flex-col items-center justify-between px-12 pb-14 pt-[88px] text-center">
        <header className="flex flex-col items-center">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-white/85 shadow-soft ring-4 ring-white">
            <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-gradient-to-br from-sky-100 to-pink-100">
              <Rattle className="h-12 w-12 text-sky-400" />
            </div>
          </div>
          <p className="mt-5 text-[13px] uppercase tracking-[0.45em] text-pink-400">
            {t('template.common.babyShower', 'Baby Shower')}
          </p>
        </header>

        <main className="flex w-full flex-col items-center">
          <h1 className="font-display text-[64px] font-semibold leading-[0.92] drop-shadow-[0_3px_6px_rgba(244,114,182,0.18)]">
            <span
              data-pdf-color="#38bdf8"
              className="bg-gradient-to-r from-sky-400 via-pink-300 to-rose-400 bg-clip-text text-transparent"
            >
              Oh Baby!
            </span>
          </h1>
          <p className="mt-5 text-[15px] text-slate-500">
            {t('template.common.helpUsCelebrate', 'Help us shower with love')}
          </p>
          <div className="mt-5 rounded-[28px] border-2 border-dashed border-pink-200 bg-white/75 px-10 py-5 shadow-[0_8px_24px_-12px_rgba(244,114,182,0.4)] backdrop-blur-sm">
            <p className="text-[12px] uppercase tracking-[0.3em] text-sky-400">{t('template.common.motherToBe', 'Mother to be')}</p>
            <p className="mt-1 font-display text-[36px] leading-tight text-slate-700">{mother}</p>
          </div>
          <BabyFeet className="mt-7 h-12 w-20 text-pink-300/80" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-stretch gap-3">
            <div className="flex-1 rounded-[20px] bg-gradient-to-br from-sky-200/80 to-sky-100/60 px-4 py-3.5 shadow-[0_6px_16px_-10px_rgba(56,189,248,0.6)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-sky-600">{t('template.common.when', 'When')}</p>
              <p className="mt-1 text-[15px] font-semibold text-slate-700">{date}</p>
            </div>
            <div className="flex-1 rounded-[20px] bg-gradient-to-br from-pink-200/80 to-rose-100/60 px-4 py-3.5 shadow-[0_6px_16px_-10px_rgba(244,114,182,0.6)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-pink-600">{t('template.common.where', 'Where')}</p>
              <p className="mt-1 text-[14px] font-semibold leading-snug text-slate-700">{venue}</p>
            </div>
          </div>
          <p className="text-[14px] text-slate-500">
            {t('template.common.hostedBy', 'Hosted with love by')}{' '}
            <span className="font-display text-lg text-slate-700">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
