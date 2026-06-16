'use client'

import { formatDate, formatTime } from '@/utils/format'

/* ── Art-deco sunburst / fan motif ─────────────────────────────────────── */

/** Radiating deco fan of gold rays — the glamorous nightlife sunburst. */
function DecoSunburst({ className = '' }) {
  const rays = Array.from({ length: 25 })
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        {rays.map((_, i) => {
          const a = (i / rays.length) * Math.PI * 2
          const x1 = 200 + Math.cos(a) * 40
          const y1 = 200 + Math.sin(a) * 40
          const x2 = 200 + Math.cos(a) * 200
          const y2 = 200 + Math.sin(a) * 200
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity={i % 2 ? 0.18 : 0.42} />
        })}
      </g>
      <circle cx="200" cy="200" r="44" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <circle cx="200" cy="200" r="54" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </svg>
  )
}

/** Tiered art-deco fan crown for the header. */
function DecoFan({ className = '' }) {
  return (
    <svg viewBox="0 0 200 110" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* nested fan blades */}
      <path d="M100 104V20" />
      <path d="M100 104L58 30" opacity="0.85" />
      <path d="M100 104L142 30" opacity="0.85" />
      <path d="M100 104L26 52" opacity="0.6" />
      <path d="M100 104L174 52" opacity="0.6" />
      <path d="M100 104L10 76" opacity="0.4" />
      <path d="M100 104L190 76" opacity="0.4" />
      {/* arcs binding the blades */}
      <path d="M30 70a74 74 0 0 1 140 0" opacity="0.7" />
      <path d="M52 48a52 52 0 0 1 96 0" opacity="0.5" />
      {/* crowning bead */}
      <circle cx="100" cy="14" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="100" cy="104" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Two clinking champagne flutes — the "cheers" celebration motif. */
function ChampagneCheers({ className = '' }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* left flute, tilted toward centre */}
      <g transform="rotate(-12 48 45)">
        <path d="M40 8h18l-2 26a7 7 0 0 1-14 0L40 8Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M49 41v34" />
        <path d="M40 80h18" />
        {/* bubbles */}
        <circle cx="46" cy="20" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="52" cy="26" r="1.1" fill="currentColor" stroke="none" />
      </g>
      {/* right flute, tilted toward centre */}
      <g transform="rotate(12 72 45)">
        <path d="M62 8h18l-2 26a7 7 0 0 1-14 0L62 8Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M71 41v34" />
        <path d="M62 80h18" />
        <circle cx="68" cy="20" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="74" cy="26" r="1.1" fill="currentColor" stroke="none" />
      </g>
      {/* spark at the clink point */}
      <path d="M60 4v8M56 8h8M57 5l6 6M63 5l-6 6" strokeWidth="1.2" opacity="0.85" />
    </svg>
  )
}

/* ── Scattered shimmer sparkles ────────────────────────────────────────── */
const SPARKLES = [
  { x: '12%', y: '12%', s: 14, o: 0.9 },
  { x: '86%', y: '9%', s: 10, o: 0.7 },
  { x: '22%', y: '24%', s: 8, o: 0.6 },
  { x: '78%', y: '20%', s: 12, o: 0.8 },
  { x: '8%', y: '46%', s: 9, o: 0.55 },
  { x: '92%', y: '42%', s: 11, o: 0.7 },
  { x: '16%', y: '70%', s: 8, o: 0.5 },
  { x: '88%', y: '66%', s: 13, o: 0.85 },
  { x: '30%', y: '88%', s: 9, o: 0.6 },
  { x: '72%', y: '90%', s: 11, o: 0.7 },
  { x: '50%', y: '6%', s: 10, o: 0.65 },
  { x: '46%', y: '94%', s: 8, o: 0.5 },
]

/** Four-point sparkle star. */
function Sparkle({ size = 10 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 0c.8 6 4 9.2 12 12-8 2.8-11.2 6-12 12-.8-6-4-9.2-12-12C8 9.2 11.2 6 12 0Z" />
    </svg>
  )
}

