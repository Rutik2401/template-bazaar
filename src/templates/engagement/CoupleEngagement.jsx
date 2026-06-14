'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold ornaments on navy ─────────────────────────────────────────────── */
function GoldFiligree({ className = '' }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 10 C60 10 84 30 84 84 C84 30 64 10 10 10" opacity="0.9" />
      <path d="M10 26 C50 26 70 44 70 84" opacity="0.6" />
      <path d="M26 10 C26 50 44 70 84 70" opacity="0.6" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      <path d="M40 10c10 0 18 8 18 18-10 0-18-8-18-18Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
    </svg>
  )
}

function Crest({ className = '' }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none">
      <path d="M40 4 L72 16 V46 C72 70 58 82 40 88 C22 82 8 70 8 46 V16 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M40 18 l6 14 15 1-11 10 4 15-14-8-14 8 4-15-11-10 15-1Z" fill="currentColor" fillOpacity="0.85" stroke="none" />
    </svg>
  )
}

/**
 * Premium couple theme — deep navy + gold, modern-romantic luxury.
 * Natural design size: 640 × 900.
 */
export default function CoupleEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Priya & Arjun'
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1c3d] via-[#0a1730] to-[#06101f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(212,164,55,0.16),transparent_60%)]" />

      {/* gold double frame */}
      <div className="absolute inset-[20px] rounded-[6px] border border-[#d4a437]/70" />
      <div className="absolute inset-[27px] rounded-[4px] border border-[#d4a437]/30" />

      {/* corner filigree */}
      <GoldFiligree className="absolute left-7 top-7 h-24 w-24 text-[#d4a437]" />
      <GoldFiligree className="absolute right-7 top-7 h-24 w-24 text-[#d4a437] [transform:scaleX(-1)]" />
      <GoldFiligree className="absolute bottom-7 left-7 h-24 w-24 text-[#d4a437] [transform:scaleY(-1)]" />
      <GoldFiligree className="absolute bottom-7 right-7 h-24 w-24 text-[#d4a437] [transform:scale(-1)]" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-20 text-center">
        <header className="flex flex-col items-center gap-5">
          <Crest className="h-16 w-14 text-[#d4a437]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.55em] text-[#d4a437]">
            {t('template.common.saveTheDate', 'Save the Date')}
          </p>
        </header>

        <main className="flex flex-col items-center gap-5">
          <p className="text-[15px] italic tracking-wide text-[#c9bd9c]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[68px] font-semibold leading-[1.02]">
            <span
              data-pdf-color="#d4a437"
              className="bg-gradient-to-b from-[#f4e2a8] via-[#e2c265] to-[#b8860b] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <div className="flex items-center gap-3 text-[#d4a437]">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4a437]" />
            <span className="text-base">◆</span>
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4a437]" />
          </div>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-[28px] text-[#f0e7cf]">
              {date}
              {time && <span className="text-[#d4a437]"> · {time}</span>}
            </p>
          </div>

          <div className="rounded-sm border border-[#d4a437]/50 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4a437]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-1 text-[17px] leading-snug text-[#e7ddc6]">{venue}</p>
          </div>

          <p className="text-[14px] italic text-[#bcae8a]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-xl not-italic text-[#f0e7cf]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
