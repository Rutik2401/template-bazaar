'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gujarati Kankotri motifs ──────────────────────────────────────────── */

/** Auspicious Ganesha emblem inside a peaked arch. */
function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* crown / mukut */}
      <path d="M80 8c-6 0-9 4-9 9 0 4 3 7 6 8-10 2-17 9-17 18h40c0-9-7-16-17-18 3-1 6-4 6-8 0-5-3-9-9-9Z" fill="currentColor" fillOpacity="0.32" />
      <circle cx="80" cy="10" r="3" fill="currentColor" stroke="none" />
      {/* head */}
      <path d="M44 62c0-16 16-28 36-28s36 12 36 28c0 10-6 19-15 24" fill="currentColor" fillOpacity="0.14" />
      {/* big ears */}
      <path d="M44 58c-12-4-22 2-22 14s10 20 22 16" fill="currentColor" fillOpacity="0.18" />
      <path d="M116 58c12-4 22 2 22 14s-10 20-22 16" fill="currentColor" fillOpacity="0.18" />
      {/* tilak + eyes */}
      <path d="M80 46v14" />
      <circle cx="66" cy="62" r="3" fill="currentColor" stroke="none" />
      <circle cx="94" cy="62" r="3" fill="currentColor" stroke="none" />
      {/* curved trunk */}
      <path d="M80 66c0 14-2 26-14 34-9 6-9 18 2 22 8 3 16-2 16-12" fill="currentColor" fillOpacity="0.16" />
      {/* tusks + laddoo */}
      <path d="M68 88c-4 4-6 9-5 14M92 88c4 4 6 9 5 14" opacity="0.7" />
      <circle cx="108" cy="106" r="9" fill="currentColor" fillOpacity="0.42" />
      {/* lotus base */}
      <path d="M52 138c8-12 20-18 28-18s20 6 28 18c-10 4-19 6-28 6s-18-2-28-6Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

/** A colourful hanging toran — beaded leaf garland swagged across full width. */
function ToranStrip({ className = '' }) {
  const bays = 11
  const span = 640 / bays
  return (
    <svg viewBox="0 0 640 62" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      {/* top cord */}
      <path d="M0 5h640" opacity="0.65" />
      {Array.from({ length: bays }).map((_, i) => {
        const x0 = i * span
        const x1 = (i + 1) * span
        const cx = (x0 + x1) / 2
        return (
          <g key={i}>
            {/* swag arc */}
            <path d={`M${x0} 6 Q ${cx} 28 ${x1} 6`} opacity="0.5" />
            {/* hanging leaf-bell */}
            <path
              d={`M${cx} 26c-9 6-9 22 0 32c9-10 9-26 0-32Z`}
              fill="currentColor"
              fillOpacity="0.22"
            />
            <path d={`M${cx} 30v24`} opacity="0.55" />
            {/* beads on the leaf tip */}
            <circle cx={cx} cy={60} r="3" fill="currentColor" stroke="none" />
            {/* small beads on the swag */}
            <circle cx={x1} cy={8} r="2.4" fill="currentColor" stroke="none" opacity="0.8" />
          </g>
        )
      })}
    </svg>
  )
}

/** Bandhani-style dot pattern band (tie-dye dotted accent). */
function BandhaniBand({ className = '', rows = 2 }) {
  const cols = 40
  return (
    <svg viewBox={`0 0 640 ${rows * 12}`} preserveAspectRatio="none" className={className} fill="currentColor">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const x = 8 + c * 16 + (r % 2 ? 8 : 0)
          const y = 6 + r * 12
          return <circle key={`${r}-${c}`} cx={x} cy={y} r={c % 3 === 0 ? 2.6 : 1.6} fillOpacity={c % 3 === 0 ? 0.85 : 0.5} />
        })
      )}
    </svg>
  )
}

/** A small radiant paisley / sun corner flourish. */
function Paisley({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M14 50c-6-14 2-30 18-34 14-3 22 6 18 16-3 8-12 11-18 6-4-3-3-9 2-10" fill="currentColor" fillOpacity="0.14" />
      <circle cx="30" cy="26" r="3" fill="currentColor" stroke="none" />
      <path d="M30 20c2 3 2 6 0 9M30 20c-2 3-2 6 0 9" opacity="0.6" />
    </svg>
  )
}

