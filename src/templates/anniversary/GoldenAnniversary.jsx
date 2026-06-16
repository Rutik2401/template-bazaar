'use client'

import { formatDate } from '@/utils/format'

/* ── Ornate gold flourishes ──────────────────────────────────────────────── */

function CornerScroll({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6h44" />
      <path d="M6 6v44" />
      <path d="M6 28c22 0 40 18 40 40" />
      <path d="M28 6c0 22 18 40 40 40" opacity="0.7" />
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
      <path d="M46 60c8 0 14-6 14-14" opacity="0.6" />
    </svg>
  )
}

function Flourish({ className = '' }) {
  // central symmetric divider flourish
  return (
    <svg viewBox="0 0 220 30" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M0 15h70" />
      <path d="M150 15h70" />
      <path d="M70 15c10 0 14-9 22-9s10 18 18 18 10-18 18-18 12 9 22 9" />
      <circle cx="110" cy="15" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Golden anniversary celebration — luxe gold on deep maroon, an ornate
 * gold frame, a grand numeral and a celebratory, regal feel.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function GoldenAnniversary({ values }) {
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const years = values.years?.trim() || '50'
  const date = formatDate(values.date, '10 December 2026')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#3d0a14] font-display text-gold-100"
    >
      {/* Deep maroon silk base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#511019] via-[#3d0a14] to-[#2a060d]" />
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.16),transparent_62%)]" />

      {/* Ornate gold frame */}
      <div className="absolute inset-x-5 inset-y-5 rounded-md border-[3px] border-gold-400/80" />
      <div className="absolute inset-x-[30px] inset-y-[30px] rounded-sm border border-gold-300/50" />

      {/* Corner scrolls */}
      <CornerScroll className="absolute left-6 top-6 h-16 w-16 text-gold-300" />
      <CornerScroll className="absolute right-6 top-6 h-16 w-16 -scale-x-100 text-gold-300" />
      <CornerScroll className="absolute left-6 bottom-6 h-16 w-16 -scale-y-100 text-gold-300" />
      <CornerScroll className="absolute right-6 bottom-6 h-16 w-16 -scale-x-100 -scale-y-100 text-gold-300" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-20 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.48em] text-gold-300">Golden Anniversary</p>
          <Flourish className="mt-4 h-6 w-48 text-gold-300/80" />
        </header>

        <main className="flex flex-col items-center">
          {/* Grand golden numeral inside a ring */}
          <div className="relative grid h-64 w-64 place-items-center">
            <div className="absolute inset-0 rounded-full border-2 border-gold-400/70" />
            <div className="absolute inset-3 rounded-full border border-gold-300/40" />
            <span
              data-pdf-color="#f0c64e"
              className="bg-gradient-to-b from-gold-200 via-gold-300 to-gold-500 bg-clip-text font-display text-[170px] font-semibold leading-[0.8] text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            >
              {years}
            </span>
            <p className="absolute bottom-7 text-[13px] uppercase tracking-[0.36em] text-gold-200">
              Golden Years
            </p>
          </div>

          <h1 className="mt-9 font-script text-[58px] leading-[1.05]">
            <span
              data-pdf-color="#f0c64e"
              className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <p className="mt-2 text-[14px] uppercase tracking-[0.4em] text-gold-300/80">
            50 Years Together
          </p>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-gold-400/60 bg-[#6b0f1c]/40 px-9 py-3">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-300">Join Us On</p>
            <p className="mt-1 text-2xl text-gold-100">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-gold-300/80">Venue</p>
            <p className="max-w-[20rem] font-serif text-[16px] leading-snug text-gold-100">{venue}</p>
          </div>
          <Flourish className="h-5 w-40 text-gold-300/70" />
        </footer>
      </div>
    </div>
  )
}
