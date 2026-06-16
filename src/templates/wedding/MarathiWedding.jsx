'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Paithani-inspired ornamental pieces ───────────────────────────────── */

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* coconut */}
      <ellipse cx="40" cy="20" rx="12" ry="14" fill="currentColor" fillOpacity="0.18" />
      {/* mango leaves */}
      <path d="M40 34c-10 0-18-3-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 6-14 9-24 9Z" fill="currentColor" fillOpacity="0.22" />
      {/* pot neck + body */}
      <path d="M28 38h24l-3 8c10 5 16 14 16 26 0 14-12 24-25 24S15 92 15 78c0-12 6-21 16-26l-3-14Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M22 60h36" />
      <path d="M26 72h28" opacity="0.7" />
      <circle cx="40" cy="84" r="3" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  )
}

/** Radiant paithani mandala behind the kalash. */
function Mandala({ className = '' }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="60" cy="60" r="56" opacity="0.3" />
      <circle cx="60" cy="60" r="44" opacity="0.5" />
      <g>
        {petals.map((_, i) => (
          <path
            key={i}
            d="M60 6c4 11 4 20 0 30-4-10-4-19 0-30Z"
            fill="currentColor"
            fillOpacity="0.14"
            stroke="none"
            transform={`rotate(${(i / petals.length) * 360} 60 60)`}
          />
        ))}
      </g>
      <circle cx="60" cy="60" r="26" opacity="0.6" />
    </svg>
  )
}

function PeacockFeather({ className = '' }) {
  return (
    <svg viewBox="0 0 60 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M30 138c0-40 0-70 0-86" />
      <ellipse cx="30" cy="34" rx="20" ry="30" fill="currentColor" fillOpacity="0.10" />
      <ellipse cx="30" cy="34" rx="12" ry="18" fill="currentColor" fillOpacity="0.18" />
      <circle cx="30" cy="32" r="6" fill="currentColor" fillOpacity="0.45" stroke="none" />
      <circle cx="30" cy="32" r="2.6" fill="currentColor" stroke="none" />
      <path d="M30 12c-6 6-9 14-9 22M30 12c6 6 9 14 9 22" opacity="0.6" />
      {/* side barbs */}
      <path d="M30 70c-8-3-13-9-15-18M30 70c8-3 13-9 15-18" opacity="0.4" />
    </svg>
  )
}

function ToranBorder({ className = '' }) {
  // hanging marigold + mango-leaf toran strip
  return (
    <svg viewBox="0 0 640 50" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 4h640" opacity="0.7" />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 16 + i * 30.4
        const long = i % 2 === 0
        const leafLen = long ? 30 : 22
        return (
          <g key={i}>
            {/* swag arc */}
            {i > 0 && <path d={`M${x - 30.4} 4 Q ${x - 15.2} 16 ${x} 4`} opacity="0.4" />}
            {/* mango leaf */}
            <path d={`M${x} 4c-6 ${leafLen * 0.28} -6 ${leafLen * 0.74} 0 ${leafLen}c6 ${-leafLen * 0.26} 6 ${-leafLen * 0.72} 0 ${-leafLen}Z`} fill="currentColor" fillOpacity="0.16" />
            {/* marigold bead */}
            <circle cx={x} cy={leafLen + 6} r={long ? 3.4 : 2.6} fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Traditional Marathi wedding invitation — paithani green, gold & purple,
 * with peacock feathers, a radiant kalash mandala and a marigold toran.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MarathiWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0f3d2e] font-serif text-gold-100"
    >
      {/* Rich silk gradient base (paithani green) + woven sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#155b40] via-[#0f3d2e] to-[#082018]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,_rgba(212,164,55,0.16),_transparent_60%)]" />

      {/* Purple paithani pallu bands top & bottom (with gold piping) */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-r from-[#4a1f6e] via-[#8a44b5] to-[#4a1f6e]" />
      <div className="absolute inset-x-0 top-8 h-px bg-gold-400/70" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-[#4a1f6e] via-[#8a44b5] to-[#4a1f6e]" />
      <div className="absolute inset-x-0 bottom-8 h-px bg-gold-400/70" />

      {/* Toran hanging from the top band */}
      <ToranBorder className="absolute inset-x-0 top-8 h-12 text-gold-300" />

      {/* Woven gold frame (double keyline) */}
      <div className="absolute inset-x-6 inset-y-[72px] rounded-sm border-2 border-gold-400/80" />
      <div className="absolute inset-x-[34px] inset-y-[82px] rounded-sm border border-gold-300/40" />

      {/* Side peacock feathers (paithani signature) */}
      <PeacockFeather className="absolute left-9 top-1/2 h-44 w-16 -translate-y-1/2 text-gold-300/70" />
      <PeacockFeather className="absolute right-9 top-1/2 h-44 w-16 -translate-y-1/2 text-gold-300/70 [transform:translateY(-50%)_scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-[72px] pb-[60px] pt-[96px] text-center">
        <header className="flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <Mandala className="absolute h-28 w-28 text-gold-300/45" />
            <Kalash className="relative h-20 w-16 text-gold-300" />
          </div>
          <p className="mt-2 font-script text-[34px] leading-none text-gold-200">{t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}</p>
          <p className="mt-4 font-display text-[26px] tracking-wide text-gold-200">॥ शुभमंगल सावधान ॥</p>
          <div className="mt-3 flex items-center gap-2 text-gold-400/70">
            <span className="h-px w-12 bg-gold-400/60" />
            <span className="text-[10px]">✦</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          <p className="font-sans text-[12px] uppercase tracking-[0.42em] text-gold-300/80">
            {t('template.common.togetherWithFamilies', 'Together with their families')}
          </p>
          <h1 className="mt-5 font-script text-[64px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>
          <div className="my-2 flex items-center gap-3 text-gold-300">
            <span className="h-px w-12 bg-gold-400/60" />
            <span className="font-display text-2xl italic text-purple-200">{t('template.common.weds', 'weds')}</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h1 className="font-script text-[64px] font-medium leading-[0.96]">
            <span
              data-pdf-color="#e2bd66"
              className="bg-gradient-to-bl from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-3.5">
          <div className="rounded-md border border-gold-400/50 bg-[#4a1f6e]/40 px-9 py-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-gold-300">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-[24px] tracking-wide text-gold-100">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-gold-300/80">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-gold-100">{venue}</p>
          </div>
          <p className="mt-1 text-[14px] italic leading-relaxed text-gold-300/80">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-lg not-italic tracking-wide text-gold-100">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
