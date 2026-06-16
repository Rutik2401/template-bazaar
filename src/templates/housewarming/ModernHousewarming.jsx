'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Clean line-art house + key ────────────────────────────────────────── */

function HouseKey({ className = '' }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* roof */}
      <path d="M18 44 48 20l30 24" />
      {/* walls */}
      <path d="M26 42v34h44V42" />
      {/* door */}
      <path d="M42 76V56h12v20" />
      {/* keyhole on the door */}
      <circle cx="48" cy="62" r="2" />
      <path d="M48 64v4" />
      {/* little chimney */}
      <path d="M62 30v-6h6v11" />
    </svg>
  )
}

function KeyIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="12" r="7" />
      <circle cx="10" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M17 12h26M37 12v6M43 12v5" />
    </svg>
  )
}

/**
 * Modern Housewarming invitation — teal & gold, minimalist line-art house.
 * Natural size 640 × 900 (portrait card).
 */
export default function ModernHousewarming({ values }) {
  useI18n()
  const family = values.familyName?.trim() || 'The Sharma Family'
  const date = formatDate(values.date, '12 July 2026')
  const time = formatTime(values.time, '')
  const address = values.address?.trim() || 'B-204, Green Acres, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0c3b3a] font-sans text-teal-50"
    >
      {/* deep teal ground */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f4744] via-[#0c3b3a] to-[#072523]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,_rgba(212,175,84,0.18),_transparent_55%)]" />

      {/* thin gold frame */}
      <div className="absolute inset-8 rounded-2xl border border-amber-300/45" />

      {/* faint oversized house watermark */}
      <HouseKey className="absolute -right-6 bottom-10 h-72 w-72 text-amber-300/8" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center px-16 py-20 text-center">
        {/* badge */}
        <div className="grid h-24 w-24 place-items-center rounded-2xl border border-amber-300/50 bg-white/5 backdrop-blur-sm">
          <HouseKey className="h-14 w-14 text-amber-300" />
        </div>

        <p className="mt-9 text-[12px] font-semibold uppercase tracking-[0.55em] text-amber-200/90">
          We've Moved
        </p>

        <h1 className="mt-5 font-display text-[56px] font-bold leading-[0.98] tracking-tight">
          <span
            data-pdf-color="#d4af54"
            className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent"
          >
            Housewarming
          </span>
        </h1>

        <div className="mt-7 flex items-center gap-3 text-amber-300">
          <span className="h-px w-12 bg-amber-300/50" />
          <KeyIcon className="h-5 w-12" />
          <span className="h-px w-12 bg-amber-300/50" />
        </div>

        <p className="mt-9 text-[13px] uppercase tracking-[0.4em] text-teal-100/70">You're invited by</p>
        <h2 className="mt-3 font-display text-[40px] font-semibold leading-tight text-teal-50">{family}</h2>
        <p className="mt-4 max-w-[24rem] text-[15px] leading-relaxed text-teal-100/80">
          Join us to celebrate our new home over warmth, laughter and good food.
        </p>

        {/* details */}
        <div className="mt-auto w-full rounded-2xl border border-amber-300/35 bg-white/5 px-8 py-7 backdrop-blur-sm">
          <div className="flex items-stretch justify-between gap-4 text-left">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">Date</p>
              <p className="mt-1 font-display text-[21px] font-semibold text-teal-50">{date}</p>
            </div>
            {time && (
              <>
                <span className="w-px self-stretch bg-amber-300/25" />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">Time</p>
                  <p className="mt-1 font-display text-[21px] font-semibold text-teal-50">{time}</p>
                </div>
              </>
            )}
          </div>
          <div className="mt-5 border-t border-amber-300/20 pt-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">Address</p>
            <p className="mt-1 text-[16px] font-medium text-teal-50">{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
