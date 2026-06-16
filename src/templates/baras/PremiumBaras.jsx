'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Refined gold flourishes ───────────────────────────────────────────── */

/** Symmetrical gold flourish divider. */
function Flourish({ className = '' }) {
  return (
    <svg viewBox="0 0 220 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M110 6c0 6-5 10-12 10 7 0 12 4 12 10 0-6 5-10 12-10-7 0-12-4-12-10Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <path d="M98 16C78 16 70 6 44 16 70 26 78 16 98 16Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M122 16c20 0 28-10 54 0-26 10-34 0-54 0Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M44 16c-8 0-14-3-20-7M176 16c8 0 14-3 20-7" opacity="0.5" />
      <circle cx="40" cy="16" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="180" cy="16" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="196" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Ornamental corner. */
function CornerOrnament({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 10h36M10 10v36" />
      <path d="M10 10c32 2 54 24 56 56" opacity="0.7" />
      <path d="M22 22c18 1 30 13 31 31" opacity="0.5" />
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
      <path d="M46 12c-4 6-2 12 4 14M12 46c6-4 12-2 14 4" opacity="0.8" />
      {/* petal bud at the corner */}
      <path d="M30 30c4-2 7-1 9 3-4 2-7 1-9-3Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  )
}

/** Delicate baby-feet emblem. */
function BabyFeet({ className = '' }) {
  return (
    <svg viewBox="0 0 80 48" className={className} fill="currentColor">
      <ellipse cx="22" cy="22" rx="10" ry="13" />
      <circle cx="11" cy="9" r="2.4" /><circle cx="16" cy="6" r="2.6" /><circle cx="21" cy="5" r="2.6" /><circle cx="26" cy="7" r="2.2" />
      <ellipse cx="58" cy="22" rx="10" ry="13" />
      <circle cx="69" cy="9" r="2.4" /><circle cx="64" cy="6" r="2.6" /><circle cx="59" cy="5" r="2.6" /><circle cx="54" cy="7" r="2.2" />
    </svg>
  )
}

/** Refined hanging cradle (jhula) emblem in fine gold line. */
function CradleEmblem({ className = '' }) {
  return (
    <svg viewBox="0 0 160 130" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* arched stand */}
      <path d="M14 124C14 56 60 28 80 28s66 28 66 96" opacity="0.55" />
      {/* hanging chains */}
      <path d="M52 54v18M108 54v18" opacity="0.8" />
      {/* cradle */}
      <path d="M44 72h72c-1 24-16 40-36 40S45 96 44 72Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M44 72h72" />
      <path d="M56 90c6 6 14 9 24 9s18-3 24-9" opacity="0.5" />
      {/* finial */}
      <circle cx="80" cy="22" r="3.4" fill="currentColor" stroke="none" />
      <path d="M80 25v6" opacity="0.7" />
      <circle cx="52" cy="54" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="108" cy="54" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Premium naming ceremony — elegant cream & gold with refined typography.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function PremiumBaras({ values }) {
  const { t } = useI18n()
  const baby = values.babyName?.trim() || 'Baby Aadya'
  const parents = values.parentName?.trim() || 'Rahul & Sneha'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Our Residence, Nashik'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f7f1e3] font-serif text-[#7a5606]"
    >
      {/* warm ivory gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,#fdf9f0_0%,#f4ecdb_55%,#e9dcc0_100%)]" />
      {/* soft golden sheen sweeping across */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_36%,rgba(212,164,55,0.12)_50%,transparent_64%)]" />

      {/* fine triple gold frame */}
      <div className="absolute inset-6 rounded-sm border border-[#b8860b]/60" />
      <div className="absolute inset-[30px] rounded-sm border border-[#d4a437]/45" />
      <div className="absolute inset-[36px] rounded-[2px] border border-[#d4a437]/20" />

      {/* ornate corners */}
      <CornerOrnament className="absolute left-7 top-7 h-16 w-16 text-[#b8860b]/75" />
      <CornerOrnament className="absolute right-7 top-7 h-16 w-16 text-[#b8860b]/75 [transform:scaleX(-1)]" />
      <CornerOrnament className="absolute left-7 bottom-7 h-16 w-16 text-[#b8860b]/75 [transform:scaleY(-1)]" />
      <CornerOrnament className="absolute right-7 bottom-7 h-16 w-16 text-[#b8860b]/75 [transform:scale(-1,-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-24 pt-[88px] text-center">
        <header className="flex flex-col items-center">
          <BabyFeet className="h-9 w-14 text-[#b8860b]" />
          <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.55em] text-[#9a6f08]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          <Flourish className="mt-4 h-6 w-52 text-[#c9a227]" />
        </header>

        <main className="flex flex-col items-center">
          {/* refined cradle emblem in a halo */}
          <div className="relative flex h-32 w-44 items-center justify-center">
            <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle,rgba(212,164,55,0.18)_0%,transparent_70%)]" />
            <CradleEmblem className="relative h-28 w-40 text-[#b8860b]" />
          </div>
          <p className="mt-4 text-[14px] italic tracking-wide text-[#9a6f08]/90">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.5em] text-[#b8860b]/80">
            {t('template.common.proudParents', 'Proud Parents')}
          </p>
          <h1 className="mt-3 font-display text-[62px] font-semibold leading-[1.02]">
            <span
              data-pdf-color="#a07408"
              className="bg-gradient-to-b from-[#e2bd66] via-[#b8860b] to-[#6f4e05] bg-clip-text text-transparent"
            >
              {baby}
            </span>
          </h1>
          <Flourish className="mt-5 h-6 w-44 text-[#c9a227] [transform:rotate(180deg)]" />
          <p className="mt-4 font-display text-[26px] tracking-wide text-[#5a4205]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex items-stretch gap-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#b8860b]">{t('template.common.date', 'Date')}</p>
              <p className="mt-1 font-display text-xl text-[#5a4205]">{date}</p>
            </div>
            {time && (
              <>
                <span className="w-px self-stretch bg-gradient-to-b from-transparent via-[#b8860b]/55 to-transparent" />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#b8860b]">{t('template.common.time', 'Time')}</p>
                  <p className="mt-1 font-display text-xl text-[#5a4205]">{time}</p>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b8860b]/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#c9a227]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b8860b]/70" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#b8860b]">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-[#5a4205]">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
