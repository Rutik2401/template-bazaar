'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Temple ornamental SVG pieces ───────────────────────────────────────── */

/** Temple torana / arch with a stepped shikhara crown and a finial kalash. */
function ToranaArch({ className = '' }) {
  return (
    <svg viewBox="0 0 220 130" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* twin pillars */}
      <rect x="14" y="58" width="12" height="68" rx="2" fill="currentColor" fillOpacity="0.16" />
      <rect x="194" y="58" width="12" height="68" rx="2" fill="currentColor" fillOpacity="0.16" />
      {/* pillar capitals + bases */}
      <path d="M10 58h20M10 124h20M188 58h20M188 124h20" opacity="0.7" />
      {/* scalloped arch (cusped temple toran) */}
      <path
        d="M20 60 Q20 24 56 20 Q72 4 110 4 Q148 4 164 20 Q200 24 200 60"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path d="M20 60 Q20 24 56 20 Q72 4 110 4 Q148 4 164 20 Q200 24 200 60" opacity="0.9" />
      {/* cusps along the inner arch */}
      <path
        d="M34 60 q9 -8 18 0 q9 -8 18 0 q9 -8 18 0 q9 -8 18 0 q9 -8 18 0 q9 -8 18 0 q9 -8 18 0"
        opacity="0.6"
      />
      {/* stepped shikhara crown */}
      <path d="M92 4 L96 -6 L124 -6 L128 4 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M100 -6 L104 -14 L116 -14 L120 -6 Z" fill="currentColor" fillOpacity="0.22" />
      {/* finial kalash on top */}
      <line x1="110" y1="-14" x2="110" y2="-22" />
      <circle cx="110" cy="-25" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Hanging temple bell on a beaded chain. */
function HangingBell({ className = '' }) {
  return (
    <svg viewBox="0 0 50 130" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* beaded chain */}
      <line x1="25" y1="0" x2="25" y2="24" strokeDasharray="1.5 5" opacity="0.85" />
      {/* crown loop */}
      <circle cx="25" cy="28" r="4.5" />
      {/* bell body */}
      <path d="M25 33c-11 3-16 14-16 36h32c0-22-5-33-16-36Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M9 69h32" />
      <path d="M7 73h36" opacity="0.85" />
      {/* engraved arc */}
      <path d="M15 58q10 7 20 0" opacity="0.4" />
      {/* clapper */}
      <line x1="25" y1="73" x2="25" y2="86" />
      <circle cx="25" cy="89" r="3.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Brass kalash (sacred pot) with mango leaves and a coconut. */
function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 70 96" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="35" cy="16" rx="10" ry="12" fill="currentColor" fillOpacity="0.2" />
      {/* mango leaves */}
      <path d="M35 28c-9 0-16-3-21-8 7-1 14 1 21 6 7-5 14-7 21-6-5 5-12 8-21 8Z" fill="currentColor" fillOpacity="0.22" />
      {/* pot neck + body */}
      <path d="M24 32h22l-2 7c9 4 14 12 14 22 0 12-11 20-23 20S12 73 12 61c0-10 5-18 14-22l-2-7Z" fill="currentColor" fillOpacity="0.13" />
      <path d="M18 50h34" />
      <path d="M22 60h26" opacity="0.7" />
      <circle cx="35" cy="71" r="2.6" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  )
}

/** Small diya (oil lamp) with a flame. */
function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* flame */}
      <path d="M30 2c3 6 3 10 0 15-3-5-3-9 0-15Z" fill="currentColor" fillOpacity="0.55" stroke="none" />
      <path d="M30 6c1.6 3 1.6 6 0 9-1.6-3-1.6-6 0-9Z" fill="currentColor" fillOpacity="0.8" stroke="none" />
      {/* lamp bowl */}
      <path d="M8 26c0 9 10 16 22 16s22-7 22-16Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M6 26h48" />
      {/* base */}
      <path d="M22 44h16" opacity="0.7" />
    </svg>
  )
}

