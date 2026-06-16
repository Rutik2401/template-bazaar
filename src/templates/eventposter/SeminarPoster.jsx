'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Corporate seminar poster — deep-blue & cyan, a structured grid layout and a
 * refined speaker-podium motif. Clean, professional, conference-ready.
 * Natural design size: 720 × 960.
 */
export default function SeminarPoster({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Future of AI Summit'
  const venue = values.venue?.trim() || 'Pune Convention Centre'
  const organizer = values.organizer?.trim() || 'TechnoLogic India'
  const dateLabel = formatDate(values.date, '10 September 2026')

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#06183b] font-sans text-white"
    >
      {/* deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08245f] via-[#0a225a] to-[#030d24]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_80%_-10%,rgba(34,211,238,0.22),transparent_60%)]" />

      {/* fine corporate grid */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.10]" preserveAspectRatio="none">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="960" stroke="#22d3ee" strokeWidth="1" />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="720" y2={i * 60} stroke="#22d3ee" strokeWidth="1" />
        ))}
      </svg>

      {/* glow accents */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />

      {/* diagonal accent streaks — top */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M520 -40 L720 -40 L720 220 Z" fill="#22d3ee" opacity="0.08" />
        <path d="M600 -40 L720 -40 L720 120 Z" fill="#38bdf8" opacity="0.10" />
      </svg>

      {/* speaker-podium motif — bottom right */}
      <svg viewBox="0 0 200 220" className="absolute bottom-2 right-8 h-[280px] w-[260px] opacity-[0.16]" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* sound arcs */}
        <path d="M150 50 a30 30 0 0 1 0 44" opacity="0.6" />
        <path d="M162 38 a48 48 0 0 1 0 68" opacity="0.4" />
        {/* podium */}
        <path d="M70 210 L86 110 L114 110 L130 210 Z" />
        <line x1="58" y1="210" x2="142" y2="210" />
        {/* mic stand */}
        <line x1="100" y1="110" x2="100" y2="74" />
        <circle cx="100" cy="64" r="11" />
        {/* speaker silhouette */}
        <circle cx="100" cy="34" r="16" />
      </svg>

      {/* hairline frame */}
      <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-cyan-400/15" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 py-16">
        {/* eyebrow */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          <p className="text-[13px] font-bold uppercase tracking-[0.5em] text-cyan-300">
            {t('template.common.seminar', 'Seminar')}
          </p>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>

        {/* organizer */}
        <p className="mt-9 inline-flex w-fit items-center gap-2.5 font-display text-[22px] font-semibold tracking-wide text-slate-200">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
          </svg>
          {organizer}
        </p>

        {/* mega headline */}
        <h1 className="mt-6 font-display text-[66px] font-black uppercase leading-[0.9] tracking-tight">
          <span
            data-pdf-color="#67e8f9"
            className="bg-gradient-to-br from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(34,211,238,0.25)]"
          >
            {eventName}
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-2">
          <span className="block h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500" />
          <span className="block h-1.5 w-3 rounded-full bg-cyan-400/50" />
          <span className="block h-1.5 w-1.5 rounded-full bg-cyan-400/30" />
        </div>

        {/* structured info grid */}
        <div className="mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/25 shadow-[0_20px_50px_-20px_rgba(8,33,79,0.9)]">
          <div className="relative bg-gradient-to-b from-[#0a2a63] to-[#08214f] p-7">
            <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t('template.common.date', 'Date')}
            </p>
            <p className="mt-3 max-w-[80%] font-display text-[26px] font-bold leading-tight text-white">{dateLabel}</p>
          </div>
          <div className="relative bg-gradient-to-b from-[#0a2a63] to-[#08214f] p-7">
            <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-3 max-w-[82%] font-display text-[22px] font-semibold leading-tight text-white">{venue}</p>
          </div>
        </div>

        {/* footer ribbon */}
        <div className="mt-7 flex items-center justify-between border-t border-cyan-400/25 pt-6">
          <div className="flex items-center gap-3 text-[15px] font-semibold text-slate-200">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {venue}
          </div>
          <p className="inline-flex items-center gap-2.5 rounded-full bg-cyan-400/10 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.32em] text-cyan-300 ring-1 ring-cyan-400/30">
            {t('template.common.registerNow', 'Register Now')}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  )
}
