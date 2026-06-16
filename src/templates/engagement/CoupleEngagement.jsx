'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold ornaments on navy ─────────────────────────────────────────────── */
function GoldFiligree({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 10 C60 10 84 30 84 84 C84 30 64 10 10 10" opacity="0.95" />
      <path d="M10 26 C50 26 70 44 70 84" opacity="0.6" />
      <path d="M26 10 C26 50 44 70 84 70" opacity="0.6" />
      <path d="M10 42 C36 42 56 60 56 90" opacity="0.4" />
      <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="84" cy="84" r="2.4" fill="currentColor" stroke="none" opacity="0.7" />
      <path d="M40 10c10 0 18 8 18 18-10 0-18-8-18-18Z" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <path d="M10 40c10 0 18 8 18 18-10 0-18-8-18-18Z" fill="currentColor" fillOpacity="0.14" stroke="none" />
    </svg>
  )
}

function Crest({ className = '' }) {
  return (
    <svg viewBox="0 0 80 96" className={className} fill="none">
      <path d="M40 4 L72 16 V46 C72 70 58 84 40 92 C22 84 8 70 8 46 V16 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M40 11 L66 21 V46 C66 66 54 78 40 85 C26 78 14 66 14 46 V21 Z" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.5" />
      <path d="M40 22 l5 12 13 1-10 9 3 13-11-7-11 7 3-13-10-9 13-1Z" fill="currentColor" fillOpacity="0.9" stroke="none" />
    </svg>
  )
}

function RingPair({ className = '' }) {
  return (
    <svg viewBox="0 0 90 50" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="33" cy="27" r="15" />
      <circle cx="57" cy="27" r="15" />
      <path d="M45 6 l4 7 8 0 -6 5 2 8 -8 -4 -8 4 2 -8 -6 -5 8 0Z" fill="currentColor" strokeWidth="0" opacity="0.9" />
    </svg>
  )
}

/**
 * Premium couple theme — deep navy + gold, modern-romantic luxury.
 * Natural design size: 640 × 900.
 */
export default function CoupleEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#0a1834] font-serif text-[#e7ddc6]"
    >
      {/* deep navy gradient + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#102346] via-[#0a1730] to-[#050d1b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(212,164,55,0.2),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_92%,rgba(212,164,55,0.12),transparent_55%)]" />

      {/* gold triple frame */}
      <div className="absolute inset-[18px] rounded-[8px] border border-[#d4a437]/70" />
      <div className="absolute inset-[25px] rounded-[6px] border border-[#d4a437]/35" />
      <div className="absolute inset-[30px] rounded-[4px] border border-[#d4a437]/20" />

      {/* corner filigree */}
      <GoldFiligree className="absolute left-7 top-7 h-24 w-24 text-[#d4a437]" />
      <GoldFiligree className="absolute right-7 top-7 h-24 w-24 text-[#d4a437] [transform:scaleX(-1)]" />
      <GoldFiligree className="absolute bottom-7 left-7 h-24 w-24 text-[#d4a437] [transform:scaleY(-1)]" />
      <GoldFiligree className="absolute bottom-7 right-7 h-24 w-24 text-[#d4a437] [transform:scale(-1)]" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-[76px] text-center">
        <header className="flex flex-col items-center gap-5">
          <Crest className="h-[72px] w-[60px] text-[#d4a437] drop-shadow-[0_3px_8px_rgba(212,164,55,0.3)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.62em] text-[#d4a437]">
            {t('template.common.saveTheDate', 'Save the Date')}
          </p>
        </header>

        <main className="flex flex-col items-center gap-6">
          <p className="text-[15px] italic tracking-wide text-[#c9bd9c]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[70px] font-semibold leading-[1.0] tracking-[-0.01em]">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-[#f6e6ac] via-[#e2c265] to-[#b8860b] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <RingPair className="h-9 w-16 text-[#d4a437]" />
          <div className="flex items-center gap-3 text-[#d4a437]">
            <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4a437]" />
            <span className="text-base">◆</span>
            <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4a437]" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-[30px] tracking-wide text-[#f0e7cf]">
              {date}
              {time && <span className="text-[#d4a437]"> · {time}</span>}
            </p>
          </div>

          <div className="rounded-sm border border-[#d4a437]/50 px-9 py-3.5">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#d4a437]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-1 text-[17px] leading-snug text-[#e7ddc6]">{venue}</p>
          </div>

          <p className="text-[14px] italic leading-relaxed text-[#bcae8a]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-[22px] not-italic tracking-wide text-[#f0e7cf]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
