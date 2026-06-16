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
      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[110px]" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 78%)',
        }}
      />

      {/* drifting upward spark trail */}
      <div className="absolute right-[14%] top-[26%] flex flex-col items-center gap-2.5 opacity-70">
        {[3, 4, 6, 8].map((s, i) => (
          <span
            key={i}
            className="rounded-full bg-cyan-300"
            style={{ height: s, width: s, opacity: 0.3 + i * 0.18, boxShadow: '0 0 10px rgba(34,211,238,0.6)' }}
          />
        ))}
      </div>

      {/* hairline frame */}
      <div className="absolute inset-6 rounded-[26px] border border-white/12" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 pt-16 pb-14">
        {/* NOW OPEN badge */}
        <div className="flex items-center gap-3 self-start rounded-full border border-emerald-300/30 bg-emerald-400/10 px-5 py-2 shadow-[0_0_24px_rgba(52,211,153,0.25)] backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          </span>
          <span className="text-[14px] font-extrabold uppercase tracking-[0.4em] text-emerald-50">
            {t('template.common.nowOpen', 'Now Open')}
          </span>
        </div>

        {/* mega headline */}
        <h1 className="mt-12 font-display text-[78px] font-black uppercase leading-[0.88] tracking-tighter drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
          {t('template.common.weAre', 'We are')}
          <br />
          <span
            data-pdf-color="#22d3ee"
            className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent"
          >
            {t('template.common.launching', 'Launching')}
          </span>
        </h1>

        <span className="mt-7 block h-1.5 w-32 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />

        {/* rocket motif */}
        <div className="mt-9 flex items-center gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.45)] ring-1 ring-white/20">
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
        <div className="mt-12">
          <h2 className="font-display text-[54px] font-extrabold leading-[1.02] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">{shop}</h2>
          <p className="mt-2 text-[18px] font-medium tracking-wide text-cyan-200/90">{owner}</p>
        </div>

        {/* detail chips */}
        <div className="mt-auto grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-white/[0.08] to-white/[0.03] px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                {t('template.common.date', 'Launch Date')}
              </p>
              <p className="mt-0.5 font-display text-[24px] font-semibold text-white">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-white/[0.08] to-white/[0.03] px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-fuchsia-400/15 ring-1 ring-fuchsia-300/30">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
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
