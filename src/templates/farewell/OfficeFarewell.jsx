'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

function Laurel({ className = '', color = '#c9a227' }) {
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
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0b1f3a] font-serif text-amber-50"
    >
      {/* subtle radial sheen */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#13315c]/70 blur-3xl" />
      <div className="absolute -bottom-28 -right-16 h-96 w-96 rounded-full bg-[#13315c]/60 blur-3xl" />

      {/* gold double border frame */}
      <div className="absolute inset-6 rounded-md border border-amber-400/60" />
      <div className="absolute inset-[30px] rounded-sm border border-amber-400/25" />

      {/* corner flourishes */}
      {[
        'left-8 top-8',
        'right-8 top-8 -scale-x-100',
        'left-8 bottom-8 -scale-y-100',
        'right-8 bottom-8 -scale-x-100 -scale-y-100',
      ].map((pos, i) => (
        <svg key={i} viewBox="0 0 60 60" className={`absolute h-12 w-12 ${pos}`} fill="none" stroke="#c9a227" strokeWidth="1.5">
          <path d="M6 6h22M6 6v22" strokeLinecap="round" />
          <path d="M6 6c14 0 24 10 24 24" />
        </svg>
      ))}

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-20 text-center">
        <header className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.55em] text-amber-300">{organizerName}</p>
          <span className="mx-auto mt-4 block h-px w-24 bg-amber-400/60" />
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.4em] text-amber-100/70">cordially invites you to a</p>
        </header>

        {/* hero */}
        <main className="flex flex-col items-center">
          <Laurel className="h-24 w-24" color="#c9a227" />
          <h2 className="mt-6 font-display text-2xl uppercase tracking-[0.3em] text-amber-200">Farewell</h2>
          <h1
            data-pdf-color="#e3c062"
            className="mt-3 bg-gradient-to-b from-amber-200 to-amber-400 bg-clip-text font-display text-[58px] font-bold leading-tight text-transparent"
          >
            {eventName}
          </h1>
          <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-amber-100/80">
            Join us in honouring a valued colleague as we say goodbye and wish them every success ahead.
          </p>
        </main>

        {/* details */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-md bg-amber-400/30 font-sans">
            <Cell label="Date" value={date} />
            <Cell label="Time" value={time} />
            <div className="col-span-2 bg-[#0b1f3a]/95 px-6 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">Venue</p>
              <p className="mt-1 text-base font-medium text-amber-50">{venue}</p>
            </div>
          </div>
          <p className="mt-8 font-display text-lg uppercase tracking-[0.35em] text-amber-300">
            Goodbye &amp; Good Luck
          </p>
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
