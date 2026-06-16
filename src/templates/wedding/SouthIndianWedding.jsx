'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Kanchipuram / temple ornamental SVG pieces ─────────────────────────── */

/** Stepped temple gopuram (tower) silhouette crowned with kalasham finials. */
function Gopuram({ className = '' }) {
  // five stepped tiers tapering to the top, each with a notched cornice
  const tiers = [
    { y: 64, w: 92, x: 24 },
    { y: 52, w: 76, x: 32 },
    { y: 40, w: 60, x: 40 },
    { y: 28, w: 44, x: 48 },
    { y: 16, w: 28, x: 56 },
  ]
  return (
    <svg viewBox="0 0 140 86" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      {/* base plinth */}
      <rect x="14" y="76" width="112" height="8" rx="1.5" fill="currentColor" fillOpacity="0.16" />
      {tiers.map((tr, i) => (
        <g key={i}>
          {/* tier body (trapezoid) */}
          <path
            d={`M${tr.x} ${tr.y + 12} L${tr.x + 4} ${tr.y} L${140 - tr.x - 4} ${tr.y} L${140 - tr.x} ${tr.y + 12} Z`}
            fill="currentColor"
            fillOpacity={0.12 + i * 0.03}
          />
          {/* little shrine niches along the tier */}
          {Array.from({ length: Math.max(2, 5 - i) }).map((_, k, arr) => {
            const span = 140 - 2 * (tr.x + 6)
            const cx = tr.x + 6 + (span / (arr.length - 1 || 1)) * k
            return <circle key={k} cx={cx} cy={tr.y + 6} r="1.6" fill="currentColor" stroke="none" />
          })}
        </g>
      ))}
      {/* crowning barrel-vault (kalasham row) */}
      <path d="M58 16q12 -14 24 0" fill="currentColor" fillOpacity="0.2" />
      {[62, 70, 78].map((cx) => (
        <g key={cx}>
          <line x1={cx} y1="8" x2={cx} y2="2" />
          <circle cx={cx} cy="3" r="2" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  )
}

/** Hanging temple bell with a swag of beads at the crown. */
function TempleBell({ className = '' }) {
  return (
    <svg viewBox="0 0 60 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* hanging chain */}
      <line x1="30" y1="0" x2="30" y2="26" strokeDasharray="2 4" opacity="0.8" />
      <circle cx="30" cy="30" r="5" />
      {/* crown loop */}
      <path d="M30 35c-4 0-7 3-7 7" opacity="0.7" />
      {/* bell body */}
      <path d="M30 38c-13 4-19 16-19 40h38c0-24-6-36-19-40Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M11 78h38" />
      {/* rim band */}
      <path d="M9 82h42" opacity="0.85" />
      {/* clapper */}
      <line x1="30" y1="82" x2="30" y2="94" />
      <circle cx="30" cy="97" r="4" fill="currentColor" stroke="none" />
      {/* engraved arcs */}
      <path d="M18 66q12 8 24 0" opacity="0.4" />
    </svg>
  )
}

/** Vertical strip of stylised banana leaves used as a side border. */
function BananaLeafBorder({ className = '' }) {
  const leaves = Array.from({ length: 9 })
  return (
    <svg viewBox="0 0 50 760" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* central stalk */}
      <line x1="25" y1="6" x2="25" y2="754" opacity="0.6" />
      {leaves.map((_, i) => {
        const y = 44 + i * 84
        return (
          <g key={i}>
            {/* leaf to the right */}
            <path
              d={`M25 ${y} C 44 ${y - 6}, 50 ${y + 18}, 30 ${y + 40} C 40 ${y + 16}, 34 ${y + 2}, 25 ${y} Z`}
              fill="currentColor"
              fillOpacity="0.18"
            />
            {/* leaf to the left */}
            <path
              d={`M25 ${y + 12} C 6 ${y + 6}, 0 ${y + 30}, 20 ${y + 52} C 10 ${y + 28}, 16 ${y + 14}, 25 ${y + 12} Z`}
              fill="currentColor"
              fillOpacity="0.14"
            />
            {/* midrib hint */}
            <path d={`M25 ${y} q12 14 5 38`} opacity="0.35" />
          </g>
        )
      })}
    </svg>
  )
}

/** Traditional kuthuvilakku (brass oil lamp) with a small flame. */
function Lamp({ className = '' }) {
  return (
    <svg viewBox="0 0 64 96" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* flame */}
      <path d="M32 4c4 7 4 12 0 18-4-6-4-11 0-18Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      {/* lamp bowl */}
      <path d="M14 30h36l-6 12H20l-6-12Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 42c0 4 5 7 12 7s12-3 12-7" />
      {/* spouts */}
      <path d="M14 33l-5 3M50 33l5 3" />
      {/* stem with knobs */}
      <line x1="32" y1="49" x2="32" y2="62" />
      <ellipse cx="32" cy="62" rx="9" ry="4" fill="currentColor" fillOpacity="0.16" />
      <line x1="32" y1="66" x2="32" y2="78" />
      <ellipse cx="32" cy="78" rx="6" ry="3" fill="currentColor" fillOpacity="0.16" />
      {/* base */}
      <path d="M18 90c0-6 6-10 14-10s14 4 14 10Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M14 92h36" />
    </svg>
  )
}

/** Beaded ornate divider reading "kalyanam" / weds. */
function KalyanamDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M16 12h78" strokeLinecap="round" />
      <path d="M146 12h78" strokeLinecap="round" />
      {/* central temple lotus */}
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
 * South-Indian Kanchipuram wedding invitation — deep temple maroon & gold
 * with a green silk border, a stepped gopuram crest flanked by temple bells,
 * banana-leaf side borders and a beaded gold panel. Traditional & devotional.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function SouthIndianWedding({ values }) {
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
  const brideParents = values.brideParents?.trim() || 'D/o Mr. & Mrs. Iyer'
  const groomParents = values.groomParents?.trim() || 'S/o Mr. & Mrs. Rao'
  const muhurtam = formatDate(values.muhurtam, 'December 15, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Sri Kalyana Mandapam, Chennai'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#3a0d14] font-serif text-amber-100"
    >
      {/* Deep temple-maroon silk base with a warm gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5a141f] via-[#3a0d14] to-[#270810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(214,170,74,0.18),_transparent_62%)]" />

      {/* Green Kanchipuram silk border with gold piping */}
      <div className="absolute inset-0 border-[18px] border-[#0c5436]" />
      <div className="absolute inset-[12px] border border-[#d6aa4a]/80" />
      <div className="absolute inset-[18px] border border-[#d6aa4a]/35" />

      {/* Banana-leaf vertical side borders */}
      <BananaLeafBorder className="absolute left-[22px] top-[70px] h-[760px] w-[40px] text-[#1f7a4d]/80" />
      <BananaLeafBorder className="absolute right-[22px] top-[70px] h-[760px] w-[40px] text-[#1f7a4d]/80 [transform:scaleX(-1)]" />

      {/* Header: gopuram crest flanked by two hanging temple bells */}
      <div className="absolute inset-x-0 top-[26px] flex items-start justify-center">
        <TempleBell className="mt-1 h-24 w-12 text-[#e2bd66]/80" />
        <Gopuram className="mx-3 h-24 w-44 text-[#e8c878]" />
        <TempleBell className="mt-1 h-24 w-12 text-[#e2bd66]/80" />
      </div>

      {/* Content — beaded gold-bordered panel */}
      <div className="relative mx-auto flex h-full w-[460px] flex-col items-center pb-[44px] pt-[176px] text-center">
        {/* devotional opening */}
        <p className="font-display text-[20px] tracking-wide text-[#e8c878]">॥ ஓம் கணேசாய நமஹ ॥</p>
        <div className="mt-2 flex items-center gap-2 text-[#d6aa4a]/70">
          <span className="h-px w-12 bg-[#d6aa4a]/60" />
          <span className="text-[10px]">✦</span>
          <span className="h-px w-12 bg-[#d6aa4a]/60" />
        </div>
        <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.44em] text-[#e2bd66]/85">
          {t('template.common.togetherWithFamilies', 'With the blessings of the elders')}
        </p>

        {/* Beaded ornate panel holding the couple + details */}
        <div className="relative mt-5 w-full rounded-md border-2 border-[#d6aa4a]/70 bg-[#270810]/40 px-7 pb-7 pt-8">
          {/* beaded inner keyline */}
          <span className="pointer-events-none absolute inset-[6px] rounded-[4px] border border-dotted border-[#d6aa4a]/45" />

          {/* GROOM */}
          <h1 className="font-script text-[52px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-[#f3dca0] via-[#e2bd66] to-[#b8862b] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>
          <p className="mt-1 text-[13px] italic leading-snug text-[#e8c878]/85">{groomParents}</p>

          {/* kalyanam / weds divider */}
          <div className="my-3 flex flex-col items-center gap-1">
            <KalyanamDivider className="h-5 w-56 text-[#d6aa4a]" />
            <span className="font-display text-[18px] italic tracking-wide text-[#1f9d63]">
              {t('template.common.weds', 'weds')}
            </span>
          </div>

          {/* BRIDE */}
          <h1 className="font-script text-[52px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-bl from-[#f3dca0] via-[#e2bd66] to-[#b8862b] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>
          <p className="mt-1 text-[13px] italic leading-snug text-[#e8c878]/85">{brideParents}</p>
        </div>

        {/* Muhurtam block */}
        <div className="mt-6 flex w-full flex-col items-center gap-1 rounded-md border border-[#d6aa4a]/55 bg-[#0c5436]/25 px-9 py-3">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.42em] text-[#e2bd66]">
            {t('template.common.saveTheDate', 'Muhurtam')}
          </p>
          <p className="font-display text-[24px] tracking-wide text-amber-100">{muhurtam}</p>
          {time && <p className="text-[14px] tracking-wide text-[#e8c878]/90">{time}</p>}
        </div>

        {/* Venue */}
        <div className="mt-4 flex w-full flex-col items-center gap-1">
          <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#e2bd66]/80">
            {t('template.common.venue', 'Venue')}
          </p>
          <p className="max-w-[20rem] text-[16px] leading-snug text-amber-100">{venue}</p>
        </div>

        {/* Lamp motif foot */}
        <Lamp className="mt-auto h-16 w-12 text-[#e8c878]" />
      </div>
    </div>
  )
}
