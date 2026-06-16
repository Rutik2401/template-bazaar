'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Destination Wedding invitation — a luxury beach / resort "save the date".
 *
 * An inline-SVG scene sets the mood: a soft dawn-to-turquoise sky, a glowing
 * setting sun over a calm sea horizon with gentle wave lines, swaying palm
 * trees framing the lower corners and warm sand at the base. Airy, light
 * typography floats over it in a turquoise / coral / warm-sand palette.
 *
 * Natural design size: 640 × 900 (portrait card).
 */

/* ── Scene building blocks (hand-built vector art) ───────────────────────── */

/** A single palm tree: curved trunk + a fan of drooping fronds at the crown. */
function PalmTree({ x, y, scale = 1, flip = false, trunk = '#7c5a3a', frond = '#1f7a6b' }) {
  const fronds = [
    { rot: -78, len: 118 },
    { rot: -44, len: 132 },
    { rot: -14, len: 138 },
    { rot: 16, len: 134 },
    { rot: 48, len: 124 },
    { rot: 82, len: 108 },
  ]
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      {/* trunk — gently leaning toward the centre */}
      <path
        d="M0 0 C -6 -70 -2 -150 18 -214 C 22 -228 26 -236 30 -244"
        fill="none"
        stroke={trunk}
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M0 0 C -6 -70 -2 -150 18 -214 C 22 -228 26 -236 30 -244"
        fill="none"
        stroke="#a07a52"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* crown of fronds */}
      <g transform="translate(30 -246)">
        {fronds.map((f, i) => {
          const a = (f.rot * Math.PI) / 180
          const ex = Math.sin(a) * f.len
          const ey = -Math.cos(a) * f.len
          const droop = 26
          return (
            <g key={i}>
              <path
                d={`M0 0 Q ${ex * 0.55} ${ey * 0.55 + droop * 0.4} ${ex} ${ey + droop}`}
                fill="none"
                stroke={frond}
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* leaflets along the frond */}
              {Array.from({ length: 5 }).map((_, j) => {
                const tt = (j + 1) / 6
                const bx = ex * tt
                const by = (ey + droop) * tt
                const nx = Math.cos(a) * 16
                const ny = Math.sin(a) * 16
                return (
                  <g key={j} stroke={frond} strokeWidth="2.4" strokeLinecap="round">
                    <path d={`M${bx} ${by} L ${bx + nx} ${by + ny + 6}`} />
                    <path d={`M${bx} ${by} L ${bx - nx} ${by + ny + 6}`} />
                  </g>
                )
              })}
            </g>
          )
        })}
        {/* coconuts */}
        <circle cx="2" cy="6" r="6" fill="#6b4a2c" />
        <circle cx="13" cy="9" r="5.5" fill="#7c5a3a" />
        <circle cx="-8" cy="10" r="5" fill="#6b4a2c" />
      </g>
    </g>
  )
}

/** The full beach scene behind the text. */
function ResortScene() {
  return (
    <svg
      viewBox="0 0 640 900"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* airy dawn → turquoise sky */}
        <linearGradient id="dw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eafaf7" />
          <stop offset="34%" stopColor="#d6f3ee" />
          <stop offset="62%" stopColor="#ffe9dd" />
          <stop offset="100%" stopColor="#ffd9c2" />
        </linearGradient>
        {/* the glowing sun */}
        <radialGradient id="dw-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6ec" />
          <stop offset="45%" stopColor="#ffd9a0" />
          <stop offset="100%" stopColor="#ff9e7a" />
        </radialGradient>
        {/* soft halo around the sun */}
        <radialGradient id="dw-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd9a0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
        {/* turquoise sea */}
        <linearGradient id="dw-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffc7ad" />
          <stop offset="18%" stopColor="#7fd6cc" />
          <stop offset="100%" stopColor="#2f9e8f" />
        </linearGradient>
        {/* warm sand */}
        <linearGradient id="dw-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e3c4" />
          <stop offset="100%" stopColor="#ecd2a6" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="640" height="560" fill="url(#dw-sky)" />

      {/* sun halo + sun, low over the horizon */}
      <circle cx="320" cy="500" r="220" fill="url(#dw-halo)" />
      <circle cx="320" cy="500" r="120" fill="url(#dw-sun)" />

      {/* drifting clouds */}
      <g fill="#ffffff" opacity="0.55">
        <ellipse cx="120" cy="150" rx="64" ry="15" />
        <ellipse cx="170" cy="160" rx="44" ry="11" />
        <ellipse cx="510" cy="110" rx="58" ry="13" />
        <ellipse cx="466" cy="120" rx="38" ry="9" />
      </g>

      {/* sea */}
      <rect x="0" y="500" width="640" height="240" fill="url(#dw-sea)" />

      {/* sun reflection on the water */}
      <g fill="#fff2dc" opacity="0.65">
        <rect x="300" y="512" width="40" height="6" rx="3" />
        <rect x="292" y="528" width="56" height="6" rx="3" />
        <rect x="284" y="548" width="72" height="7" rx="3.5" />
        <rect x="276" y="572" width="88" height="7" rx="3.5" />
        <rect x="268" y="600" width="104" height="8" rx="4" />
      </g>

      {/* gentle wave lines */}
      <g fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2.4" strokeLinecap="round">
        <path d="M40 540 q 24 -10 48 0 t 48 0 t 48 0" />
        <path d="M360 560 q 24 -10 48 0 t 48 0 t 48 0" />
        <path d="M70 600 q 28 -11 56 0 t 56 0 t 56 0" />
        <path d="M380 626 q 28 -11 56 0 t 56 0 t 56 0" />
        <path d="M120 668 q 30 -12 60 0 t 60 0 t 60 0" />
      </g>

      {/* sand */}
      <path d="M0 720 C 160 700 480 700 640 720 L 640 900 L 0 900 Z" fill="url(#dw-sand)" />
      {/* foam where sea meets sand */}
      <path
        d="M0 720 C 160 700 480 700 640 720"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* framing palm trees */}
      <PalmTree x={92} y={770} scale={1.04} />
      <PalmTree x={552} y={782} scale={0.96} flip />
    </svg>
  )
}

