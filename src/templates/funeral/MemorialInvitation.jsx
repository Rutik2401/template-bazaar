'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* A thin gold rule that tapers to nothing, with a small lotus-bud centrepiece. */
function GoldRule({ className = '' }) {
  return (
    <svg viewBox="0 0 240 16" className={className} fill="none" aria-hidden="true">
      <path d="M16 8h86" stroke="#c4a86a" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M138 8h86" stroke="#c4a86a" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M120 2c2.6 3 4 4.6 4 6s-1.4 3-4 6c-2.6-3-4-4.6-4-6s1.4-3 4-6Z" fill="#c4a86a" />
      <circle cx="106" cy="8" r="1.6" fill="#c4a86a" />
      <circle cx="134" cy="8" r="1.6" fill="#c4a86a" />
    </svg>
  )
}

/* A pair of lotus sprigs flanking the Om — drawn in fine gold lines. */
function LotusSprigs({ className = '' }) {
  return (
    <svg viewBox="0 0 200 36" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
      {/* left sprig */}
      <path d="M88 18h-30" />
      <path d="M58 18c-6-4-10-4-16-2 4 4 9 5 16 2Z" />
      <path d="M58 18c-6 4-10 4-16 2 4-4 9-5 16-2Z" opacity="0.7" />
      <circle cx="88" cy="18" r="1.6" fill="currentColor" stroke="none" />
      {/* right sprig */}
      <path d="M112 18h30" />
      <path d="M142 18c6-4 10-4 16-2-4 4-9 5-16 2Z" />
      <path d="M142 18c6 4 10 4 16 2-4-4-9-5-16-2Z" opacity="0.7" />
      <circle cx="112" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Memorial Invitation — an elegant memorial card on warm white, thin gold rules,
 * a large Om and lotus sprigs. The most refined of the set.
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-white via-[#fdfcf9] to-[#f7f3ea] px-16 py-24 text-center font-serif text-[#454545]"
    >
      {/* warm light from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_16%,_rgba(196,168,106,0.07),_transparent_55%)]" />

      {/* thin gold rules top and bottom */}
      <div className="pointer-events-none absolute left-16 right-16 top-12 h-px bg-gradient-to-r from-transparent via-[#c4a86a] to-transparent" />
      <div className="pointer-events-none absolute bottom-12 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#c4a86a] to-transparent" />

      {/* Header — large Om motif with lotus sprigs */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[54px] leading-none text-[#c4a86a]" data-pdf-color="#c4a86a">
          {t('template.common.om', 'ॐ')}
        </div>
        <LotusSprigs className="mt-3 h-5 w-52 text-[#c4a86a]" />
        <p className="mt-5 text-[12px] uppercase tracking-[0.5em] text-[#9b9b9b]">
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </p>
      </header>

      {/* Main — memory line, name, homage line */}
      <main className="relative flex flex-col items-center">
        <p className="text-[13px] uppercase tracking-[0.4em] text-[#a8a8a8]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
        <GoldRule className="my-6 h-4 w-52 text-[#c4a86a]" />
        <h1 className="font-display text-[48px] leading-tight text-[#222222]">{person}</h1>
        <p className="mt-6 max-w-[24rem] text-[14px] italic leading-relaxed text-[#7c7c7c]">
          {t('template.common.sadDemise', 'We deeply mourn the sad demise of')}
        </p>
      </main>

      {/* Footer — memorial details */}
      <footer className="relative flex flex-col items-center gap-2 text-[#565656]">
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#a8a8a8]">
          {t('template.funeral.memorialService', 'Memorial Service')}
        </p>
        <p className="font-display text-xl text-[#222222]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px] leading-snug">{venue}</p>
        <span className="mt-3 h-px w-14 bg-gradient-to-r from-transparent via-[#d8c89c] to-transparent" />
        <p className="mt-3 text-[13px] italic text-[#7c7c7c]">— {family}</p>
      </footer>
    </div>
  )
}
