'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Birthday political motifs ──────────────────────────────────────────── */

/** A marigold / genda flower used along the celebratory garland. */
function Marigold({ className = '' }) {
  const outer = Array.from({ length: 12 })
  const inner = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {outer.map((_, i) => (
        <ellipse
          key={`o${i}`}
          cx="32"
          cy="11"
          rx="6.5"
          ry="13"
          transform={`rotate(${i * 30} 32 32)`}
          fill="currentColor"
          fillOpacity="0.92"
        />
      ))}
      {inner.map((_, i) => (
        <ellipse
          key={`i${i}`}
          cx="32"
          cy="18"
          rx="5"
          ry="9"
          transform={`rotate(${i * 30 + 15} 32 32)`}
          fill="#f59e0b"
          fillOpacity="0.95"
        />
      ))}
      <circle cx="32" cy="32" r="10" fill="#b45309" />
      <circle cx="32" cy="32" r="5.5" fill="#fde68a" />
      <circle cx="32" cy="32" r="2" fill="#b45309" />
    </svg>
  )
}

/** A green leaf used to hang the garland. */
function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 24 40" className={className} fill="none">
      <path d="M12 2c7 8 7 22 0 36c-7-14-7-28 0-36Z" fill="currentColor" fillOpacity="0.9" />
      <path d="M12 6v28" stroke="#065f46" strokeWidth="1.2" opacity="0.5" />
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

/** Lotus party emblem with layered petals. */
function Lotus({ className = '' }) {
  const petals = Array.from({ length: 7 })
  return (
    <svg viewBox="0 0 80 56" className={className} fill="none" strokeLinejoin="round">
      {petals.map((_, i) => {
        const a = -60 + (i - 3) * 20
        return (
          <path
            key={i}
            transform={`rotate(${a} 40 52)`}
            d="M40 52c6-22 0-38 0-40c0 2-6 18 0 40Z"
            fill="currentColor"
            fillOpacity={0.4 + (3 - Math.abs(i - 3)) * 0.16}
          />
        )
      })}
      <path d="M16 52h48" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  )
}

/** Corner flourish for the gold frame. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 30c0-16 12-28 28-28" />
      <path d="M10 30c0-11 9-20 20-20" opacity="0.7" />
      <circle cx="6" cy="6" r="2.4" fill="currentColor" stroke="none" />
      <path d="M2 44c8 0 14-6 14-14" opacity="0.5" />
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
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(254,243,199,0.5),transparent_55%)]" />
      {/* sunburst rays behind the photo */}
      <div
        className="pointer-events-none absolute left-1/2 top-[392px] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(253,224,71,0.95) 0deg 5deg, transparent 5deg 11deg)',
        }}
      />
      {/* soft vignette to deepen the edges */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_50%,transparent_55%,rgba(67,20,7,0.55))]" />

      {/* ornate gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[14px] border-[3px] border-gold-300/70" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[10px] border border-amber-100/30" />
      <CornerFlourish className="pointer-events-none absolute left-7 top-7 h-12 w-12 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute right-7 top-7 h-12 w-12 -scale-x-100 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 left-7 h-12 w-12 -scale-y-100 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 right-7 h-12 w-12 -scale-100 text-gold-200/70" />

      {/* marigold garland arc across the top, hung from leaves */}
      <div className="absolute left-0 right-0 top-[42px] flex items-end justify-center gap-0.5 px-10">
        {garland.map((_, i) => {
          const dip = Math.round(Math.abs(i - (garland.length - 1) / 2) * -4 + 18)
          return (
            <div key={i} className="flex flex-col items-center" style={{ marginTop: `${dip}px` }}>
              <Leaf className="h-4 w-2.5 text-green-500" />
              <Marigold className="-mt-1 h-9 w-9 text-orange-300" />
            </div>
          )
        })}
      </div>

      <div className="relative flex h-full flex-col items-center px-12 pb-12 pt-[120px] text-center">
        {/* Devanagari headline */}
        <h1 className="font-display text-[48px] font-black leading-[1.04] drop-shadow-[0_3px_0_rgba(124,45,18,0.7)]">
          <span
            data-pdf-color="#fde68a"
            className="bg-gradient-to-b from-amber-50 via-amber-200 to-gold-300 bg-clip-text text-transparent"
          >
            वाढदिवसाच्या
          </span>
          <br />
          <span className="text-amber-50 [text-shadow:0_2px_0_rgba(124,45,18,0.55)]">हार्दिक शुभेच्छा</span>
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <Burst className="h-5 w-5 text-gold-200" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-200/80" />
          <span className="text-sm font-semibold tracking-[0.45em] text-amber-100">HAPPY BIRTHDAY</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-200/80" />
          <Burst className="h-5 w-5 text-gold-200" />
        </div>

        {/* big photo medallion in an ornate gold frame */}
        <div className="relative mt-9">
          {/* radiant outer glow */}
          <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.55),transparent_70%)] blur-[2px]" />
          {/* gold beaded ring */}
          <div className="relative grid h-[228px] w-[228px] place-items-center rounded-full bg-gradient-to-tr from-gold-300 via-amber-200 to-orange-300 p-[7px] shadow-[0_10px_24px_rgba(67,20,7,0.5)]">
            <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-[#9a3412] to-[#7c2d12] p-[5px]">
              {/* dashed photo placeholder */}
              <div className="grid h-full w-full place-items-center rounded-full border-[5px] border-dashed border-amber-100/80 bg-[#7c2d12]/40 text-center">
                <div className="flex flex-col items-center text-amber-100/90">
                  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-5.5-7-4 5-2.5-3L3 19" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                  <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
                </div>
              </div>
            </div>
          </div>
          {/* beads on the gold ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2
            const r = 117
            return (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-amber-50/80"
                style={{
                  left: `calc(50% + ${Math.cos(a) * r}px)`,
                  top: `calc(50% + ${Math.sin(a) * r}px)`,
                  transform: 'translate(-50%,-50%)',
                }}
              />
            )
          })}
        </div>

        {/* name */}
        <h2 className="mt-7 font-display text-[44px] font-black leading-none text-amber-50 drop-shadow-[0_2px_0_rgba(124,45,18,0.7)]">
          {personName}
        </h2>
        <p className="mt-2.5 text-[18px] font-semibold uppercase tracking-[0.28em] text-gold-200">
          {designation}
        </p>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-200/40 bg-[#7c2d12]/30 px-4 py-1 text-[15px] text-amber-100/95">
          <Burst className="h-3.5 w-3.5 text-gold-200" />
          {formatDate(date, date)}
        </p>

        {/* party name banner */}
        <div className="mt-auto w-full">
          <div className="relative mx-auto w-fit">
            {/* ribbon tails */}
            <span className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[18px] border-r-[14px] border-y-transparent border-r-gold-300" />
            <span className="absolute -right-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[18px] border-l-[14px] border-y-transparent border-l-gold-300" />
            <div className="relative flex items-center gap-3 rounded-md bg-gradient-to-r from-gold-300 via-amber-100 to-gold-300 px-9 py-3 shadow-[0_6px_0_rgba(124,45,18,0.6)]">
              <Lotus className="h-7 w-9 text-[#7c2d12]" />
              <span className="text-[26px] font-black uppercase tracking-wide text-[#7c2d12]">
                {partyName}
              </span>
              <Lotus className="h-7 w-9 text-[#7c2d12]" />
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-amber-100/85">
            शुभेच्छुक — कार्यकर्ते व पदाधिकारी
          </p>
        </div>
      </div>
    </div>
  )
}
