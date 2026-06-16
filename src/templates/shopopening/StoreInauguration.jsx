'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Store Inauguration Invite — refined invitation card, gold on cream, a lit
 * diya (oil lamp) inauguration motif, delicate rule work and serif elegance.
 * Natural design size: 640 × 900.
 */
export default function StoreInauguration({ values }) {
  const { t } = useI18n()
  const shop = values.shopName?.trim() || 'Mehta Boutique'
  const owner = values.ownerName?.trim() || 'Rohan Mehta'
  const date = formatDate(values.date, '20 June 2026')
  const address = values.address?.trim() || 'Shop 14, MG Road, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f7f1e3] font-serif text-[#5a4423]"
    >
      {/* warm cream wash + subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ea] via-[#f7f1e3] to-[#ece0c6]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(191,160,90,0.16),_transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(120,90,34,0.08),_transparent_60%)]" />

      {/* fine gold double border */}
      <div className="absolute inset-8 rounded-[14px] border border-[#bfa05a]" />
      <div className="absolute inset-[42px] rounded-[8px] border border-[#bfa05a]/45" />

      {/* corner flourishes */}
      {[
        'left-10 top-10',
        'right-10 top-10 -scale-x-100',
        'left-10 bottom-10 -scale-y-100',
        'right-10 bottom-10 -scale-x-100 -scale-y-100',
      ].map((pos, i) => (
        <svg
          key={i}
          viewBox="0 0 60 60"
          className={`absolute h-14 w-14 text-[#bfa05a] ${pos}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M2 30 C2 14 14 2 30 2" />
          <path d="M10 30 C10 19 19 10 30 10" />
          <path d="M2 18 C2 9 9 2 18 2" opacity="0.5" />
          <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
          <circle cx="14" cy="14" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-16 pt-[72px] pb-16 text-center">
        {/* diya / oil lamp inauguration motif */}
        <div className="relative grid place-items-center">
          {/* soft halo behind the lamp */}
          <div className="absolute -top-6 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl" />
          {/* flame glow */}
          <div className="absolute -top-3 h-14 w-10 rounded-full bg-amber-300/45 blur-md" />
          <svg viewBox="0 0 80 70" className="relative h-24 w-28 text-[#bfa05a]" fill="none">
            {/* flame */}
            <path d="M40 4 C44 14 50 16 50 24 a10 10 0 0 1-20 0 c0-8 6-10 10-20Z" fill="#f59e0b" />
            <path d="M40 14 C42 19 45 20 45 25 a5 5 0 0 1-10 0 c0-4 3-5 5-11Z" fill="#fde68a" />
            {/* lamp bowl */}
            <path d="M12 46 C12 58 26 64 40 64 s28-6 28-18 Z" fill="#d9b765" stroke="#a8873f" strokeWidth="1.4" />
            <path d="M40 46 C40 40 46 40 52 42" stroke="#a8873f" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="40" cy="46" rx="28" ry="6" fill="#e7cd8e" stroke="#a8873f" strokeWidth="1.4" />
          </svg>
        </div>

        <p className="mt-8 font-sans text-[12px] font-semibold uppercase tracking-[0.45em] text-[#a8873f]">
          {t('template.common.youAreInvited', 'Cordially invite you to the')}
        </p>

        {/* headline */}
        <h1 className="mt-5 font-display text-[48px] font-bold leading-[1.04] tracking-wide">
          <span
            data-pdf-color="#7a5a22"
            className="bg-gradient-to-b from-[#9a7430] via-[#7a5a22] to-[#5e4419] bg-clip-text text-transparent"
          >
            {t('template.common.inauguration', 'Inauguration')}
          </span>
        </h1>

        {/* divider */}
        <div className="mt-6 flex items-center gap-3 text-[#bfa05a]">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#bfa05a]/70" />
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2 9 9l-7 .5 5.5 4.5L5.5 21 12 17l6.5 4-1.9-6.9L22 9.5 15 9z" />
          </svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#bfa05a]/70" />
        </div>

        {/* shop name */}
        <p className="mt-8 font-sans text-[12px] uppercase tracking-[0.35em] text-[#a8873f]/80">
          {t('template.common.greetingsFrom', 'of')}
        </p>
        <h2 className="mt-3 font-display text-[38px] font-semibold leading-tight text-[#5a4423]">{shop}</h2>
        <p className="mt-2 font-serif text-[17px] italic text-[#8a6a30]">{owner}</p>

        {/* details */}
        <div className="mt-auto w-full">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-[#bfa05a]">
            <span className="h-px w-16 bg-[#bfa05a]/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#bfa05a]/70" />
            <span className="h-px w-16 bg-[#bfa05a]/50" />
          </div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a8873f]">
            {t('template.common.date', 'Date')}
          </p>
          <p className="mt-1 font-display text-[26px] font-semibold text-[#5a4423]">{date}</p>
          <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a8873f]">
            {t('template.common.venue', 'Address')}
          </p>
          <p className="mt-1 font-serif text-[16px] text-[#5a4423]">{address}</p>
        </div>
      </div>
    </div>
  )
}
