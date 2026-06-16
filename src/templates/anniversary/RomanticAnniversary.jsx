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

function InterlockedHearts({ className = '' }) {
  // two outlined hearts woven together — the emblem of the card
  return (
    <svg viewBox="0 0 140 96" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M56 90C56 90 16 66 8 42 3 27 12 14 25 14c9 0 15 6 18 12 3-6 9-12 18-12 13 0 22 13 17 28-8 24-40 48-40 48Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M84 90C84 90 124 66 132 42 137 27 128 14 115 14c-9 0-15 6-18 12-3-6-9-12-18-12-13 0-22 13-17 28 8 24 40 48 40 48Z"
        fill="currentColor"
        fillOpacity="0.05"
        opacity="0.85"
      />
      <circle cx="70" cy="46" r="2.6" fill="currentColor" stroke="none" />
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

function FlourishRule({ className = '' }) {
  // delicate scrolling divider with a centre heart
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M14 12c26 0 36 0 50 0M14 12c8 0 12-5 12-5M70 12c-6 0-9 6-15 6s-9-6-15-6" opacity="0.85" />
      <path d="M226 12c-26 0-36 0-50 0M226 12c-8 0-12-5-12-5M170 12c6 0 9 6 15 6s9-6 15-6" opacity="0.85" />
      <path d="M120 6c2.4 0 3.6 2 3.6 4 0 3-3.6 6-3.6 6s-3.6-3-3.6-6c0-2 1.2-4 3.6-4Z" fill="currentColor" fillOpacity="0.55" stroke="none" />
      <circle cx="100" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="140" cy="12" r="2.2" fill="currentColor" stroke="none" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff6f8] via-[#fde9ed] to-[#f6d2da]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,0.6),transparent_60%)]" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose-200/40 blur-2xl" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-pink-200/40 blur-2xl" />
      <div className="absolute left-1/2 top-[44%] h-64 w-64 -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl" />

      {/* Corner florals */}
      <Floral className="absolute -left-3 -top-4 h-44 w-44 rotate-[20deg] text-rose-400/70" />
      <Floral className="absolute -right-4 -top-5 h-32 w-32 rotate-[150deg] text-pink-300/55" />
      <Floral className="absolute -left-5 bottom-2 h-32 w-32 rotate-[40deg] text-pink-300/55" />
      <Floral className="absolute -bottom-5 -right-3 h-44 w-44 rotate-[200deg] text-pink-400/70" />

      {/* Delicate frame */}
      <div className="absolute inset-x-8 inset-y-9 rounded-[2rem] border border-rose-300/70" />
      <div className="absolute inset-x-[42px] inset-y-[46px] rounded-[1.6rem] border border-rose-200/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-[68px] text-center">
        <header className="flex flex-col items-center">
          {/* Intertwined hearts emblem */}
          <InterlockedHearts className="h-[72px] w-[104px] text-rose-400/90" />
          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.5em] text-rose-400">
            Happy Anniversary
          </p>
          <FlourishRule className="mt-4 h-5 w-44 text-rose-300" />
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-script text-[68px] leading-[1.02] text-rose-600 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
            <span
              data-pdf-color="#e11d8f"
              className="bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>

          <div className="mt-9 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute h-[140px] w-[140px] rounded-full bg-rose-200/40 blur-xl" />
              <span
                data-pdf-color="#e35d8a"
                className="bg-gradient-to-b from-rose-300 via-rose-500 to-pink-600 bg-clip-text font-display text-[112px] font-semibold leading-none text-transparent drop-shadow-[0_2px_4px_rgba(225,29,143,0.15)]"
              >
                {years}
              </span>
            </div>
            <p className="mt-2 text-[14px] font-medium uppercase tracking-[0.46em] text-rose-400">
              Years Together
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 text-rose-300">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="h-4 w-4 text-rose-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-2xl border border-rose-300/70 bg-white/55 px-9 py-3.5 shadow-[0_8px_24px_-12px_rgba(225,29,143,0.35)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-rose-400">Celebrating</p>
            <p className="mt-1 font-display text-2xl tracking-wide text-rose-700">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-rose-400">Venue</p>
            <p className="max-w-[20rem] text-[16px] leading-snug text-rose-700">{venue}</p>
          </div>
          <p className="mt-1 font-script text-[28px] leading-none text-rose-500">with love, always</p>
        </footer>
      </div>
    </div>
  )
}
