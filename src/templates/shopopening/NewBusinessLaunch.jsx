'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * New Business Launch — modern, vivid gradient, a glowing "NOW OPEN" pill,
 * sleek startup-launch energy with a rising rocket motif and grid accents.
 * Natural design size: 720 × 960.
 */
export default function NewBusinessLaunch({ values }) {
  const { t } = useI18n()
  const shop = values.shopName?.trim() || 'Mehta Boutique'
  const owner = values.ownerName?.trim() || 'Rohan Mehta'
  const date = formatDate(values.date, '20 June 2026')
  const address = values.address?.trim() || 'Shop 14, MG Road, Pune'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#0a0a1f] font-sans text-white"
    >
      {/* vivid aurora gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#0a0a1f] to-[#0891b2]" />
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/40 blur-[120px]" />
      <div className="absolute -bottom-28 -right-20 h-[440px] w-[440px] rounded-full bg-cyan-400/40 blur-[130px]" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 pt-16 pb-14">
        {/* NOW OPEN badge */}
        <div className="flex items-center gap-3 self-start rounded-full border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[14px] font-extrabold uppercase tracking-[0.4em] text-white">
            {t('template.common.nowOpen', 'Now Open')}
          </span>
        </div>

        {/* mega headline */}
        <h1 className="mt-12 font-display text-[76px] font-black uppercase leading-[0.9] tracking-tighter">
          {t('template.common.weAre', 'We are')}
          <br />
          <span
            data-pdf-color="#22d3ee"
            className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent"
          >
            {t('template.common.launching', 'Launching')}
          </span>
        </h1>

        {/* rocket motif */}
        <div className="mt-10 flex items-center gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.45)]">
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
              <path d="M12 15 9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
          <p className="text-[20px] font-medium leading-snug text-white/80">
            {t('template.common.somethingNew', 'Something brand new is arriving in your neighbourhood.')}
          </p>
        </div>

        {/* shop name */}
        <h2 className="mt-12 font-display text-[52px] font-extrabold leading-tight text-white">{shop}</h2>
        <p className="mt-2 text-[18px] font-medium text-cyan-200/90">{owner}</p>

        {/* detail chips */}
        <div className="mt-auto grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                {t('template.common.date', 'Launch Date')}
              </p>
              <p className="mt-0.5 font-display text-[24px] font-semibold text-white">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-fuchsia-300">
                {t('template.common.venue', 'Address')}
              </p>
              <p className="mt-0.5 text-[18px] font-medium text-white">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
