'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Royal palace ornaments (gold line-art on wine) ─────────────────────── */

/**
 * Grand Rajasthani palace skyline — central onion dome, flanking minarets,
 * arched jharokha windows and a central gateway. Pure gold line-art, sits
 * as a faint backdrop behind the content.
 */
function PalaceSkyline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 340"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ground / plinth line */}
      <path d="M20 322h480" opacity="0.7" />
      <path d="M44 322v-150M476 322v-150" opacity="0.55" />

      {/* ── central pavilion with grand onion dome ── */}
      {/* dome body */}
      <path d="M222 150c0-40 16-66 38-66s38 26 38 66c0 18-12 30-38 30s-38-12-38-30Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M222 150c0-40 16-66 38-66s38 26 38 66" />
      {/* finial */}
      <path d="M260 84v-22" opacity="0.85" />
      <circle cx="260" cy="56" r="6" fill="currentColor" fillOpacity="0.22" />
      <path d="M260 50l3 8h-6l3-8Z" fill="currentColor" stroke="none" />
      {/* dome base ring + drum */}
      <path d="M218 178h84" opacity="0.8" />
      <path d="M226 178v60h68v-60" />
      {/* grand central arched gateway */}
      <path d="M244 238v-30c0-12 6-20 16-20s16 8 16 20v30" fill="currentColor" fillOpacity="0.12" />
      <path d="M244 238v-30c0-12 6-20 16-20s16 8 16 20v30" />
      <path d="M260 188v50" opacity="0.4" />

      {/* ── flanking towers with arched jharokha windows ── */}
      {/* left tower */}
      <path d="M150 238v-92h54v92" fill="currentColor" fillOpacity="0.06" />
      <path d="M150 238v-92h54v92" />
      <path d="M150 146l27 -30 27 30" />
      <circle cx="177" cy="100" r="4" fill="currentColor" fillOpacity="0.22" />
      <path d="M163 186v-18c0-8 6-14 14-14s14 6 14 14v18" />
      {/* right tower */}
      <path d="M316 238v-92h54v92" fill="currentColor" fillOpacity="0.06" />
      <path d="M316 238v-92h54v92" />
      <path d="M316 146l27 -30 27 30" />
      <circle cx="343" cy="100" r="4" fill="currentColor" fillOpacity="0.22" />
      <path d="M329 186v-18c0-8 6-14 14-14s14 6 14 14v18" />

      {/* ── slender corner minarets ── */}
      {/* far left minaret */}
      <path d="M70 238v-86" />
      <path d="M62 152h16" opacity="0.7" />
      <path d="M70 152c0-18 6-30 0-44 -6 14 0 26 0 44Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M70 108v-14" opacity="0.8" />
      <circle cx="70" cy="90" r="4" fill="currentColor" fillOpacity="0.22" />
      {/* far right minaret */}
      <path d="M450 238v-86" />
      <path d="M442 152h16" opacity="0.7" />
      <path d="M450 152c0-18 6-30 0-44 -6 14 0 26 0 44Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M450 108v-14" opacity="0.8" />
      <circle cx="450" cy="90" r="4" fill="currentColor" fillOpacity="0.22" />

      {/* ── arcaded base — row of arched windows along the facade ── */}
      <g opacity="0.7">
        <path d="M96 238v-24c0-7 5-12 11-12s11 5 11 12v24" />
        <path d="M126 238v-24c0-7 5-12 11-12s11 5 11 12v24" />
        <path d="M372 238v-24c0-7 5-12 11-12s11 5 11 12v24" />
        <path d="M402 238v-24c0-7 5-12 11-12s11 5 11 12v24" />
      </g>

      {/* battlement / merlon detail along the rooftops */}
      <g opacity="0.55">
        <path d="M150 146h54M316 146h54" />
        <path d="M96 198h64M360 198h64" />
      </g>
    </svg>
  )
}

/**
 * Tall ornamental palace pillar — fluted shaft, lotus capital and a stepped
 * base. Mirrors to frame both card edges.
 */
function Pillar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 60 760"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      {/* lotus capital crown */}
      <path d="M30 16c-10 8-16 16-16 28h32c0-12-6-20-16-28Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M30 8v8" opacity="0.8" />
      <circle cx="30" cy="6" r="4" fill="currentColor" fillOpacity="0.25" />
      <path d="M10 44h40" />
      <path d="M14 56h32" opacity="0.7" />
      {/* fluted shaft */}
      <path d="M18 56v628" />
      <path d="M42 56v628" />
      <path d="M24 60v620M30 60v620M36 60v620" opacity="0.3" />
      {/* beaded bands */}
      <path d="M18 230h24M18 420h24M18 560h24" opacity="0.55" />
      <circle cx="30" cy="230" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="30" cy="420" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="30" cy="560" r="2.4" fill="currentColor" stroke="none" />
      {/* stepped base */}
      <path d="M14 684h32" />
      <path d="M8 700h44" />
      <path d="M4 720h52" opacity="0.8" />
      <path d="M10 700v20h40v-20" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}

