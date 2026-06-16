'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* A slender gold rule that fades at both ends, with a small lotus-bud centre. */
function FadedRule({ className = '' }) {
  return (
    <svg viewBox="0 0 220 14" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rt-rule-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c9ad6a" stopOpacity="0" />
          <stop offset="1" stopColor="#c9ad6a" />
        </linearGradient>
        <linearGradient id="rt-rule-r" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c9ad6a" />
          <stop offset="1" stopColor="#c9ad6a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M6 7h92" stroke="url(#rt-rule-l)" strokeWidth="1" strokeLinecap="round" />
      <path d="M122 7h92" stroke="url(#rt-rule-r)" strokeWidth="1" strokeLinecap="round" />
      <path d="M110 1.5c2.4 3 3.6 4.3 3.6 5.5s-1.2 2.5-3.6 5.5c-2.4-3-3.6-4.3-3.6-5.5s1.2-2.5 3.6-5.5Z" fill="#b89642" />
      <circle cx="100" cy="7" r="1.4" fill="#c9ad6a" />
      <circle cx="120" cy="7" r="1.4" fill="#c9ad6a" />
    </svg>
  )
}

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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fdfbf4] via-[#fbf8f0] to-[#f5efe0] px-16 py-16 text-center font-serif text-[#4a4334]"
    >
      {/* soft halo of light from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_14%,_rgba(184,150,66,0.10),_transparent_58%)]" />

      {/* layered gold frame with softened corners */}
      <div className="pointer-events-none absolute inset-5 rounded-[3px] border border-[#c9ad6a]" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[2px] border border-[#e4d6b0]" />

      {/* corner flourishes */}
      <svg className="pointer-events-none absolute left-7 top-7 h-7 w-7 text-[#c9ad6a]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
        <path d="M2 14C2 7 7 2 14 2" />
        <circle cx="6" cy="6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
      <svg className="pointer-events-none absolute right-7 top-7 h-7 w-7 -scale-x-100 text-[#c9ad6a]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
        <path d="M2 14C2 7 7 2 14 2" />
        <circle cx="6" cy="6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
      <svg className="pointer-events-none absolute bottom-7 left-7 h-7 w-7 -scale-y-100 text-[#c9ad6a]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
        <path d="M2 14C2 7 7 2 14 2" />
        <circle cx="6" cy="6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
      <svg className="pointer-events-none absolute bottom-7 right-7 h-7 w-7 -scale-100 text-[#c9ad6a]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
        <path d="M2 14C2 7 7 2 14 2" />
        <circle cx="6" cy="6" r="1.1" fill="currentColor" stroke="none" />
      </svg>

      {/* Header — Om crest + memory line */}
      <header className="relative flex flex-col items-center pt-3">
        <div
          className="bg-gradient-to-b from-[#cdb066] to-[#a9842f] bg-clip-text font-display text-[46px] leading-none text-transparent"
          data-pdf-color="#b89642"
        >
          {t('template.common.om', 'ॐ')}
        </div>
        <FadedRule className="mt-4 h-3 w-44" />
        <p className="mt-5 text-[12px] uppercase tracking-[0.5em] text-[#9c8c63]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main — lotus motif, oval photo frame, name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* lotus line motif */}
        <svg width="68" height="38" viewBox="0 0 68 38" fill="none" aria-hidden="true">
          <path d="M34 35C34 20 34 9 34 4c0 5 0 16 0 31Z" stroke="#b89642" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M34 35C28 25 21 18 13 15c4 9 10 15 21 20Z" stroke="#b89642" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M34 35C40 25 47 18 55 15c-4 9-10 15-21 20Z" stroke="#b89642" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M34 35C25 29 15 27 4 28c8 6 18 8 30 7Z" stroke="#c9ad6a" strokeWidth="1" strokeLinejoin="round" />
          <path d="M34 35C43 29 53 27 64 28c-8 6-18 8-30 7Z" stroke="#c9ad6a" strokeWidth="1" strokeLinejoin="round" />
          <circle cx="34" cy="35" r="1.6" fill="#b89642" />
        </svg>

        {/* oval photo placeholder */}
        <div className="relative flex h-48 w-40 items-center justify-center rounded-[50%] border-2 border-[#c9ad6a] bg-gradient-to-b from-white to-[#fbf6e9] shadow-[0_2px_10px_rgba(184,150,66,0.14)]">
          <div className="flex h-[86%] w-[86%] items-center justify-center rounded-[50%] border border-[#e4d6b0]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#b5a987]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-display text-[40px] leading-[1.15] text-[#332e22]">{person}</h1>
          <span className="mt-4 h-px w-12 bg-[#c9ad6a]" />
        </div>
        <p className="max-w-[22rem] text-[14px] italic leading-relaxed text-[#86795c]">
          {t(
            'template.common.tributeLine',
            'Your memory is a treasure we will hold in our hearts forever.',
          )}
        </p>
      </main>

      {/* Footer — date + family */}
      <footer className="relative flex flex-col items-center gap-2 pb-2 text-[#5e5440]">
        <FadedRule className="mb-3 h-3 w-40" />
        <p className="font-display text-xl tracking-wide text-[#332e22]">{date}</p>
        <p className="mt-2 text-[13px] italic text-[#86795c]">— {family}</p>
      </footer>
    </div>
  )
}
