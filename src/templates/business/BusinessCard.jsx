'use client'

import { useI18n } from '@/i18n/I18nProvider'

/**
 * Visiting / business card — dark slate panel with a vertical accent stripe,
 * monogram badge and a crisp contact block. Modern, professional, premium.
 * Natural design size: 1000 × 580 (landscape card).
 */
export default function BusinessCard({ values }) {
  const { t } = useI18n()
  const name = values.fullName?.trim() || 'Rohan Mehta'
  const designation = values.designation?.trim() || 'Founder & Chief Executive'
  const company = values.company?.trim() || 'Mehta Solutions'
  const phone = values.phone?.trim() || '+91 98765 43210'
  const email = values.email?.trim() || 'rohan@mehtasolutions.com'
  const address = values.address?.trim() || '12, MG Road, Pune 411001'
  const monogram = (name.charAt(0) || 'R').toUpperCase()

  return (
    <div
      data-export-root
      className="relative flex h-[580px] w-[1000px] overflow-hidden bg-white font-sans text-slate-800"
    >
      {/* ── Left dark panel ─────────────────────────────────────────────── */}
      <div className="relative flex w-[40%] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white">
        {/* soft glow */}
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        {/* fine grid lines */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:34px_34px]" />
        {/* faint concentric corner arcs */}
        <svg viewBox="0 0 120 120" className="absolute -bottom-6 -left-6 h-40 w-40 text-cyan-400/10" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="0" cy="120" r="44" />
          <circle cx="0" cy="120" r="74" />
          <circle cx="0" cy="120" r="104" />
        </svg>

        <div className="relative flex flex-col items-center">
          <div className="grid h-28 w-28 place-items-center rounded-3xl bg-white/10 ring-1 ring-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
            <span className="font-display text-6xl font-bold leading-none text-white">{monogram}</span>
          </div>
          <p className="mt-7 px-8 text-center font-display text-[27px] font-semibold leading-tight tracking-[0.01em]">
            {company}
          </p>
          <span className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
        </div>
      </div>

      {/* ── Accent stripe ───────────────────────────────────────────────── */}
      <div className="w-[10px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-indigo-600" />

      {/* ── Right content ───────────────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col justify-center px-16">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-7 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-indigo-500">
            {t('template.common.contactUs', 'Contact')}
          </p>
        </div>
        <h1 className="mt-4 text-[46px] font-extrabold leading-[1.02] tracking-[-0.01em] text-slate-900">{name}</h1>
        <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          {designation}
        </p>

        <div className="mt-9 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

        <div className="mt-9 space-y-4 text-[16px] text-slate-600">
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <span className="font-medium text-slate-800">{phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </span>
            <span className="font-medium text-slate-800">{email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="font-medium text-slate-800">{address}</span>
          </div>
        </div>
      </div>

      {/* corner watermark monogram */}
      <span className="pointer-events-none absolute -bottom-6 right-6 select-none font-display text-[150px] font-bold leading-none text-slate-900/[0.035]">
        {monogram}
      </span>
    </div>
  )
}
