'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Decorative SVG pieces ──────────────────────────────────────────────── */

/** Half a laurel branch with paired leaves & berries; mirrored to a wreath. */
function LaurelHalf({ className = '' }) {
  const leaves = Array.from({ length: 10 })
  return (
    <svg viewBox="0 0 100 210" className={className} fill="none">
      <path d="M78 8C44 52 32 118 50 200" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      {leaves.map((_, i) => {
        const tt = i / (leaves.length - 1)
        const x = 78 - tt * 28
        const y = 16 + tt * 176
        const rot = -52 + tt * 34
        return (
          <g key={i}>
            <ellipse
              cx={x}
              cy={y}
              rx="17"
              ry="6.8"
              fill="currentColor"
              fillOpacity={0.92}
              transform={`rotate(${rot} ${x} ${y})`}
            />
            <ellipse
              cx={x - 5}
              cy={y + 9}
              rx="11"
              ry="4.6"
              fill="currentColor"
              fillOpacity={0.5}
              transform={`rotate(${rot - 18} ${x - 5} ${y + 9})`}
            />
          </g>
        )
      })}
      {/* berries */}
      <circle cx="60" cy="40" r="2.4" fill="currentColor" />
      <circle cx="50" cy="96" r="2.4" fill="currentColor" />
      <circle cx="49" cy="158" r="2.4" fill="currentColor" />
    </svg>
  )
}

/** Ornate corner scroll to anchor the maroon frame. */
function CornerScroll({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 10c34 4 50 20 54 54" opacity="0.85" />
      <path d="M10 26c24 3 38 17 41 41" opacity="0.5" />
      <path d="M18 16c0 18 9 28 26 28" opacity="0.7" />
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
      <path d="M44 14c8 0 14 2 20 8s8 12 8 20c-8 0-14-2-20-8s-8-12-8-20Z" fill="currentColor" fillOpacity="0.14" stroke="none" />
    </svg>
  )
}

/** Gold medal with a pleated ribbon, fluted rim and engraved star. */
function GoldMedal({ className = '' }) {
  return (
    <svg viewBox="0 0 140 180" className={className} fill="none">
      {/* Ribbons */}
      <path d="M50 78 34 8h30l16 56Z" fill="#7c1d1d" />
      <path d="M90 78 106 8H76L60 64Z" fill="#5c1414" />
      <path d="M50 78 34 8h30" stroke="#caa24a" strokeWidth="0.8" opacity="0.5" />
      {/* Medal body */}
      <circle cx="70" cy="114" r="54" fill="#b88a2a" />
      <circle cx="70" cy="114" r="54" fill="none" stroke="#7c1d1d" strokeWidth="2.4" />
      {/* fluted rim notches */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2
        const x1 = 70 + Math.cos(a) * 50
        const y1 = 114 + Math.sin(a) * 50
        const x2 = 70 + Math.cos(a) * 54
        const y2 = 114 + Math.sin(a) * 54
        return <path key={i} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="#8a6414" strokeWidth="1.4" />
      })}
      <circle cx="70" cy="114" r="43" fill="#d8b65e" />
      <circle cx="70" cy="114" r="43" fill="none" stroke="#a67c1d" strokeWidth="1.4" strokeDasharray="3 4" />
      {/* Star */}
      <path
        d="M70 84l8.8 17.8 19.6 2.9-14.2 13.8 3.4 19.5L70 140.8l-17.6 9.2 3.4-19.5-14.2-13.8 19.6-2.9L70 84Z"
        fill="#7c1d1d"
        fillOpacity="0.9"
      />
    </svg>
  )
}

function ThinFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 320 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 10h124" strokeLinecap="round" />
      <path d="M186 10h124" strokeLinecap="round" />
      <path d="M10 10c-5 0-7-2-7-5M310 10c5 0 7-2 7-5" opacity="0.6" />
      <path d="M160 2l8 8-8 8-8-8 8-8Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M160 6l4 4-4 4-4-4 4-4Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="134" cy="10" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="186" cy="10" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Prestigious Achievement Certificate — gold & maroon, laurel wreath flanking
 * a calligraphic name, fluted gold medal seal, elegant serif. Landscape 1123 × 794.
 */
