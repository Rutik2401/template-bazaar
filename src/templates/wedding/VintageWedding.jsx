'use client'

import { formatDate } from '@/utils/format'

/* ── Old-world Victorian decorative pieces ──────────────────────────────── */

/** Ornate Victorian corner filigree — interlacing scrolls, acanthus curls and beadwork. */
function FiligreeCorner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 150 150"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      {/* sweeping primary scroll */}
      <path d="M8 8c34 1 56 9 72 28s24 41 24 80" opacity="0.9" />
      <path d="M8 24c26 1 42 7 55 22s19 33 19 62" opacity="0.5" />
      {/* acanthus curl */}
      <path d="M14 14c2 22 13 36 35 38-10-14-22-22-35-38Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
      <path d="M16 16c1 18 11 30 29 33" opacity="0.7" />
      <path d="M26 14c11 5 17 13 19 25" opacity="0.4" />
      {/* upper scrolled tendril with rolled tip */}
      <path d="M52 16c14-1 24 2 31 11" opacity="0.65" />
      <path d="M83 27c6 0 10-3 10-9s-4-9-9-8-7 5-4 9 9 2 9-3" opacity="0.7" />
      {/* lower scrolled tendril with rolled tip */}
      <path d="M16 52c-1 14 2 24 11 31" opacity="0.65" />
      <path d="M27 83c0 6-3 10-9 10s-9-4-8-9 5-7 9-4 2 9-3 9" opacity="0.7" />
      {/* paisley bud flourish */}
      <path d="M58 30c9 0 16 2 22 9s9 13 9 22c-9 0-16-2-22-9s-9-13-9-22Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <path d="M66 38c5 1 9 4 11 11" opacity="0.45" />
      {/* beadwork dots */}
      <circle cx="14" cy="14" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="104" cy="104" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="92" cy="40" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="40" cy="92" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="68" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="68" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornate flourish divider — central diamond flanked by tapering scrolled rules. */
function FlourishDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 280 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M16 14h78" strokeLinecap="round" />
      <path d="M186 14h78" strokeLinecap="round" />
      {/* scrolled inner tips */}
      <path d="M94 14c8 0 13-4 14-10M186 14c-8 0-13-4-14-10" opacity="0.6" />
      <path d="M94 14c8 0 13 4 14 10M186 14c-8 0-13 4-14 10" opacity="0.4" />
      {/* central lozenge */}
      <path d="M140 2l13 12-13 12-13-12 13-12Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M140 7l8 7-8 7-8-7 8-7Z" />
      <circle cx="140" cy="14" r="2" fill="currentColor" stroke="none" />
      {/* flanking buds */}
      <circle cx="108" cy="14" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="172" cy="14" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="256" cy="14" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Small "postage-stamp" motif — perforated border framing a tiny ringed-doves crest. */
function PostageStamp({ className = '' }) {
  const dots = Array.from({ length: 9 })
  return (
    <svg viewBox="0 0 72 84" className={className} fill="none">
      {/* stamp body */}
      <rect x="3" y="3" width="66" height="78" rx="2" fill="#f3e3c4" stroke="#8a5a2b" strokeWidth="1" />
      {/* perforated edge dots */}
      <g fill="#fbf3df">
        {dots.map((_, i) => (
          <circle key={`t${i}`} cx={3 + (i * 66) / 8} cy="3" r="2.1" />
        ))}
        {dots.map((_, i) => (
          <circle key={`b${i}`} cx={3 + (i * 66) / 8} cy="81" r="2.1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={`l${i}`} cx="3" cy={3 + (i * 78) / 9} r="2.1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={`r${i}`} cx="69" cy={3 + (i * 78) / 9} r="2.1" />
        ))}
      </g>
      {/* inner keyline */}
      <rect x="9" y="9" width="54" height="66" rx="1.5" fill="none" stroke="#9e2b2b" strokeWidth="0.8" opacity="0.7" />
      {/* tiny dove + heart crest */}
      <g stroke="#9e2b2b" strokeWidth="1" fill="none" opacity="0.85">
        <path d="M36 28c-7-7-18-5-18 4 0 7 10 14 18 19 8-5 18-12 18-19 0-9-11-11-18-4Z" fill="#9e2b2b" fillOpacity="0.15" />
        <path d="M28 40c3 3 6 4 8 4M44 40c-3 3-6 4-8 4" strokeWidth="0.8" />
      </g>
      {/* postmark arcs */}
      <g stroke="#8a5a2b" strokeWidth="0.7" opacity="0.5">
        <path d="M16 60c12 6 28 6 40 0" />
        <path d="M18 66c11 5 25 5 36 0" />
      </g>
    </svg>
  )
}

