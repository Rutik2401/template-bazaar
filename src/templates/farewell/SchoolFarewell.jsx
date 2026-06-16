'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Deterministic star field — fixed positions so the live preview never jumps. */
const STARS = [
  { x: 12, y: 13, s: 20, o: 0.95 },
  { x: 86, y: 9, s: 26, o: 1 },
  { x: 50, y: 5, s: 15, o: 0.75 },
  { x: 24, y: 29, s: 13, o: 0.6 },
  { x: 78, y: 33, s: 17, o: 0.85 },
  { x: 7, y: 45, s: 14, o: 0.65 },
  { x: 93, y: 53, s: 19, o: 0.9 },
  { x: 17, y: 67, s: 12, o: 0.6 },
  { x: 70, y: 17, s: 11, o: 0.55 },
  { x: 38, y: 20, s: 10, o: 0.5 },
  { x: 62, y: 44, s: 12, o: 0.55 },
]

function Star({ size = 16, color = '#fde047' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M12 2l2.6 6.3L21 9l-4.9 4.3L17.5 21 12 17.3 6.5 21l1.4-7.7L3 9l6.4-.7L12 2z" />
    </svg>
  )
}

function Sparkle({ className = '', color = '#ffffff' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M12 0c.8 5.8 5.4 10.4 11.2 11.2C17.4 12 12.8 16.6 12 22.4 11.2 16.6 6.6 12 0.8 11.2 6.6 10.4 11.2 5.8 12 0Z" />
    </svg>
  )
}

function GradCap({ className = '' }) {
  return (
    <svg viewBox="0 0 130 100" className={className} fill="none">
      <defs>
        <linearGradient id="sf-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="sf-tassel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* mortarboard */}
      <path d="M65 12 8 36l57 24 57-24L65 12Z" fill="url(#sf-cap)" />
      <path d="M65 12 8 36l57 24 57-24L65 12Z" fill="#60a5fa" fillOpacity="0.3" />
      <path d="M65 12 8 36l11 4.6L65 22l46-4.4L65 12Z" fill="#ffffff" fillOpacity="0.18" />
      {/* cap base */}
      <path d="M33 46v22c0 8 14 14 32 14s32-6 32-14V46L65 60 33 46Z" fill="#1e40af" />
      <path d="M33 46v22c0 8 14 14 32 14s32-6 32-14V46" stroke="#1d4ed8" strokeOpacity="0.6" strokeWidth="1.5" />
      {/* button */}
      <circle cx="65" cy="34" r="4.5" fill="#fde047" />
      {/* tassel */}
      <path d="M65 34c20 0 53 0 53 2v22" stroke="url(#sf-tassel)" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 58l-4 14M118 58l0 14M118 58l4 14" stroke="url(#sf-tassel)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="118" cy="56" r="5.5" fill="#fde047" />
      <circle cx="116" cy="54" r="1.6" fill="#fffbeb" />
    </svg>
  )
}

