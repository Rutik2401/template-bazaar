'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Traditional ornaments (saffron & maroon) ──────────────────────────── */

function Swastik({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6v36M6 24h36" />
      <path d="M24 6h10M42 24v10M24 42H14M6 24V14" />
      <circle cx="13" cy="13" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="35" cy="13" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="35" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="13" cy="35" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="20" rx="12" ry="14" fill="currentColor" fillOpacity="0.22" />
      {/* mango leaves */}
      <path d="M40 34c-10 0-18-3-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 6-14 9-24 9Z" fill="currentColor" fillOpacity="0.26" />
      {/* pot */}
      <path d="M28 38h24l-3 8c10 5 16 14 16 26 0 14-12 24-25 24S15 92 15 78c0-12 6-21 16-26l-3-14Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M22 60h36" />
      <path d="M26 72h28" opacity="0.7" />
      {/* tilak band */}
      <path d="M30 50h20" strokeWidth="3" opacity="0.85" />
    </svg>
  )
}

function GaneshaIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* crown */}
      <path d="M22 16c0-5 4-9 10-9s10 4 10 9" />
      <path d="M32 3v5M26 5l1.5 4M38 5l-1.5 4" />
      {/* head */}
      <circle cx="32" cy="28" r="13" fill="currentColor" fillOpacity="0.12" />
      {/* big ears */}
      <path d="M19 24c-6 0-9 5-9 10s4 9 9 8" fill="currentColor" fillOpacity="0.1" />
      <path d="M45 24c6 0 9 5 9 10s-4 9-9 8" fill="currentColor" fillOpacity="0.1" />
      {/* trunk */}
      <path d="M32 30c0 8-2 14-2 20 0 5 6 6 8 2" />
      {/* eyes */}
      <circle cx="27" cy="26" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="37" cy="26" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Toran({ className = '' }) {
  return (
    <svg viewBox="0 0 640 50" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 5h640" opacity="0.7" />
      {Array.from({ length: 16 }).map((_, i) => {
        const x = 20 + i * 40
        return (
          <g key={i}>
            <path d={`M${x} 5c-7 9-7 24 0 33c7-9 7-24 0-33Z`} fill="currentColor" fillOpacity="0.2" />
            <circle cx={x} cy="44" r="3.4" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Traditional Grah Pravesh invitation — saffron & maroon, kalash, swastik,
 * toran and a Devanagari header. Natural size 640 × 900 (portrait card).
 */
export default function TraditionalGrahPravesh({ values }) {
  useI18n()
  const family = values.familyName?.trim() || 'The Sharma Family'
  const date = formatDate(values.date, '12 July 2026')
  const time = formatTime(values.time, '')
  const address = values.address?.trim() || 'B-204, Green Acres, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#7a1418] font-serif text-amber-50"
    >
      {/* warm saffron → maroon ground */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b3471c] via-[#8a1e1d] to-[#5c0f12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.28),_transparent_60%)]" />

      {/* maroon pallu bands */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-r from-[#5c0f12] via-[#a0331c] to-[#5c0f12]" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-r from-[#5c0f12] via-[#a0331c] to-[#5c0f12]" />

      {/* toran hanging under the top band */}
      <Toran className="absolute inset-x-0 top-6 h-12 text-amber-300" />

      {/* double gold frame */}
      <div className="absolute inset-x-6 inset-y-[64px] rounded-sm border-2 border-amber-300/80" />
      <div className="absolute inset-x-[34px] inset-y-[74px] rounded-sm border border-amber-200/35" />

      {/* corner swastiks */}
      <Swastik className="absolute left-9 top-[84px] h-7 w-7 text-amber-300/80" />
      <Swastik className="absolute right-9 top-[84px] h-7 w-7 text-amber-300/80" />
      <Swastik className="absolute bottom-[84px] left-9 h-7 w-7 text-amber-300/80" />
      <Swastik className="absolute bottom-[84px] right-9 h-7 w-7 text-amber-300/80" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-24 text-center">
        <header className="flex flex-col items-center">
          <GaneshaIcon className="h-16 w-16 text-amber-200" />
          <p className="mt-2 text-3xl leading-none text-amber-200">श्री गणेशाय नमः</p>
          <h1 className="mt-5 font-display text-[40px] leading-none tracking-wide">
            <span
              data-pdf-color="#fcd34d"
              className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent"
            >
              ॥ गृहप्रवेश ॥
            </span>
          </h1>
          <p className="mt-2 text-[12px] uppercase tracking-[0.45em] text-amber-200/80">Housewarming</p>
          <div className="mt-3 h-px w-28 bg-amber-300/60" />
        </header>

        <main className="flex flex-col items-center">
          <Kalash className="h-20 w-16 text-amber-200" />
          <p className="mt-4 text-[13px] uppercase tracking-[0.35em] text-amber-200/85">
            With the blessings of the Almighty
          </p>
          <p className="mt-3 max-w-[24rem] text-[15px] leading-relaxed text-amber-50/90">
            We warmly invite you to grace our new home with your presence and shower it with your blessings.
          </p>
          <h2 className="mt-6 font-display text-[40px] font-semibold leading-tight text-amber-50">{family}</h2>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-amber-300/50 bg-[#5c0f12]/40 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.38em] text-amber-300">Save the Date</p>
            <p className="mt-1 font-display text-2xl text-amber-50">
              {date}
              {time && ` · ${time}`}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-amber-300/85">Venue</p>
            <p className="max-w-[24rem] text-[16px] leading-snug text-amber-50">{address}</p>
          </div>
          <p className="mt-1 text-[13px] italic text-amber-200/80">शुभ लाभ · Subham Astu</p>
        </footer>
      </div>
    </div>
  )
}
