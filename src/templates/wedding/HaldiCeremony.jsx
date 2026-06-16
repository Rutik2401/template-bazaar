'use client'

import { formatDate, formatTime } from '@/utils/format'

/**
 * Haldi Ceremony invitation — a bright, joyful turmeric-yellow card crowned by
 * a marigold garland (toran) of round orange-and-yellow flowers, with playful
 * haldi motifs: a little turmeric pot with a smear, scattered marigold petals
 * and a haldi handprint accent. Big cheerful "Haldi" title in script.
 * Natural design size: 640 × 900 (portrait card).
 */

/* ── Marigold building blocks (hand-built vector art) ─────────────────────── */

/** A single round, layered marigold bloom (concentric ruffled rings). */
function Marigold({ x, y, r = 18, outer = '#f97316', mid = '#fb923c', core = '#facc15' }) {
  const ringPetals = (count, radius, fill, scale) => {
    const arr = Array.from({ length: count })
    return arr.map((_, i) => {
      const a = (i / count) * Math.PI * 2
      const cx = Math.cos(a) * radius
      const cy = Math.sin(a) * radius
      return (
        <ellipse
          key={`${radius}-${i}`}
          cx={cx}
          cy={cy}
          rx={r * scale}
          ry={r * scale * 0.66}
          fill={fill}
          transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`}
        />
      )
    })
  }
  return (
    <g transform={`translate(${x} ${y})`}>
      {ringPetals(11, r * 0.84, outer, 0.42)}
      {ringPetals(9, r * 0.54, mid, 0.4)}
      {ringPetals(7, r * 0.26, core, 0.36)}
      <circle r={r * 0.22} fill={core} />
    </g>
  )
}

/** A hanging marigold garland (toran): looping string with blooms + leaves. */
function MarigoldGarland({ className = '' }) {
  const blooms = Array.from({ length: 13 })
  // gentle drooping arc so the garland swags like a real toran
  const yAt = (t) => 26 + Math.sin(t * Math.PI) * -10 + (t < 0.5 ? 0 : 0)
  return (
    <svg viewBox="0 0 640 120" className={className} fill="none" preserveAspectRatio="none">
      {/* swag string */}
      <path
        d="M0 28 C 160 64, 480 64, 640 28"
        stroke="#ca8a04"
        strokeWidth="2.5"
        opacity="0.7"
        fill="none"
      />
      {blooms.map((_, i) => {
        const t = i / (blooms.length - 1)
        const x = t * 640
        // follow the swag curve (quadratic-ish droop)
        const sag = Math.sin(t * Math.PI) * 30
        const y = 28 + sag
        const big = i % 2 === 0
        return (
          <g key={i}>
            {/* hanging thread + leaf below each bloom */}
            <path d={`M${x} ${y} L ${x} ${y + 24}`} stroke="#65a30d" strokeWidth="1.6" />
            <path
              d={`M${x} ${y + 24} q 6 8 0 16 q -6 -8 0 -16 Z`}
              fill="#84cc16"
              opacity="0.9"
            />
            <Marigold
              x={x}
              y={y}
              r={big ? 19 : 15}
              outer={big ? '#ea580c' : '#f59e0b'}
              mid={big ? '#fb923c' : '#fbbf24'}
              core={big ? '#fde047' : '#fef08a'}
            />
          </g>
        )
      })}
    </svg>
  )
}

/** A little earthen turmeric pot (kalash/bowl) with a bright haldi smear. */
function TurmericPot({ className = '' }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none">
      {/* paste mound */}
      <path d="M30 52 C 36 36, 84 36, 90 52 Z" fill="#facc15" />
      <path d="M40 48 C 50 40, 70 40, 80 48" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      {/* pot body */}
      <path
        d="M26 52 h68 c4 0 6 4 5 8 l-7 36 c-2 9 -10 12 -31 12 s-29 -3 -31 -12 l-7 -36 c-1 -4 1 -8 5 -8 Z"
        fill="#c2410c"
      />
      {/* rim */}
      <ellipse cx="60" cy="52" rx="34" ry="8" fill="#9a3412" />
      <ellipse cx="60" cy="51" rx="30" ry="6" fill="#7c2d12" />
      {/* decorative band + dots */}
      <path d="M24 72 h72" stroke="#fdba74" strokeWidth="3" opacity="0.85" />
      <g fill="#fed7aa">
        <circle cx="40" cy="84" r="3" />
        <circle cx="60" cy="88" r="3" />
        <circle cx="80" cy="84" r="3" />
      </g>
      {/* a haldi smear running down the rim */}
      <path d="M88 56 q 8 12 2 26 q -7 -10 -2 -26 Z" fill="#fde047" opacity="0.95" />
    </svg>
  )
}

/** A playful turmeric (haldi) handprint accent — palm + five fingers. */
function HaldiHandprint({ className = '' }) {
  return (
    <svg viewBox="0 0 90 100" className={className} fill="currentColor">
      {/* palm */}
      <ellipse cx="45" cy="62" rx="26" ry="24" />
      {/* fingers */}
      <rect x="20" y="20" width="9" height="34" rx="4.5" transform="rotate(-14 24 40)" />
      <rect x="33" y="12" width="9" height="42" rx="4.5" transform="rotate(-5 37 36)" />
      <rect x="46" y="11" width="9" height="44" rx="4.5" transform="rotate(3 50 36)" />
      <rect x="58" y="16" width="9" height="38" rx="4.5" transform="rotate(11 62 38)" />
      {/* thumb */}
      <rect x="64" y="44" width="9" height="26" rx="4.5" transform="rotate(48 68 56)" />
    </svg>
  )
}

/** A single soft marigold petal for scattering. */
function Petal({ x, y, rotate = 0, scale = 1, fill = '#fb923c' }) {
  return (
    <path
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      d="M0 0 C 8 -6, 8 -18, 0 -24 C -8 -18, -8 -6, 0 0 Z"
      fill={fill}
    />
  )
}

/** Scattered marigold petals across an area. */
function ScatteredPetals({ className = '' }) {
  const petals = [
    [24, 40, 18, 1.1, '#fb923c'],
    [120, 18, -28, 0.9, '#fbbf24'],
    [210, 56, 64, 1.0, '#f97316'],
    [60, 110, 120, 0.85, '#fcd34d'],
    [180, 130, -50, 1.05, '#fb923c'],
    [250, 90, 200, 0.8, '#f59e0b'],
  ]
  return (
    <svg viewBox="0 0 280 160" className={className} fill="none">
      {petals.map(([x, y, r, s, f], i) => (
        <Petal key={i} x={x} y={y} rotate={r} scale={s} fill={f} />
      ))}
    </svg>
  )
}

/* ── Inline line icons (warm brown) ──────────────────────────────────────── */

function CalendarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  )
}

function ClockIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

/* ── Template ────────────────────────────────────────────────────────────── */

export default function HaldiCeremony({ values }) {
  const name = values.celebrantName?.trim() || 'Sanika'
  const date = formatDate(values.haldiDate, 'December 13, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Residence, Pune'
  const familyName = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fde047] font-serif text-[#7c4a03]"
    >
      {/* sunny turmeric gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#f59e0b]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_104%,rgba(234,88,12,0.32),transparent_46%)]" />

      {/* haldi handprint accents in the lower corners */}
      <HaldiHandprint className="pointer-events-none absolute bottom-7 left-6 h-24 w-20 rotate-[-18deg] text-[#ea580c]/25" />
      <HaldiHandprint className="pointer-events-none absolute bottom-7 right-6 h-24 w-20 rotate-[18deg] scale-x-[-1] text-[#ea580c]/25" />

      {/* scattered petals around the title area */}
      <ScatteredPetals className="pointer-events-none absolute left-2 top-[210px] h-32 w-56 opacity-80" />
      <ScatteredPetals className="pointer-events-none absolute right-2 top-[210px] h-32 w-56 scale-x-[-1] opacity-80" />

      {/* marigold garland toran along the top, plus a slim second swag */}
      <MarigoldGarland className="pointer-events-none absolute left-0 top-0 h-[112px] w-full" />
      <MarigoldGarland className="pointer-events-none absolute left-0 top-[56px] h-[96px] w-full opacity-60" />

      {/* corner garland drops */}
      <Marigold x={0} y={0} r={0} />

      {/* dashed festive keyline frame */}
      <div className="pointer-events-none absolute inset-[26px] rounded-[28px] border-2 border-dashed border-[#ca8a04]/55" />
      <div className="pointer-events-none absolute inset-[34px] rounded-[24px] border border-[#fb923c]/50" />

      {/* Content */}
      <div className="absolute inset-x-[58px] bottom-[44px] top-[150px] z-10 flex flex-col items-center text-center">
        {/* eyebrow */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.42em] text-[#b45309]">
          You&apos;re invited to the
        </p>

        {/* Big cheerful title */}
        <h1 className="mt-2 font-script text-[112px] leading-[0.8]">
          <span
            data-pdf-color="#c2410c"
            className="bg-gradient-to-b from-[#ea580c] via-[#f97316] to-[#d97706] bg-clip-text text-transparent [filter:drop-shadow(0_3px_10px_rgba(234,88,12,0.18))]"
          >
            Haldi
          </span>
        </h1>
        <p className="-mt-1 font-display text-[20px] uppercase tracking-[0.5em] text-[#b45309]">
          Ceremony
        </p>

        {/* divider with center marigold */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#ea580c]/70" />
          <svg viewBox="0 0 40 40" className="h-8 w-8">
            <Marigold x={20} y={20} r={17} />
          </svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#ea580c]/70" />
        </div>

        {/* Invite line + name */}
        <p className="mt-6 text-[17px] leading-snug text-[#92400e]">
          Join us to celebrate the Haldi of
        </p>
        <p className="mt-2 font-script text-[58px] leading-[0.9] text-[#c2410c]">{name}</p>

        {/* turmeric pot motif */}
        <TurmericPot className="pointer-events-none mt-5 h-[92px] w-[100px] [filter:drop-shadow(0_4px_8px_rgba(124,45,18,0.18))]" />

        {/* Details: date · time · venue */}
        <div className="mt-6 flex w-full items-stretch justify-center gap-5 text-[13px] leading-snug">
          <div className="flex w-[7rem] flex-col items-center gap-1.5">
            <CalendarIcon className="h-6 w-6 text-[#b45309]" />
            <p className="font-semibold tracking-wide">{date}</p>
          </div>

          {time && (
            <>
              <span aria-hidden className="w-px self-stretch bg-[#ca8a04]/60" />
              <div className="flex w-[6rem] flex-col items-center gap-1.5">
                <ClockIcon className="h-6 w-6 text-[#b45309]" />
                <p className="font-semibold tracking-wide">{time}</p>
              </div>
            </>
          )}

          <span aria-hidden className="w-px self-stretch bg-[#ca8a04]/60" />

          <div className="flex w-[7rem] flex-col items-center gap-1.5">
            <PinIcon className="h-6 w-6 text-[#b45309]" />
            <p className="font-medium">{venue}</p>
          </div>
        </div>

        {/* Family signature */}
        <div className="mt-auto flex flex-col items-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b45309]">
            With love &amp; blessings from
          </p>
          <p className="mt-1.5 font-script text-[34px] leading-none text-[#c2410c]">
            {familyName}
          </p>
        </div>
      </div>
    </div>
  )
}
