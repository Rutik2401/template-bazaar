'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Modern engagement card — minimal, geometric accents, bold contemporary sans.
 * One strong accent colour (terracotta / coral) on warm off-white.
 * Natural design size: 640 × 900.
 */
export default function ModernEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  const ACCENT = '#e8623d'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f4f1ec] font-party text-[#1c1b1a]"
    >
      {/* geometric accents */}
      <div className="absolute right-0 top-0 h-44 w-44 bg-[#e8623d]" />
      <div className="absolute right-0 top-0 h-44 w-44 [clip-path:polygon(0_0,100%_0,100%_100%)] bg-[#1c1b1a]" />
      <div className="absolute left-0 bottom-0 h-56 w-2 bg-[#e8623d]" />
      <div className="absolute left-0 bottom-0 h-2 w-56 bg-[#e8623d]" />
      <div className="absolute left-16 top-24 h-20 w-20 rounded-full border-[3px] border-[#e8623d]" />
      <div className="absolute right-24 bottom-32 h-14 w-14 rotate-45 border-[3px] border-[#1c1b1a]" />
      <div className="absolute left-24 bottom-44 h-3 w-3 rounded-full bg-[#e8623d]" />

      <div className="relative flex h-full flex-col justify-between px-16 py-20">
        <header className="flex flex-col items-start gap-2">
          <span className="rounded-full bg-[#1c1b1a] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#f4f1ec]">
            {t('template.common.youAreInvited', "You're Invited")}
          </span>
          <p className="mt-2 max-w-[14rem] text-[13px] font-medium uppercase tracking-[0.25em] text-[#7a766f]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
        </header>

        <main className="flex flex-col items-start">
          <h1 className="font-sans text-[72px] font-extrabold leading-[0.96] tracking-tight text-[#1c1b1a]">
            {couple}
          </h1>
          <div className="mt-6 h-[6px] w-40" style={{ backgroundColor: ACCENT }} />
        </main>

        <footer className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
                {t('template.common.date', 'Date')}
              </span>
              <span className="mt-1 text-[20px] font-semibold leading-tight text-[#1c1b1a]">{date}</span>
              {time && <span className="text-[15px] font-medium text-[#7a766f]">{time}</span>}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
                {t('template.common.venue', 'Venue')}
              </span>
              <span className="mt-1 text-[18px] font-semibold leading-snug text-[#1c1b1a]">{venue}</span>
            </div>
          </div>

          <div className="h-px w-full bg-[#d8d3ca]" />

          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#7a766f]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="mt-1 inline-block text-[18px] font-bold normal-case tracking-normal text-[#1c1b1a]">
              {family}
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}
