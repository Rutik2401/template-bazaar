'use client'

import { formatDate, formatTime } from '@/utils/format'

/* ── Intricate henna-art line-work pieces ──────────────────────────────── */

/** A detailed central mandala built from concentric rings, petals & paisley. */
function HennaMandala({ className = '' }) {
  const outerPetals = Array.from({ length: 24 })
  const midPetals = Array.from({ length: 16 })
  const paisleys = Array.from({ length: 12 })
  const dots = Array.from({ length: 32 })
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      {/* radiating fine outer petals */}
      <g>
        {outerPetals.map((_, i) => (
          <path
            key={`o${i}`}
            d="M120 6c3 9 3 16 0 24-3-8-3-15 0-24Z"
            fill="currentColor"
            fillOpacity="0.10"
            transform={`rotate(${(i / outerPetals.length) * 360} 120 120)`}
          />
        ))}
      </g>
      <circle cx="120" cy="120" r="108" opacity="0.35" />
      <circle cx="120" cy="120" r="100" opacity="0.55" strokeDasharray="2 5" />

      {/* ring of dots */}
      <g fill="currentColor" stroke="none">
        {dots.map((_, i) => {
          const a = (i / dots.length) * Math.PI * 2
          return <circle key={`d${i}`} cx={120 + Math.cos(a) * 90} cy={120 + Math.sin(a) * 90} r="1.6" />
        })}
      </g>

      {/* scalloped band */}
      <g opacity="0.7">
        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={`s${i}`}
            d="M120 32a10 10 0 0 1 0 16 10 10 0 0 1 0-16Z"
            fill="currentColor"
            fillOpacity="0.08"
            transform={`rotate(${(i / 24) * 360} 120 120)`}
          />
        ))}
      </g>
      <circle cx="120" cy="120" r="74" opacity="0.5" />

      {/* lotus-petal ring */}
      <g>
        {midPetals.map((_, i) => (
          <path
            key={`m${i}`}
            d="M120 50c8 8 12 18 12 30 0 9-5 16-12 22-7-6-12-13-12-22 0-12 4-22 12-30Z"
            fill="currentColor"
            fillOpacity="0.12"
            transform={`rotate(${(i / midPetals.length) * 360} 120 120)`}
          />
        ))}
      </g>
      <circle cx="120" cy="120" r="48" opacity="0.6" />

      {/* inner ring of curling paisley buds */}
      <g>
        {paisleys.map((_, i) => (
          <path
            key={`p${i}`}
            d="M120 78c7 2 12 8 12 16 0 7-5 12-12 12-5 0-9-3-9-8 0-4 3-7 7-7-3 0-5-2-5-5 0-4 3-7 7-8Z"
            fill="currentColor"
            fillOpacity="0.14"
            stroke="currentColor"
            strokeWidth="0.7"
            transform={`rotate(${(i / paisleys.length) * 360} 120 120)`}
          />
        ))}
      </g>

      {/* core flower */}
      <circle cx="120" cy="120" r="24" opacity="0.7" />
      <g>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`c${i}`}
            d="M120 98c4 5 6 11 6 18-4-2-6-6-6-10-0 4-2 8-6 10 0-7 2-13 6-18Z"
            fill="currentColor"
            fillOpacity="0.22"
            transform={`rotate(${(i / 8) * 360} 120 120)`}
          />
        ))}
      </g>
      <circle cx="120" cy="120" r="8" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="120" cy="120" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornate paisley + vine corner flourish. */
function PaisleyCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* sweeping vine */}
      <path d="M6 6c44 6 78 30 96 70" opacity="0.7" />
      <path d="M6 6c20 40 44 66 84 80" opacity="0.5" />
      {/* large paisley */}
      <path d="M18 24c34-2 58 18 58 50 0 22-15 38-36 38-15 0-26-10-26-24 0-11 8-19 19-19-8 0-14-5-14-13 0-13 9-27 25-32-9 0-16-3-26-0Z" fill="currentColor" fillOpacity="0.10" />
      <path d="M30 44c18 2 30 16 30 34 0 10-6 17-15 17" opacity="0.7" />
      {/* paisley inner dots */}
      <g fill="currentColor" stroke="none">
        <circle cx="40" cy="62" r="2" />
        <circle cx="48" cy="74" r="1.6" />
        <circle cx="38" cy="80" r="1.6" />
        <circle cx="52" cy="58" r="1.4" />
      </g>
      {/* sprouting leaves + buds along vine */}
      <g>
        <path d="M70 30c8-4 16-4 24 1-7 4-15 4-24-1Z" fill="currentColor" fillOpacity="0.16" />
        <path d="M92 56c8-2 16 0 22 6-8 2-16 0-22-6Z" fill="currentColor" fillOpacity="0.16" />
        <path d="M100 84c7 1 13 6 16 13-7-1-13-6-16-13Z" fill="currentColor" fillOpacity="0.16" />
      </g>
      <g fill="currentColor" stroke="none">
        <circle cx="116" cy="44" r="2.4" />
        <circle cx="126" cy="70" r="2" />
        <circle cx="60" cy="20" r="2" />
      </g>
      {/* fine teardrop fringe */}
      <g opacity="0.6">
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M${10 + i * 4} ${110 + i * 4}q6 6 0 14q-6-8 0-14Z`} fill="currentColor" fillOpacity="0.12" />
        ))}
      </g>
    </svg>
  )
}

/** A flowing henna-decorated hand silhouette with mehendi patterns. */
function HennaHand({ className = '' }) {
  return (
    <svg viewBox="0 0 180 240" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* hand silhouette */}
      <path
        d="M58 236c-6-30-10-54-10-78l-6 2c-7 2-13-1-15-8l-6-22c-2-7 6-12 11-7l9 9c-2-20-3-38-2-58 0-7 10-7 11 0l3 38 3-1-2-58c0-8 11-8 12 0l3 56 4 0 2-62c0-8 11-8 12 0l1 64 4 1 6-50c1-8 12-7 11 1l-4 60c8-10 17-18 27-23 6-3 12 4 8 10-12 18-20 33-23 49-3 18-3 41-7 76Z"
        fill="currentColor"
        fillOpacity="0.10"
      />
      {/* central palm mandala */}
      <circle cx="74" cy="150" r="22" opacity="0.7" />
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d="M74 130c3 4 5 9 5 14-3-2-5-5-5-8-0 3-2 6-5 8 0-5 2-10 5-14Z"
            fill="currentColor"
            fillOpacity="0.2"
            transform={`rotate(${(i / 10) * 360} 74 150)`}
          />
        ))}
      </g>
      <circle cx="74" cy="150" r="8" opacity="0.8" />
      <circle cx="74" cy="150" r="2.6" fill="currentColor" stroke="none" />
      {/* vine flowing down the wrist */}
      <path d="M74 178c-2 16-4 32-8 50" opacity="0.6" />
      <g fill="currentColor" stroke="none">
        <circle cx="68" cy="196" r="1.6" />
        <circle cx="64" cy="214" r="1.6" />
        <circle cx="78" cy="206" r="1.4" />
      </g>
      {/* finger-tip motifs */}
      <g opacity="0.7">
        <circle cx="42" cy="70" r="5" />
        <circle cx="60" cy="56" r="5" />
        <circle cx="78" cy="54" r="5" />
        <circle cx="96" cy="62" r="5" />
        <circle cx="114" cy="78" r="5" />
      </g>
      {/* paisley on the back of the hand */}
      <path d="M96 120c10 0 16 7 16 17 0 7-5 12-12 12-5 0-9-4-9-9 0-4 3-6 6-6-4 0-7-3-7-7 0-7 5-13 12-15-6-2-11-3-18-3" opacity="0.55" />
    </svg>
  )
}

/** Slim teardrop-and-vine divider in gold. */
function HennaDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 220 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M14 11h70M136 11h70" opacity="0.7" />
      <path d="M84 11q12-9 26 0q-14 9-26 0Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M136 11q-12-9-26 0q14 9 26 0Z" fill="currentColor" fillOpacity="0.18" />
      <circle cx="110" cy="11" r="4.5" fill="currentColor" fillOpacity="0.4" stroke="none" />
      <circle cx="110" cy="11" r="2" fill="currentColor" stroke="none" />
      <circle cx="72" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="148" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Mehendi ceremony invitation — boho-ornate henna art in deep henna-green,
 * fuchsia/magenta and gold, with an intricate central mandala, paisley corner
 * flourishes and a decorated hand motif.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MehendiCeremony({ values }) {
  const celebrant = values.celebrantName?.trim() || 'Sanika'
  const date = formatDate(values.mehendiDate, 'December 12, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Residence, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#123524] font-serif text-amber-100"
    >
      {/* deep henna-green base + fuchsia glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c4d33] via-[#123524] to-[#0a2418]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(192,38,118,0.22),_transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,_rgba(214,158,46,0.16),_transparent_55%)]" />

      {/* fuchsia + gold framing bands */}
      <div className="absolute inset-x-0 top-0 h-2.5 bg-gradient-to-r from-[#86195a] via-[#d6298a] to-[#86195a]" />
      <div className="absolute inset-x-0 bottom-0 h-2.5 bg-gradient-to-r from-[#86195a] via-[#d6298a] to-[#86195a]" />

      {/* double henna keyline frame */}
      <div className="absolute inset-x-5 inset-y-5 rounded-md border border-amber-300/60" />
      <div className="absolute inset-x-[26px] inset-y-[26px] rounded-md border border-fuchsia-400/30" />

      {/* ornate paisley corners */}
      <PaisleyCorner className="absolute left-3 top-3 h-36 w-36 text-amber-200/70" />
      <PaisleyCorner className="absolute right-3 top-3 h-36 w-36 text-amber-200/70 [transform:scaleX(-1)]" />
      <PaisleyCorner className="absolute bottom-3 left-3 h-36 w-36 text-amber-200/70 [transform:scaleY(-1)]" />
      <PaisleyCorner className="absolute bottom-3 right-3 h-36 w-36 text-amber-200/70 [transform:scale(-1)]" />

      {/* faint giant mandala watermark + decorated hands flanking centre */}
      <HennaMandala className="absolute left-1/2 top-[300px] h-[460px] w-[460px] -translate-x-1/2 text-fuchsia-300/15" />
      <HennaHand className="absolute left-4 top-1/2 h-56 w-44 -translate-y-1/2 text-amber-200/35 [transform:translateY(-50%)_rotate(-12deg)]" />
      <HennaHand className="absolute right-4 top-1/2 h-56 w-44 -translate-y-1/2 text-amber-200/35 [transform:translateY(-50%)_rotate(12deg)_scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[70px] pb-[58px] pt-[60px] text-center">
        <header className="flex flex-col items-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-fuchsia-300/90">
            You are invited to the
          </p>
          {/* feature mandala */}
          <div className="relative mt-4 flex items-center justify-center">
            <HennaMandala className="h-40 w-40 text-amber-200/85" />
            <span className="absolute font-script text-[22px] text-fuchsia-200">मेहंदी</span>
          </div>
          <HennaDivider className="mt-3 h-5 w-44 text-amber-300/80" />
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-script text-[88px] font-medium leading-[0.85]">
            <span
              data-pdf-color="#e7b24c"
              className="bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
            >
              Mehendi
            </span>
          </h1>
          <div className="my-4 flex items-center gap-3 text-amber-300/70">
            <span className="h-px w-12 bg-amber-400/50" />
            <span className="text-[12px]">✿</span>
            <span className="h-px w-12 bg-amber-400/50" />
          </div>
          <p className="font-display text-[30px] tracking-wide">
            <span
              data-pdf-color="#f0a6cf"
              className="bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-400 bg-clip-text text-transparent"
            >
              {celebrant}&rsquo;s Mehendi
            </span>
          </p>
        </main>

        <footer className="flex w-full flex-col items-center gap-3.5">
          <div className="rounded-md border border-amber-400/50 bg-[#86195a]/30 px-9 py-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-amber-300">Join the Celebration</p>
            <p className="mt-1 font-display text-[23px] tracking-wide text-amber-100">
              {date}{time && ` · ${time}`}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-fuchsia-300/80">Venue</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-amber-100">{venue}</p>
          </div>
          <p className="mt-1 text-[14px] italic leading-relaxed text-amber-300/80">
            With love and excitement from
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-amber-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
