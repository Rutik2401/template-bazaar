'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Respectful Tribute Card — ivory & muted gold "In Loving Memory" card.
 * A serene ॐ crest, a lotus line motif and a soft oval photo frame, framed by
 * fine gold rules. Natural size 640 × 900.
 */
export default function RespectfulTribute({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Late Shri Madhav Rao'
  const date = formatDate(values.date, 'Date to be announced')
  const family = values.familyName?.trim() || 'The Rao Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fbf8f0] px-16 py-16 text-center font-serif text-[#4a4334]"
    >
      {/* layered gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[2px] border border-[#c9ad6a]" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[2px] border border-[#e4d6b0]" />

      {/* Header — Om crest + memory line */}
      <header className="relative flex flex-col items-center pt-2">
        <div
          className="font-display text-[44px] leading-none text-[#b89642]"
          data-pdf-color="#b89642"
        >
          {t('template.common.om', 'ॐ')}
        </div>
        <span className="mt-4 h-px w-16 bg-[#c9ad6a]" />
        <p className="mt-5 text-[12px] uppercase tracking-[0.5em] text-[#9c8c63]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main — lotus motif, oval photo frame, name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* lotus line motif */}
        <svg width="62" height="34" viewBox="0 0 62 34" fill="none" aria-hidden="true">
          <path d="M31 31C31 18 31 8 31 4c0 4 0 14 0 27Z" stroke="#b89642" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M31 31C26 22 20 16 13 13c3 8 9 14 18 18Z" stroke="#b89642" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M31 31C36 22 42 16 49 13c-3 8-9 14-18 18Z" stroke="#b89642" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M31 31C23 26 14 24 4 25c7 5 16 7 27 6Z" stroke="#c9ad6a" strokeWidth="1" strokeLinejoin="round" />
          <path d="M31 31C39 26 48 24 58 25c-7 5-16 7-27 6Z" stroke="#c9ad6a" strokeWidth="1" strokeLinejoin="round" />
        </svg>

        {/* oval photo placeholder */}
        <div className="flex h-48 w-40 items-center justify-center rounded-[50%] border-2 border-[#c9ad6a] bg-white shadow-[0_1px_0_#e4d6b0]">
          <div className="flex h-[86%] w-[86%] items-center justify-center rounded-[50%] border border-[#e4d6b0]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#b5a987]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <h1 className="font-display text-[40px] leading-tight text-[#332e22]">{person}</h1>
        <p className="max-w-[22rem] text-[14px] italic leading-relaxed text-[#86795c]">
          {t(
            'template.common.tributeLine',
            'Your memory is a treasure we will hold in our hearts forever.',
          )}
        </p>
      </main>

      {/* Footer — date + family */}
      <footer className="relative flex flex-col items-center gap-2 pb-2 text-[#5e5440]">
        <span className="mb-2 h-px w-16 bg-[#c9ad6a]" />
        <p className="font-display text-xl text-[#332e22]">{date}</p>
        <p className="mt-2 text-[13px] italic text-[#86795c]">— {family}</p>
      </footer>
    </div>
  )
}
