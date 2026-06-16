'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Wide web banner for a limited-time travel offer — deep sky-blue gradient,
 * a dashed flight route with a soaring plane, a "Limited Offer" flag and an
 * oversized price on the right. Natural design size: 1000 × 600 (landscape).
 */
export default function TravelOfferBanner({ values }) {
  const { t } = useI18n()
  const packageName = values.packageName?.trim() || 'Magical Kerala 5N/6D'
  const price = values.price?.trim() || '₹ 18,999'
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[600px] w-[1000px] overflow-hidden bg-[#04263f] font-sans text-white"
    >
      {/* sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#062f55] via-[#0a6db0] to-[#27c4e0]" />

      {/* soft cloud / light blooms */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_88%_22%,rgba(255,255,255,0.32),transparent_38%)]" />

      <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bannerRoute" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bff0ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* dashed flight route arc */}
        <path
          d="M-20 470 C220 360 360 240 560 230"
          fill="none"
          stroke="url(#bannerRoute)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 16"
          opacity="0.85"
        />
        {/* origin dot */}
        <circle cx="60" cy="430" r="8" fill="#ffffff" />
        <circle cx="60" cy="430" r="14" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />

        {/* faint clouds */}
        <g fill="#ffffff" opacity="0.16">
          <ellipse cx="180" cy="120" rx="70" ry="24" />
          <ellipse cx="240" cy="132" rx="50" ry="20" />
          <ellipse cx="700" cy="500" rx="90" ry="28" />
          <ellipse cx="780" cy="512" rx="60" ry="22" />
        </g>
      </svg>

      {/* soaring plane at the head of the route */}
      <svg viewBox="0 0 64 64" className="absolute left-[520px] top-[180px] h-20 w-20 -rotate-[18deg] drop-shadow-lg" fill="#ffffff">
        <path d="M2 38l24-6 14-22c2-3 6-4 8-2s1 6-1 8L34 28l24-6 4 4-22 12-4 16-5 1-1-13-14 4-2 8-4 1-1-12-9-3 1-5z" />
      </svg>

      {/* dashed corner frame */}
      <div className="pointer-events-none absolute inset-5 rounded-2xl border-2 border-dashed border-white/25" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full items-center justify-between px-16">
        {/* left — headline */}
        <div className="max-w-[560px]">
          {/* limited offer flag */}
          <div className="inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-rose-500 to-orange-500 px-5 py-2 text-[15px] font-extrabold uppercase tracking-[0.28em] shadow-lg">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {t('template.common.limitedOffer', 'Limited Offer')}
          </div>

          <h1 className="mt-6 font-display text-[58px] font-black leading-[0.98] drop-shadow">
            <span
              data-pdf-color="#fff4cc"
              className="bg-gradient-to-b from-white via-sky-50 to-amber-100 bg-clip-text text-transparent"
            >
              {packageName}
            </span>
          </h1>

          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white/15 px-5 py-2.5 text-[18px] font-bold backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-white/95">{contact}</span>
          </div>
        </div>

        {/* right — big price disc */}
        <div className="relative flex h-[300px] w-[300px] shrink-0 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-white/30" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-amber-200/60" />
          <div className="relative flex flex-col items-center text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.3em] text-amber-100">
              {t('template.common.startingFrom', 'Starting from')}
            </p>
            <p className="mt-1 font-display text-[60px] font-black leading-[0.9]">
              <span
                data-pdf-color="#ffe39a"
                className="bg-gradient-to-b from-amber-100 via-amber-200 to-orange-300 bg-clip-text text-transparent"
              >
                {price}
              </span>
            </p>
            <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.25em] text-white/85">
              {t('template.common.perPerson', 'per person')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
