'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Regal SVG ornaments (gold crest, baroque filigree, wax seal) ────────── */

/** Royal crown / crest emblem for the header. */
function RoyalCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* crown band */}
      <path d="M28 70h64l-4 12H32l-4-12Z" fill="currentColor" fillOpacity="0.22" />
      {/* crown body — five points with jewelled tips */}
      <path d="M28 70 L22 30 L42 52 L60 18 L78 52 L98 30 L92 70 Z" fill="currentColor" fillOpacity="0.16" />
      <circle cx="22" cy="30" r="4" fill="currentColor" stroke="none" />
      <circle cx="98" cy="30" r="4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="14" r="4.5" fill="currentColor" stroke="none" />
      {/* cross atop centre */}
      <path d="M60 14 V4 M55 8 h10" />
      {/* band jewels */}
      <circle cx="42" cy="76" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="76" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="78" cy="76" r="2.4" fill="currentColor" stroke="none" />
      {/* flanking laurel sweeps */}
      <path d="M22 88c10 4 22 6 38 6s28-2 38-6" opacity="0.55" />
    </svg>
  )
}

/** Ornate baroque corner filigree — acanthus scrolls, fleur bud and beadwork. */
function BaroqueCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {/* sweeping baroque scroll */}
      <path d="M8 8c44 2 70 16 86 44s22 56 22 86" opacity="0.95" />
      <path d="M8 26c34 2 54 14 67 38s17 44 17 68" opacity="0.5" />
      {/* tight acanthus curl */}
      <path d="M16 16c2 22 13 35 35 37c-12 8-30 4-36-8" opacity="0.8" />
      <path d="M26 14c12 5 19 14 21 28" opacity="0.45" />
      {/* fleur-de-lis bud */}
      <path d="M48 16c0 10 7 18 18 18-2-11-9-18-18-18Z" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <path d="M16 48c10 0 18 7 18 18-11-2-18-9-18-18Z" fill="currentColor" fillOpacity="0.14" stroke="none" />
      <path d="M54 24c5 2 9 6 10 13" opacity="0.5" />
      {/* beadwork */}
      <circle cx="12" cy="12" r="3.6" fill="currentColor" stroke="none" />
      <circle cx="98" cy="98" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="84" cy="38" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="38" cy="84" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornamental "engagement" divider — interlocked rings flanked by scrolled rules. */
function EngagementDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 280 34" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 17h78" strokeLinecap="round" />
      <path d="M186 17h78" strokeLinecap="round" />
      {/* tapering scroll terminals */}
      <path d="M94 17c8 0 13-4 13-10M186 17c-8 0-13-4-13-10" opacity="0.6" />
      {/* interlocked engagement rings */}
      <circle cx="128" cy="19" r="11" />
      <circle cx="152" cy="19" r="11" />
      {/* solitaire sparkle */}
      <path d="M140 1 l3.5 6.5 7 .8-5.2 4.6 1.6 7-6.9-3.6-6.9 3.6 1.6-7-5.2-4.6 7-.8Z" fill="currentColor" stroke="none" opacity="0.95" />
      <circle cx="100" cy="17" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="180" cy="17" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="22" cy="17" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="258" cy="17" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Wax-seal style emblem — scalloped disc with monogram star. */
function WaxSeal({ className = '' }) {
  const teeth = Array.from({ length: 24 })
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="1.2">
        {teeth.map((_, i) => {
          const a = (i / teeth.length) * 360
          return (
            <line key={i} x1="48" y1="6" x2="48" y2="13" transform={`rotate(${a} 48 48)`} strokeLinecap="round" />
          )
        })}
      </g>
      <circle cx="48" cy="48" r="34" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="48" cy="48" r="27" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" fill="none" />
      {/* monogram star */}
      <path d="M48 30 l4.5 9 10 1-7.5 6.8 2.3 9.8-9.3-5.2-9.3 5.2 2.3-9.8-7.5-6.8 10-1Z" fill="currentColor" stroke="none" opacity="0.92" />
    </svg>
  )
}

