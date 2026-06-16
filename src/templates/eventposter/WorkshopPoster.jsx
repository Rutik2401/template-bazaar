'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Energetic hands-on workshop poster — bold orange & teal blocks, oversized
 * blocky type and a tools / wrench-and-gear motif. Lively and practical.
 * Natural design size: 720 × 960.
 */
export default function WorkshopPoster({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Future of AI Summit'
  const venue = values.venue?.trim() || 'Pune Convention Centre'
  const organizer = values.organizer?.trim() || 'TechnoLogic India'
  const dateLabel = formatDate(values.date, '10 September 2026')

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#0d3b3b] font-sans text-white"
    >
      {/* big colour blocks */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f4444] via-[#0d3b3b] to-[#072727]" />
      <div className="absolute -left-20 -top-24 h-96 w-96 rotate-12 rounded-[60px] bg-gradient-to-br from-[#fb923c] to-[#f97316] shadow-[0_30px_80px_-20px_rgba(249,115,22,0.5)]" />
      <div className="absolute -bottom-28 -right-24 h-[420px] w-[420px] -rotate-12 rounded-[80px] bg-gradient-to-tl from-[#0f766e] to-[#14b8a6] shadow-[0_-30px_80px_-20px_rgba(20,184,166,0.5)]" />

      {/* diagonal stripe band */}
      <div className="absolute left-0 top-[300px] h-24 w-full skew-y-[-5deg] bg-gradient-to-r from-[#fb923c]/95 to-[#f97316]/80" />
      <div className="absolute left-0 top-[296px] h-1.5 w-full skew-y-[-5deg] bg-[#0d3b3b]/40" />

      {/* dotted texture */}
      <div className="absolute right-10 top-44 grid grid-cols-5 gap-3 opacity-70">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#0d3b3b]" />
        ))}
      </div>

      {/* tools / gear motif — bottom left */}
      <svg viewBox="0 0 200 200" className="absolute bottom-6 left-10 h-[210px] w-[210px] opacity-25" fill="none" stroke="#0d3b3b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* wrench */}
        <path d="M40 160 L120 80 M120 80 a26 26 0 1 0 -10 -34 l-18 18 6 24 24 6 18 -18 a26 26 0 0 0 -20 4" />
        {/* gear */}
        <circle cx="150" cy="150" r="22" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8
          return (
            <line
              key={i}
              x1={150 + 22 * Math.cos(a)}
              y1={150 + 22 * Math.sin(a)}
              x2={150 + 32 * Math.cos(a)}
              y2={150 + 32 * Math.sin(a)}
            />
          )
        })}
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 py-16">
        {/* badge */}
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0d3b3b] px-5 py-2.5 text-[14px] font-black uppercase tracking-[0.32em] text-[#fb923c] ring-2 ring-[#fb923c]/60 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m14.7 6.3 3 3M3 21l3-1 11-11-2-2L4 18l-1 3Z" />
          </svg>
          {t('template.common.handsOn', 'Hands-On')}
        </p>

        {/* organizer */}
        <p className="mt-7 inline-flex w-fit items-center gap-2.5 font-display text-[22px] font-black uppercase tracking-wide text-[#0d3b3b]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
          </svg>
          {organizer}
        </p>

        {/* mega blocky headline */}
        <h1 className="mt-4 font-display text-[80px] font-black uppercase leading-[0.84] tracking-tighter text-white drop-shadow-[0_5px_0_rgba(13,59,59,0.5)]">
          {eventName.split(' ').slice(0, 2).join(' ')}
          <br />
          <span
            data-pdf-color="#5eead4"
            className="bg-gradient-to-r from-teal-100 via-teal-300 to-emerald-300 bg-clip-text text-transparent"
          >
            {eventName.split(' ').slice(2).join(' ') || 'Workshop'}
          </span>
        </h1>

        {/* big workshop word block */}
        <div className="mt-9 inline-flex w-fit items-center gap-3 rounded-md bg-gradient-to-r from-[#14b8a6] to-[#0d9488] px-6 py-3 shadow-[0_12px_30px_-12px_rgba(20,184,166,0.7)]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0d3b3b] text-[#14b8a6]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <p className="font-display text-[26px] font-black uppercase tracking-[0.18em] text-[#0d3b3b]">
            {t('template.common.workshop', 'Workshop')}
          </p>
        </div>

        {/* info blocks */}
        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-4 rounded-l-md bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-5 shadow-[0_12px_30px_-14px_rgba(249,115,22,0.8)]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0d3b3b]/15">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0d3b3b]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-[#0d3b3b]/70">
                {t('template.common.date', 'Date')}
              </p>
              <p className="font-display text-[26px] font-black uppercase leading-tight text-[#0d3b3b]">{dateLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-l-md bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] px-6 py-5 shadow-[0_12px_30px_-14px_rgba(20,184,166,0.8)]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0d3b3b]/15">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0d3b3b]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-[#0d3b3b]/70">
                {t('template.common.venue', 'Venue')}
              </p>
              <p className="font-display text-[22px] font-black uppercase leading-tight text-[#0d3b3b]">{venue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
