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

      {/* scattered clouds */}
      <Cloud className="absolute left-6 top-16 h-16 w-32 text-white/80" />
      <Cloud className="absolute right-4 top-40 h-12 w-24 text-white/70" />
      <Cloud className="absolute -left-4 bottom-32 h-14 w-28 text-white/70" />
      <Cloud className="absolute bottom-20 right-8 h-12 w-24 text-white/80" />

      {/* twinkling stars */}
      <Star className="absolute left-16 top-44 h-5 w-5 text-pink-300" />
      <Star className="absolute right-16 top-24 h-6 w-6 text-sky-300" />
      <Star className="absolute left-24 top-72 h-4 w-4 text-amber-300" />
      <Star className="absolute right-24 top-64 h-5 w-5 text-pink-300" />
      <Star className="absolute right-12 bottom-44 h-4 w-4 text-sky-300" />

      {/* Content card */}
      <div className="relative flex h-full flex-col items-center justify-between px-12 pb-14 pt-16 text-center">
        <header className="flex flex-col items-center">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-white/80 shadow-soft ring-4 ring-white">
            <Rattle className="h-14 w-14 text-sky-400" />
          </div>
          <p className="mt-5 text-[13px] uppercase tracking-[0.45em] text-pink-400">
            {t('template.common.babyShower', 'Baby Shower')}
          </p>
        </header>

        <main className="flex w-full flex-col items-center">
          <h1 className="font-display text-[60px] font-semibold leading-[0.95]">
            <span
              data-pdf-color="#38bdf8"
              className="bg-gradient-to-r from-sky-400 via-pink-300 to-rose-400 bg-clip-text text-transparent"
            >
              Oh Baby!
            </span>
          </h1>
          <p className="mt-6 text-[15px] text-slate-500">
            {t('template.common.helpUsCelebrate', 'Help us shower with love')}
          </p>
          <div className="mt-4 rounded-3xl border-2 border-dashed border-pink-200 bg-white/70 px-10 py-5">
            <p className="text-[12px] uppercase tracking-[0.3em] text-sky-400">{t('template.common.motherToBe', 'Mother to be')}</p>
            <p className="mt-1 font-display text-[34px] leading-tight text-slate-700">{mother}</p>
          </div>
          <BabyFeet className="mt-6 h-12 w-20 text-pink-300/80" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-stretch gap-3">
            <div className="flex-1 rounded-2xl bg-sky-200/60 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-sky-600">{t('template.common.when', 'When')}</p>
              <p className="mt-1 text-[15px] font-semibold text-slate-700">{date}</p>
            </div>
            <div className="flex-1 rounded-2xl bg-pink-200/60 px-4 py-3">
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
