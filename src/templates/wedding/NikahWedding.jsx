'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Islamic geometric & ornamental motifs (gold foil on emerald) ───────── */

/**
 * A seamless geometric jali (lattice) tile — interlaced eight-point stars
 * and lozenges. Tiled via pattern to border the mihrab arch frame.
 */
function JaliPattern({ id }) {
  return (
    <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        {/* eight-point star woven from two overlaid squares */}
        <path d="M20 4l4.5 11.5L36 20l-11.5 4.5L20 36l-4.5-11.5L4 20l11.5-4.5Z" opacity="0.85" />
        <path d="M20 9l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" opacity="0.5" />
        {/* connecting lozenges to the tile corners */}
        <path d="M0 0l8 8M40 0l-8 8M0 40l8-8M40 40l-8-8" opacity="0.55" />
        <circle cx="20" cy="20" r="1.7" fill="currentColor" stroke="none" />
        <circle cx="0" cy="0" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="40" cy="0" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="0" cy="40" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="40" cy="40" r="1.3" fill="currentColor" stroke="none" />
      </g>
    </pattern>
  )
}

/**
 * Tall ogee / mihrab arch outline. Used both as the jali-filled frame border
 * and as the fine inner keyline. Drawn on a 360 × 560 viewBox.
 */
function MihrabArch({ className = '', fill = 'none', stroke = 'currentColor', strokeWidth = 2 }) {
  return (
    <path
      className={className}
      d="M180 8
         C110 8 60 40 60 110
         C60 150 84 178 120 196
         C150 211 168 232 178 264
         C179 252 181 252 182 264
         C192 232 210 211 240 196
         C276 178 300 150 300 110
         C300 40 250 8 180 8 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  )
}

/** Crescent moon cradling a five-point star — the arch apex finial. */
function CrescentStar({ className = '' }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      {/* crescent: large disc minus offset disc */}
      <path
        d="M52 6a34 34 0 1 0 0 68 27 27 0 1 1 0-68Z"
        fill="currentColor"
        fillOpacity="0.85"
        stroke="none"
      />
      {/* five-point star nestled in the crescent's mouth */}
      <path
        d="M78 28l4.5 9.3 10.2 1.3-7.5 7 1.9 10.1-9.1-4.9-9.1 4.9 1.9-10.1-7.5-7 10.2-1.3Z"
        fill="currentColor"
        fillOpacity="0.95"
        stroke="none"
      />
    </svg>
  )
}

/** Delicate symmetric floral divider — twin leaf scrolls flanking a bud. */
function FloralDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 280 30" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M14 15h96" opacity="0.7" />
      <path d="M170 15h96" opacity="0.7" />
      {/* twin leaf scrolls */}
      <path d="M110 15c10 0 16-5 16-11-8 0-14 4-16 11ZM110 15c10 0 16 5 16 11-8 0-14-4-16-11Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M170 15c-10 0-16-5-16-11 8 0 14 4 16 11ZM170 15c-10 0-16 5-16 11 8 0 14-4 16-11Z" fill="currentColor" fillOpacity="0.22" />
      {/* central teardrop bud */}
      <path d="M140 4c5 4 7 8 7 11 0 4-3 7-7 7s-7-3-7-7c0-3 2-7 7-11Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="140" cy="18" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="110" cy="15" r="2" fill="currentColor" stroke="none" />
      <circle cx="170" cy="15" r="2" fill="currentColor" stroke="none" />
      <circle cx="22" cy="15" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="258" cy="15" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Small ornamental arabesque flourish used above the basmala line. */
function HeaderFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 200 36" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M100 6c-14 0-22 8-22 18M100 6c14 0 22 8 22 18" opacity="0.7" />
      <path d="M78 24c-12 0-22-4-30-12M122 24c12 0 22-4 30-12" opacity="0.6" />
      <path d="M100 4v8" />
      <circle cx="100" cy="2" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="48" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="152" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Nikah wedding invitation — elegant Islamic emerald-green & gold foil.
 * The entire composition sits inside a tall ogee / mihrab arch frame bordered
 * by a fine geometric jali lattice, crowned by a crescent moon & star.
 * Natural design size: 640 × 900 (portrait card). No human figures.
 */
