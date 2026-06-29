'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Decorative SVG pieces — Royal Scroll Wedding ─────────────────────────── */

/** Ganesha silhouette — elegant minimal outline. */
function GaneshaMotif({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* head / crown */}
      <path d="M40 8c-6 0-11 3-14 9-2 4-2 9 0 13 1 2 3 4 5 5v6c0 2 1 4 3 5h12c2-1 3-3 3-5v-6c2-1 4-3 5-5 2-4 2-9 0-13-3-6-8-9-14-9z" fill="currentColor" fillOpacity="0.15" />
      {/* trunk curve */}
      <path d="M36 28c-2 4-6 8-10 10M44 28c2 4 6 8 10 10" />
      {/* ears */}
      <path d="M22 18c-4 0-8 3-8 8s4 8 8 8" />
      <path d="M58 18c4 0 8 3 8 8s-4 8-8 8" />
      {/* eyes */}
      <circle cx="34" cy="22" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="46" cy="22" r="1.5" fill="currentColor" stroke="none" />
      {/* tilak */}
      <path d="M40 14v-4M38 12l2-2 2 2" />
      {/* lotus base */}
      <path d="M28 52c4-4 8-6 12-6s8 2 12 6" />
      <path d="M30 56c3-3 6-4 10-4s7 1 10 4" />
      {/* modak */}
      <circle cx="40" cy="64" r="4" fill="currentColor" fillOpacity="0.2" />
      <path d="M38 62l2-2 2 2M38 66l2 2 2-2" />
    </svg>
  )
}

/** Ornate double-scroll corner flourish with paisley bud. */
function ScrollCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      {/* outer sweeping scroll */}
      <path d="M8 8c45 0 68 6 90 28s28 45 28 90" opacity="0.9" />
      {/* inner scroll */}
      <path d="M8 28c32 0 50 5 67 22s22 35 22 67" opacity="0.5" />
      {/* third hairline */}
      <path d="M18 18c0 22 10 36 32 36" opacity="0.35" />
      {/* paisley bud */}
      <path d="M50 16c10 0 18 3 24 10s10 15 10 24c-10 0-18-3-24-10s-10-15-10-24Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
      <path d="M58 24c6 2 10 5 12 13" opacity="0.45" />
      {/* beaded dots */}
      <circle cx="16" cy="16" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="86" cy="36" r="2" fill="currentColor" stroke="none" />
      <circle cx="36" cy="86" r="2" fill="currentColor" stroke="none" />
      {/* tiny leaf accent */}
      <path d="M72 14c3 2 5 6 5 10M14 72c2 3 6 5 10 5" opacity="0.4" />
    </svg>
  )
}

/** Horizontal ornamental divider — double rule with lotus-diamond center. */
function GoldDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      {/* left rule */}
      <path d="M16 14h88" />
      <path d="M30 10h60M30 18h60" opacity="0.3" />
      {/* center lotus diamond */}
      <path d="M150 2l13 12-13 12-13-12 13-12Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M150 8l7 7-7 7-7-7 7-7Z" />
      <circle cx="150" cy="14" r="2.5" fill="currentColor" stroke="none" />
      {/* flanking buds */}
      <circle cx="115" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="185" cy="14" r="3" fill="currentColor" stroke="none" />
      {/* right rule */}
      <path d="M196 14h88" />
      <path d="M210 10h60M210 18h60" opacity="0.3" />
      {/* end dots */}
      <circle cx="22" cy="14" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="278" cy="14" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Vertical ornamental side rail — repeating leaf-and-bead strip. */
