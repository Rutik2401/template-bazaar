'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Deterministic confetti — fixed layout so the live preview never jumps. */
const CONFETTI = [
  { x: 6, y: 8, c: '#fde047', r: -18, w: 10, h: 16 },
  { x: 20, y: 4, c: '#22d3ee', r: 26, w: 9, h: 9 },
  { x: 38, y: 9, c: '#f472b6', r: -8, w: 13, h: 6 },
  { x: 56, y: 5, c: '#a78bfa', r: 30, w: 8, h: 14 },
  { x: 74, y: 7, c: '#34d399', r: -22, w: 11, h: 11 },
  { x: 90, y: 12, c: '#fb923c', r: 12, w: 8, h: 16 },
  { x: 4, y: 26, c: '#22d3ee', r: 16, w: 12, h: 6 },
  { x: 95, y: 30, c: '#fde047', r: -26, w: 8, h: 14 },
  { x: 14, y: 40, c: '#34d399', r: 8, w: 9, h: 9 },
  { x: 87, y: 44, c: '#f472b6', r: -16, w: 11, h: 7 },
  { x: 10, y: 80, c: '#f472b6', r: 10, w: 10, h: 10 },
  { x: 88, y: 82, c: '#a78bfa', r: -14, w: 8, h: 16 },
  { x: 22, y: 92, c: '#34d399', r: 28, w: 12, h: 6 },
  { x: 50, y: 95, c: '#fde047', r: -20, w: 8, h: 14 },
  { x: 78, y: 90, c: '#22d3ee', r: 22, w: 10, h: 10 },
  { x: 33, y: 86, c: '#fb923c', r: -12, w: 8, h: 12 },
  { x: 66, y: 88, c: '#f472b6', r: 18, w: 10, h: 8 },
]

/* Curled paper streamers behind the content. */
const STREAMERS = [
  { d: 'M-20 70C60 20 110 120 200 80', c: '#fde047', o: 0.55 },
  { d: 'M460 30C540 90 500 170 640 140', c: '#67e8f9', o: 0.5 },
  { d: 'M20 820C110 770 140 870 230 830', c: '#f9a8d4', o: 0.5 },
]

function Sparkle({ className = '', color = '#ffffff' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M12 0c.8 5.8 5.4 10.4 11.2 11.2C17.4 12 12.8 16.6 12 22.4 11.2 16.6 6.6 12 0.8 11.2 6.6 10.4 11.2 5.8 12 0Z" />
    </svg>
  )
}

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
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 font-party text-white"
    >
      {/* glow blobs */}
      <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-purple-400/45 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-pink-300/45 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-300/25 blur-[120px]" />

      {/* bokeh sparkle dots */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_16%_24%,rgba(255,255,255,0.45)_0,transparent_2px),radial-gradient(circle_at_84%_28%,rgba(255,255,255,0.4)_0,transparent_2.5px),radial-gradient(circle_at_28%_78%,rgba(255,255,255,0.35)_0,transparent_2px),radial-gradient(circle_at_72%_68%,rgba(255,255,255,0.4)_0,transparent_2px)]" />

      {/* streamers */}
      <svg viewBox="0 0 640 900" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
        {STREAMERS.map((s, i) => (
          <path key={i} d={s.d} stroke={s.c} strokeOpacity={s.o} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10" />
        ))}
      </svg>

      {/* confetti */}
      {CONFETTI.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
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
        <header className="mt-4 flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-1.5 text-sm font-bold uppercase tracking-[0.45em] text-white/90 ring-1 ring-inset ring-white/25 backdrop-blur-sm">
            {organizerName}
          </span>
        </header>

        {/* mega wordmark */}
        <main className="flex flex-col items-center">
          <div className="relative">
            <Sparkle className="absolute -left-7 -top-3 h-7 w-7 opacity-90 drop-shadow" color="#fde047" />
            <Sparkle className="absolute -right-6 bottom-2 h-6 w-6 opacity-80 drop-shadow" color="#67e8f9" />
            <h1 className="font-display text-[98px] font-black uppercase leading-[0.82] tracking-tight drop-shadow-[0_8px_22px_rgba(0,0,0,0.3)]">
              Fare
              <br />
              <span
                data-pdf-color="#fde047"
                className="bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-300 bg-clip-text text-transparent"
              >
                well
              </span>
            </h1>
          </div>
          <span className="mt-6 flex items-center gap-2">
            <span className="block h-1.5 w-12 rounded-full bg-gradient-to-r from-transparent to-white/80" />
            <span className="block h-2 w-2 rounded-full bg-yellow-200" />
            <span className="block h-1.5 w-12 rounded-full bg-gradient-to-l from-transparent to-white/80" />
          </span>
          <p className="mt-7 text-2xl font-bold tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">{eventName}</p>
          <p className="mt-3 max-w-sm text-base font-medium leading-relaxed text-white/90">
            One last night to celebrate the years, the friends and the unforgettable memories.
          </p>
        </main>

        {/* detail pills */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-md gap-3">
            <Pill icon="🗓️" value={`${date} · ${time}`} />
            <Pill icon="📍" value={venue} />
          </div>
          <p className="mt-7 flex items-center justify-center gap-2 text-base font-black uppercase tracking-[0.4em] text-yellow-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
            Let&apos;s celebrate! <span aria-hidden>🎉</span>
          </p>
        </footer>
      </div>
    </div>
  )
}

function Pill({ icon, value }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full bg-white/15 px-6 py-3.5 text-center shadow-[0_10px_28px_-14px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/25 backdrop-blur-md">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20 text-xl ring-1 ring-inset ring-white/25" aria-hidden>
        {icon}
      </span>
      <p className="text-lg font-bold leading-snug">{value}</p>
    </div>
  )
}