export default function NikahWedding({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const nikahDate = formatDate(values.nikahDate, 'December 20, 2025')
  const nikahTime = formatTime(values.nikahTime, '')
  const walimaInfo = values.walimaInfo?.trim() || 'Walima reception to follow'
  const venue = values.venue?.trim() || 'Grand Ballroom, Hyderabad'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#063b2e] font-serif text-[#f4e6c0]"
    >
      {/* Deep emerald base with a soft central gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a4d3a] via-[#063b2e] to-[#03261d]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_40%,rgba(202,160,75,0.16),transparent_62%)]" />

      {/* Thin gold mat keylines around the whole card */}
      <div className="pointer-events-none absolute inset-[16px] rounded-[6px] border-2 border-[#caa04b]/80" />
      <div className="pointer-events-none absolute inset-[22px] rounded-[5px] border border-[#caa04b]/40" />

      {/* ── The mihrab arch frame: jali-lattice border + crescent finial ── */}
      <svg
        viewBox="0 0 360 560"
        className="pointer-events-none absolute inset-x-[58px] top-[74px] bottom-[64px] h-auto w-auto text-[#caa04b]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <JaliPattern id="nikah-jali" />
          {/* clip the lattice into a ring between the outer & inner arches */}
          <clipPath id="nikah-arch-ring">
            <path
              d="M180 8 C110 8 60 40 60 110 C60 150 84 178 120 196 C150 211 168 232 178 264 C179 252 181 252 182 264 C192 232 210 211 240 196 C276 178 300 150 300 110 C300 40 250 8 180 8 Z"
              transform="translate(-180 -150) scale(2.05) translate(180 150)"
            />
          </clipPath>
        </defs>

        {/* outer scaled arch silhouette filled with jali, then masked to a ring */}
        <g clipPath="url(#nikah-arch-ring)">
          <rect x="0" y="0" width="360" height="560" fill="url(#nikah-jali)" />
          {/* punch out the interior so only the border band of lattice shows */}
          <path
            d="M180 8 C110 8 60 40 60 110 C60 150 84 178 120 196 C150 211 168 232 178 264 C179 252 181 252 182 264 C192 232 210 211 240 196 C276 178 300 150 300 110 C300 40 250 8 180 8 Z"
            transform="translate(-180 -150) scale(1.78) translate(180 150)"
            fill="#063b2e"
          />
        </g>

        {/* crisp gold outline of the inner arch keyline */}
        <path
          d="M180 8 C110 8 60 40 60 110 C60 150 84 178 120 196 C150 211 168 232 178 264 C179 252 181 252 182 264 C192 232 210 211 240 196 C276 178 300 150 300 110 C300 40 250 8 180 8 Z"
          transform="translate(-180 -150) scale(1.92) translate(180 150)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeOpacity="0.9"
        />
        <path
          d="M180 8 C110 8 60 40 60 110 C60 150 84 178 120 196 C150 211 168 232 178 264 C179 252 181 252 182 264 C192 232 210 211 240 196 C276 178 300 150 300 110 C300 40 250 8 180 8 Z"
          transform="translate(-180 -150) scale(1.72) translate(180 150)"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Crescent moon + star at the arch apex */}
      <CrescentStar className="pointer-events-none absolute left-1/2 top-[36px] h-12 w-14 -translate-x-1/2 text-[#e7c878] [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.35))]" />

      {/* ── Content (sits within the mihrab) ── */}
      <div className="relative flex h-full flex-col items-center justify-between px-[92px] pb-[92px] pt-[118px] text-center">
        <header className="flex flex-col items-center">
          <HeaderFlourish className="h-7 w-44 text-[#caa04b]/85" />
          <p className="mt-3 font-display text-[20px] leading-tight tracking-wide text-[#e7c878]">
            ﷽
          </p>
          <p className="mt-1.5 max-w-[18rem] text-[12px] italic leading-relaxed text-[#d8c49a]/90">
            {t(
              'template.wedding.bismillah',
              'In the name of God, the Most Gracious, the Most Merciful',
            )}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.46em] text-[#caa04b]">
            {t('template.wedding.nikah', 'Together for their Nikah')}
          </p>

          <h1 className="font-script text-[58px] font-medium leading-[0.95]">
            <span
              data-pdf-color="#e7c878"
              className="bg-gradient-to-br from-[#f3dca0] via-[#e7c878] to-[#b9852f] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <FloralDivider className="my-2 h-6 w-56 text-[#caa04b]" />

          <h1 className="font-script text-[58px] font-medium leading-[0.95]">
            <span
              data-pdf-color="#e7c878"
              className="bg-gradient-to-bl from-[#f3dca0] via-[#e7c878] to-[#b9852f] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-3.5">
          <div className="flex flex-col items-center gap-1 rounded-[4px] border border-[#caa04b]/55 bg-[#03261d]/40 px-9 py-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-[#caa04b]">
              {t('template.wedding.nikahCeremony', 'Nikah Ceremony')}
            </span>
            <span className="font-display text-[24px] leading-none tracking-wide text-[#f4e6c0]">
              {nikahDate}
              {nikahTime && <span className="text-[#d8c49a]"> · {nikahTime}</span>}
            </span>
          </div>

          <p className="text-[13px] italic tracking-wide text-[#d8c49a]/90">{walimaInfo}</p>

          <FloralDivider className="h-5 w-44 text-[#caa04b]/70 [transform:scaleX(-1)]" />

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-[#caa04b]">
              {t('template.wedding.venue', 'Venue')}
            </span>
            <span className="text-[16px] leading-snug text-[#f4e6c0]">{venue}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