/**
 * Gujarati Kankotri — a vibrant wedding invitation in vermillion red, green
 * & gold, with a Ganesha emblem, a colourful toran and bandhani-dot accents.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function GujaratiWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'December 15, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Ahmedabad'
  const family = values.familyName?.trim() || 'The Patel Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#9c1212] font-serif text-[#fff3d6]"
    >
      {/* Rich vermillion silk base + warm sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c1182b] via-[#9c1212] to-[#6e0c10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_26%,_rgba(247,201,72,0.22),_transparent_62%)]" />

      {/* Green pallu bands top & bottom with gold piping */}
      <div className="absolute inset-x-0 top-0 h-9 bg-gradient-to-r from-[#0c5d3a] via-[#157a4c] to-[#0c5d3a]" />
      <BandhaniBand rows={2} className="absolute inset-x-0 top-1.5 h-6 text-[#f7c948]" />
      <div className="absolute inset-x-0 top-9 h-px bg-[#f7c948]/80" />
      <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-r from-[#0c5d3a] via-[#157a4c] to-[#0c5d3a]" />
      <BandhaniBand rows={2} className="absolute inset-x-0 bottom-1.5 h-6 text-[#f7c948]" />
      <div className="absolute inset-x-0 bottom-9 h-px bg-[#f7c948]/80" />

      {/* Colourful toran hanging from the top band */}
      <ToranStrip className="absolute inset-x-0 top-9 h-16 text-[#f7c948]" />

      {/* Ornate gold keyline frame (double) */}
      <div className="absolute inset-x-6 inset-y-[80px] rounded-sm border-2 border-[#f7c948]/85" />
      <div className="absolute inset-x-[34px] inset-y-[90px] rounded-sm border border-[#f3d27a]/45" />

      {/* Corner paisley flourishes */}
      <Paisley className="absolute left-[30px] top-[86px] h-12 w-12 text-[#f7c948]/70" />
      <Paisley className="absolute right-[30px] top-[86px] h-12 w-12 text-[#f7c948]/70 [transform:scaleX(-1)]" />
      <Paisley className="absolute left-[30px] bottom-[86px] h-12 w-12 text-[#f7c948]/70 [transform:scaleY(-1)]" />
      <Paisley className="absolute right-[30px] bottom-[86px] h-12 w-12 text-[#f7c948]/70 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[68px] pb-[64px] pt-[104px] text-center">
        <header className="flex flex-col items-center">
          <p className="font-display text-[20px] tracking-wide text-[#f3d27a]">॥ શ્રી ગણેશાય નમઃ ॥</p>
          <div className="relative mt-2 flex items-center justify-center">
            <div className="absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(247,201,72,0.35),transparent_68%)]" />
            <Ganesha className="relative h-24 w-24 text-[#f7c948]" />
          </div>
          <p className="mt-2 font-display text-[22px] tracking-wide text-[#a9e3bf]">॥ શુભ વિવાહ ॥</p>
          <div className="mt-3 flex items-center gap-2 text-[#f7c948]/75">
            <span className="h-px w-12 bg-[#f7c948]/60" />
            <span className="text-[10px]">✦</span>
            <span className="h-px w-12 bg-[#f7c948]/60" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          <p className="font-sans text-[12px] uppercase tracking-[0.4em] text-[#f3d27a]/85">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <h1 className="mt-5 font-display text-[58px] font-semibold leading-[0.98]">
            <span
              data-pdf-color="#f7c948"
              className="bg-gradient-to-br from-[#fff0bf] via-[#f7c948] to-[#d99520] bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>
          <div className="my-2 flex items-center gap-3">
            <span className="h-px w-12 bg-[#f7c948]/60" />
            <span className="font-display text-2xl italic text-[#a9e3bf]">{t('template.common.weds', 'weds')}</span>
            <span className="h-px w-12 bg-[#f7c948]/60" />
          </div>
          <h1 className="font-display text-[58px] font-semibold leading-[0.98]">
            <span
              data-pdf-color="#f7c948"
              className="bg-gradient-to-bl from-[#fff0bf] via-[#f7c948] to-[#d99520] bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
          <p className="mt-4 font-display text-[18px] tracking-wide text-[#fff3d6]">{family}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-3.5">
          <div className="rounded-md border border-[#f7c948]/55 bg-[#0c5d3a]/45 px-9 py-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-[#f3d27a]">{t('template.common.muhurat', 'Muhurat')}</p>
            <p className="mt-1 font-display text-[24px] tracking-wide text-[#fff3d6]">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-[#f3d27a]/85">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-[#fff3d6]">{venue}</p>
          </div>
          <p className="mt-1 text-[13px] italic leading-relaxed text-[#f3d27a]/85">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-[#fff3d6]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