/**
 * Vintage wedding invitation — an antique parchment card with Victorian
 * filigree corners, an oval couple monogram, ornate flourish dividers and a
 * postage-stamp motif. Sepia, burgundy and tarnished gold; old-world romance.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function VintageWedding({ values }) {
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'December 15, 2025')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const quote =
    values.quote?.trim() ||
    'Two lives, two hearts, joined together in friendship and united forever in love'

  // "est. <year>" — pull a 4-digit year from the formatted date, fall back gracefully.
  const estYear = (String(weddingDate).match(/\d{4}/) || ['2025'])[0]
  const monogram = `${(brideName[0] || 'S').toUpperCase()} & ${(groomName[0] || 'A').toUpperCase()}`

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#efe2c4] font-serif text-[#5a3a26]"
    >
      {/* ── Aged parchment: stacked gradients for mottled sepia + darkened edges ── */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7ecd2_0%,#efe0bf_45%,#e7d2a8_100%)]" />
      {/* warm sepia mottling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(150,100,40,0.16),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_64%,rgba(120,70,25,0.14),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(170,130,70,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_82%,rgba(110,65,30,0.12),transparent_40%)]" />
      {/* tea-stain blotches */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_70%,rgba(90,55,25,0.10),transparent_18%),radial-gradient(circle_at_88%_30%,rgba(90,55,25,0.09),transparent_16%),radial-gradient(circle_at_50%_55%,rgba(130,90,45,0.07),transparent_22%)]" />
      {/* darkened edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_52%,rgba(70,42,18,0.30)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(70,42,18,0.22),transparent_14%,transparent_86%,rgba(70,42,18,0.22))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(70,42,18,0.20),transparent_12%,transparent_88%,rgba(70,42,18,0.20))]" />

      {/* ── Frames: tarnished gold keylines + burgundy hairline ── */}
      <div className="absolute inset-[18px] rounded-[3px] border-[3px] border-[#a8842f]/80" />
      <div className="absolute inset-[18px] rounded-[3px] ring-1 ring-inset ring-[#7c1f23]/40" />
      <div className="absolute inset-[28px] rounded-[2px] border border-[#8a5a2b]/55" />

      {/* ── Victorian filigree corners ── */}
      <FiligreeCorner className="absolute left-7 top-7 h-28 w-28 text-[#9e7b2c]" />
      <FiligreeCorner className="absolute right-7 top-7 h-28 w-28 text-[#9e7b2c] [transform:scaleX(-1)]" />
      <FiligreeCorner className="absolute bottom-7 left-7 h-28 w-28 text-[#9e7b2c] [transform:scaleY(-1)]" />
      <FiligreeCorner className="absolute bottom-7 right-7 h-28 w-28 text-[#9e7b2c] [transform:scale(-1)]" />

      {/* ── Postage-stamp motif, top-right ── */}
      <div className="absolute right-[46px] top-[44px] rotate-6">
        <PostageStamp className="h-[68px] w-[58px] drop-shadow-[1px_2px_2px_rgba(70,42,18,0.25)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative flex h-full flex-col items-center justify-between px-[70px] py-[78px] text-center">
        <header className="flex flex-col items-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.5em] text-[#7c1f23]/80">
            Together with their families
          </p>

          {/* oval monogram frame */}
          <div className="relative mt-6 flex items-center justify-center">
            <svg viewBox="0 0 160 110" className="h-[104px] w-[150px] text-[#a8842f]" fill="none" stroke="currentColor">
              <ellipse cx="80" cy="55" rx="74" ry="49" strokeWidth="1.6" />
              <ellipse cx="80" cy="55" rx="67" ry="43" strokeWidth="0.9" opacity="0.6" />
              {/* tiny flourish crowns top & bottom of the oval */}
              <path d="M70 9c4 4 16 4 20 0M70 101c4-4 16-4 20 0" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
              <circle cx="80" cy="6" r="1.8" fill="currentColor" stroke="none" />
              <circle cx="80" cy="104" r="1.8" fill="currentColor" stroke="none" />
            </svg>
            <span
              data-pdf-color="#7c1f23"
              className="absolute font-script text-[40px] leading-none text-[#7c1f23]"
            >
              {monogram}
            </span>
          </div>

          <p className="mt-5 max-w-[20rem] text-[14px] italic leading-relaxed text-[#6b4a2e]/90">
            request the honour of your presence at the celebration of their marriage
          </p>
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-script text-[68px] font-medium leading-[0.9]">
            <span
              data-pdf-color="#8a2f1e"
              className="bg-gradient-to-br from-[#9e2b2b] via-[#7c1f23] to-[#5a3a26] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          <div className="my-2 flex items-center gap-3 text-[#a8842f]">
            <span className="h-px w-10 bg-[#a8842f]/60" />
            <span className="font-display text-[22px] italic tracking-wide text-[#8a5a2b]">and</span>
            <span className="h-px w-10 bg-[#a8842f]/60" />
          </div>

          <h1 className="font-script text-[68px] font-medium leading-[0.9]">
            <span
              data-pdf-color="#8a2f1e"
              className="bg-gradient-to-bl from-[#9e2b2b] via-[#7c1f23] to-[#5a3a26] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <FlourishDivider className="mt-6 h-6 w-60 text-[#a8842f]" />

          <p className="mt-6 max-w-[22rem] font-display text-[16px] italic leading-relaxed text-[#6b4a2e]">
            &ldquo;{quote}&rdquo;
          </p>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1.5 border-y border-[#a8842f]/55 px-10 py-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.45em] text-[#7c1f23]/80">
              Save the Date
            </span>
            <span className="font-display text-[26px] leading-none tracking-wide text-[#5a3a26]">{weddingDate}</span>
          </div>

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.45em] text-[#7c1f23]/80">
              The Venue
            </span>
            <span className="text-[16px] leading-snug text-[#5a3a26]">{venue}</span>
          </div>

          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.55em] text-[#8a5a2b]/80">
            est. {estYear}
          </p>
        </footer>
      </div>
    </div>
  )
}
