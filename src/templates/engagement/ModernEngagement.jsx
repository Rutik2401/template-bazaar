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
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f5f2ed] font-party text-[#1c1b1a]"
    >
      {/* warm paper gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f4] via-[#f4f1ec] to-[#ece7df]" />

      {/* geometric accents */}
      <div className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-bl from-[#f07a52] to-[#e8623d]" />
      <div className="absolute right-0 top-0 h-48 w-48 [clip-path:polygon(0_0,100%_0,100%_100%)] bg-[#1c1b1a]" />
      <div className="absolute right-7 top-7 h-3 w-3 rounded-full bg-[#f5f2ed]" />
      <div className="absolute left-0 bottom-0 h-60 w-[3px] bg-[#e8623d]" />
      <div className="absolute left-0 bottom-0 h-[3px] w-60 bg-[#e8623d]" />
      <div className="absolute left-16 top-28 h-[88px] w-[88px] rounded-full border-[3px] border-[#e8623d]" />
      <div className="absolute left-[74px] top-[140px] h-2.5 w-2.5 rounded-full bg-[#e8623d]" />
      <div className="absolute right-24 bottom-36 h-16 w-16 rotate-45 border-[3px] border-[#1c1b1a]" />
      <div className="absolute right-[120px] bottom-[120px] h-2 w-2 rounded-full bg-[#e8623d]" />
      <div className="absolute left-24 bottom-48 h-3 w-3 rounded-full bg-[#e8623d]" />

      <div className="relative flex h-full flex-col justify-between px-16 py-[76px]">
        <header className="flex flex-col items-start gap-3">
          <span className="rounded-full bg-[#1c1b1a] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-[#f5f2ed]">
            {t('template.common.youAreInvited', "You're Invited")}
          </span>
          <p className="mt-1 max-w-[14rem] text-[13px] font-semibold uppercase tracking-[0.28em] text-[#7a766f]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
        </header>

        <main className="flex flex-col items-start">
          <h1 className="font-sans text-[76px] font-extrabold leading-[0.94] tracking-[-0.02em] text-[#1c1b1a]">
            {couple}
          </h1>
          <div className="mt-7 flex items-center gap-3">
            <div className="h-[7px] w-44" style={{ backgroundColor: ACCENT }} />
            <div className="h-[7px] w-3 bg-[#1c1b1a]" />
          </div>
        </main>

        <footer className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>
                {t('template.common.date', 'Date')}
              </span>
              <span className="mt-1.5 text-[21px] font-semibold leading-tight text-[#1c1b1a]">{date}</span>
              {time && <span className="text-[15px] font-medium text-[#7a766f]">{time}</span>}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>
                {t('template.common.venue', 'Venue')}
              </span>
              <span className="mt-1.5 text-[18px] font-semibold leading-snug text-[#1c1b1a]">{venue}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#d8d3ca]" />
            <div className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: ACCENT }} />
            <div className="h-px flex-1 bg-[#d8d3ca]" />
          </div>

          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#7a766f]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="mt-1.5 inline-block text-[19px] font-extrabold normal-case tracking-normal text-[#1c1b1a]">
              {family}
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}
