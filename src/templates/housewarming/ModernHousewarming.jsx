'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Clean line-art house + key ────────────────────────────────────────── */

function HouseKey({ className = '' }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* roof */}
      <path d="M18 44 48 20l30 24" />
      {/* eave accent */}
      <path d="M48 20 48 14" opacity="0.7" />
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

function CornerArc({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M4 44V20a16 16 0 0 1 16-16h24" opacity="0.6" />
      <circle cx="4" cy="44" r="2.4" fill="currentColor" stroke="none" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#114e4b] via-[#0c3b3a] to-[#062120]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,_rgba(212,175,84,0.22),_transparent_56%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(212,175,84,0.1),_transparent_45%)]" />

      {/* thin gold frame + corner flourishes */}
      <div className="absolute inset-8 rounded-2xl border border-amber-300/45" />
      <div className="absolute inset-[38px] rounded-xl border border-amber-300/15" />
      <CornerArc className="absolute left-9 top-9 h-9 w-9 text-amber-300/60" />
      <CornerArc className="absolute right-9 top-9 h-9 w-9 text-amber-300/60 [transform:scaleX(-1)]" />
      <CornerArc className="absolute bottom-9 left-9 h-9 w-9 text-amber-300/60 [transform:scaleY(-1)]" />
      <CornerArc className="absolute bottom-9 right-9 h-9 w-9 text-amber-300/60 [transform:scale(-1)]" />

      {/* faint oversized house watermark */}
      <HouseKey className="absolute -right-8 bottom-8 h-72 w-72 text-amber-300/[0.07]" />

      {/* content */}
      <div className="relative flex h-full flex-col items-center px-16 py-[76px] text-center">
        {/* badge */}
        <div className="grid h-24 w-24 place-items-center rounded-2xl border border-amber-300/50 bg-gradient-to-br from-white/10 to-white/0 shadow-[0_8px_30px_rgba(212,175,84,0.18)] backdrop-blur-sm">
          <HouseKey className="h-14 w-14 text-amber-300" />
        </div>

        <p className="mt-9 text-[12px] font-semibold uppercase tracking-[0.58em] text-amber-200/90">
          We've Moved
        </p>

        <h1 className="mt-5 font-display text-[58px] font-bold leading-[0.98] tracking-tight">
          <span
            data-pdf-color="#d4af54"
            className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,84,0.25)]"
          >
            Housewarming
          </span>
        </h1>

        <div className="mt-7 flex items-center gap-3 text-amber-300">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-amber-300/60" />
          <KeyIcon className="h-5 w-12" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-amber-300/60" />
        </div>

        <p className="mt-9 text-[13px] uppercase tracking-[0.42em] text-teal-100/70">You're invited by</p>
        <h2 className="mt-3 font-display text-[42px] font-semibold leading-tight text-teal-50">{family}</h2>
        <p className="mt-4 max-w-[24rem] text-[15px] leading-relaxed text-teal-100/80">
          Join us to celebrate our new home over warmth, laughter and good food.
        </p>

        {/* details */}
        <div className="mt-auto w-full rounded-2xl border border-amber-300/35 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-8 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <div className="flex items-stretch justify-between gap-4 text-left">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">Date</p>
              <p className="mt-1 font-display text-[21px] font-semibold text-teal-50">{date}</p>
            </div>
            {time && (
              <>
                <span className="w-px self-stretch bg-amber-300/25" />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">Time</p>
                  <p className="mt-1 font-display text-[21px] font-semibold text-teal-50">{time}</p>
                </div>
              </>
            )}
          </div>
          <div className="mt-5 border-t border-amber-300/20 pt-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">Address</p>
            <p className="mt-1 text-[16px] font-medium text-teal-50">{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