function SideRail({ className = '' }) {
  const leaves = Array.from({ length: 14 })
  return (
    <svg viewBox="0 0 20 400" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
      {/* main vertical line */}
      <path d="M10 10v380" opacity="0.3" />
      {/* repeating leaf pairs */}
      {leaves.map((_, i) => {
        const y = 20 + i * 27
        return (
          <g key={i}>
            <path d={`M10 ${y}c-4-3-8-2-8 2s4 5 8 2`} fill="currentColor" fillOpacity="0.15" stroke="none" />
            <path d={`M10 ${y}c4-3 8-2 8 2s-4 5-8 2`} fill="currentColor" fillOpacity="0.15" stroke="none" />
            <circle cx="10" cy={y + 14} r="1.8" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/** Scroll rod end-cap — cylindrical knob with gold bands. */
function ScrollRod({ className = '' }) {
  return (
    <svg viewBox="0 0 320 22" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* left knob */}
      <ellipse cx="16" cy="11" rx="14" ry="9" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="16" cy="11" rx="14" ry="9" />
      <ellipse cx="16" cy="11" rx="8" ry="5" opacity="0.4" />
      <circle cx="16" cy="11" r="2.5" fill="currentColor" stroke="none" />
      {/* rod bar */}
      <path d="M30 11h260" strokeWidth="2" opacity="0.6" />
      <path d="M30 7h260" strokeWidth="0.6" opacity="0.25" />
      <path d="M30 15h260" strokeWidth="0.6" opacity="0.25" />
      {/* right knob */}
      <ellipse cx="304" cy="11" rx="14" ry="9" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="304" cy="11" rx="14" ry="9" />
      <ellipse cx="304" cy="11" rx="8" ry="5" opacity="0.4" />
      <circle cx="304" cy="11" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Decorative bell motif — hanging temple bell. */
function TempleBell({ className = '' }) {
  return (
    <svg viewBox="0 0 30 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M15 4v6" />
      <path d="M12 4h6" />
      <path d="M8 10c0 8 3 16 7 18 4-2 7-10 7-18" fill="currentColor" fillOpacity="0.1" />
      <path d="M8 10c0 8 3 16 7 18 4-2 7-10 7-18" />
      <ellipse cx="15" cy="28" rx="8" ry="2" />
      <circle cx="15" cy="33" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Royal Scroll Wedding — deep maroon parchment with gold ornamental
 * borders, Ganesha motif, scroll rods and rich filigree. Premium
 * vector quality — zero blur on export.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function RoyalScrollWedding({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Trinkle'
  const groomName = values.groomName?.trim() || 'Bhavik'
  const weddingDate = formatDate(values.weddingDate, 'Date to be announced')
  const time = values.time?.trim() || '7:30 PM'
  const venue = values.venue?.trim() || 'ATLANTIS, The Palm, Dubai'
  const familyName = values.familyName?.trim() || 'Jain Family & Friends'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden font-serif text-gold-100"
    >
      {/* Deep maroon base with subtle texture gradient */}
      <div className="absolute inset-0 bg-[#2a0a12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d1220] via-[#2a0a12] to-[#1a0610]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(180,140,60,0.08),_transparent_65%)]" />

      {/* Gold ornamental outer border */}
      <div className="absolute inset-[12px] border-[3px] border-gold-500/70" />
      <div className="absolute inset-[20px] border border-gold-400/40" />
      <div className="absolute inset-[24px] border border-gold-600/25" />

      {/* Side rails — left & right */}
      <SideRail className="absolute left-[28px] top-[60px] h-[780px] w-4 text-gold-500/50" />
      <SideRail className="absolute right-[28px] top-[60px] h-[780px] w-4 text-gold-500/50 [transform:scaleX(-1)]" />

      {/* Corner flourishes */}
      <ScrollCorner className="absolute left-[10px] top-[10px] h-28 w-28 text-gold-500" />
      <ScrollCorner className="absolute right-[10px] top-[10px] h-28 w-28 text-gold-500 [transform:scaleX(-1)]" />
      <ScrollCorner className="absolute bottom-[10px] left-[10px] h-28 w-28 text-gold-500 [transform:scaleY(-1)]" />
      <ScrollCorner className="absolute bottom-[10px] right-[10px] h-28 w-28 text-gold-500 [transform:scale(-1)]" />

      {/* Top scroll rod */}
      <ScrollRod className="absolute left-[50px] top-[42px] w-[540px] text-gold-500/70" />

      {/* Bottom scroll rod */}
      <ScrollRod className="absolute left-[50px] bottom-[42px] w-[540px] text-gold-500/70" />

      {/* Hanging temple bells */}
      <TempleBell className="absolute left-[80px] top-[56px] h-8 w-6 text-gold-400/60" />
      <TempleBell className="absolute right-[80px] top-[56px] h-8 w-6 text-gold-400/60" />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-between px-[68px] py-[72px] text-center">

        {/* Header: Ganesha + blessing */}
        <header className="flex flex-col items-center">
          <GaneshaMotif className="h-16 w-16 text-gold-400" />
          <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.55em] text-gold-400">
            {t('template.wedding.blessing')}
          </p>
          <p className="mt-3 max-w-[20rem] text-[13.5px] italic leading-relaxed text-gold-200/80">
            {t('template.wedding.invite')}
          </p>
        </header>

        {/* Ceremony type */}
        <div className="flex flex-col items-center">
          <GoldDivider className="h-6 w-64 text-gold-500" />
          <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.5em] text-gold-400/80">
            {t('template.common.weddingParty', 'Reception Ceremony')}
          </p>
        </div>

        {/* Names */}
        <main className="flex flex-col items-center -mt-4">
          <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.4em] text-gold-400/70">
            {t('template.wedding.weds')}
          </p>

          <h1 className="font-script text-[68px] font-medium leading-[0.9]">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-br from-gold-300 via-gold-400 to-amber-600 bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          {/* Ornament between names */}
          <div className="my-2 flex items-center gap-3 text-gold-500">
            <span className="h-px w-12 bg-gold-500/50" />
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" fillOpacity="0.6">
              <path d="M12 2c-1 2-3 4-6 5 2 0 4 1 5 3-2-1-4-1-6 0 3 1 5 3 5 5 0-2 2-4 4-5-2 0-4-1-5-3 2 1 4 1 6 0-3-1-5-3-5-5 0 2-2 4-4 5 2 0 4 1 5 3-2-1-4-1-6 0" />
            </svg>
            <span className="h-px w-12 bg-gold-500/50" />
          </div>

          <h1 className="font-script text-[68px] font-medium leading-[0.9]">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-bl from-gold-300 via-gold-400 to-amber-600 bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <GoldDivider className="mt-5 h-6 w-64 text-gold-500" />
        </main>

        {/* Footer: Date, Time, Venue, Family */}
        <footer className="flex w-full flex-col items-center gap-3">
          {/* Date & time pill */}
          <div className="flex items-center gap-4 rounded-full border border-gold-500/40 bg-gold-500/[0.06] px-8 py-2.5">
            <span className="font-display text-[22px] tracking-wide text-gold-300">{weddingDate}</span>
            <span className="h-4 w-px bg-gold-500/40" />
            <span className="font-display text-[18px] tracking-wide text-gold-300">{time}</span>
          </div>

          {/* Venue */}
          <div className="flex max-w-[22rem] flex-col items-center gap-0.5">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-400">
              {t('template.wedding.venue')}
            </span>
            <span className="text-[15px] leading-snug text-gold-100">{venue}</span>
          </div>

          {/* Family */}
          <p className="mt-1 text-[13.5px] italic leading-relaxed text-gold-200/70">
            {t('template.wedding.compliments')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-gold-300">{familyName}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