/* ── Template ────────────────────────────────────────────────────────────── */

export default function DestinationWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'December 15, 2025')
  const location = values.location?.trim() || 'Goa, India'
  const resort = values.resortName?.trim() || 'Taj Exotica Resort'
  const rsvp = values.rsvpContact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#eafaf7] font-serif text-[#0f5e54]"
    >
      {/* Beach / resort scene */}
      <ResortScene />

      {/* light wash to keep text legible over the bright scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,_rgba(255,255,255,0.55),_transparent_60%)]" />

      {/* hairline resort keyline */}
      <div className="pointer-events-none absolute inset-7 rounded-[14px] border border-white/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center px-16 pb-16 pt-[92px] text-center">
        {/* eyebrow */}
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.6em] text-[#e07a5f]">
          {t('template.common.saveTheDate', 'Save the Date')}
        </p>

        <div className="mt-4 flex items-center gap-3 text-[#1f7a6b]">
          <span className="h-px w-10 bg-[#1f7a6b]/40" />
          <span aria-hidden className="text-[13px] tracking-[0.4em]">✦</span>
          <span className="h-px w-10 bg-[#1f7a6b]/40" />
        </div>

        {/* invitation line */}
        <p className="mt-6 max-w-[19rem] font-sans text-[15px] font-light leading-relaxed tracking-wide text-[#0f5e54]/85">
          {t('template.common.joinUsIn', 'Join us in')}{' '}
          <span className="font-medium text-[#e07a5f]">{location}</span>
        </p>

        {/* the names */}
        <div className="mt-auto leading-none">
          <h1
            data-pdf-color="#0f5e54"
            className="bg-gradient-to-r from-[#0f5e54] via-[#1f9e8f] to-[#0f5e54] bg-clip-text font-script text-[78px] leading-[0.9] text-transparent"
          >
            {bride}
          </h1>
          <p className="my-1 font-script text-[40px] leading-none text-[#e07a5f]">&amp;</p>
          <h1
            data-pdf-color="#0f5e54"
            className="bg-gradient-to-r from-[#0f5e54] via-[#1f9e8f] to-[#0f5e54] bg-clip-text font-script text-[78px] leading-[0.9] text-transparent"
          >
            {groom}
          </h1>
        </div>

        {/* date */}
        <p className="mt-7 font-sans text-[17px] font-light uppercase tracking-[0.32em] text-[#0f5e54]">
          {date}
        </p>

        {/* resort */}
        <div className="mt-auto flex flex-col items-center gap-2">
          <span className="h-px w-24 bg-white/70" />
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-[#e07a5f]">
            {t('template.common.venue', 'Venue')}
          </p>
          <p className="font-display text-[24px] leading-tight text-[#0f5e54]">{resort}</p>
        </div>

        {/* RSVP */}
        <p className="mt-6 font-sans text-[12px] font-medium uppercase tracking-[0.34em] text-[#0f5e54]/80">
          {t('template.common.rsvp', 'RSVP')} · {rsvp}
        </p>
      </div>
    </div>
  )
}
