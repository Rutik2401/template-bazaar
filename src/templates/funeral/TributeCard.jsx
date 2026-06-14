'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Tribute Card — "In Loving Memory".
 * A dignified portrait frame (empty rounded rect as a photo placeholder),
 * a candle / diya line motif, the name and dates. Black on cream.
 * Restrained palette: cream, near-black, muted grey. Natural size 640 × 900.
 */
export default function TributeCard({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#f6f3ec] px-16 py-20 text-center font-serif text-[#3a352c]"
    >
      {/* hairline inner frame */}
      <div className="pointer-events-none absolute inset-6 border border-[#cfc7b5]" />
      <div className="pointer-events-none absolute inset-[30px] border border-[#e3ddcf]" />

      {/* Header — Om Shanti + memory line */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[26px] leading-none text-[#b59b5e]">
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </div>
        <p className="mt-5 text-[12px] uppercase tracking-[0.45em] text-[#9a917f]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
        <span className="mt-5 h-px w-20 bg-[#cfc7b5]" />
      </header>

      {/* Main — candle motif, portrait frame, name */}
      <main className="relative flex flex-col items-center gap-6">
        {/* candle / diya line motif */}
        <svg width="38" height="56" viewBox="0 0 38 56" fill="none" aria-hidden="true">
          {/* flame */}
          <path
            d="M19 4c4 5 5 8 5 11a5 5 0 0 1-10 0c0-2 .8-4 2-6-.4 2 .2 3.4 1.4 4 1.6-2.2 1.8-5.4 1.6-9Z"
            fill="#b59b5e"
          />
          {/* candle body */}
          <rect x="13" y="22" width="12" height="26" rx="1.5" fill="none" stroke="#b59b5e" strokeWidth="1.2" />
          {/* base plate */}
          <path d="M6 50h26" stroke="#cfc7b5" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M11 53h16" stroke="#cfc7b5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* portrait frame (photo placeholder) */}
        <div className="flex h-40 w-32 items-center justify-center rounded-md border border-[#cfc7b5] bg-white shadow-[0_1px_0_#e3ddcf]">
          <div className="h-[88%] w-[88%] rounded-sm border border-[#e3ddcf]" />
        </div>

        <h1 className="font-display text-[40px] leading-tight text-[#2c281f]">{person}</h1>
        <p className="max-w-[22rem] text-[14px] italic text-[#7c7565]">
          {t('template.common.sadDemise', 'We deeply mourn the sad demise of')}
        </p>
      </main>

      {/* Footer — prayer details + family */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5c5547]">
        <span className="mb-2 h-px w-20 bg-[#cfc7b5]" />
        <p className="text-[12px] uppercase tracking-[0.35em] text-[#9a917f]">
          {t('template.common.prayerMeeting', 'Prayer Meeting')}
        </p>
        <p className="font-display text-xl text-[#2c281f]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px]">{venue}</p>
        <p className="mt-3 text-[13px] italic text-[#7c7565]">— {family}</p>
      </footer>
    </div>
  )
}
