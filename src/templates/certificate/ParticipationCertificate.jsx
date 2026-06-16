'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Decorative SVG pieces ──────────────────────────────────────────────── */

/** Ornate navy/gold corner filigree — layered scrolls, paisley bud & beadwork. */
function CornerFiligree({ className = '' }) {
  return (
    <svg
      viewBox="0 0 150 150"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      {/* sweeping double scroll */}
      <path d="M8 8c48 0 70 6 91 27s27 43 27 91" opacity="0.9" />
      <path d="M8 27c33 0 50 5 67 22s22 34 22 67" opacity="0.5" />
      {/* inner curl */}
      <path d="M18 18c0 24 11 39 35 39" opacity="0.8" />
      <path d="M26 16c11 4 18 12 20 24" opacity="0.45" />
      {/* paisley bud */}
      <path
        d="M50 14c11 0 19 3 26 10s10 16 10 27c-11 0-19-3-26-10s-10-16-10-27Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="none"
      />
      <path d="M59 23c6 1 10 5 12 12" opacity="0.5" />
      {/* beaded dots */}
      <circle cx="18" cy="18" r="3.6" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="86" cy="40" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="86" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Engraved guilloché flourish for the side margins. */
function GuillochéBand({ className = '' }) {
  return (
    <svg viewBox="0 0 16 360" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M8 6q-7 18 0 36t0 36q-7 18 0 36t0 36q-7 18 0 36t0 36q-7 18 0 36t0 36q-7 18 0 30" opacity="0.55" />
      <path d="M8 6q7 18 0 36t0 36q7 18 0 36t0 36q7 18 0 36t0 36q7 18 0 36t0 36q7 18 0 30" opacity="0.55" />
      <circle cx="8" cy="60" r="2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="180" r="2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="300" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Pleated rosette seal with a gold center, engraved check and trailing ribbons. */
function RosetteSeal({ className = '' }) {
  const petals = Array.from({ length: 20 })
  return (
    <svg viewBox="0 0 130 160" className={className} fill="none">
      {/* Ribbons */}
      <path d="M48 86 40 152l18-13 18 13-8-66Z" fill="#1e3a5f" />
      <path d="M48 86 40 152l18-13 18 13-8-66Z" fill="#ffffff" fillOpacity="0.08" />
      <path d="M82 86 90 152l-18-13-18 13 8-66Z" fill="#16304f" />
      <path d="M40 152l18-13M90 152l-18-13" stroke="#caa24a" strokeWidth="1" opacity="0.5" />
      {/* Pleated rosette */}
      {petals.map((_, i) => {
        const a = (i / petals.length) * Math.PI * 2
        const x = 65 + Math.cos(a) * 44
        const y = 62 + Math.sin(a) * 44
        return (
          <path
            key={i}
            d={`M65 62 L${(65 + x) / 2 + Math.cos(a + 0.22) * 7} ${
              (62 + y) / 2 + Math.sin(a + 0.22) * 7
            } L${x} ${y} L${(65 + x) / 2 + Math.cos(a - 0.22) * 7} ${
              (62 + y) / 2 + Math.sin(a - 0.22) * 7
            } Z`}
            fill={i % 2 ? '#1e3a5f' : '#2b507a'}
          />
        )
      })}
      <circle cx="65" cy="62" r="33" fill="#1e3a5f" />
      <circle cx="65" cy="62" r="33" fill="none" stroke="#caa24a" strokeWidth="2.2" />
      <circle cx="65" cy="62" r="25" fill="none" stroke="#caa24a" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M56 62l6 7 13-15" stroke="#caa24a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function FlourishRule({ className = '' }) {
  return (
    <svg viewBox="0 0 320 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M14 11h120" strokeLinecap="round" />
      <path d="M186 11h120" strokeLinecap="round" />
      {/* tapered swirl ends */}
      <path d="M14 11c-6 0-8-3-8-6M306 11c6 0 8-3 8-6" opacity="0.6" />
      {/* central lotus diamond */}
      <path d="M160 2l9 9-9 9-9-9 9-9Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M160 6l5 5-5 5-5-5 5-5Z" />
      <circle cx="134" cy="11" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="186" cy="11" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="118" cy="11" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="202" cy="11" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Classic Participation Certificate — navy & gold, ornate engraved double
 * border, guilloché margins and a pleated rosette seal. Landscape 1123 × 794.
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
      {/* Paper wash with a soft central glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcf6] via-[#fbf8f0] to-[#f3ecd9]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(202,162,74,0.10),_transparent_62%)]" />

      {/* Ornate engraved double border */}
      <div className="absolute inset-[24px] border-[3px] border-[#1e3a5f]" />
      <div className="absolute inset-[24px] ring-1 ring-inset ring-[#caa24a]/40" />
      <div className="absolute inset-[33px] border border-[#caa24a]" />
      <div className="absolute inset-[40px] border border-[#caa24a]/45" />

      {/* Guilloché side bands */}
      <GuillochéBand className="absolute left-[48px] top-[150px] bottom-[150px] w-3 text-[#caa24a]/55" />
      <GuillochéBand className="absolute right-[48px] top-[150px] bottom-[150px] w-3 text-[#caa24a]/55" />

      {/* Corner filigrees */}
      <CornerFiligree className="absolute left-11 top-11 h-24 w-24 text-[#caa24a]" />
      <CornerFiligree className="absolute right-11 top-11 h-24 w-24 text-[#caa24a] [transform:scaleX(-1)]" />
      <CornerFiligree className="absolute bottom-11 left-11 h-24 w-24 text-[#caa24a] [transform:scaleY(-1)]" />
      <CornerFiligree className="absolute bottom-11 right-11 h-24 w-24 text-[#caa24a] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-32 py-16 text-center">
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.5em] text-[#caa24a]">
          {organizationName}
        </p>

        <h1 className="mt-5 font-display text-[54px] font-bold uppercase leading-none tracking-[0.14em]">
          <span
            data-pdf-color="#1e3a5f"
            className="bg-gradient-to-b from-[#2b507a] to-[#162d49] bg-clip-text text-transparent"
          >
            Certificate
          </span>
        </h1>
        <p className="mt-2.5 text-[16px] font-medium uppercase tracking-[0.58em] text-[#1e3a5f]/65">
          of Participation
        </p>

        <FlourishRule className="mt-6 h-5 w-80 text-[#caa24a]" />

        <p className="mt-7 text-[15px] italic tracking-wide text-[#1e3a5f]/70">
          This certificate is proudly presented to
        </p>

        <h2 className="mt-3 font-script text-[70px] leading-[0.95]">
          <span data-pdf-color="#a67c1d" className="bg-gradient-to-r from-[#caa24a] via-[#9c7218] to-[#caa24a] bg-clip-text text-transparent">
            {personName}
          </span>
        </h2>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-28 bg-gradient-to-r from-transparent to-[#caa24a]/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#caa24a]" />
          <span className="h-px w-28 bg-gradient-to-l from-transparent to-[#caa24a]/70" />
        </div>

        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#1e3a5f]/80">
          for actively participating in the program
          <span className="font-semibold text-[#1e3a5f]"> {courseName}</span>, demonstrating
          commitment, enthusiasm and dedication throughout.
        </p>

        {/* Footer — signatures & seal */}
        <div className="mt-12 flex w-full items-end justify-between px-8">
          <div className="flex w-56 flex-col items-center">
            <div className="h-px w-full bg-[#1e3a5f]/55" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1e3a5f]/80">
              Date
            </span>
            <span className="mt-0.5 text-[14px] text-[#1e3a5f]">{date}</span>
          </div>

          <RosetteSeal className="-mt-6 h-36 w-28" />

          <div className="flex w-56 flex-col items-center">
            <div className="h-px w-full bg-[#1e3a5f]/55" />
            <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1e3a5f]/80">
              Signature
            </span>
            <span className="mt-0.5 text-[14px] text-[#1e3a5f]">{organizationName}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