/**
 * Royal Couple Engagement — palatial regal theme: deep royal-red & emerald
 * with heavy gold, a crowned crest, baroque corner filigree, a damask panel
 * and a wax-seal emblem. Opulent and distinct from the navy couple card.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function RoyalCoupleEngagement({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const hostFamily = values.hostFamily?.trim() || 'The Rathore Family'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[640px] overflow-hidden bg-[#5a0f1c] font-serif text-[#f3e3bd]"
    >
      {/* Deep royal-red base shading into emerald shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6e1322] via-[#530f1d] to-[#0c2a1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(214,168,58,0.26),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_94%,rgba(15,90,64,0.4),transparent_50%)]" />

      {/* Damask diamond lattice — subtle gold pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #d6a83a 0, #d6a83a 1px, transparent 1px, transparent 22px), repeating-linear-gradient(-45deg, #d6a83a 0, #d6a83a 1px, transparent 1px, transparent 22px)',
        }}
      />

      {/* Emerald velvet mat with gold keyline */}
      <div className="absolute inset-[14px] rounded-[6px] border-[6px] border-[#0f5a40]/85" />
      <div className="absolute inset-[14px] rounded-[6px] ring-1 ring-inset ring-[#e7c75f]/55" />

      {/* Double gold inner frame */}
      <div className="absolute inset-[26px] rounded-[4px] border-[2.5px] border-[#d6a83a]" />
      <div className="absolute inset-[34px] rounded-[3px] border border-[#e7c75f]/55" />

      {/* Damask-pattern feature panel behind the names */}
      <div className="pointer-events-none absolute inset-x-[64px] top-[250px] h-[320px] rounded-[10px] border border-[#d6a83a]/45 bg-[#0c2a1f]/35" />
      <div className="pointer-events-none absolute inset-x-[72px] top-[258px] h-[304px] rounded-[8px] border border-[#e7c75f]/25" />

      {/* Baroque corner filigree */}
      <BaroqueCorner className="absolute left-7 top-7 h-24 w-24 text-[#e7c75f]" />
      <BaroqueCorner className="absolute right-7 top-7 h-24 w-24 text-[#e7c75f] [transform:scaleX(-1)]" />
      <BaroqueCorner className="absolute bottom-7 left-7 h-24 w-24 text-[#e7c75f] [transform:scaleY(-1)]" />
      <BaroqueCorner className="absolute bottom-7 right-7 h-24 w-24 text-[#e7c75f] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[68px] py-[48px] text-center">
        <header className="flex flex-col items-center gap-2">
          <RoyalCrest className="h-[68px] w-[76px] text-[#e7c75f] drop-shadow-[0_3px_8px_rgba(214,168,58,0.35)]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.6em] text-[#d6a83a]">
            {t('template.common.saveTheDate', 'Save the Date')}
          </p>
          <p className="max-w-[20rem] text-[14px] italic leading-relaxed text-[#e4d5ab]/90">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center gap-1 overflow-visible">
          <h1 className="w-full overflow-visible text-center font-script text-[50px] font-medium leading-[1.3] pt-4 md:text-[64px]">
            <span
              data-pdf-color="#e7c75f"
              className="inline-block overflow-visible bg-gradient-to-br from-[#f7ecbf] via-[#e2c265] to-[#b8860b] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          <div className="flex items-center gap-3 text-[#d6a83a]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d6a83a]" />
            <span className="font-display text-[18px] italic tracking-wide text-[#e4d5ab]">
              {t('template.common.and', '&')}
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d6a83a]" />
          </div>

          <h1 className="w-full overflow-visible text-center font-script text-[50px] font-medium leading-[1.3] pb-2 md:text-[64px]">
            <span
              data-pdf-color="#e7c75f"
              className="inline-block overflow-visible bg-gradient-to-bl from-[#f7ecbf] via-[#e2c265] to-[#b8860b] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <EngagementDivider className="mt-3 mb-2 h-7 w-60 text-[#e7c75f]" />
        </main>

        <footer className="flex w-full flex-col items-center gap-3">
          <p className="font-display text-[26px] leading-tight tracking-wide text-[#f3e3bd]">
            {date}
            {time && <span className="text-[#d6a83a]"> · {time}</span>}
          </p>

          <div className="rounded-[4px] border border-[#d6a83a]/55 bg-[#0c2a1f]/30 px-8 py-2">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#d6a83a]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-1 text-[16px] leading-snug text-[#f3e3bd]">{venue}</p>
          </div>

          <div className="relative mt-1 flex flex-col items-center">
            <WaxSeal className="h-10 w-10 text-[#e7c75f]" />
            <p className="mt-1 text-[13px] italic leading-relaxed text-[#d8c79c]">
              {t('template.common.hostedBy', 'Hosted by')}
              <br />
              <span className="font-display text-[19px] not-italic tracking-wide text-[#f3e3bd]">{hostFamily}</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