/** Royal crown emblem to crown the top of the invite. */
function CrownEmblem({ className = '' }) {
  return (
    <svg viewBox="0 0 160 96" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* crown band */}
      <path d="M34 72h92" />
      <path d="M30 80h100" opacity="0.7" />
      {/* five-point crown body */}
      <path d="M34 72l8-34 18 22 20-34 20 34 18-22 8 34Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M34 72l8-34 18 22 20-34 20 34 18-22 8 34" />
      {/* jewel finials */}
      <circle cx="42" cy="34" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="118" cy="34" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="22" r="5" fill="currentColor" fillOpacity="0.3" />
      <path d="M80 22v-14" opacity="0.8" />
      <path d="M80 8l3 7h-6l3-7Z" fill="currentColor" stroke="none" />
      {/* band jewels */}
      <circle cx="60" cy="72" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="80" cy="72" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="100" cy="72" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornate centre divider — royal lotus diamond flanked by tapering rules. */
function RoyalDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 280 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 12h100M168 12h100" strokeLinecap="round" />
      {/* central lotus diamond */}
      <path d="M140 2l12 10-12 10-12-10 12-10Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M140 6l7 6-7 6-7-6 7-6Z" />
      <circle cx="140" cy="12" r="2.2" fill="currentColor" stroke="none" />
      {/* flanking paisley swirls + beads */}
      <path d="M112 12c8 0 12-4 12-9M168 12c-8 0-12-4-12-9" opacity="0.55" />
      <circle cx="124" cy="12" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="156" cy="12" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="20" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="260" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Royal Palace wedding invitation — a majestic Maharaja-grade invite built
 * around a grand Rajasthani palace skyline backdrop, symmetrical framing
 * pillars and a crowning royal emblem. Deep wine/royal-red ground with heavy
 * gold foil. Natural design size: 640 × 900 (portrait card).
 */
export default function RoyalPalaceWedding({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'December 15, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const hostFamily = values.hostFamily?.trim() || 'The Rathore Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#4a0d1a] font-serif text-[#f3d690]"
    >
      {/* Deep royal wine gradient + warm gold throne-glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5e1322] via-[#430b18] to-[#2b060f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(214,170,90,0.20),_transparent_62%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,_rgba(243,214,144,0.14),_transparent_70%)]" />

      {/* Gold foil border frame */}
      <div className="absolute inset-5 border-[2px] border-[#c79a45]/75" />
      <div className="absolute inset-[30px] border border-[#d6aa5a]/35" />

      {/* ── Palace skyline backdrop ── */}
      <PalaceSkyline className="pointer-events-none absolute inset-x-[70px] bottom-[120px] h-[320px] text-[#d6aa5a]/30" />

      {/* ── Symmetrical framing pillars at the edges ── */}
      <Pillar className="pointer-events-none absolute left-[40px] top-[70px] h-[760px] w-[44px] text-[#cf9f4b]/75" />
      <Pillar className="pointer-events-none absolute right-[40px] top-[70px] h-[760px] w-[44px] text-[#cf9f4b]/75 [transform:scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[104px] py-[64px] text-center">
        <header className="flex flex-col items-center">
          <CrownEmblem className="h-16 w-40 text-[#e7c574]" />
          <p className="mt-4 font-sans text-[11px] font-semibold uppercase tracking-[0.52em] text-[#dcb05c]">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <p className="mt-4 max-w-[20rem] text-[15px] italic leading-relaxed tracking-wide text-[#f3d690]/75">
            {t('template.common.requestPresence', 'request the honour of your presence at the royal celebration of')}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-script text-[68px] font-medium leading-[0.92]">
            <span
              data-pdf-color="#e7c574"
              className="bg-gradient-to-br from-[#fbe9b8] via-[#e7c574] to-[#b9842c] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          <div className="my-3 flex items-center justify-center">
            <span className="font-display text-3xl italic tracking-wide text-[#dcb05c]">
              {t('template.common.and', '&')}
            </span>
          </div>

          <h1 className="font-script text-[68px] font-medium leading-[0.92]">
            <span
              data-pdf-color="#e7c574"
              className="bg-gradient-to-bl from-[#fbe9b8] via-[#e7c574] to-[#b9842c] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          <RoyalDivider className="mt-6 h-6 w-64 text-[#e7c574]" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1.5 border-y border-[#d6aa5a]/45 px-10 py-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.46em] text-[#dcb05c]">
              {t('template.common.saveTheDate', 'Save the Date')}
            </span>
            <span className="font-display text-[25px] leading-none tracking-wide text-[#fbe9b8]">
              {weddingDate}{time && ` · ${time}`}
            </span>
          </div>

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.46em] text-[#dcb05c]">
              {t('template.wedding.venue', 'Venue')}
            </span>
            <span className="text-[17px] leading-snug text-[#f3d690]">{venue}</span>
          </div>

          <p className="mt-1 text-[14px] italic leading-relaxed tracking-wide text-[#f3d690]/75">
            {t('template.common.hostedBy', 'Hosted by')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-[#fbe9b8]">{hostFamily}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
