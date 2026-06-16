'use client'

import { formatDate, formatTime, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Clean, formal Parent-Teacher Meeting notice on A4 — a crisp school header with
 * a crest, a ruled detail block, a short note and a principal sign-off. Restrained
 * sky/teal/amber accents keep it trustworthy and professional.
 * Natural design size: 794 × 1123 (A4 portrait).
 */
export default function ParentMeetingNotice({ values }) {
  const { t } = useI18n()
  const schoolName = values.schoolName?.trim() || 'Sunrise Public School'
  const date = formatDate(values.date, '25 June 2026')
  const venue = values.venue?.trim() || 'School Auditorium'

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-sans text-slate-800"
    >
      {/* faint corner crest watermark */}
      <svg viewBox="0 0 24 24" className="pointer-events-none absolute -bottom-12 -right-8 h-72 w-72 text-sky-50" fill="currentColor">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* top accent bar */}
      <div className="h-3 w-full bg-gradient-to-r from-sky-600 via-teal-500 to-amber-400" />

      {/* header */}
      <header className="flex items-center gap-6 border-b-2 border-slate-100 px-16 py-10">
        {/* crest */}
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 text-white shadow-[0_12px_28px_-12px_rgba(2,132,199,0.7)] ring-1 ring-white/40">
          <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900">{schoolName}</h1>
          <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Knowledge
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Discipline
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Excellence
          </p>
        </div>
      </header>

      {/* notice title */}
      <div className="px-16 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Notice
        </span>
        <h2 className="mt-6 font-display text-[40px] font-black leading-tight text-slate-900">
          Parent-Teacher{' '}
          <span
            data-pdf-color="#0284c7"
            className="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent"
          >
            Meeting
          </span>
        </h2>
        <span className="mx-auto mt-5 flex items-center justify-center gap-2">
          <span className="h-1 w-8 rounded-full bg-sky-200" />
          <span className="h-1 w-24 rounded-full bg-amber-400" />
          <span className="h-1 w-8 rounded-full bg-sky-200" />
        </span>
      </div>

      {/* body */}
      <div className="flex-1 px-16 pt-11">
        <p className="text-lg leading-relaxed text-slate-700">Dear Parents &amp; Guardians,</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          The school is conducting a Parent-Teacher Meeting to discuss your child&apos;s academic
          progress, attendance and overall development. Your presence is requested to ensure a
          productive interaction with the class teachers.
        </p>

        {/* detail block */}
        <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_14px_34px_-22px_rgba(15,23,42,0.5)]">
          <DetailRow
            color="#0284c7"
            label="Date"
            value={date}
            icon={<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />}
          />
          <DetailRow
            color="#0d9488"
            label="Venue"
            value={venue}
            icon={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></>}
            last
          />
        </div>

        {/* gentle note callout */}
        <div className="mt-9 flex items-start gap-3 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 px-5 py-4">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8h.01M11 12h1v4h1" />
          </svg>
          <p className="text-base italic leading-relaxed text-slate-600">
            Kindly make it convenient to attend. Parents are requested to be seated five minutes
            before the scheduled time.
          </p>
        </div>
      </div>

      {/* sign-off */}
      <footer className="flex items-end justify-between border-t-2 border-slate-100 px-16 py-10">
        <p className="text-sm text-slate-400">Issued by the School Administration</p>
        <div className="text-right">
          <p className="font-display text-2xl italic text-slate-700">Principal</p>
          <span className="mt-1 ml-auto block h-px w-44 bg-slate-300" />
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{schoolName}</p>
        </div>
      </footer>

      {/* bottom accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-teal-500 to-sky-600" />
    </div>
  )
}

function DetailRow({ icon, label, value, color, last = false }) {
  return (
    <div className={`flex items-center gap-5 bg-slate-50 px-7 py-5 ${last ? '' : 'border-b border-slate-200'}`}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-sm" style={{ backgroundColor: color }}>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">{label}</p>
        <p className="text-xl font-extrabold text-slate-800">{value}</p>
      </div>
    </div>
  )
}
