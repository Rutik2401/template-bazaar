'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Minimal botanical motifs ──────────────────────────────────────────── */

function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 40 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M20 88V14" />
      <path d="M20 30c-9 0-15-5-16-14 9-1 15 4 16 14Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M20 46c9 0 15-5 16-14-9-1-15 4-16 14Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M20 60c-9 0-15-5-16-14 9-1 15 4 16 14Z" fill="currentColor" fillOpacity="0.14" stroke="none" />
      <path d="M20 74c9 0 15-5 16-14-9-1-15 4-16 14Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
    </svg>
  )
}

function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 52C26 44 40 28 50 8" />
      {Array.from({ length: 6 }).map((_, i) => {
        const t = 0.14 + i * 0.14
        const x = 8 + (50 - 8) * t
        const y = 52 - (52 - 8) * t
        return <ellipse key={i} cx={x} cy={y} rx="6" ry="2.8" fill="currentColor" fillOpacity="0.16" stroke="none" transform={`rotate(${-40 + i * 4} ${x} ${y})`} />
      })}
    </svg>
  )
}

function Stem({ className = '' }) {
  // single elegant flowering stem
  return (
    <svg viewBox="0 0 50 150" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M25 148C25 110 22 70 28 30" />
      {[40, 66, 92, 116].map((y, i) => (
        <g key={i}>
          <path d={i % 2 === 0 ? `M${26 - i} ${y}c-12 -2 -18 -8 -18 -16 9 1 15 6 18 16Z` : `M${28 + i} ${y}c12 -2 18 -8 18 -16 -9 1 -15 6 -18 16Z`} fill="currentColor" fillOpacity="0.16" stroke="none" />
        </g>
      ))}
      {/* bud */}
      <ellipse cx="27" cy="24" rx="5" ry="9" fill="currentColor" fillOpacity="0.22" />
      <path d="M27 16c-2 3-3 6-2 9M27 16c2 3 3 6 2 9" opacity="0.5" />
    </svg>
  )
}

/**
 * Modern, minimal baby celebration invite — sage-green & peach, a tasteful
 * arch with botanical sprigs, clean editorial typography and lots of air.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function ModernBabyShower({ values }) {
  const { t } = useI18n()
  const mother = values.motherName?.trim() || 'Priya Sharma'
  const date = formatDate(values.date, 'Date to be announced')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f4f1e9] font-sans text-[#3f4a3a]"
    >
      {/* peach wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f1e7] via-[#f4f1e9] to-[#edeee3]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_8%,rgba(226,167,141,0.16),transparent_60%)]" />

      {/* thin editorial keyline border */}
      <div className="absolute inset-5 rounded-[2px] border border-[#8a9a7b]/30" />

      {/* sage arch panel */}
      <div className="absolute inset-x-16 top-16 bottom-28 rounded-t-[180px] bg-gradient-to-b from-[#c7d2b8] via-[#d4ddc6] to-[#e1e7d6]" />
      <div className="absolute inset-x-16 top-16 bottom-28 rounded-t-[180px] bg-[radial-gradient(70%_40%_at_50%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="absolute inset-x-[72px] top-[72px] bottom-[120px] rounded-t-[164px] border border-[#8a9a7b]/45" />
      <div className="absolute inset-x-[82px] top-[82px] bottom-[130px] rounded-t-[150px] border border-[#8a9a7b]/20" />

      {/* flowering stems framing the arch crown */}
      <Stem className="absolute left-[108px] top-[58px] h-[150px] w-[42px] text-[#7e9069]/80 [transform:rotate(-14deg)]" />
      <Stem className="absolute right-[108px] top-[58px] h-[150px] w-[42px] text-[#7e9069]/80 [transform:rotate(14deg)_scaleX(-1)]" />

      {/* corner sprigs */}
      <Sprig className="absolute left-10 top-10 h-20 w-20 text-[#7e9069]" />
      <Sprig className="absolute right-10 top-10 h-20 w-20 text-[#7e9069] [transform:scaleX(-1)]" />
      <Leaf className="absolute left-1 bottom-24 h-28 w-12 text-[#9aa987]/70" />
      <Leaf className="absolute right-1 bottom-24 h-28 w-12 text-[#9aa987]/70 [transform:scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-24 pb-16 pt-28 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.5em] text-[#7e9069]">
            {t('template.common.babyShower', 'Baby Shower')}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#7e9069]/60">
            <span className="h-px w-8 bg-[#7e9069]/50" />
            <span className="h-1 w-1 rounded-full bg-[#9b6b53]/70" />
            <span className="h-px w-8 bg-[#7e9069]/50" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          <p className="font-serif text-[20px] italic text-[#6b7560]">
            {t('template.common.aLittleOneIsOnTheWay', 'A little one is on the way')}
          </p>
          <h1 className="mt-5 font-display text-[60px] font-medium leading-[0.96] tracking-tight">
            <span
              data-pdf-color="#7e9069"
              className="bg-gradient-to-br from-[#8a9a7b] via-[#7e9069] to-[#dd9c80] bg-clip-text text-transparent"
            >
              Celebrate
            </span>
          </h1>
          <p className="mt-2 font-display text-[26px] text-[#4a5442]">{t('template.common.withUs', 'with us')}</p>
          <div className="mt-7 flex flex-col items-center gap-1.5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#9b6b53]">{t('template.common.motherToBe', 'Mother to be')}</p>
            <p className="font-serif text-[32px] leading-tight text-[#3f4a3a]">{mother}</p>
            <span className="mt-1 h-px w-16 bg-[#9b6b53]/40" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#7e9069]">{t('template.common.date', 'Date')}</p>
              <p className="mt-1 text-[15px] font-medium text-[#3f4a3a]">{date}</p>
            </div>
            <div className="h-10 w-px bg-[#9b6b53]/40" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#7e9069]">{t('template.common.venue', 'Venue')}</p>
              <p className="mt-1 max-w-[12rem] text-[15px] font-medium leading-snug text-[#3f4a3a]">{venue}</p>
            </div>
          </div>
          <p className="text-[13px] tracking-wide text-[#6b7560]">
            {t('template.common.hostedBy', 'Hosted with love by')}{' '}
            <span className="font-serif text-base text-[#3f4a3a]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
