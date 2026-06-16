'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Digital webinar invitation — dark purple/indigo with neon accents, a glowing
 * screen + play-button and a wifi/broadcast motif. Modern, "Join Online" tech.
 * Natural design size: 720 × 960.
 */
export default function WebinarInvitation({ values }) {
  const { t } = useI18n()
  const eventName = values.eventName?.trim() || 'Future of AI Summit'
  const venue = values.venue?.trim() || 'Pune Convention Centre'
  const organizer = values.organizer?.trim() || 'TechnoLogic India'
  const dateLabel = formatDate(values.date, '10 September 2026')

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#120726] font-sans text-white"
    >
      {/* deep indigo gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d0d45] via-[#120726] to-[#080315]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-5%,rgba(217,70,239,0.20),transparent_55%)]" />

      {/* neon glows */}
      <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />

      {/* subtle dot-matrix */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.18]">
        {Array.from({ length: 12 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={40 + c * 80} cy={40 + r * 80} r="1.6" fill="#a855f7" />
          ))
        )}
      </svg>

      {/* neon perimeter frame */}
      <div className="pointer-events-none absolute inset-7 rounded-[30px] border border-fuchsia-400/20 shadow-[inset_0_0_60px_-30px_rgba(217,70,239,0.5)]" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 py-16 text-center">
        {/* live pill */}
        <p className="inline-flex items-center gap-2.5 rounded-full border border-fuchsia-400/40 bg-white/5 px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.38em] text-fuchsia-300 shadow-[0_0_24px_-6px_rgba(217,70,239,0.6)] backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-400/70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
          </span>
          {t('template.common.liveWebinar', 'Live Webinar')}
        </p>

        <p className="mt-7 inline-flex items-center gap-2.5 font-display text-[22px] font-semibold tracking-wide text-indigo-200/90">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 18v3" />
          </svg>
          {organizer}
        </p>

        {/* glowing screen + play + wifi motif */}
        <div className="relative mt-9 flex h-[200px] w-[300px] items-center justify-center">
          {/* wifi arcs */}
          <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round">
            <path d="M55 52 a130 130 0 0 1 190 0" opacity="0.25" />
            <path d="M70 60 a120 120 0 0 1 160 0" opacity="0.4" />
            <path d="M95 88 a82 82 0 0 1 110 0" opacity="0.6" />
          </svg>
          {/* screen */}
          <div className="relative flex h-[140px] w-[220px] items-center justify-center rounded-2xl border border-fuchsia-400/50 bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/30 shadow-[0_0_48px_rgba(217,70,239,0.55)] backdrop-blur-sm">
            {/* corner brackets */}
            <span className="absolute left-3 top-3 h-4 w-4 rounded-tl border-l-2 border-t-2 border-cyan-300/70" />
            <span className="absolute right-3 top-3 h-4 w-4 rounded-tr border-r-2 border-t-2 border-cyan-300/70" />
            <span className="absolute bottom-3 left-3 h-4 w-4 rounded-bl border-b-2 border-l-2 border-cyan-300/70" />
            <span className="absolute bottom-3 right-3 h-4 w-4 rounded-br border-b-2 border-r-2 border-cyan-300/70" />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 shadow-[0_0_34px_rgba(34,211,238,0.7)]">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-[#120726]" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {/* screen stand */}
            <span className="absolute -bottom-5 left-1/2 h-5 w-1.5 -translate-x-1/2 bg-fuchsia-400/60" />
            <span className="absolute -bottom-6 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-fuchsia-400/60" />
          </div>
        </div>

        {/* headline */}
        <h1 className="mt-12 font-display text-[60px] font-black uppercase leading-[0.92] tracking-tight">
          <span
            data-pdf-color="#e879f9"
            className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_22px_rgba(217,70,239,0.3)]"
          >
            {eventName}
          </span>
        </h1>

        {/* date / join row */}
        <div className="mt-auto w-full">
          <div className="mx-auto flex w-full max-w-[24rem] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-7 py-5 shadow-[0_0_40px_-18px_rgba(168,85,247,0.7)] backdrop-blur-sm">
            <div className="text-left">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {t('template.common.date', 'Date')}
              </p>
              <p className="mt-1.5 font-display text-[24px] font-bold leading-tight text-white">{dateLabel}</p>
            </div>
            <span className="h-12 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
            <div className="text-left">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-fuchsia-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                {t('template.common.platform', 'Platform')}
              </p>
              <p className="mt-1.5 font-display text-[18px] font-semibold leading-tight text-white">{venue}</p>
            </div>
          </div>

          {/* join online CTA */}
          <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-9 py-4 text-[18px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_0_36px_rgba(168,85,247,0.6)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
            {t('template.common.joinOnline', 'Join Online')}
          </div>
        </div>
      </div>
    </div>
  )
}