/** Beaded ornate divider with a central temple lotus, used as the "weds". */
function EngagementDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M16 12h80" strokeLinecap="round" />
      <path d="M144 12h80" strokeLinecap="round" />
      {/* central lotus diamond */}
      <path d="M120 3c4 4 6 6 6 9 0 3-2 5-6 9-4-4-6-6-6-9 0-3 2-5 6-9Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="120" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="100" cy="12" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="140" cy="12" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="216" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Temple-style traditional engagement (sakharpuda) invitation — a cusped
 * temple torana crowned with a shikhara & kalash, flanked by hanging bells,
 * a kalash + diya beneath, set on a maroon/turmeric panel ringed by a beaded
 * gold border. Devotional and ornate temple aesthetic.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function TempleEngagement({ values }) {
  const i18n = (() => {
    try {
      return useI18n()
    } catch {
      return { t: (_k, fb) => fb }
    }
  })()
  const t = i18n?.t || ((_k, fb) => fb)

  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#4a0f17] font-serif text-amber-100"
    >
      {/* Deep temple-maroon base with a warm turmeric glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6a1620] via-[#4a0f17] to-[#2c070d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_24%,_rgba(214,170,74,0.2),_transparent_60%)]" />

      {/* Turmeric silk outer band with beaded gold piping */}
      <div className="absolute inset-0 border-[16px] border-[#9a5e10]" />
      <div className="absolute inset-[10px] border border-[#e8c878]/80" />
      {/* Beaded inner border (dotted gold) around the maroon panel */}
      <div className="absolute inset-[20px] rounded-sm border-2 border-dotted border-[#e8c878]/45" />
      <div className="absolute inset-[26px] rounded-sm border border-[#d6aa4a]/35" />

      {/* Header: temple torana arch flanked by hanging bells */}
      <div className="absolute inset-x-0 top-[40px] flex items-start justify-center">
        <HangingBell className="mt-2 h-28 w-11 text-[#e2bd66]/80" />
        <ToranaArch className="mx-2 mt-5 h-32 w-56 text-[#e8c878]" />
        <HangingBell className="mt-2 h-28 w-11 text-[#e2bd66]/80" />
      </div>

      {/* Content panel */}
      <div className="relative mx-auto flex h-full w-[480px] flex-col items-center pb-[56px] pt-[182px] text-center">
        {/* Kalash + diya devotional crest */}
        <div className="flex items-end justify-center gap-2">
          <Diya className="mb-1 h-8 w-12 text-[#f0b34a]" />
          <Kalash className="h-20 w-14 text-[#e8c878]" />
          <Diya className="mb-1 h-8 w-12 text-[#f0b34a]" />
        </div>

        {/* Auspicious header */}
        <p className="mt-3 font-display text-[26px] tracking-wide text-[#e8c878]">॥ शुभ साखरपुडा ॥</p>
        <div className="mt-2 flex items-center gap-2 text-[#d6aa4a]/70">
          <span className="h-px w-12 bg-[#d6aa4a]/60" />
          <span className="text-[10px]">✦</span>
          <span className="h-px w-12 bg-[#d6aa4a]/60" />
        </div>
        <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.44em] text-[#e2bd66]/85">
          {t('template.common.togetherWithFamilies', 'With the blessings of the elders')}
        </p>

        {/* Couple names */}
        <div className="mt-6 flex w-full flex-col items-center">
          <h1 className="font-script text-[58px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-[#f3dca0] via-[#e2bd66] to-[#b8862b] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          {/* engagement divider */}
          <div className="my-3 flex flex-col items-center gap-1">
            <EngagementDivider className="h-5 w-60 text-[#d6aa4a]" />
            <span className="font-display text-[18px] italic tracking-wide text-[#e0905a]">
              {t('template.common.engagement', 'engagement')}
            </span>
          </div>

          <h1 className="font-script text-[58px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-bl from-[#f3dca0] via-[#e2bd66] to-[#b8862b] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>
        </div>

        {/* Date · time block */}
        <div className="mt-7 flex w-full flex-col items-center gap-1 rounded-md border border-[#e8c878]/55 bg-[#2c070d]/45 px-9 py-3">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.42em] text-[#e2bd66]">
            {t('template.common.saveTheDate', 'Save the Date')}
          </p>
          <p className="font-display text-[24px] tracking-wide text-amber-100">
            {date}
            {time && ` · ${time}`}
          </p>
        </div>

        {/* Venue */}
        <div className="mt-5 flex w-full flex-col items-center gap-1">
          <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#e2bd66]/80">
            {t('template.common.venue', 'Venue')}
          </p>
          <p className="max-w-[20rem] text-[16px] leading-snug text-amber-100">{venue}</p>
        </div>

        {/* Family name */}
        <p className="mt-auto text-[14px] italic leading-relaxed text-[#e8c878]/85">
          {t('template.common.withBestCompliments', 'With best compliments from')}
          <br />
          <span className="font-display text-lg not-italic tracking-wide text-amber-100">{family}</span>
        </p>
      </div>
    </div>
  )
}
