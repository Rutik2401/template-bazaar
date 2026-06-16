'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* A pair of fine lotus sprigs flanking a centre point — drawn in gold lines. */
function LotusSprigs({ className = '' }) {
  return (
    <svg viewBox="0 0 200 30" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
      {/* left sprig */}
      <path d="M92 15h-32" />
      <path d="M60 15c-7-4-11-4-17-2 4 4 10 5 17 2Z" />
      <path d="M60 15c-7 4-11 4-17 2 4-4 10-5 17-2Z" opacity="0.65" />
      <circle cx="92" cy="15" r="1.6" fill="currentColor" stroke="none" />
      {/* centre bud */}
      <path d="M100 7c2 3 3 4.4 3 5.5s-1 2.5-3 5.5c-2-3-3-4.4-3-5.5s1-2.5 3-5.5Z" fill="currentColor" stroke="none" />
      {/* right sprig */}
      <path d="M108 15h32" />
      <path d="M140 15c7-4 11-4 17-2-4 4-10 5-17 2Z" />
      <path d="M140 15c7 4 11 4 17 2-4-4-10-5-17-2Z" opacity="0.65" />
      <circle cx="108" cy="15" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Memorial Invitation Card — a dignified prayer-meeting / remembrance gathering
 * invitation in deep slate on ivory. "ॐ शान्ति" crest, a portrait frame and a
 * clear date · venue line for the gathering. Natural size 640 × 900.
 */
export default function MemorialInvitationCard({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Late Shri Madhav Rao'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Rao Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fdfaf3] via-[#faf7f1] to-[#f3ecdc] px-16 py-20 text-center font-serif text-[#3c4450]"
    >
      {/* warm halo of light from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,_rgba(169,143,79,0.09),_transparent_58%)]" />

      {/* thin gold rules top & bottom, fading at the ends */}
      <div className="pointer-events-none absolute left-14 right-14 top-12 h-px bg-gradient-to-r from-transparent via-[#b9a978] to-transparent" />
      <div className="pointer-events-none absolute bottom-12 left-14 right-14 h-px bg-gradient-to-r from-transparent via-[#b9a978] to-transparent" />

      {/* Header — Om Shanti crest */}
      <header className="relative flex flex-col items-center pt-2">
        <div
          className="bg-gradient-to-b from-[#bfa05c] to-[#9a7c3e] bg-clip-text font-display text-[32px] leading-none text-transparent"
          data-pdf-color="#a98f4f"
        >
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </div>
        <LotusSprigs className="mt-4 h-4 w-48 text-[#b9a978]" />
        <p className="mt-5 max-w-[20rem] text-[11px] uppercase leading-relaxed tracking-[0.45em] text-[#8c8270]">
          {t('template.common.prayerMeetingInvite', 'You are invited to a prayer meeting in remembrance of')}
        </p>
      </header>

      {/* Main — portrait frame + name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* portrait photo placeholder */}
        <div className="relative flex h-48 w-40 items-center justify-center rounded-md border border-[#b9a978] bg-gradient-to-b from-white to-[#fbf6e9] shadow-[0_2px_10px_rgba(169,143,79,0.14)]">
          {/* inner corner ticks */}
          <span className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-[#cdbf95]" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-[#cdbf95]" />
          <span className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-[#cdbf95]" />
          <span className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-[#cdbf95]" />
          <div className="flex h-[88%] w-[88%] items-center justify-center rounded-sm border border-[#e2d8bd]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#b3a883]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-display text-[40px] leading-[1.15] text-[#2a313b]">{person}</h1>
          <span className="mt-4 h-px w-12 bg-[#b9a978]" />
        </div>
        <p className="max-w-[22rem] text-[14px] italic leading-relaxed text-[#7a8392]">
          {t(
            'template.common.gatheringLine',
            'Family and friends are warmly invited to gather in prayer and fond remembrance.',
          )}
        </p>
      </main>

      {/* Footer — date · time · venue, family */}
      <footer className="relative flex flex-col items-center gap-2 text-[#525b68]">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#9aa0aa]">
          {t('template.common.remembranceGathering', 'Remembrance Gathering')}
        </p>
        <p className="font-display text-xl tracking-wide text-[#2a313b]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px] leading-snug">{venue}</p>
        <span className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#cdbf95] to-transparent" />
        <p className="mt-3 text-[13px] italic text-[#7a8392]">— {family}</p>
      </footer>
    </div>
  )
}
