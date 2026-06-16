'use client'

import { formatDate, formatTime, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Cheerful "Admissions Open" school poster — bright blue/teal/yellow palette,
 * floating books, pencil and A·B·C motifs, a big call-to-enroll badge.
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
      className="relative h-[960px] w-[720px] overflow-hidden bg-gradient-to-b from-sky-400 via-cyan-300 to-amber-200 font-sans text-slate-900"
    >
      {/* soft sky clouds */}
      <div className="absolute left-10 top-16 h-16 w-40 rounded-full bg-white/70 blur-md" />
      <div className="absolute right-8 top-32 h-12 w-32 rounded-full bg-white/60 blur-md" />

      {/* scattered ABC letters */}
      {[
        { t: 'A', x: 6, y: 30, c: '#f59e0b', r: -14, s: 64 },
        { t: 'B', x: 86, y: 24, c: '#0ea5e9', r: 12, s: 54 },
        { t: 'C', x: 90, y: 60, c: '#14b8a6', r: -10, s: 58 },
        { t: '1', x: 4, y: 58, c: '#0ea5e9', r: 8, s: 48 },
        { t: '2', x: 12, y: 78, c: '#f59e0b', r: -8, s: 44 },
      ].map((l, i) => (
        <span
          key={i}
          className="absolute font-display font-black opacity-20"
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
      <svg viewBox="0 0 120 90" className="absolute right-12 top-24 h-24 w-32 drop-shadow-lg" fill="none">
        <rect x="8" y="20" width="100" height="16" rx="3" fill="#f97316" />
        <rect x="14" y="36" width="92" height="16" rx="3" fill="#0ea5e9" />
        <rect x="6" y="52" width="104" height="16" rx="3" fill="#14b8a6" />
        <rect x="8" y="20" width="14" height="48" fill="#ffffff" fillOpacity="0.25" />
      </svg>

      {/* pencil (left) */}
      <svg viewBox="0 0 40 200" className="absolute -left-2 top-[44%] h-56 w-12 rotate-12 drop-shadow-lg" fill="none">
        <rect x="10" y="20" width="20" height="140" fill="#fde047" />
        <rect x="10" y="20" width="6" height="140" fill="#facc15" />
        <path d="M10 160 L20 188 L30 160 Z" fill="#f4d7b0" />
        <path d="M14 174 L20 188 L26 174 Z" fill="#1f2937" />
        <rect x="10" y="6" width="20" height="14" fill="#f472b6" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-12 py-14 text-center">
        {/* school name pill */}
        <div className="rounded-full bg-white/90 px-7 py-2.5 shadow-lg">
          <p className="font-display text-xl font-extrabold tracking-wide text-sky-700">{schoolName}</p>
        </div>

        {/* mega headline */}
        <h1 className="mt-10 font-display text-[88px] font-black uppercase leading-[0.85] tracking-tight text-white drop-shadow-[0_4px_0_rgba(2,132,199,0.55)]">
          Admissions
          <br />
          <span
            data-pdf-color="#f59e0b"
            className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent"
          >
            Open!
          </span>
        </h1>

        <p className="mt-5 max-w-md text-lg font-semibold text-sky-900/80">
          Give your child a brighter tomorrow. Limited seats — enroll today!
        </p>

        {/* enroll badge */}
        <div className="relative mt-10 flex h-44 w-44 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-400 shadow-xl" />
          <div className="absolute inset-2 rounded-full border-4 border-dashed border-white/80" />
          <div className="relative flex flex-col items-center text-white">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Now</span>
            <span className="font-display text-5xl font-black leading-none">2026</span>
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Batch</span>
          </div>
        </div>

        {/* detail rows */}
        <div className="mt-auto w-full max-w-md space-y-3">
          <DetailRow
            color="#0ea5e9"
            label="Last Date"
            value={date}
            icon={<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />}
          />
          <DetailRow
            color="#14b8a6"
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
    <div className="flex items-center gap-4 rounded-2xl bg-white/90 px-5 py-3.5 text-left shadow-md">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundColor: color }}>
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
