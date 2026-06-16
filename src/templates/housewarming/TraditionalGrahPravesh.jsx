'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Traditional ornaments (saffron & maroon) ──────────────────────────── */

function Swastik({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="22" strokeWidth="1" opacity="0.4" />
      <path d="M24 6v36M6 24h36" />
      <path d="M24 6h10M42 24v10M24 42H14M6 24V14" />
      <circle cx="13" cy="13" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="35" cy="13" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="35" cy="35" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="35" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="20" rx="12" ry="14" fill="currentColor" fillOpacity="0.22" />
      <path d="M40 7c2 4 2 7 0 11M40 7c-2 4-2 7 0 11" opacity="0.55" strokeWidth="1.4" />
      {/* mango leaves */}
      <path d="M40 34c-10 0-18-3-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 6-14 9-24 9Z" fill="currentColor" fillOpacity="0.26" />
      <path d="M28 28c4 3 8 5 12 6M52 28c-4 3-8 5-12 6" opacity="0.5" strokeWidth="1.2" />
      {/* pot */}
      <path d="M28 38h24l-3 8c10 5 16 14 16 26 0 14-12 24-25 24S15 92 15 78c0-12 6-21 16-26l-3-14Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M22 60h36" />
      <path d="M26 72h28" opacity="0.7" />
      {/* tilak band */}
      <path d="M30 50h20" strokeWidth="3" opacity="0.85" />
      <circle cx="40" cy="84" r="3.4" fill="currentColor" stroke="none" opacity="0.5" />
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
      <circle cx="32" cy="28" r="13" fill="currentColor" fillOpacity="0.14" />
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
  // marigold + mango-leaf festoon
  return (
    <svg viewBox="0 0 640 56" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 6q160 18 320 0t320 0" opacity="0.7" />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 16 + i * 30.4
        const dip = Math.sin((i / 20) * Math.PI) * 12
        const top = 6 + dip
        const leaf = i % 2 === 0
        return (
          <g key={i}>
            {leaf ? (
              <path d={`M${x} ${top}c-6 9-6 22 0 30c6-8 6-21 0-30Z`} fill="currentColor" fillOpacity="0.22" />
            ) : (
              <g>
                <circle cx={x} cy={top + 14} r="5.4" fill="currentColor" fillOpacity="0.3" stroke="none" />
                <circle cx={x} cy={top + 14} r="5.4" strokeWidth="0.8" opacity="0.5" />
              </g>
            )}
            <circle cx={x} cy={top + 34} r="2.6" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

function CornerLotus({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M4 4c0 16 11 30 26 32M4 4c16 0 30 11 32 26" opacity="0.55" />
      <path d="M4 4c10 4 18 12 22 22 4-4 6-9 6-14" fill="currentColor" fillOpacity="0.14" />
      <path d="M4 16c8 2 14 8 16 16M16 4c2 8 8 14 16 16" opacity="0.7" />
      <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,211,77,0.32),_transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(120,12,18,0.55),_transparent_60%)]" />

      {/* maroon pallu bands with gold piping */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-r from-[#5c0f12] via-[#a0331c] to-[#5c0f12]" />
      <div className="absolute inset-x-0 top-6 h-px bg-amber-300/60" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-r from-[#5c0f12] via-[#a0331c] to-[#5c0f12]" />
      <div className="absolute inset-x-0 bottom-6 h-px bg-amber-300/60" />

      {/* toran hanging under the top band */}
      <Toran className="absolute inset-x-0 top-[26px] h-14 text-amber-300" />

      {/* double gold frame */}
      <div className="absolute inset-x-6 inset-y-[64px] rounded-sm border-2 border-amber-300/80" />
      <div className="absolute inset-x-[34px] inset-y-[74px] rounded-sm border border-amber-200/35" />

      {/* corner lotus flourishes */}
      <CornerLotus className="absolute left-[38px] top-[78px] h-9 w-9 text-amber-300/70" />
      <CornerLotus className="absolute right-[38px] top-[78px] h-9 w-9 text-amber-300/70 [transform:scaleX(-1)]" />
      <CornerLotus className="absolute bottom-[78px] left-[38px] h-9 w-9 text-amber-300/70 [transform:scaleY(-1)]" />
      <CornerLotus className="absolute bottom-[78px] right-[38px] h-9 w-9 text-amber-300/70 [transform:scale(-1)]" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-[100px] text-center">
        <header className="flex flex-col items-center">
          <GaneshaIcon className="h-16 w-16 text-amber-200 drop-shadow-[0_2px_8px_rgba(252,211,77,0.35)]" />
          <p className="mt-2 text-3xl leading-none text-amber-200">श्री गणेशाय नमः</p>
          <div className="mt-4 flex items-center gap-3 text-amber-300/70">
            <span className="h-px w-8 bg-amber-300/50" />
            <Swastik className="h-4 w-4" />
            <span className="h-px w-8 bg-amber-300/50" />
          </div>
          <h1 className="mt-4 font-display text-[44px] leading-none tracking-wide">
            <span
              data-pdf-color="#fcd34d"
              className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(92,15,18,0.5)]"
            >
              ॥ गृहप्रवेश ॥
            </span>
          </h1>
          <p className="mt-3 text-[12px] uppercase tracking-[0.5em] text-amber-200/80">Housewarming</p>
        </header>

        <main className="flex flex-col items-center">
          <Kalash className="h-[88px] w-[68px] text-amber-200 drop-shadow-[0_3px_10px_rgba(252,211,77,0.3)]" />
          <p className="mt-5 text-[13px] uppercase tracking-[0.4em] text-amber-200/90">
            With the blessings of the Almighty
          </p>
          <p className="mt-4 max-w-[24rem] text-[15px] leading-relaxed text-amber-50/90">
            We warmly invite you to grace our new home with your presence and shower it with your blessings.
          </p>
          <div className="mt-6 flex items-center gap-3 text-amber-300/80">
            <span className="h-px w-10 bg-amber-300/50" />
            <span className="text-amber-300">✦</span>
            <span className="h-px w-10 bg-amber-300/50" />
          </div>
          <h2 className="mt-5 font-display text-[42px] font-semibold leading-tight text-amber-50">{family}</h2>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-amber-300/50 bg-[#5c0f12]/45 px-9 py-3.5 shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
            <p className="text-[11px] uppercase tracking-[0.42em] text-amber-300">Save the Date</p>
            <p className="mt-1.5 font-display text-2xl text-amber-50">
              {date}
              {time && <span className="text-amber-200"> · {time}</span>}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.4em] text-amber-300/85">Venue</p>
            <p className="max-w-[24rem] text-[16px] leading-snug text-amber-50">{address}</p>
          </div>
          <div className="mt-1 flex items-center gap-2.5 text-[13px] italic text-amber-200/85">
            <span className="text-amber-300 not-italic">卐</span>
            शुभ लाभ · Subham Astu
            <span className="text-amber-300 not-italic">卐</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
