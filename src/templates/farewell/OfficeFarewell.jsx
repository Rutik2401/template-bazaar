'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

function Laurel({ className = '', color = '#d4af37' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
      <path d="M60 110C36 102 26 80 26 58c0-18 8-34 18-44" />
      <path d="M60 110C84 102 94 80 94 58c0-18-8-34-18-44" />
      {[20, 36, 52, 68, 84].map((y, i) => (
        <g key={`l${i}`}>
          <path d={`M${30 + i} ${y}c-8-3-13-1-16 4 6 3 12 2 16-4Z`} fill={color} stroke="none" />
          <path d={`M${90 - i} ${y}c8-3 13-1 16 4-6 3-12 2-16-4Z`} fill={color} stroke="none" />
        </g>
      ))}
      <circle cx="60" cy="16" r="3" fill={color} stroke="none" />
    </svg>
  )
}

function Monogram({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <defs>
        <linearGradient id="of-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d98b" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9a7b1e" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="34" stroke="url(#of-ring)" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="27" stroke="#d4af37" strokeOpacity="0.4" strokeWidth="1" />
      {/* simple goblet / star motif */}
      <path d="M40 24l3.2 7.8L52 32.5l-6 6.2L47.4 48 40 43.6 32.6 48 34 38.7l-6-6.2 8.8-.7L40 24Z" fill="url(#of-ring)" />
    </svg>
  )
}

/**
 * Professional, corporate-elegant office farewell — deep navy with refined
 * gold accents, a laurel motif and a tasteful "Goodbye & Good Luck".
 * Natural design size: 640 × 900.
 */
export default function OfficeFarewell({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Farewell 2026'
  const date = formatDate(values.date, '25 April 2026')
  const time = formatTime(values.time, '6:30 PM')
  const venue = values.venue?.trim() || 'Conference Hall'
  const organizerName = values.organizerName?.trim() || 'The Team'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#081a33] font-serif text-amber-50"
    >
      {/* deep base + radial sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#13315c_0%,#0b1f3a_42%,#081a33_100%)]" />
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#1d4574]/50 blur-3xl" />
      <div className="absolute -bottom-28 -right-16 h-96 w-96 rounded-full bg-[#13315c]/55 blur-3xl" />

      {/* faint gold filigree top & bottom */}
      <svg viewBox="0 0 640 70" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-[18px] h-10 w-full opacity-50" fill="none" stroke="#d4af37" strokeWidth="1">
        <path d="M120 40C220 10 420 10 520 40M260 40c20-16 100-16 120 0" />
        <circle cx="320" cy="22" r="3" fill="#d4af37" stroke="none" />
      </svg>

      {/* gold double border frame */}
      <div className="absolute inset-6 rounded-md border border-amber-300/55" />
      <div className="absolute inset-[30px] rounded-sm border border-amber-300/20" />

      {/* corner flourishes */}
      {[
        'left-8 top-8',
        'right-8 top-8 -scale-x-100',
        'left-8 bottom-8 -scale-y-100',
        'right-8 bottom-8 -scale-x-100 -scale-y-100',
      ].map((pos, i) => (
        <svg key={i} viewBox="0 0 60 60" className={`absolute h-14 w-14 ${pos}`} fill="none" stroke="#d4af37" strokeWidth="1.4">
          <path d="M6 6h26M6 6v26" strokeLinecap="round" />
          <path d="M6 6c18 0 30 12 30 30" />
          <circle cx="12" cy="12" r="1.6" fill="#d4af37" stroke="none" />
        </svg>
      ))}

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-20 text-center">
        <header className="mt-4 flex flex-col items-center">
          <Monogram className="h-16 w-16 drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]" />
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.55em] text-amber-300">{organizerName}</p>
          <span className="mx-auto mt-4 flex items-center gap-2">
            <span className="block h-px w-10 bg-amber-300/50" />
            <span className="block h-1 w-1 rotate-45 bg-amber-300/80" />
            <span className="block h-px w-10 bg-amber-300/50" />
          </span>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.4em] text-amber-100/70">cordially invites you to a</p>
        </header>

        {/* hero */}
        <main className="flex flex-col items-center">
          <Laurel className="h-24 w-24 drop-shadow-[0_4px_12px_rgba(212,175,55,0.2)]" color="#d4af37" />
          <h2 className="-mt-2 font-display text-2xl uppercase tracking-[0.32em] text-amber-200">Farewell</h2>
          <h1
            data-pdf-color="#e3c062"
            className="mt-3 bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text font-display text-[60px] font-bold leading-tight text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            {eventName}
          </h1>
          <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-amber-100/85">
            Join us in honouring a valued colleague as we say goodbye and wish them every success ahead.
          </p>
        </main>

        {/* details */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-md bg-amber-300/30 font-sans shadow-[0_14px_36px_-18px_rgba(0,0,0,0.7)]">
            <Cell label="Date" value={date} />
            <Cell label="Time" value={time} />
            <div className="col-span-2 bg-[#0b1f3a]/95 px-6 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">Venue</p>
              <p className="mt-1 text-base font-medium text-amber-50">{venue}</p>
            </div>
          </div>
          <span className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="block h-px w-12 bg-gradient-to-r from-transparent to-amber-300/70" />
            <p className="font-display text-lg uppercase tracking-[0.35em] text-amber-300">Goodbye &amp; Good Luck</p>
            <span className="block h-px w-12 bg-gradient-to-l from-transparent to-amber-300/70" />
          </span>
        </footer>
      </div>
    </div>
  )
}

function Cell({ label, value }) {
  return (
    <div className="bg-[#0b1f3a]/95 px-6 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">{label}</p>
      <p className="mt-1 text-base font-medium text-amber-50">{value}</p>
    </div>
  )
}
