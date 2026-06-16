'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#faf7f1] px-16 py-20 text-center font-serif text-[#3c4450]"
    >
      {/* thin slate rules top & bottom */}
      <div className="pointer-events-none absolute left-14 right-14 top-12 h-px bg-[#b9a978]" />
      <div className="pointer-events-none absolute bottom-12 left-14 right-14 h-px bg-[#b9a978]" />

      {/* Header — Om Shanti crest */}
      <header className="relative flex flex-col items-center">
        <div
          className="font-display text-[30px] leading-none text-[#a98f4f]"
          data-pdf-color="#a98f4f"
        >
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </div>
        <p className="mt-5 text-[11px] uppercase tracking-[0.5em] text-[#8c8270]">
          {t('template.common.prayerMeetingInvite', 'You are invited to a prayer meeting in remembrance of')}
        </p>
        <span className="mt-5 h-px w-16 bg-[#cdbf95]" />
      </header>

      {/* Main — portrait frame + name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* portrait photo placeholder */}
        <div className="flex h-48 w-40 items-center justify-center rounded-md border border-[#b9a978] bg-white shadow-[0_1px_0_#e2d8bd]">
          <div className="flex h-[88%] w-[88%] items-center justify-center rounded-sm border border-[#e2d8bd]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#b3a883]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <h1 className="font-display text-[40px] leading-tight text-[#2a313b]">{person}</h1>
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
        <p className="font-display text-xl text-[#2a313b]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px]">{venue}</p>
        <span className="mt-3 h-px w-16 bg-[#dcd2b8]" />
        <p className="mt-3 text-[13px] italic text-[#7a8392]">— {family}</p>
      </footer>
    </div>
  )
}
