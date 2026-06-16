'use client'

import { formatDate, formatTime, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Friendly stack of textbooks — layered spines with page edges & a bookmark. */
function Books({ className = '' }) {
  return (
    <svg viewBox="0 0 140 110" className={className} fill="none">
      <defs>
        <linearGradient id="bk-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="bk-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="bk-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {/* bottom book */}
      <rect x="6" y="78" width="118" height="24" rx="4" fill="url(#bk-c)" />
      <rect x="6" y="78" width="118" height="6" rx="3" fill="#ffffff" fillOpacity="0.28" />
      <rect x="16" y="84" width="5" height="12" rx="2" fill="#ffffff" fillOpacity="0.55" />
      {/* middle book */}
      <rect x="16" y="52" width="100" height="24" rx="4" fill="url(#bk-b)" />
      <rect x="16" y="52" width="100" height="6" rx="3" fill="#ffffff" fillOpacity="0.28" />
      <rect x="26" y="58" width="5" height="12" rx="2" fill="#ffffff" fillOpacity="0.55" />
      {/* top book */}
      <rect x="24" y="26" width="86" height="24" rx="4" fill="url(#bk-a)" />
      <rect x="24" y="26" width="86" height="6" rx="3" fill="#ffffff" fillOpacity="0.32" />
      <rect x="34" y="32" width="5" height="12" rx="2" fill="#ffffff" fillOpacity="0.55" />
      {/* bookmark + apple-like dot */}
      <path d="M96 26v22l-6-5-6 5V26z" fill="#f43f5e" />
      <circle cx="70" cy="14" r="9" fill="#fde047" stroke="#facc15" strokeWidth="2" />
      <path d="M70 6c2 1 3 3 2 5" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* Tilted pencil with wood tip, graphite point and pink eraser. */
function Pencil({ className = '' }) {
  return (
    <svg viewBox="0 0 44 210" className={className} fill="none">
      <defs>
        <linearGradient id="pc-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="0.5" stopColor="#facc15" />
          <stop offset="1" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <rect x="12" y="30" width="20" height="138" rx="3" fill="url(#pc-body)" />
      <rect x="12" y="30" width="6" height="138" fill="#ffffff" fillOpacity="0.35" />
      <path d="M12 168 L22 198 L32 168 Z" fill="#f4d7b0" />
      <path d="M16 184 L22 198 L28 184 Z" fill="#1f2937" />
      <rect x="12" y="14" width="20" height="16" rx="3" fill="#fb7185" />
      <rect x="12" y="26" width="20" height="5" fill="#9ca3af" />
    </svg>
  )
}

/* Graduation cap motif. */
function Cap({ className = '' }) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none">
      <path d="M32 6 4 18l28 12 28-12L32 6Z" fill="#0f172a" />
      <path d="M32 6 4 18l28 12 28-12L32 6Z" fill="#ffffff" fillOpacity="0.12" />
      <path d="M16 26v10c0 4 32 4 32 0V26l-16 7-16-7Z" fill="#1e293b" />
      <path d="M60 18v12" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="32" r="3.5" fill="#f59e0b" />
    </svg>
  )
}

/**
 * Cheerful "Admissions Open" school poster — bright blue/teal/yellow palette,
 * floating books, pencil, graduation cap and A·B·C motifs, a big enroll badge.
 * Natural design size: 720 × 960.
 */
export default function SchoolAdmissionPoster({ values }) {
  const { t } = useI18n()
  const schoolName = values.schoolName?.trim() || 'Sunrise Public School'
  const date = formatDate(values.date, '25 June 2026')
  const venue = values.venue?.trim() || 'School Auditorium'
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-gradient-to-b from-sky-500 via-cyan-300 to-amber-100 font-sans text-slate-900"
    >
      {/* warm sky glow + soft clouds */}
      <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute left-12 top-20 h-14 w-44 rounded-full bg-white/80 blur-md" />
      <div className="absolute left-28 top-28 h-10 w-28 rounded-full bg-white/70 blur-md" />
      <div className="absolute right-10 top-44 h-12 w-36 rounded-full bg-white/70 blur-md" />

      {/* radiating sunburst behind the headline */}
      <svg viewBox="0 0 720 960" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 24 }).map((_, i) => (
          <path key={i} d="M360 300 L360 -200 L400 -200 Z" fill="#ffffff" transform={`rotate(${i * 15} 360 300)`} />
        ))}
      </svg>

      {/* dotted guide line across the lower band */}
      <svg viewBox="0 0 720 960" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" fill="none" preserveAspectRatio="none">
        <path d="M0 612 H720" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="3 12" strokeLinecap="round" />
      </svg>

      {/* scattered ABC / 123 letters */}
      {[
        { t: 'A', x: 5, y: 30, c: '#f59e0b', r: -14, s: 70 },
        { t: 'B', x: 87, y: 22, c: '#0284c7', r: 12, s: 58 },
        { t: 'C', x: 91, y: 58, c: '#0d9488', r: -10, s: 60 },
        { t: '1', x: 4, y: 56, c: '#0284c7', r: 8, s: 52 },
        { t: '2', x: 11, y: 76, c: '#f59e0b', r: -8, s: 46 },
        { t: '+', x: 82, y: 78, c: '#0d9488', r: 14, s: 50 },
      ].map((l, i) => (
        <span
          key={i}
          className="absolute font-display font-black opacity-[0.18]"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            color: l.c,
            fontSize: l.s,
            transform: `rotate(${l.r}deg)`,
          }}
        >
          {l.t}
        </span>
      ))}

      {/* floating books (top right) */}
      <Books className="absolute right-9 top-[88px] h-28 w-36 drop-shadow-[0_10px_18px_rgba(2,132,199,0.35)]" />

      {/* graduation cap (upper left) */}
      <Cap className="absolute left-8 top-[150px] h-14 w-20 -rotate-12 drop-shadow-[0_8px_14px_rgba(2,132,199,0.3)]" />

      {/* pencil (left) */}
      <Pencil className="absolute -left-1 top-[46%] h-60 w-12 rotate-12 drop-shadow-[0_10px_18px_rgba(2,132,199,0.3)]" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-12 py-14 text-center">
        {/* school name pill */}
        <div className="flex items-center gap-2.5 rounded-full bg-white/95 px-7 py-2.5 shadow-[0_8px_24px_-10px_rgba(2,132,199,0.6)] ring-1 ring-sky-100">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <p className="font-display text-xl font-extrabold tracking-wide text-sky-700">{schoolName}</p>
        </div>

        {/* eyebrow */}
        <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400/90 px-4 py-1 text-[12px] font-extrabold uppercase tracking-[0.4em] text-white shadow-md">
          Enrolment 2026
        </p>

        {/* mega headline */}
        <h1 className="mt-4 font-display text-[88px] font-black uppercase leading-[0.84] tracking-tight text-white drop-shadow-[0_4px_0_rgba(2,132,199,0.55)]">
          Admissions
          <br />
          <span
            data-pdf-color="#f59e0b"
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-none"
          >
            Open!
          </span>
        </h1>

        <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed text-sky-950/85">
          Give your child a brighter tomorrow.
          <br />
          Limited seats — enroll today!
        </p>

        {/* enroll badge */}
        <div className="relative mt-9 flex h-44 w-44 items-center justify-center drop-shadow-[0_14px_28px_-10px_rgba(180,83,9,0.6)]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500" />
          <div className="absolute inset-0 rounded-full ring-4 ring-white/70" />
          <div className="absolute inset-2.5 rounded-full border-[3px] border-dashed border-white/85" />
          <div className="relative flex flex-col items-center text-white">
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] drop-shadow-sm">Now</span>
            <span className="font-display text-5xl font-black leading-none drop-shadow-sm">2026</span>
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] drop-shadow-sm">Batch</span>
          </div>
        </div>

        {/* detail rows */}
        <div className="mt-auto w-full max-w-md space-y-3">
          <DetailRow
            color="#0284c7"
            label="Last Date"
            value={date}
            icon={<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />}
          />
          <DetailRow
            color="#0d9488"
            label="Visit Us"
            value={venue}
            icon={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></>}
          />
          <DetailRow
            color="#f59e0b"
            label="Call to Enroll"
            value={contact}
            icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />}
          />
        </div>
      </div>
    </div>
  )
}

function DetailRow({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/95 px-5 py-3.5 text-left shadow-[0_10px_26px_-14px_rgba(15,23,42,0.55)] ring-1 ring-white/60">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-sm" style={{ backgroundColor: color }}>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">{label}</p>
        <p className="text-lg font-extrabold leading-snug text-slate-800">{value}</p>
      </div>
    </div>
  )
}
