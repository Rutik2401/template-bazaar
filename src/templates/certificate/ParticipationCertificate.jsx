'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Decorative SVG pieces ──────────────────────────────────────────────── */

/** Ornate navy corner filigree. */
function CornerFiligree({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M8 8c44 0 64 6 84 26s26 40 26 84" opacity="0.85" />
      <path d="M8 26c30 0 46 4 62 20s20 32 20 62" opacity="0.5" />
      <path d="M18 18c0 22 10 36 32 36" opacity="0.75" />
      <circle cx="18" cy="18" r="3.6" fill="currentColor" stroke="none" />
      <path
        d="M48 14c10 0 18 3 25 10s10 15 10 25c-10 0-18-3-25-10s-10-15-10-25Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="none"
      />
    </svg>
  )
}

/** Pleated rosette seal with a gold center and trailing ribbons. */
function RosetteSeal({ className = '' }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 120 150" className={className} fill="none">
      {/* Ribbons */}
      <path d="M44 78 38 142l16-12 16 12-6-64Z" fill="#1e3a5f" />
      <path d="M44 78 38 142l16-12 16 12-6-64Z" fill="#ffffff" fillOpacity="0.08" />
      <path d="M76 78 82 142l-16-12-16 12 6-64Z" fill="#16304f" />
      {/* Pleated rosette */}
      {petals.map((_, i) => {
        const a = (i / petals.length) * Math.PI * 2
        const x = 60 + Math.cos(a) * 40
        const y = 56 + Math.sin(a) * 40
        return (
          <path
            key={i}
            d={`M60 56 L${(60 + x) / 2 + Math.cos(a + 0.25) * 6} ${
              (56 + y) / 2 + Math.sin(a + 0.25) * 6
            } L${x} ${y} L${(60 + x) / 2 + Math.cos(a - 0.25) * 6} ${
              (56 + y) / 2 + Math.sin(a - 0.25) * 6
            } Z`}
            fill={i % 2 ? '#1e3a5f' : '#27496f'}
          />
        )
      })}
      <circle cx="60" cy="56" r="30" fill="#1e3a5f" />
      <circle cx="60" cy="56" r="30" fill="none" stroke="#caa24a" strokeWidth="2" />
      <circle cx="60" cy="56" r="23" fill="none" stroke="#caa24a" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M52 56l5 6 11-13" stroke="#caa24a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function FlourishRule({ className = '' }) {
  return (
    <svg viewBox="0 0 260 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 10h92" strokeLinecap="round" />
      <path d="M156 10h92" strokeLinecap="round" />
      <path d="M130 3l8 7-8 7-8-7 8-7Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="112" cy="10" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="148" cy="10" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Classic Participation Certificate — navy & gold, ornate double border,
 * pleated rosette seal. Landscape 1123 × 794.
 */
export default function ParticipationCertificate({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Rohan Mehta'
  const courseName = values.courseName?.trim() || 'Full-Stack Web Development'
  const date = formatDate(values.date, '14 June 2026')
  const organizationName = values.organizationName?.trim() || 'Template Bazaar Academy'

  return (
    <div
      data-export-root
      className="relative h-[794px] w-[1123px] overflow-hidden bg-[#fbf8f0] font-serif text-[#1e3a5f]"
    >
      {/* Paper wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcf6] via-[#fbf8f0] to-[#f4eedd]" />

      {/* Ornate double border */}
      <div className="absolute inset-[26px] border-[3px] border-[#1e3a5f]" />
      <div className="absolute inset-[34px] border border-[#caa24a]" />
      <div className="absolute inset-[40px] border border-[#caa24a]/50" />

      {/* Corner filigrees */}
      <CornerFiligree className="absolute left-12 top-12 h-24 w-24 text-[#caa24a]" />
      <CornerFiligree className="absolute right-12 top-12 h-24 w-24 text-[#caa24a] [transform:scaleX(-1)]" />
      <CornerFiligree className="absolute bottom-12 left-12 h-24 w-24 text-[#caa24a] [transform:scaleY(-1)]" />
      <CornerFiligree className="absolute bottom-12 right-12 h-24 w-24 text-[#caa24a] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-28 py-16 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.45em] text-[#caa24a]">
          {organizationName}
        </p>

        <h1 className="mt-5 font-display text-[52px] font-bold uppercase leading-none tracking-[0.12em]">
          <span
            data-pdf-color="#1e3a5f"
            className="bg-gradient-to-b from-[#27496f] to-[#1e3a5f] bg-clip-text text-transparent"
          >
            Certificate
          </span>
        </h1>
        <p className="mt-2 text-[17px] font-medium uppercase tracking-[0.55em] text-[#1e3a5f]/70">
          of Participation
        </p>

        <FlourishRule className="mt-6 h-4 w-72 text-[#caa24a]" />

        <p className="mt-7 text-[15px] italic text-[#1e3a5f]/75">
          This certificate is proudly presented to
        </p>

        <h2 className="mt-3 font-script text-[68px] leading-none text-[#1e3a5f]">
          <span data-pdf-color="#a67c1d" className="bg-gradient-to-r from-[#caa24a] via-[#a67c1d] to-[#caa24a] bg-clip-text text-transparent">
            {personName}
          </span>
        </h2>

        <div className="mt-3 h-px w-80 bg-[#caa24a]/60" />

        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#1e3a5f]/80">
          for actively participating in the program
          <span className="font-semibold text-[#1e3a5f]"> {courseName}</span>, demonstrating
          commitment, enthusiasm and dedication throughout.
        </p>

        {/* Footer — signatures & seal */}
        <div className="mt-12 flex w-full items-end justify-between px-6">
          <div className="flex w-56 flex-col items-center">
            <div className="h-px w-full bg-[#1e3a5f]/60" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1e3a5f]/80">
              Date
            </span>
            <span className="mt-0.5 text-[14px] text-[#1e3a5f]">{date}</span>
          </div>

          <RosetteSeal className="-mt-4 h-32 w-24" />

          <div className="flex w-56 flex-col items-center">
            <div className="h-px w-full bg-[#1e3a5f]/60" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1e3a5f]/80">
              Signature
            </span>
            <span className="mt-0.5 text-[14px] text-[#1e3a5f]">{organizationName}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
