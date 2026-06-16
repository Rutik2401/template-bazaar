'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Deterministic star field — fixed positions so the live preview never jumps. */
const STARS = [
  { x: 12, y: 14, s: 18, o: 0.9 },
  { x: 86, y: 10, s: 24, o: 0.95 },
  { x: 50, y: 6, s: 14, o: 0.7 },
  { x: 24, y: 30, s: 12, o: 0.6 },
  { x: 78, y: 34, s: 16, o: 0.8 },
  { x: 8, y: 46, s: 14, o: 0.65 },
  { x: 92, y: 54, s: 18, o: 0.85 },
  { x: 18, y: 68, s: 12, o: 0.6 },
  { x: 70, y: 18, s: 11, o: 0.55 },
]

function Star({ size = 16, color = '#fde047' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M12 2l2.6 6.3L21 9l-4.9 4.3L17.5 21 12 17.3 6.5 21l1.4-7.7L3 9l6.4-.7L12 2z" />
    </svg>
  )
}

function GradCap({ className = '' }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none">
      <path d="M60 8 6 30l54 22 54-22L60 8Z" fill="#1d4ed8" />
      <path d="M60 8 6 30l54 22 54-22L60 8Z" fill="#3b82f6" fillOpacity="0.35" />
      <path d="M30 40v20c0 7 13 13 30 13s30-6 30-13V40L60 56 30 40Z" fill="#1e40af" />
      <line x1="114" y1="30" x2="114" y2="58" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
      <circle cx="114" cy="60" r="6" fill="#fde047" />
    </svg>
  )
}

function Book({ className = '', spine = '#f59e0b', cover = '#fbbf24' }) {
  return (
    <svg viewBox="0 0 90 70" className={className} fill="none">
      <rect x="6" y="10" width="78" height="52" rx="5" fill={cover} />
      <rect x="6" y="10" width="14" height="52" rx="5" fill={spine} />
      <line x1="30" y1="24" x2="74" y2="24" stroke="#fff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="36" x2="74" y2="36" stroke="#fff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="48" x2="62" y2="48" stroke="#fff" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Playful & warm school farewell — friendly bright blue & yellow, books,
 * a graduation cap and a scatter of stars. Youthful and cheerful.
 * Natural design size: 640 × 900.
 */
export default function SchoolFarewell({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Farewell 2026'
  const date = formatDate(values.date, '25 April 2026')
  const time = formatTime(values.time, '5:00 PM')
  const venue = values.venue?.trim() || 'School Auditorium'
  const organizerName = values.organizerName?.trim() || 'Class of 2026'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-amber-100 font-sans text-sky-950"
    >
      {/* sky glow + sun */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-yellow-300/60 blur-3xl" />
      <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-white/40 blur-3xl" />

      {/* scattered stars */}
      {STARS.map((p, i) => (
        <span key={i} className="absolute block" style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: p.o }}>
          <Star size={p.s} color="#fde047" />
        </span>
      ))}

      {/* floating books */}
      <Book className="absolute left-6 top-[58%] h-16 w-20 -rotate-12 drop-shadow-md" spine="#ea580c" cover="#fb923c" />
      <Book className="absolute right-4 top-[50%] h-14 w-[72px] rotate-12 drop-shadow-md" spine="#0369a1" cover="#38bdf8" />

      <div className="relative flex h-full flex-col items-center justify-between px-12 py-14 text-center">
        <header className="mt-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-sky-700 shadow-sm">
            <span aria-hidden>📚</span> {organizerName}
          </span>
        </header>

        {/* hero cap + title */}
        <main className="flex flex-col items-center">
          <GradCap className="h-28 w-36 drop-shadow-lg" />
          <p className="mt-6 text-lg font-semibold text-sky-700">{t('common.youreInvited') || "You're invited to"}</p>
          <h1 className="mt-2 font-display text-[68px] font-black leading-[0.9] text-sky-900 drop-shadow-sm">
            {eventName}
          </h1>
          <p className="mt-5 max-w-sm text-base font-medium text-sky-700">
            A heartfelt send-off filled with memories, laughter and a few happy tears.
          </p>
        </main>

        {/* detail cards */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm gap-3">
            <Detail icon="📅" label="When" value={`${date} · ${time}`} />
            <Detail icon="📍" label="Where" value={venue} />
          </div>
          <p className="mt-7 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
            <span aria-hidden>⭐</span> Goodbye & Good Luck <span aria-hidden>⭐</span>
          </p>
        </footer>
      </div>
    </div>
  )
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/80 px-5 py-4 text-left shadow-sm backdrop-blur-sm">
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-500">{label}</p>
        <p className="text-lg font-bold leading-snug text-sky-900">{value}</p>
      </div>
    </div>
  )
}
