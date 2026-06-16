'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Deterministic confetti — fixed layout so the live preview never jumps. */
const CONFETTI = [
  { x: 6, y: 8, c: '#fde047', r: -18, w: 10, h: 16 },
  { x: 20, y: 4, c: '#22d3ee', r: 26, w: 8, h: 8 },
  { x: 38, y: 9, c: '#f472b6', r: -8, w: 12, h: 6 },
  { x: 56, y: 5, c: '#a78bfa', r: 30, w: 8, h: 14 },
  { x: 74, y: 7, c: '#34d399', r: -22, w: 10, h: 10 },
  { x: 90, y: 12, c: '#fb923c', r: 12, w: 8, h: 16 },
  { x: 4, y: 26, c: '#22d3ee', r: 16, w: 12, h: 6 },
  { x: 95, y: 30, c: '#fde047', r: -26, w: 8, h: 14 },
  { x: 10, y: 80, c: '#f472b6', r: 10, w: 10, h: 10 },
  { x: 88, y: 82, c: '#a78bfa', r: -14, w: 8, h: 16 },
  { x: 22, y: 92, c: '#34d399', r: 28, w: 12, h: 6 },
  { x: 50, y: 95, c: '#fde047', r: -20, w: 8, h: 14 },
  { x: 78, y: 90, c: '#22d3ee', r: 22, w: 10, h: 10 },
  { x: 33, y: 86, c: '#fb923c', r: -12, w: 8, h: 12 },
  { x: 66, y: 88, c: '#f472b6', r: 18, w: 10, h: 8 },
]

/**
 * Vibrant, energetic & celebratory college farewell — bold purple→pink
 * gradient, a scatter of confetti and an oversized "Farewell" wordmark.
 * Natural design size: 640 × 900.
 */
export default function CollegeFarewell({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Farewell 2026'
  const date = formatDate(values.date, '25 April 2026')
  const time = formatTime(values.time, '7:00 PM')
  const venue = values.venue?.trim() || 'College Auditorium'
  const organizerName = values.organizerName?.trim() || 'Class of 2026'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 font-party text-white"
    >
      {/* glow blobs */}
      <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-purple-400/40 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-300/20 blur-3xl" />

      {/* confetti */}
      {CONFETTI.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-[2px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.w}px`,
            height: `${p.h}px`,
            backgroundColor: p.c,
            transform: `rotate(${p.r}deg)`,
            opacity: 0.95,
          }}
        />
      ))}

      <div className="relative flex h-full flex-col items-center justify-between px-10 py-16 text-center">
        <header className="mt-4">
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-white/85">{organizerName}</p>
        </header>

        {/* mega wordmark */}
        <main className="flex flex-col items-center">
          <h1 className="font-display text-[96px] font-black uppercase leading-[0.82] tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
            Fare
            <br />
            <span
              data-pdf-color="#fde047"
              className="bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-300 bg-clip-text text-transparent"
            >
              well
            </span>
          </h1>
          <span className="mt-6 block h-1.5 w-32 rounded-full bg-white/80" />
          <p className="mt-7 text-2xl font-bold tracking-wide drop-shadow-sm">{eventName}</p>
          <p className="mt-3 max-w-sm text-base font-medium text-white/85">
            One last night to celebrate the years, the friends and the unforgettable memories.
          </p>
        </main>

        {/* detail pills */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-md gap-3">
            <Pill icon="🗓️" value={`${date} · ${time}`} />
            <Pill icon="📍" value={venue} />
          </div>
          <p className="mt-7 text-base font-bold uppercase tracking-[0.4em] text-yellow-200">
            Let's celebrate! 🎉
          </p>
        </footer>
      </div>
    </div>
  )
}

function Pill({ icon, value }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full bg-white/15 px-6 py-3.5 text-center backdrop-blur-md ring-1 ring-white/20">
      <span className="text-xl" aria-hidden>
        {icon}
      </span>
      <p className="text-lg font-bold leading-snug">{value}</p>
    </div>
  )
}