export default function AchievementCertificate({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Rohan Mehta'
  const courseName = values.courseName?.trim() || 'Full-Stack Web Development'
  const date = formatDate(values.date, '14 June 2026')
  const organizationName = values.organizationName?.trim() || 'Template Bazaar Academy'

  return (
    <div
      data-export-root
      className="relative h-[794px] w-[1123px] overflow-hidden bg-[#fdfaf2] font-serif text-[#5c1414]"
    >
      {/* Rich cream wash with soft gold glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fefcf6] via-[#fbf4e6] to-[#f1e0c1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(202,162,74,0.12),_transparent_60%)]" />

      {/* Maroon mat with gold inner keylines */}
      <div className="absolute inset-[24px] border-[10px] border-[#7c1d1d]" />
      <div className="absolute inset-[24px] ring-1 ring-inset ring-[#caa24a]/35" />
      <div className="absolute inset-[41px] border-2 border-[#caa24a]" />
      <div className="absolute inset-[48px] border border-[#caa24a]/45" />

      {/* Corner scrolls */}
      <CornerScroll className="absolute left-[52px] top-[52px] h-16 w-16 text-[#caa24a]" />
      <CornerScroll className="absolute right-[52px] top-[52px] h-16 w-16 text-[#caa24a] [transform:scaleX(-1)]" />
      <CornerScroll className="absolute bottom-[52px] left-[52px] h-16 w-16 text-[#caa24a] [transform:scaleY(-1)]" />
      <CornerScroll className="absolute bottom-[52px] right-[52px] h-16 w-16 text-[#caa24a] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-32 py-14 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.52em] text-[#7c1d1d]/70">
          {organizationName}
        </p>

        <h1 className="mt-3 font-display text-[56px] font-bold uppercase leading-[1.04] tracking-[0.1em]">
          <span
            data-pdf-color="#a67c1d"
            className="bg-gradient-to-b from-[#d8b65e] via-[#a67c1d] to-[#8a6414] bg-clip-text text-transparent"
          >
            Certificate of Achievement
          </span>
        </h1>

        <ThinFlourish className="mt-5 h-5 w-80 text-[#7c1d1d]" />

        <p className="mt-6 text-[15px] italic tracking-wide text-[#7c1d1d]/80">
          This certificate is proudly presented to
        </p>

        <div className="relative mt-2 flex items-center justify-center">
          <LaurelHalf className="h-32 w-16 text-[#b88a2a]" />
          <h2 className="mx-7 font-script text-[66px] leading-[0.95] text-[#7c1d1d]">{personName}</h2>
          <LaurelHalf className="h-32 w-16 text-[#b88a2a] [transform:scaleX(-1)]" />
        </div>

        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5c1414]/85">
          in recognition of outstanding achievement and excellence in
          <span className="font-semibold text-[#7c1d1d]"> {courseName}</span>, completed with
          exceptional distinction and merit.
        </p>

        {/* Footer — signatures & medal */}
        <div className="mt-9 flex w-full items-end justify-between px-6">
          <div className="flex w-60 flex-col items-center">
            <div className="h-px w-full bg-[#7c1d1d]/55" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7c1d1d]/85">
              Date
            </span>
            <span className="mt-0.5 text-[14px] text-[#5c1414]">{date}</span>
          </div>

          <GoldMedal className="-mt-4 h-40 w-32" />

          <div className="flex w-60 flex-col items-center">
            <div className="h-px w-full bg-[#7c1d1d]/55" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7c1d1d]/85">
              Authorized Signature
            </span>
            <span className="mt-0.5 text-[14px] text-[#5c1414]">{organizationName}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
