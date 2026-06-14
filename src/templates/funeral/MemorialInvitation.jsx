'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Memorial Invitation — an elegant memorial card on white, a single thin
 * gold rule and an Om line motif. The most refined of the set.
 * Natural size 640 × 900.
 */
export default function MemorialInvitation({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-white px-16 py-24 text-center font-serif text-[#454545]"
    >
      {/* a single thin gold rule top and bottom */}
      <div className="pointer-events-none absolute left-16 right-16 top-12 h-px bg-[#c4a86a]" />
      <div className="pointer-events-none absolute bottom-12 left-16 right-16 h-px bg-[#c4a86a]" />

      {/* Header — large Om motif */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[52px] leading-none text-[#c4a86a]" data-pdf-color="#c4a86a">
          {t('template.common.om', 'ॐ')}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.5em] text-[#9b9b9b]">
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </p>
      </header>

      {/* Main — memory line, name, homage line */}
      <main className="relative flex flex-col items-center">
        <p className="text-[13px] uppercase tracking-[0.4em] text-[#a8a8a8]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
        <span className="my-6 h-px w-14 bg-[#c4a86a]" />
        <h1 className="font-display text-[46px] leading-tight text-[#262626]">{person}</h1>
        <p className="mt-6 max-w-[24rem] text-[14px] italic leading-relaxed text-[#7c7c7c]">
          {t('template.common.sadDemise', 'We deeply mourn the sad demise of')}
        </p>
      </main>

      {/* Footer — memorial details */}
      <footer className="relative flex flex-col items-center gap-2 text-[#565656]">
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#a8a8a8]">
          {t('template.funeral.memorialService', 'Memorial Service')}
        </p>
        <p className="font-display text-xl text-[#262626]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px]">{venue}</p>
        <span className="mt-3 h-px w-14 bg-[#e3e3e3]" />
        <p className="mt-3 text-[13px] italic text-[#7c7c7c]">— {family}</p>
      </footer>
    </div>
  )
}
