'use client'

import { formatDate } from '@/utils/format'

/* ── Soft romantic ornaments ─────────────────────────────────────────────── */

function Heart({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.9-10-9.5C0.4 8 1.9 4.5 5 4.1c2.2-.3 3.8 1 4.9 2.4C11 5.1 12.6 3.8 14.8 4.1c3.1.4 4.6 3.9 3 7.4C19.5 16.1 12 21 12 21Z" />
    </svg>
  )
}

function Floral({ className = '' }) {
  // soft five-petal blossom sprig
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M60 118c0-30 0-50 0-66" />
      <path d="M60 70c-14-4-24-16-26-30 14 2 24 12 26 26" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 70c14-4 24-16 26-30-14 2-24 12-26 26" fill="currentColor" fillOpacity="0.12" />
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="60"
          cy="22"
          rx="9"
          ry="16"
          fill="currentColor"
          fillOpacity="0.22"
          transform={`rotate(${a} 60 38)`}
        />
      ))}
      <circle cx="60" cy="38" r="6" fill="currentColor" fillOpacity="0.5" stroke="none" />
    </svg>
  )
}

/**
 * Romantic anniversary card — blush rose & cream, intertwined hearts,
 * soft florals and a flowing script name.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function RomanticAnniversary({ values }) {
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const years = values.years?.trim() || '25'
  const date = formatDate(values.date, '10 December 2026')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fdf2f4] font-serif text-rose-900"
    >
      {/* Soft blush wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f7] via-[#fde8ec] to-[#f8d7dd]" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose-200/40 blur-2xl" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-pink-200/40 blur-2xl" />

      {/* Corner florals */}
      <Floral className="absolute -left-2 -top-3 h-40 w-40 rotate-[20deg] text-rose-400/70" />
      <Floral className="absolute -bottom-4 -right-3 h-40 w-40 rotate-[200deg] text-pink-400/70" />

      {/* Delicate frame */}
      <div className="absolute inset-x-8 inset-y-9 rounded-[2rem] border border-rose-300/70" />
      <div className="absolute inset-x-[42px] inset-y-[46px] rounded-[1.6rem] border border-rose-200/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-20 text-center">
        <header className="flex flex-col items-center">
          {/* Intertwined hearts */}
          <div className="relative h-16 w-24 text-rose-400">
            <Heart className="absolute left-0 top-1 h-12 w-12 -rotate-12 text-rose-300" />
            <Heart className="absolute right-0 top-1 h-12 w-12 rotate-12 text-pink-400" />
            <Heart className="absolute left-1/2 top-3 h-10 w-10 -translate-x-1/2 text-rose-500/90" />
          </div>
          <p className="mt-4 text-[12px] uppercase tracking-[0.45em] text-rose-400">
            Happy Anniversary
          </p>
          <div className="mt-3 h-px w-24 bg-rose-300" />
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-script text-[64px] leading-[1.05] text-rose-600">
            <span
              data-pdf-color="#e11d8f"
              className="bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>

          <div className="mt-8 flex flex-col items-center">
            <span className="font-display text-[96px] font-semibold leading-none text-rose-500">
              {years}
            </span>
            <p className="mt-1 text-[15px] uppercase tracking-[0.4em] text-rose-400">
              Years Together
            </p>
          </div>

          <div className="mt-7 flex items-center gap-3 text-rose-300">
            <span className="h-px w-10 bg-rose-300" />
            <Heart className="h-4 w-4 text-rose-400" />
            <span className="h-px w-10 bg-rose-300" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-2xl border border-rose-300/70 bg-white/50 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.38em] text-rose-400">Celebrating</p>
            <p className="mt-1 font-display text-2xl text-rose-700">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-rose-400">Venue</p>
            <p className="max-w-[20rem] text-[16px] leading-snug text-rose-700">{venue}</p>
          </div>
          <p className="mt-1 font-script text-2xl text-rose-500">with love, always</p>
        </footer>
      </div>
    </div>
  )
}