function Book({ className = '', spine = '#f59e0b', cover = '#fbbf24', edge = '#fff7ed' }) {
  return (
    <svg viewBox="0 0 96 74" className={className} fill="none">
      <rect x="8" y="12" width="80" height="54" rx="6" fill={cover} />
      <rect x="8" y="12" width="80" height="54" rx="6" fill="#000000" fillOpacity="0.05" />
      <rect x="8" y="12" width="15" height="54" rx="6" fill={spine} />
      <rect x="80" y="14" width="8" height="50" rx="3" fill={edge} fillOpacity="0.9" />
      <line x1="33" y1="26" x2="76" y2="26" stroke="#fff" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="39" x2="76" y2="39" stroke="#fff" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="52" x2="64" y2="52" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Pencil({ className = '' }) {
  return (
    <svg viewBox="0 0 90 24" className={className} fill="none">
      <path d="M4 12h66" stroke="#f59e0b" strokeWidth="16" strokeLinecap="round" />
      <path d="M70 4l16 8-16 8V4Z" fill="#fbbf24" />
      <path d="M78 8l8 4-8 4V8Z" fill="#1f2937" />
      <rect x="2" y="4" width="14" height="16" rx="5" fill="#f472b6" />
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
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-sky-500 via-sky-300 to-amber-100 font-sans text-sky-950"
    >
      {/* sky glow + sun */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-300/70 blur-3xl" />
      <div className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[50%] bg-amber-50/60 blur-2xl" />

      {/* rolling hill at the base */}
      <svg viewBox="0 0 640 200" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-44 w-full" fill="none">
        <path d="M0 120C140 70 240 150 360 110S560 60 640 120V200H0V120Z" fill="#bef264" fillOpacity="0.55" />
        <path d="M0 150C160 110 260 180 400 140S580 110 640 160V200H0V150Z" fill="#86efac" fillOpacity="0.6" />
      </svg>

      {/* soft cloud */}
      <svg viewBox="0 0 160 60" className="pointer-events-none absolute left-10 top-40 h-12 w-32 opacity-80" fill="#ffffff">
        <ellipse cx="48" cy="38" rx="40" ry="20" />
        <ellipse cx="90" cy="30" rx="34" ry="24" />
        <ellipse cx="120" cy="40" rx="30" ry="18" />
      </svg>

      {/* scattered stars */}
      {STARS.map((p, i) => (
        <span key={i} className="absolute block drop-shadow-[0_1px_2px_rgba(245,158,11,0.4)]" style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: p.o }}>
          <Star size={p.s} color="#fde047" />
        </span>
      ))}
      <Sparkle className="absolute left-[30%] top-[12%] h-5 w-5 opacity-80" color="#ffffff" />
      <Sparkle className="absolute right-[14%] top-[40%] h-4 w-4 opacity-70" color="#fffbeb" />

      {/* floating school motifs */}
      <Book className="absolute left-4 top-[60%] h-16 w-20 -rotate-12 drop-shadow-lg" spine="#ea580c" cover="#fb923c" edge="#fff7ed" />
      <Book className="absolute right-3 top-[52%] h-14 w-[74px] rotate-12 drop-shadow-lg" spine="#0369a1" cover="#38bdf8" edge="#e0f2fe" />
      <Pencil className="absolute right-7 top-[70%] h-8 w-28 rotate-[8deg] drop-shadow-md" />

      <div className="relative flex h-full flex-col items-center justify-between px-12 py-14 text-center">
        <header className="mt-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 text-xs font-extrabold uppercase tracking-[0.35em] text-sky-700 shadow-md ring-1 ring-inset ring-sky-200">
            <span aria-hidden>📚</span> {organizerName}
          </span>
        </header>

        {/* hero cap + title */}
        <main className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 m-auto h-32 w-32 rounded-full bg-white/40 blur-2xl" />
            <GradCap className="h-32 w-40 drop-shadow-[0_14px_22px_rgba(29,78,216,0.35)]" />
          </div>
          <p className="mt-7 text-base font-bold uppercase tracking-[0.3em] text-sky-700/90">{t('common.youreInvited') || "You're invited to"}</p>
          <h1 className="mt-3 font-display text-[72px] font-black leading-[0.9] tracking-tight text-sky-900 drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]">
            {eventName}
          </h1>
          <span className="mt-5 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-amber-400" />
            <Star size={14} color="#f59e0b" />
            <span className="h-1 w-8 rounded-full bg-amber-400" />
          </span>
          <p className="mt-5 max-w-sm text-base font-medium leading-relaxed text-sky-800">
            A heartfelt send-off filled with memories, laughter and a few happy tears.
          </p>
        </main>

        {/* detail cards */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm gap-3">
            <Detail icon="📅" label="When" value={`${date} · ${time}`} />
            <Detail icon="📍" label="Where" value={venue} />
          </div>
          <p className="mt-7 flex items-center justify-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.3em] text-amber-600">
            <span aria-hidden>⭐</span> Goodbye &amp; Good Luck <span aria-hidden>⭐</span>
          </p>
        </footer>
      </div>
    </div>
  )
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/85 px-5 py-4 text-left shadow-[0_10px_28px_-14px_rgba(2,132,199,0.55)] ring-1 ring-inset ring-white/80 backdrop-blur-sm">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-amber-100 text-2xl ring-1 ring-inset ring-sky-200" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-sky-500">{label}</p>
        <p className="text-lg font-bold leading-snug text-sky-900">{value}</p>
      </div>
    </div>
  )
}
