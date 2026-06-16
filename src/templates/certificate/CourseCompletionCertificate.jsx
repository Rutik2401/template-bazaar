'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Decorative SVG pieces ──────────────────────────────────────────────── */

/** Modern scalloped check-badge with a teal→indigo gradient fill. */
function CheckBadge({ className = '' }) {
  const points = Array.from({ length: 12 })
  const r1 = 46
  const r2 = 54
  const cx = 65
  const cy = 65
  const path = points
    .map((_, i) => {
      const a = (i / points.length) * Math.PI * 2
      const ro = r2
      const ri = r1
      const xo = cx + Math.cos(a) * ro
      const yo = cy + Math.sin(a) * ro
      const am = a + Math.PI / points.length
      const xi = cx + Math.cos(am) * ri
      const yi = cy + Math.sin(am) * ri
      return `${i === 0 ? 'M' : 'L'}${xo.toFixed(1)} ${yo.toFixed(1)} L${xi.toFixed(1)} ${yi.toFixed(1)}`
    })
    .join(' ')
  return (
    <svg viewBox="0 0 130 130" className={className} fill="none">
      <defs>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      <path d={`${path} Z`} fill="url(#badgeGrad)" />
      <circle cx={cx} cy={cy} r="38" fill="#ffffff" />
      <circle cx={cx} cy={cy} r="38" fill="none" stroke="url(#badgeGrad)" strokeWidth="2" />
      <path
        d="M48 66l11 12 24-28"
        stroke="url(#badgeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

/** A small stack of geometric chevrons used as a divider accent. */
function GeoDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 200 16" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 8h70" strokeLinecap="round" />
      <path d="M128 8h70" strokeLinecap="round" />
      <path d="M86 3l8 5-8 5M114 3l-8 5 8 5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="8" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Modern Course Completion Certificate — clean teal/indigo accent, geometric
 * border, scalloped check-badge. Landscape 1123 × 794.
 */
export default function CourseCompletionCertificate({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Rohan Mehta'
  const courseName = values.courseName?.trim() || 'Full-Stack Web Development'
  const date = formatDate(values.date, '14 June 2026')
  const organizationName = values.organizationName?.trim() || 'Template Bazaar Academy'

  return (
    <div
      data-export-root
      className="relative h-[794px] w-[1123px] overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* Geometric corner blocks */}
      <div className="absolute left-0 top-0 h-40 w-40 bg-gradient-to-br from-[#0d9488] to-transparent opacity-90 [clip-path:polygon(0_0,100%_0,0_100%)]" />
      <div className="absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-[#4338ca] to-transparent opacity-90 [clip-path:polygon(100%_100%,0_100%,100%_0)]" />

      {/* Thin geometric frame */}
      <div className="absolute inset-[28px] border border-slate-200" />
      <div className="absolute inset-[28px] border-l-[6px] border-t-[6px] border-[#0d9488] [width:120px] [height:120px]" />
      <div className="absolute bottom-[28px] right-[28px] h-[120px] w-[120px] border-b-[6px] border-r-[6px] border-[#4338ca]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-28 py-16 text-center">
        <CheckBadge className="h-24 w-24" />

        <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.5em] text-[#0d9488]">
          {organizationName}
        </p>

        <h1 className="mt-3 text-[46px] font-extrabold leading-none tracking-tight text-slate-900">
          Certificate of{' '}
          <span
            data-pdf-color="#0d9488"
            className="bg-gradient-to-r from-[#0d9488] to-[#4338ca] bg-clip-text text-transparent"
          >
            Completion
          </span>
        </h1>

        <GeoDivider className="mt-6 h-4 w-64 text-slate-300" />

        <p className="mt-7 text-[14px] font-medium uppercase tracking-[0.28em] text-slate-400">
          This certificate is proudly presented to
        </p>

        <h2 className="mt-3 font-display text-[58px] font-semibold leading-none text-slate-900">
          {personName}
        </h2>

        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-600">
          for successfully completing the course
          <span className="font-semibold text-[#4338ca]"> {courseName}</span>, fulfilling all
          requirements with diligence and skill.
        </p>

        {/* Footer — signatures & date */}
        <div className="mt-12 flex w-full items-end justify-between px-10">
          <div className="flex w-64 flex-col items-center">
            <span className="font-display text-[22px] text-slate-800">{date}</span>
            <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-[#0d9488] to-[#4338ca]" />
            <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Date
            </span>
          </div>

          <div className="flex w-64 flex-col items-center">
            <span className="font-display text-[22px] text-slate-800">{organizationName}</span>
            <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-[#4338ca] to-[#0d9488]" />
            <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Signature
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