/**
 * Luxury evening RECEPTION invite — black-tie nightlife glamour.
 * Deep charcoal/onyx field, shimmering gold foil, art-deco sunburst & fan,
 * clinking champagne flutes. A celebration card, not a ceremony invite.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function LuxuryReception({ values }) {
  const coupleName = values.coupleName?.trim() || 'Aarav & Sanika'
  const receptionDate = formatDate(values.receptionDate, 'December 16, 2025')
  const receptionTime = formatTime(values.receptionTime, '')
  const venue = values.venue?.trim() || 'The Leela Ballroom, Mumbai'
  const hostName = values.hostName?.trim() || 'The Mehta Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#08080a] font-serif text-gold-200"
    >
      {/* Charcoal-to-black field with a warm overhead spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15151a] via-[#0b0b0e] to-[#020203]" />
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_50%_-10%,_rgba(225,184,92,0.28),_transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,_rgba(196,148,52,0.12),_transparent_70%)]" />

      {/* Huge deco sunburst glowing behind the wordmark */}
      <DecoSunburst className="pointer-events-none absolute left-1/2 top-[150px] h-[560px] w-[560px] -translate-x-1/2 text-gold-400" />

      {/* Scattered shimmer sparkles */}
      {SPARKLES.map((p, i) => (
        <span
          key={i}
          className="absolute block text-gold-200"
          style={{ left: p.x, top: p.y, opacity: p.o, transform: 'translate(-50%, -50%)' }}
        >
          <Sparkle size={p.s} />
        </span>
      ))}

      {/* Thin gold deco frame with notched-corner inset */}
      <div className="absolute inset-6 border border-gold-500/55" />
      <div className="absolute inset-[34px] border border-gold-400/20" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-between px-[64px] py-[68px] text-center">
        {/* Header: deco fan crown + tagline */}
        <header className="flex flex-col items-center">
          <DecoFan className="h-[88px] w-44 text-gold-400" />
          <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.6em] text-gold-300/90">
            Please join us for an evening of
          </p>
        </header>

        {/* Hero: RECEPTION wordmark + couple in gold script */}
        <main className="flex flex-col items-center">
          <h1 className="font-display text-[78px] font-bold uppercase leading-[0.86] tracking-[0.12em] drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
            <span
              data-pdf-color="#e6b94a"
              className="bg-gradient-to-b from-[#fff3c4] via-[#e6b94a] to-[#9a6e1f] bg-clip-text text-transparent"
            >
              Reception
            </span>
          </h1>

          {/* thin double rule under the wordmark */}
          <div className="mt-5 flex w-72 flex-col items-center gap-1.5">
            <span className="h-px w-full bg-gradient-to-r from-transparent via-gold-400/80 to-transparent" />
            <span className="h-px w-44 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
          </div>

          {/* honoring */}
          <p className="mt-7 font-sans text-[11px] font-semibold uppercase tracking-[0.5em] text-gold-300/80">
            in honour of
          </p>

          {/* couple name — gold script */}
          <p className="mt-3 font-script text-[56px] leading-[1.05]">
            <span
              data-pdf-color="#e6b94a"
              className="bg-gradient-to-b from-[#fff3c4] via-[#e8c25c] to-[#b07d22] bg-clip-text text-transparent"
            >
              {coupleName}
            </span>
          </p>

          {/* champagne cheers motif */}
          <ChampagneCheers className="mt-6 h-16 w-24 text-gold-300" />
        </main>

        {/* Footer: date/time, venue, host */}
        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex items-center gap-5">
            <span className="h-px w-14 bg-gold-500/50" />
            <div className="flex flex-col items-center gap-1">
              <p className="font-display text-[24px] tracking-wide text-gold-100">{receptionDate}</p>
              {receptionTime && (
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.4em] text-gold-300/85">
                  {receptionTime}
                </p>
              )}
            </div>
            <span className="h-px w-14 bg-gold-500/50" />
          </div>

          <p className="max-w-[22rem] text-[17px] leading-snug tracking-wide text-gold-100/90">{venue}</p>

          <p className="mt-1 text-[12px] italic leading-relaxed tracking-wide text-gold-300/70">
            Hosted by{' '}
            <span className="font-display text-[15px] not-italic tracking-wide text-gold-100">{hostName}</span>
          </p>

          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.55em] text-gold-400/70">
            Black Tie · Cocktails &amp; Dinner
          </p>
        </footer>
      </div>
    </div>
  )
}
