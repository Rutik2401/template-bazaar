'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Birthday political motifs ──────────────────────────────────────────── */

/** A marigold / genda flower used along the celebratory garland. */
function Marigold({ className = '' }) {
  const petals = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="12"
          rx="7"
          ry="13"
          transform={`rotate(${i * 30} 32 32)`}
          fill="currentColor"
          fillOpacity="0.85"
        />
      ))}
      <circle cx="32" cy="32" r="10" fill="#b45309" />
      <circle cx="32" cy="32" r="5" fill="#fde68a" />
    </svg>
  )
}

/** A small burst/sparkle accent. */
function Burst({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M20 3v10M20 27v10M3 20h10M27 20h10M8 8l7 7M25 25l7 7M32 8l-7 7M15 25l-7 7" />
    </svg>
  )
}

/**
 * Birthday Political Poster — loud saffron-and-gold flex banner with a
 * marigold garland, a big bordered photo circle, a Devanagari headline and a
 * bold party-name banner. Natural design size: 720 × 960.
 */
export default function BirthdayPolitical({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Shri Rajesh Patil'
  const partyName = values.partyName?.trim() || 'Jan Vikas Party'
  const designation = values.designation?.trim() || 'District President'
  const date = values.date?.trim() || '2026-06-20'

  const garland = Array.from({ length: 11 })

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#7c2d12] font-display text-amber-50"
    >
      {/* radiant saffron silk backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-600 to-[#7c2d12]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(254,243,199,0.45),transparent_55%)]" />
      {/* sunburst rays behind the photo */}
      <div
        className="pointer-events-none absolute left-1/2 top-[360px] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(253,224,71,0.9) 0deg 6deg, transparent 6deg 12deg)',
        }}
      />

      {/* ornate gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[14px] border-[3px] border-gold-300/70" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[10px] border border-amber-100/30" />

      {/* marigold garland arc across the top */}
      <div className="absolute left-0 right-0 top-9 flex justify-center gap-1 px-8">
        {garland.map((_, i) => (
          <Marigold key={i} className="h-9 w-9 text-orange-300" />
        ))}
      </div>

      <div className="relative flex h-full flex-col items-center px-12 pb-12 pt-24 text-center">
        {/* Devanagari headline */}
        <h1 className="font-display text-[46px] font-black leading-[1.05] drop-shadow-[0_3px_0_rgba(124,45,18,0.6)]">
          <span
            data-pdf-color="#fde68a"
            className="bg-gradient-to-b from-amber-50 via-amber-200 to-gold-300 bg-clip-text text-transparent"
          >
            वाढदिवसाच्या
          </span>
          <br />
          <span className="text-amber-50">हार्दिक शुभेच्छा</span>
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <Burst className="h-5 w-5 text-gold-200" />
          <span className="h-px w-20 bg-gold-200/70" />
          <span className="text-sm tracking-[0.4em] text-amber-100">HAPPY BIRTHDAY</span>
          <span className="h-px w-20 bg-gold-200/70" />
          <Burst className="h-5 w-5 text-gold-200" />
        </div>

        {/* big photo circle */}
        <div className="relative mt-8">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-gold-300 via-amber-200 to-orange-300 blur-[2px] opacity-80" />
          <div className="relative grid h-[200px] w-[200px] place-items-center rounded-full border-[6px] border-dashed border-amber-100/80 bg-[#7c2d12]/40 text-center">
            <div className="flex flex-col items-center text-amber-100/90">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-5.5-7-4 5-2.5-3L3 19" />
                <circle cx="9" cy="9" r="2" />
              </svg>
              <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
            </div>
          </div>
        </div>

        {/* name */}
        <h2 className="mt-7 font-display text-[42px] font-black leading-none text-amber-50 drop-shadow-[0_2px_0_rgba(124,45,18,0.6)]">
          {personName}
        </h2>
        <p className="mt-2 text-[19px] font-semibold uppercase tracking-[0.25em] text-gold-200">
          {designation}
        </p>

        <p className="mt-5 text-base text-amber-100/90">{formatDate(date, date)}</p>

        {/* party name banner */}
        <div className="mt-auto w-full">
          <div className="relative mx-auto w-fit">
            <div className="rounded-md bg-gradient-to-r from-gold-300 via-amber-200 to-gold-300 px-10 py-3 shadow-[0_6px_0_rgba(124,45,18,0.55)]">
              <span className="text-[26px] font-black uppercase tracking-wide text-[#7c2d12]">
                {partyName}
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-amber-100/80">
            शुभेच्छुक — कार्यकर्ते व पदाधिकारी
          </p>
        </div>
      </div>
    </div>
  )
}
