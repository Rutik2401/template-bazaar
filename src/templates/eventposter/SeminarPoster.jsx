'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Corporate seminar poster — deep-blue & cyan, a structured grid layout and a
 * subtle speaker-podium motif. Clean, professional, conference-ready.
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#06183b] via-[#0a225a] to-[#041230]" />

      {/* fine corporate grid */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="960" stroke="#22d3ee" strokeWidth="1" />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="720" y2={i * 60} stroke="#22d3ee" strokeWidth="1" />
        ))}
      </svg>

      {/* glow accents */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -left-20 bottom-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      {/* speaker-podium motif — bottom right */}
      <svg viewBox="0 0 200 220" className="absolute bottom-0 right-8 h-[260px] w-[240px] opacity-[0.18]" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* podium */}
        <path d="M70 210 L86 110 L114 110 L130 210 Z" />
        <line x1="60" y1="210" x2="140" y2="210" />
        {/* mic stand */}
        <line x1="100" y1="110" x2="100" y2="74" />
        <circle cx="100" cy="64" r="11" />
        {/* speaker silhouette */}
        <circle cx="100" cy="34" r="16" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 py-16">
        {/* eyebrow */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-400" />
          <p className="text-[13px] font-bold uppercase tracking-[0.5em] text-cyan-300">
            {t('template.common.seminar', 'Seminar')}
          </p>
        </div>

        {/* organizer */}
        <p className="mt-8 font-display text-[24px] font-semibold tracking-wide text-slate-200">
          {organizer}
        </p>

        {/* mega headline */}
        <h1 className="mt-5 font-display text-[64px] font-black uppercase leading-[0.92] tracking-tight">
          <span
            data-pdf-color="#67e8f9"
            className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
          >
            {eventName}
          </span>
        </h1>

        <span className="mt-8 block h-1.5 w-32 bg-cyan-400" />

        {/* structured info grid */}
        <div className="mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/20">
          <div className="bg-[#08214f] p-7">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t('template.common.date', 'Date')}
            </p>
            <p className="mt-3 font-display text-[26px] font-bold leading-tight text-white">{dateLabel}</p>
          </div>
          <div className="bg-[#08214f] p-7">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-300">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-3 font-display text-[22px] font-semibold leading-tight text-white">{venue}</p>
          </div>
        </div>

        {/* footer ribbon */}
        <div className="mt-8 flex items-center justify-between border-t border-cyan-400/25 pt-6">
          <div className="flex items-center gap-3 text-[15px] font-semibold text-slate-200">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {venue}
          </div>
          <p className="text-[13px] font-bold uppercase tracking-[0.32em] text-cyan-300">
            {t('template.common.registerNow', 'Register Now')}
          </p>
        </div>
      </div>
    </div>
  )
}
