'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── New job motifs ────────────────────────────────────────────────────── */

/** Briefcase with a clasp and handle. */
function Briefcase({ className = '' }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="34" width="92" height="62" rx="8" fill="currentColor" fillOpacity="0.12" />
      <path d="M44 34v-8a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v8" />
      <path d="M14 60h92" opacity="0.8" />
      <rect x="52" y="54" width="16" height="12" rx="3" fill="currentColor" fillOpacity="0.25" />
    </svg>
  )
}

/** A sprouting leaf — fresh-start motif. */
function Sprout({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 44V20" />
      <path d="M24 26c-8 0-14-5-14-14 8 0 14 5 14 14Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 22c8 0 14-5 14-14-8 0-14 5-14 14Z" fill="currentColor" fillOpacity="0.18" />
    </svg>
  )
}

/**
 * New job congratulations — optimistic teal-to-green, a briefcase badge and
 * sprouting new-beginning leaves with an airy, hopeful layout.
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
      {/* fresh teal/green gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d6b62] via-[#0a4f4a] to-[#042e2d]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_24%,rgba(110,231,183,0.30),transparent_55%)]" />

      {/* corner sprouts */}
      <Sprout className="pointer-events-none absolute left-10 top-20 h-10 w-10 text-emerald-300/55" />
      <Sprout className="pointer-events-none absolute right-12 top-28 h-8 w-8 text-teal-200/45 -scale-x-100" />
      <Sprout className="pointer-events-none absolute right-20 bottom-24 h-9 w-9 text-emerald-300/40" />

      {/* soft frame */}
      <div className="pointer-events-none absolute inset-5 rounded-3xl border border-emerald-300/40" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-emerald-200">
          {t('template.common.aFreshStart', 'a fresh start begins')}
        </p>
        <h1 className="mt-4 max-w-[22rem] font-display text-[46px] font-bold leading-[1.0]">
          <span
            data-pdf-color="#6ee7b7"
            className="bg-gradient-to-r from-teal-200 via-emerald-300 to-emerald-400 bg-clip-text text-transparent"
          >
            Congrats on the New Job!
          </span>
        </h1>
      </header>

      {/* Briefcase badge */}
      <div className="relative flex flex-col items-center">
        <div className="grid h-32 w-32 place-items-center rounded-3xl border border-emerald-300/50 bg-[#0a4f4a]/70 shadow-[inset_0_0_28px_rgba(110,231,183,0.22)]">
          <Briefcase className="h-20 w-20 text-emerald-200" />
        </div>
        <div className="mt-6 flex items-center gap-3 text-emerald-300">
          <span className="h-px w-10 bg-emerald-300/60" />
          <Sprout className="h-4 w-4" />
          <span className="h-px w-10 bg-emerald-300/60" />
        </div>
      </div>

      {/* Honoree + message */}
      <main className="relative flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.4em] text-emerald-200">
          {t('template.common.cheersTo', 'cheers to')}
        </p>
        <p className="mt-3 font-display text-4xl font-semibold text-emerald-50">{name}</p>
        <p className="mt-6 max-w-[25rem] text-[18px] leading-relaxed text-emerald-50/90">
          {message}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <span className="mb-3 h-px w-24 bg-emerald-300/50" />
        <p className="text-[12px] uppercase tracking-[0.35em] text-emerald-200">
          {t('template.common.hereIsToWhatsNext', "here's to what's next")}
        </p>
      </footer>
    </div>
  )
}
