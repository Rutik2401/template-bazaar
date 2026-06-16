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
      <div className="absolute inset-0 bg-gradient-to-tr from-[#06294f] via-[#0a6db0] to-[#3fd2ea]" />
      {/* warm horizon wash */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a5b86]/60 to-transparent" />

      {/* soft cloud / light blooms */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_84%_20%,rgba(255,247,214,0.55),transparent_34%)]" />

      <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bannerRoute" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bff0ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <radialGradient id="bannerSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff7da" />
            <stop offset="60%" stopColor="#ffe49c" />
            <stop offset="100%" stopColor="#ffd27a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bannerSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1aa7c4" />
            <stop offset="100%" stopColor="#0a5b80" />
          </linearGradient>
          <linearGradient id="bannerIsland" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e5a4a" />
            <stop offset="100%" stopColor="#073a32" />
          </linearGradient>
        </defs>

        {/* soft sun behind the headline corner */}
        <circle cx="840" cy="130" r="120" fill="url(#bannerSun)" />

        {/* sea band along the bottom */}
        <path d="M0 500 L1000 500 L1000 600 L0 600 Z" fill="url(#bannerSea)" opacity="0.85" />
        <path d="M0 522 q60 -12 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#bff0ff" strokeWidth="3" opacity="0.45" />
        <path d="M0 556 q60 -12 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#bff0ff" strokeWidth="2.5" opacity="0.3" />

        {/* tropical island silhouette on the horizon */}
        <g fill="url(#bannerIsland)">
          <path d="M150 500 q70 -70 150 -2 Z" />
          <path d="M170 498 C168 470 162 452 156 444 M156 444 C140 432 120 432 108 440 M156 444 C172 430 192 430 206 440 M156 444 C150 428 152 410 162 398" stroke="#0c4a3e" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>

        {/* dashed flight route arc */}
        <path
          d="M-20 470 C220 360 360 240 560 230"
          fill="none"
          stroke="url(#bannerRoute)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 16"
          opacity="0.9"
        />
        {/* origin dot */}
        <circle cx="60" cy="430" r="8" fill="#ffffff" />
        <circle cx="60" cy="430" r="14" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />

        {/* faint clouds */}
        <g fill="#ffffff">
          <g opacity="0.2">
            <ellipse cx="180" cy="120" rx="72" ry="24" />
            <ellipse cx="244" cy="132" rx="50" ry="20" />
            <ellipse cx="120" cy="132" rx="42" ry="16" />
          </g>
          <g opacity="0.14">
            <ellipse cx="700" cy="470" rx="90" ry="26" />
            <ellipse cx="782" cy="482" rx="60" ry="20" />
          </g>
          <g opacity="0.16">
            <ellipse cx="430" cy="90" rx="56" ry="18" />
            <ellipse cx="480" cy="98" rx="38" ry="14" />
          </g>
        </g>

        {/* a couple of birds */}
        <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65">
          <path d="M300 110 c10 -12 18 -12 28 0 c10 -12 18 -12 28 0" />
          <path d="M360 140 c8 -9 14 -9 22 0" />
        </g>
      </svg>

      {/* soaring plane at the head of the route */}
      <svg viewBox="0 0 64 64" className="absolute left-[520px] top-[180px] h-20 w-20 -rotate-[18deg] drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]" fill="#ffffff">
        <path d="M2 38l24-6 14-22c2-3 6-4 8-2s1 6-1 8L34 28l24-6 4 4-22 12-4 16-5 1-1-13-14 4-2 8-4 1-1-12-9-3 1-5z" />
      </svg>
      {/* condensation trail behind the plane */}
      <svg viewBox="0 0 200 60" className="absolute left-[420px] top-[226px] h-12 w-[140px] -rotate-[12deg]" fill="none">
        <path d="M0 40 C60 30 130 18 196 8" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" opacity="0.5" />
      </svg>

      {/* dashed corner frame */}
      <div className="pointer-events-none absolute inset-5 rounded-2xl border-2 border-dashed border-white/30" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full items-center justify-between px-16">
        {/* left — headline */}
        <div className="max-w-[560px]">
          {/* limited offer flag */}
          <div className="inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-rose-500 to-orange-500 px-5 py-2 text-[15px] font-extrabold uppercase tracking-[0.28em] shadow-[0_8px_22px_rgba(244,63,94,0.4)] ring-1 ring-white/20">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {t('template.common.limitedOffer', 'Limited Offer')}
          </div>

          <h1 className="mt-6 font-display text-[60px] font-black leading-[0.96] tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
            <span
              data-pdf-color="#fff4cc"
              className="bg-gradient-to-b from-white via-sky-50 to-amber-100 bg-clip-text text-transparent"
            >
              {packageName}
            </span>
          </h1>

          <div className="mt-5 flex items-center gap-3 text-amber-100/80">
            <span className="h-px w-14 bg-amber-100/50" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">{t('template.common.perPerson', 'per person')}</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/15 px-5 py-2.5 text-[18px] font-bold ring-1 ring-white/25 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-white/95">{contact}</span>
          </div>
        </div>

        {/* right — big price disc */}
        <div className="relative flex h-[300px] w-[300px] shrink-0 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.3)] ring-2 ring-white/35 backdrop-blur-sm" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-amber-200/65" />
          {/* little tag knot on the disc */}
          <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-200/80 ring-2 ring-white/40" />
          <div className="relative flex flex-col items-center text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.3em] text-amber-100">
              {t('template.common.startingFrom', 'Starting from')}
            </p>
            <p className="mt-1.5 font-display text-[62px] font-black leading-[0.88] tracking-tight">
              <span
                data-pdf-color="#ffe39a"
                className="bg-gradient-to-b from-amber-50 via-amber-200 to-orange-400 bg-clip-text text-transparent"
              >
                {price}
              </span>
            </p>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.25em] text-white/85">
              {t('template.common.perPerson', 'per person')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
