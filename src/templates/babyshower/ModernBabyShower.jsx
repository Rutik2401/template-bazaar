'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Minimal botanical motifs ──────────────────────────────────────────── */

function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 40 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M20 88V14" />
      <path d="M20 30c-9 0-15-5-16-14 9-1 15 4 16 14Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M20 46c9 0 15-5 16-14-9-1-15 4-16 14Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M20 60c-9 0-15-5-16-14 9-1 15 4 16 14Z" fill="currentColor" fillOpacity="0.14" stroke="none" />
    </svg>
  )
}

function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 52C26 44 40 28 50 8" />
      {Array.from({ length: 5 }).map((_, i) => {
        const t = 0.18 + i * 0.16
        const x = 8 + (50 - 8) * t
        const y = 52 - (52 - 8) * t
        return <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="currentColor" fillOpacity="0.16" stroke="none" transform={`rotate(${-40 + i * 4} ${x} ${y})`} />
      })}
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6efe6] via-[#f4f1e9] to-[#eef0e6]" />

      {/* sage arch panel */}
      <div className="absolute inset-x-16 top-16 bottom-28 rounded-t-[180px] bg-gradient-to-b from-[#cdd6c0] to-[#dde3d3]" />
      <div className="absolute inset-x-[72px] top-[72px] bottom-[120px] rounded-t-[164px] border border-[#8a9a7b]/40" />

      {/* corner sprigs */}
      <Sprig className="absolute left-12 top-12 h-20 w-20 text-[#7e9069]" />
      <Sprig className="absolute right-12 top-12 h-20 w-20 text-[#7e9069] [transform:scaleX(-1)]" />
      <Leaf className="absolute -left-1 bottom-24 h-28 w-12 text-[#9aa987]/70" />
      <Leaf className="absolute -right-1 bottom-24 h-28 w-12 text-[#9aa987]/70 [transform:scaleX(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-24 pb-16 pt-28 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.5em] text-[#7e9069]">
            {t('template.common.babyShower', 'Baby Shower')}
          </p>
          <div className="mt-4 h-px w-16 bg-[#7e9069]/50" />
        </header>

        <main className="flex flex-col items-center">
          <p className="font-serif text-[20px] italic text-[#6b7560]">
            {t('template.common.aLittleOneIsOnTheWay', 'A little one is on the way')}
          </p>
          <h1 className="mt-5 font-display text-[58px] font-medium leading-[0.98]">
            <span
              data-pdf-color="#7e9069"
              className="bg-gradient-to-br from-[#8a9a7b] via-[#7e9069] to-[#e2a78d] bg-clip-text text-transparent"
            >
              Celebrate
            </span>
          </h1>
          <p className="mt-2 font-display text-[26px] text-[#4a5442]">{t('template.common.withUs', 'with us')}</p>
          <div className="mt-7 flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#9b6b53]">{t('template.common.motherToBe', 'Mother to be')}</p>
            <p className="font-serif text-[30px] text-[#3f4a3a]">{mother}</p>
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
