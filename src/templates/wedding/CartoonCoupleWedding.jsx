'use client'

import { formatDate } from '@/utils/format'

/**
 * Cartoon Couple wedding invitation — a playful-yet-premium illustrated invite.
 * The top ~55% is a hand-drawn SVG cartoon of a bride (in a lehenga) and groom
 * (in a sherwani) standing together holding hands beneath a soft floral arch.
 * Below: the two names in a script font joined by a heart, an italic tagline,
 * and a rounded pill row holding the date & venue.
 * Blush/cream palette with gold accents. Natural design size: 640 × 900.
 */

/* ── Inline illustration building blocks (hand-built vector art) ─────────── */

/** A soft five-petal blossom with a golden centre. */
function Bloom({ x, y, r = 13, petal = '#f7c9cf', center = '#e0a23a', rotate = 0 }) {
  const arr = Array.from({ length: 5 })
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      {arr.map((_, i) => {
        const a = (i / 5) * Math.PI * 2
        return (
          <ellipse
            key={i}
            cx={Math.cos(a) * r * 0.6}
            cy={Math.sin(a) * r * 0.6}
            rx={r * 0.52}
            ry={r * 0.36}
            fill={petal}
            transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * r * 0.6} ${Math.sin(a) * r * 0.6})`}
          />
        )
      })}
      <circle r={r * 0.3} fill={center} />
    </g>
  )
}

/** A simple rounded leaf. */
function Leaf({ x, y, rotate = 0, scale = 1, fill = '#bcd3a6' }) {
  return (
    <path
      d="M0 0 C 9 -7 9 -22 0 -30 C -9 -22 -9 -7 0 0 Z"
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  )
}

/** The full floral-and-leaf arch sweeping over the couple. */
function FloralArch() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="pointer-events-none absolute inset-x-0 top-0 h-[360px] w-full"
      fill="none"
    >
      {/* arch ribbon */}
      <path
        d="M70 360 C 70 150 200 36 320 36 C 440 36 570 150 570 360"
        stroke="#e7c98f"
        strokeWidth="3"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M96 360 C 96 168 214 60 320 60 C 426 60 544 168 544 360"
        stroke="#d9a85c"
        strokeWidth="1.6"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* trailing greenery along the arch */}
      <g opacity="0.9">
        <Leaf x={150} y={150} rotate={-30} scale={0.9} fill="#c4d8ad" />
        <Leaf x={132} y={196} rotate={-8} scale={1.05} fill="#b3cb96" />
        <Leaf x={210} y={92} rotate={-58} scale={0.85} fill="#c4d8ad" />
        <Leaf x={266} y={62} rotate={-78} scale={0.8} fill="#b3cb96" />
        <Leaf x={490} y={150} rotate={30} scale={0.9} fill="#c4d8ad" />
        <Leaf x={508} y={196} rotate={8} scale={1.05} fill="#b3cb96" />
        <Leaf x={430} y={92} rotate={58} scale={0.85} fill="#c4d8ad" />
        <Leaf x={374} y={62} rotate={78} scale={0.8} fill="#b3cb96" />
        <Leaf x={320} y={48} rotate={0} scale={0.78} fill="#c4d8ad" />
      </g>

      {/* clustered blossoms — top crown + cascading down each side */}
      <Bloom x={320} y={50} r={17} petal="#f4b9c2" />
      <Bloom x={292} y={66} r={12} petal="#f9d4d9" />
      <Bloom x={348} y={66} r={12} petal="#f9d4d9" />
      <Bloom x={228} y={82} r={15} petal="#f7c9cf" rotate={20} />
      <Bloom x={412} y={82} r={15} petal="#f7c9cf" rotate={-20} />
      <Bloom x={170} y={132} r={13} petal="#f9d4d9" />
      <Bloom x={470} y={132} r={13} petal="#f9d4d9" />
      <Bloom x={142} y={188} r={16} petal="#f4b9c2" rotate={12} />
      <Bloom x={498} y={188} r={16} petal="#f4b9c2" rotate={-12} />
      <Bloom x={120} y={250} r={12} petal="#f7c9cf" />
      <Bloom x={520} y={250} r={12} petal="#f7c9cf" />

      {/* tiny golden buds for sparkle */}
      <g fill="#e7c98f">
        <circle cx="256" cy="60" r="3.5" />
        <circle cx="384" cy="60" r="3.5" />
        <circle cx="196" cy="108" r="3" />
        <circle cx="444" cy="108" r="3" />
        <circle cx="320" cy="34" r="3" />
      </g>
    </svg>
  )
}

/** Cartoon bride in a rose lehenga with a dupatta. Anchored bottom-centre at (0,0). */
function Bride() {
  return (
    <g>
      {/* lehenga skirt */}
      <path
        d="M-58 0 C -52 -86 -34 -150 0 -150 C 34 -150 52 -86 58 0 Z"
        fill="#e98ba0"
      />
      <path
        d="M-58 0 C -52 -86 -34 -150 0 -150 C 34 -150 52 -86 58 0 Z"
        fill="url(#brideSkirtShade)"
        opacity="0.35"
      />
      {/* skirt hem + golden border */}
      <path d="M-58 0 H 58" stroke="#c96a82" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M-52 -22 C -28 -34 28 -34 52 -22"
        stroke="#e7c98f"
        strokeWidth="2.4"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M-44 -52 C -22 -62 22 -62 44 -52"
        stroke="#e7c98f"
        strokeWidth="1.8"
        fill="none"
        opacity="0.6"
      />
      {/* golden motifs on skirt */}
      <g fill="#e7c98f" opacity="0.85">
        <circle cx="-26" cy="-78" r="2.6" />
        <circle cx="0" cy="-92" r="2.6" />
        <circle cx="26" cy="-78" r="2.6" />
        <circle cx="-14" cy="-110" r="2.2" />
        <circle cx="14" cy="-110" r="2.2" />
      </g>

      {/* choli / blouse */}
      <path d="M-26 -150 C -22 -178 22 -178 26 -150 C 14 -142 -14 -142 -26 -150 Z" fill="#cf5f78" />
      {/* dupatta draped over shoulder */}
      <path
        d="M-30 -176 C -54 -150 -58 -96 -46 -48 C -36 -78 -30 -120 -22 -160 Z"
        fill="#f4b9c2"
        opacity="0.92"
      />
      <path d="M-46 -48 L -50 -34" stroke="#e7c98f" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* neck */}
      <rect x="-7" y="-188" width="14" height="16" rx="6" fill="#f1c9a5" />
      {/* head */}
      <circle cx="0" cy="-206" r="22" fill="#f3cda9" />
      {/* hair — bun with centre parting */}
      <path
        d="M-22 -206 C -24 -232 24 -232 22 -206 C 16 -222 -16 -222 -22 -206 Z"
        fill="#3a2a22"
      />
      <path d="M0 -228 V -210" stroke="#5a4234" strokeWidth="1.4" opacity="0.6" />
      <circle cx="20" cy="-216" r="9" fill="#3a2a22" />
      <path d="M-22 -206 C -26 -184 -22 -172 -14 -168" fill="#3a2a22" />
      <path d="M22 -206 C 26 -184 22 -172 14 -168" fill="#3a2a22" />
      {/* maang tikka */}
      <circle cx="0" cy="-226" r="2.6" fill="#e0a23a" />
      <line x1="0" y1="-223" x2="0" y2="-216" stroke="#e0a23a" strokeWidth="1.4" />
      <circle cx="0" cy="-214" r="2.2" fill="#e0a23a" />
      {/* face */}
      <circle cx="-8" cy="-208" r="2.1" fill="#3a2a22" />
      <circle cx="8" cy="-208" r="2.1" fill="#3a2a22" />
      <path d="M-13 -213 q 5 -3 9 0" stroke="#5a4234" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 -213 q 5 -3 9 0" stroke="#5a4234" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="-12" cy="-201" r="3.4" fill="#f0a8b2" opacity="0.7" />
      <circle cx="12" cy="-201" r="3.4" fill="#f0a8b2" opacity="0.7" />
      <path d="M-5 -199 q 5 4 10 0" stroke="#c96a82" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* bindi + earrings */}
      <circle cx="0" cy="-216" r="1.8" fill="#c0392b" />
      <circle cx="-21" cy="-203" r="2.4" fill="#e0a23a" />
      <circle cx="21" cy="-203" r="2.4" fill="#e0a23a" />

      {/* inner arm reaching to hold hands (towards groom on her left/our right) */}
      <path d="M22 -170 C 44 -158 58 -140 66 -120" stroke="#cf5f78" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="68" cy="-116" r="7" fill="#f3cda9" />
    </g>
  )
}

/** Cartoon groom in a cream sherwani with a turban. Anchored bottom-centre at (0,0). */
function Groom() {
  return (
    <g>
      {/* sherwani body / coat */}
      <path
        d="M-44 0 C -42 -96 -34 -170 0 -170 C 34 -170 42 -96 44 0 Z"
        fill="#f3ead3"
      />
      <path
        d="M-44 0 C -42 -96 -34 -170 0 -170 C 34 -170 42 -96 44 0 Z"
        fill="url(#groomCoatShade)"
        opacity="0.4"
      />
      {/* centre placket + buttons */}
      <path d="M0 -160 V -6" stroke="#d9c79a" strokeWidth="2" />
      <g fill="#e0a23a">
        <circle cx="0" cy="-138" r="2.4" />
        <circle cx="0" cy="-112" r="2.4" />
        <circle cx="0" cy="-86" r="2.4" />
        <circle cx="0" cy="-60" r="2.4" />
      </g>
      {/* churidar legs peeking below */}
      <path d="M-22 0 C -20 -30 -6 -30 -4 0 Z" fill="#efe4c8" />
      <path d="M4 0 C 6 -30 20 -30 22 0 Z" fill="#efe4c8" />
      {/* mojari shoes */}
      <path d="M-26 0 C -28 6 -14 7 -6 2 Z" fill="#c79a4e" />
      <path d="M26 0 C 28 6 14 7 6 2 Z" fill="#c79a4e" />

      {/* stole / dupatta across chest */}
      <path d="M-30 -168 C -10 -120 -2 -70 2 -16 L 14 -16 C 8 -78 4 -128 -16 -170 Z" fill="#e98ba0" opacity="0.9" />
      <path d="M2 -16 L 14 -16" stroke="#e7c98f" strokeWidth="2" opacity="0.7" />

      {/* neck */}
      <rect x="-7" y="-206" width="14" height="16" rx="6" fill="#e8b888" />
      {/* head */}
      <circle cx="0" cy="-224" r="22" fill="#eabb8a" />
      {/* turban (safa) */}
      <path d="M-23 -228 C -24 -252 24 -252 23 -228 C 14 -242 -14 -242 -23 -228 Z" fill="#e98ba0" />
      <path d="M-23 -228 C -16 -234 16 -234 23 -228" stroke="#d97090" strokeWidth="2" fill="none" />
      <path d="M-18 -236 C -8 -244 8 -244 18 -236" stroke="#f4b9c2" strokeWidth="2.2" fill="none" />
      {/* turban kalgi (jewel feather) */}
      <path d="M14 -246 C 20 -260 24 -262 22 -248" fill="#e0a23a" />
      <circle cx="13" cy="-244" r="3" fill="#e0a23a" />
      {/* sideburns / hair edge */}
      <path d="M-22 -224 C -25 -210 -20 -204 -14 -202" fill="#2e211b" />
      <path d="M22 -224 C 25 -210 20 -204 14 -202" fill="#2e211b" />
      {/* face */}
      <circle cx="-8" cy="-225" r="2.1" fill="#2e211b" />
      <circle cx="8" cy="-225" r="2.1" fill="#2e211b" />
      <path d="M-13 -230 q 5 -3 9 0" stroke="#3a2a22" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 -230 q 5 -3 9 0" stroke="#3a2a22" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="-12" cy="-218" r="3.2" fill="#e29a86" opacity="0.6" />
      <circle cx="12" cy="-218" r="3.2" fill="#e29a86" opacity="0.6" />
      <path d="M-6 -216 q 6 4 12 0" stroke="#a85a44" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* tidy moustache */}
      <path d="M-8 -213 q 4 3 8 0 q 4 3 8 0" stroke="#3a2a22" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* inner arm reaching to hold hands (towards bride on his right/our left) */}
      <path d="M-22 -188 C -44 -174 -58 -150 -66 -120" stroke="#f3ead3" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="-68" cy="-116" r="7" fill="#eabb8a" />
    </g>
  )
}

/** Small inline heart used between the names. */
function Heart({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.9-10-9.4C.3 8.4 1.6 5 5 5c2 0 3.4 1.2 4 2.4C9.6 6.2 11 5 13 5c3.4 0 4.7 3.4 3 6.6C16.5 16.1 12 21 12 21Z" />
    </svg>
  )
}

/* ── Inline pill icons ───────────────────────────────────────────────────── */

function CalendarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
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

export default function CartoonCoupleWedding({ values }) {
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'December 15, 2025')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const tagline = values.tagline?.trim() || 'Two souls, one beautiful journey'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fdf3ee] font-sans text-maroon-600"
    >
      {/* Soft blush wash + cream centre glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff6f1] via-[#fdeee7] to-[#f8e3da]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(255,255,255,0.7),_transparent_62%)]" />

      {/* Gentle gold keyline frame */}
      <div className="pointer-events-none absolute inset-4 rounded-[28px] border border-gold-300/60" />
      <div className="pointer-events-none absolute inset-[22px] rounded-[22px] ring-1 ring-inset ring-gold-200/50" />

      {/* ── TOP ~55%: illustrated scene ─────────────────────────────────── */}
      <div className="absolute inset-x-0 top-0 h-[496px]">
        {/* floral arch overhead */}
        <FloralArch />

        {/* couple standing together on a soft ground shadow */}
        <svg viewBox="0 0 640 360" className="absolute inset-x-0 bottom-0 h-[360px] w-full" fill="none">
          <defs>
            <linearGradient id="brideSkirtShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#c96a82" />
            </linearGradient>
            <linearGradient id="groomCoatShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#d9c79a" />
            </linearGradient>
          </defs>

          {/* ground shadow */}
          <ellipse cx="320" cy="340" rx="180" ry="18" fill="#e2b9aa" opacity="0.45" />

          {/* clasped hands accent between them */}
          <circle cx="320" cy="244" r="9" fill="#f1c9a5" />
          <circle cx="320" cy="244" r="4" fill="#e0a23a" opacity="0.5" />

          {/* groom on the left, bride on the right */}
          <g transform="translate(250 340)">
            <Groom />
          </g>
          <g transform="translate(390 340)">
            <Bride />
          </g>
        </svg>
      </div>

      {/* ── BOTTOM ~45%: names, tagline & info pill ─────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 top-[496px] flex flex-col items-center px-12 pt-3 text-center">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-600">
          Together forever
        </p>

        {/* names joined by a heart */}
        <div className="mt-2 flex items-center justify-center gap-3 leading-none">
          <h1 className="font-script text-[58px] leading-[0.9]">
            <span
              data-pdf-color="#c96a82"
              className="bg-gradient-to-br from-maroon-500 via-[#d97090] to-gold-500 bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>
          <Heart className="h-7 w-7 shrink-0 text-[#e98ba0]" />
          <h1 className="font-script text-[58px] leading-[0.9]">
            <span
              data-pdf-color="#c96a82"
              className="bg-gradient-to-bl from-maroon-500 via-[#d97090] to-gold-500 bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>
        </div>

        {/* tagline */}
        <p className="mt-3 max-w-[22rem] font-serif text-[16px] italic leading-relaxed text-maroon-500/85">
          {tagline}
        </p>

        {/* delicate gold divider */}
        <div className="mt-4 flex items-center gap-2 text-gold-500">
          <span className="h-px w-16 bg-gold-400/70" />
          <Heart className="h-3 w-3" />
          <span className="h-px w-16 bg-gold-400/70" />
        </div>

        {/* soft rounded pill row: date + venue */}
        <div className="mt-5 flex w-full max-w-[26rem] items-stretch gap-3">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-gold-300/70 bg-white/70 px-5 py-3 shadow-[0_4px_14px_rgba(201,106,130,0.12)]">
            <CalendarIcon className="h-5 w-5 shrink-0 text-gold-600" />
            <div className="min-w-0 text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-600">When</p>
              <p className="truncate text-[14px] font-medium leading-snug text-maroon-600">{weddingDate}</p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-3 rounded-full border border-gold-300/70 bg-white/70 px-5 py-3 shadow-[0_4px_14px_rgba(201,106,130,0.12)]">
            <PinIcon className="h-5 w-5 shrink-0 text-gold-600" />
            <div className="min-w-0 text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-600">Where</p>
              <p className="truncate text-[14px] font-medium leading-snug text-maroon-600">{venue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
