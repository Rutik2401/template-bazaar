'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Decorative SVG pieces ──────────────────────────────────────────────── */

/** Half a laurel branch; mirrored to form a full wreath. */
function LaurelHalf({ className = '' }) {
  const leaves = Array.from({ length: 9 })
  return (
    <svg viewBox="0 0 90 200" className={className} fill="none">
      <path d="M70 8C40 50 30 110 46 192" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {leaves.map((_, i) => {
        const t = i / (leaves.length - 1)
        const x = 70 - t * 24
        const y = 16 + t * 168
        const rot = -50 + t * 30
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="16"
            ry="6.5"
            fill="currentColor"
            fillOpacity={0.9}
            transform={`rotate(${rot} ${x} ${y})`}
          />
        )
      })}
    </svg>
  )
}

/** Gold medal with a pleated ribbon and engraved star. */
function GoldMedal({ className = '' }) {
  return (
    <svg viewBox="0 0 130 170" className={className} fill="none">
      {/* Ribbons */}
      <path d="M46 72 32 8h28l14 52Z" fill="#7c1d1d" />
      <path d="M84 72 98 8H70L56 60Z" fill="#5c1414" />
      {/* Medal body */}
      <circle cx="65" cy="108" r="50" fill="#caa24a" />
      <circle cx="65" cy="108" r="50" fill="none" stroke="#7c1d1d" strokeWidth="2" />
      <circle cx="65" cy="108" r="40" fill="#d8b65e" />
      <circle cx="65" cy="108" r="40" fill="none" stroke="#a67c1d" strokeWidth="1.5" strokeDasharray="3 4" />
      {/* Star */}
      <path
        d="M65 80l8.2 16.6 18.3 2.7-13.2 12.9 3.1 18.2L65 134.8l-16.4 8.6 3.1-18.2-13.2-12.9 18.3-2.7L65 80Z"
        fill="#7c1d1d"
        fillOpacity="0.85"
      />
    </svg>
  )
}

function ThinFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 280 18" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 9h108" strokeLinecap="round" />
      <path d="M164 9h108" strokeLinecap="round" />
      <path d="M140 2l7 7-7 7-7-7 7-7Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

/**
 * Prestigious Achievement Certificate — gold & maroon, laurel wreath and a
 * gold medal seal, elegant serif. Landscape 1123 × 794.
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
      {/* Rich cream wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fefcf6] via-[#fbf4e6] to-[#f3e4c9]" />

      {/* Maroon mat with gold inner keyline */}
      <div className="absolute inset-[24px] border-[10px] border-[#7c1d1d]" />
      <div className="absolute inset-[40px] border-2 border-[#caa24a]" />
      <div className="absolute inset-[47px] border border-[#caa24a]/45" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-32 py-14 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-[#7c1d1d]/70">
          {organizationName}
        </p>

        <h1 className="mt-3 font-display text-[56px] font-bold uppercase leading-none tracking-[0.1em]">
          <span
            data-pdf-color="#a67c1d"
            className="bg-gradient-to-b from-[#caa24a] via-[#a67c1d] to-[#8a6414] bg-clip-text text-transparent"
          >
            Certificate of Achievement
          </span>
        </h1>

        <ThinFlourish className="mt-5 h-4 w-80 text-[#7c1d1d]" />

        <p className="mt-7 text-[15px] italic text-[#7c1d1d]/80">
          This certificate is proudly presented to
        </p>

        <div className="relative mt-3 flex items-center justify-center">
          <LaurelHalf className="h-28 w-16 text-[#caa24a]" />
          <h2 className="mx-6 font-script text-[64px] leading-none text-[#7c1d1d]">{personName}</h2>
          <LaurelHalf className="h-28 w-16 text-[#caa24a] [transform:scaleX(-1)]" />
        </div>

        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[#5c1414]/85">
          in recognition of outstanding achievement and excellence in
          <span className="font-semibold text-[#7c1d1d]"> {courseName}</span>, completed with
          exceptional distinction and merit.
        </p>

        {/* Footer — signatures & medal */}
        <div className="mt-10 flex w-full items-end justify-between px-4">
          <div className="flex w-60 flex-col items-center">
            <div className="h-px w-full bg-[#7c1d1d]/60" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7c1d1d]/85">
              Date
            </span>
            <span className="mt-0.5 text-[14px] text-[#5c1414]">{date}</span>
          </div>

          <GoldMedal className="-mt-2 h-36 w-28" />

          <div className="flex w-60 flex-col items-center">
            <div className="h-px w-full bg-[#7c1d1d]/60" />
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
