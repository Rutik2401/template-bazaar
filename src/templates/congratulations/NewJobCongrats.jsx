'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── New job motifs ────────────────────────────────────────────────────── */

/** Briefcase with a clasp and handle. */
function Briefcase({ className = '' }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="34" width="92" height="62" rx="9" fill="currentColor" fillOpacity="0.12" />
      <path d="M44 34v-8a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v8" />
      <path d="M14 60h92" opacity="0.85" />
      <rect x="52" y="54" width="16" height="12" rx="3" fill="currentColor" fillOpacity="0.28" />
    </svg>
  )
}

/** A sprouting twin-leaf — fresh-start motif. */
function Sprout({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 44V18" />
      <path d="M24 26c-8 0-14-5-14-14 8 0 14 5 14 14Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M24 22c8 0 14-5 14-14-8 0-14 5-14 14Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

/** A small four-point spark / new-day glint. */
function Spark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1 6.4 5.6 11 12 12-6.4 1-11 5.6-12 12-1-6.4-5.6-11-12-12 6.4-1 11-5.6 12-12Z" />
    </svg>
  )
}

/** Open doorway with a horizon glow — stepping into what's next. */
function Doorway({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 56V12a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v44" />
      <path d="M18 56h28" />
      <path d="M40 32h.01" />
      <path d="M30 8 30 8" />
      <rect x="24" y="14" width="16" height="36" rx="2" fill="currentColor" fillOpacity="0.14" />
    </svg>
  )
}

/**
 * New job congratulations — optimistic teal-to-emerald, a briefcase badge
 * ringed in light, sprouting new-beginning leaves and an airy doorway-into-
 * tomorrow feel. Hopeful, modern and clean.
 * Natural design size: 640 × 900.
 */
export default function NewJobCongrats({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Rohan Mehta'
  const message =
    values.message?.trim() ||
    'Wishing you continued success and happiness in this new chapter!'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#053b3a] px-14 py-16 text-center font-sans text-emerald-50"
    >
      {/* fresh teal/green gradient + sunrise halo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f7a6f] via-[#0a4f4a] to-[#032b2a]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_22%,rgba(167,243,208,0.34),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_118%,rgba(4,40,38,0.75),transparent_42%)]" />

      {/* corner sprouts + sparks */}
      <Sprout className="pointer-events-none absolute left-10 top-20 h-11 w-11 text-emerald-300/55" />
      <Sprout className="pointer-events-none absolute right-12 top-28 h-8 w-8 text-teal-200/45 -scale-x-100" />
      <Sprout className="pointer-events-none absolute right-20 bottom-24 h-9 w-9 text-emerald-300/40" />
      <Sprout className="pointer-events-none absolute left-16 bottom-28 h-7 w-7 text-teal-200/35 -scale-x-100" />
      <Spark className="pointer-events-none absolute left-1/3 top-36 h-3 w-3 text-emerald-100/70" />
      <Spark className="pointer-events-none absolute right-1/4 top-44 h-2.5 w-2.5 text-teal-100/60" />

      {/* soft rounded frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[28px] border border-emerald-300/45" />
      <div className="pointer-events-none absolute inset-[30px] rounded-[22px] border border-emerald-200/15" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.55em] text-emerald-200">
          {t('template.common.aFreshStart', 'a fresh start begins')}
        </p>
        <div className="mt-4 flex items-center gap-2.5 text-emerald-300/80">
          <span className="h-px w-8 bg-emerald-300/60" />
          <Sprout className="h-4 w-4" />
          <span className="h-px w-8 bg-emerald-300/60" />
        </div>
        <h1 className="mt-5 max-w-[22rem] font-display text-[48px] font-bold leading-[0.98] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <span
            data-pdf-color="#6ee7b7"
            className="bg-gradient-to-r from-teal-200 via-emerald-300 to-lime-200 bg-clip-text text-transparent"
          >
            Congrats on the New Job!
          </span>
        </h1>
      </header>

      {/* Briefcase badge with horizon doorway */}
      <div className="relative flex flex-col items-center">
        <div className="relative grid h-36 w-36 place-items-center rounded-[26px] border border-emerald-300/55 bg-gradient-to-b from-[#0c6056] to-[#073e3a] shadow-[inset_0_0_30px_rgba(167,243,208,0.24),0_12px_38px_rgba(0,0,0,0.4)]">
          <span className="pointer-events-none absolute inset-2 rounded-[20px] border border-emerald-200/25" />
          <Briefcase className="h-[5.5rem] w-[5.5rem] text-emerald-100 drop-shadow-[0_0_8px_rgba(167,243,208,0.3)]" />
        </div>
        <Doorway className="mt-5 h-10 w-10 text-emerald-200/70" />
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.45em] text-emerald-200">
          {t('template.common.cheersTo', 'cheers to')}
        </p>
        <p className="mt-3 font-display text-[40px] font-semibold leading-tight text-emerald-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {name}
        </p>
        <div className="mt-4 mb-1 flex items-center gap-3 text-emerald-300">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-300/70" />
          <Spark className="h-3 w-3" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-300/70" />
        </div>
        <p className="mt-4 max-w-[25rem] text-[18px] leading-relaxed text-emerald-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <span className="mb-3 h-px w-28 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
        <p className="text-[12px] uppercase tracking-[0.4em] text-emerald-200">
          {t('template.common.hereIsToWhatsNext', "here's to what's next")}
        </p>
      </footer>
    </div>
  )
}
