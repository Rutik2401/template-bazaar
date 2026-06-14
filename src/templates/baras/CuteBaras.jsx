'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Adorable nursery motifs ───────────────────────────────────────────── */

/** Fluffy teddy bear. */
function Teddy({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* ears */}
      <circle cx="34" cy="30" r="14" fill="#d9b38c" />
      <circle cx="86" cy="30" r="14" fill="#d9b38c" />
      <circle cx="34" cy="30" r="7" fill="#c89976" />
      <circle cx="86" cy="30" r="7" fill="#c89976" />
      {/* head */}
      <circle cx="60" cy="58" r="34" fill="#e8c59c" />
      {/* muzzle */}
      <ellipse cx="60" cy="68" rx="18" ry="14" fill="#f7e6cf" />
      {/* eyes */}
      <circle cx="48" cy="52" r="4" fill="#5b4636" />
      <circle cx="72" cy="52" r="4" fill="#5b4636" />
      <circle cx="49.4" cy="50.6" r="1.3" fill="#fff" />
      <circle cx="73.4" cy="50.6" r="1.3" fill="#fff" />
      {/* nose + smile */}
      <ellipse cx="60" cy="62" rx="4.5" ry="3.2" fill="#5b4636" />
      <path d="M52 70c4 5 12 5 16 0" stroke="#5b4636" strokeWidth="2" strokeLinecap="round" />
      {/* cheeks */}
      <circle cx="40" cy="64" r="5" fill="#f9b9b0" fillOpacity="0.7" />
      <circle cx="80" cy="64" r="5" fill="#f9b9b0" fillOpacity="0.7" />
    </svg>
  )
}

/** Soft cloud. */
function Cloud({ className = '', fill = '#ffffff' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill={fill}>
      <path d="M30 48c-13 0-22-9-22-19 0-9 7-16 16-17 3-9 11-15 21-15 11 0 20 8 22 19 8 1 15 8 15 16 0 9-8 16-18 16H30Z" />
    </svg>
  )
}

/** Twinkle star. */
function Star({ className = '', fill = '#fcd34d' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill}>
      <path d="M12 2l2.6 6.4L21 9.3l-4.9 4.3L17.6 21 12 17.3 6.4 21l1.5-7.4L3 9.3l6.4-.9L12 2Z" />
    </svg>
  )
}

/**
 * Cute gender-neutral Bārsā — mint, peach & cream with teddy, clouds & stars.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function CuteBaras({ values }) {
  const { t } = useI18n()
  const baby = values.babyName?.trim() || 'Baby Aadya'
  const parents = values.parentName?.trim() || 'Rahul & Sneha'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Our Residence, Nashik'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff7ef] via-[#f2fbf6] to-[#eef9f9] font-party text-[#5b6b62]"
    >
      {/* pastel sky blobs */}
      <div className="absolute -left-16 -top-12 h-64 w-64 rounded-full bg-[#bdebd6]/50 blur-3xl" />
      <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-[#ffd9c2]/50 blur-3xl" />
      <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-[#cfeef7]/50 blur-3xl" />

      {/* dashed nursery frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[2.5rem] border-2 border-dashed border-[#bfe3d2]" />

      {/* floating clouds & stars */}
      <Cloud className="absolute left-8 top-16 h-12 w-24 opacity-90 drop-shadow-sm" />
      <Cloud className="absolute right-10 top-28 h-9 w-20 opacity-80" fill="#eafaf2" />
      <Cloud className="absolute left-12 bottom-40 h-9 w-20 opacity-80" fill="#fff3ea" />
      <Star className="absolute right-16 top-14 h-5 w-5" />
      <Star className="absolute left-24 top-36 h-4 w-4" fill="#a7e3c8" />
      <Star className="absolute right-24 bottom-52 h-5 w-5" fill="#ffc8b0" />
      <Star className="absolute left-16 top-60 h-3.5 w-3.5" fill="#fcd34d" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-14 pb-16 pt-20 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#86c7a8]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Star className="h-3 w-3" fill="#ffc8b0" />
            <span className="h-px w-10 bg-[#cfe9da]" />
            <Star className="h-3.5 w-3.5" fill="#fcd34d" />
            <span className="h-px w-10 bg-[#cfe9da]" />
            <Star className="h-3 w-3" fill="#a7e3c8" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          {/* teddy in a soft halo */}
          <div className="relative flex h-44 w-44 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-white/70 shadow-[0_18px_50px_-22px_rgba(91,107,98,0.45)]" />
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#ffd0bd]" />
            <Teddy className="relative h-32 w-32 drop-shadow-sm" />
          </div>

          <p className="mt-6 text-[15px] italic text-[#f0a98e]">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <h1 className="mt-2 font-display text-[56px] font-semibold leading-tight">
            <span
              data-pdf-color="#5aa583"
              className="bg-gradient-to-r from-[#7ec8a4] via-[#f6a98a] to-[#7cc6dc] bg-clip-text text-transparent"
            >
              {baby}
            </span>
          </h1>
          <p className="mt-3 text-[12px] uppercase tracking-[0.3em] text-[#86c7a8]">
            {t('template.common.proudParents', 'Proud Parents')}
          </p>
          <p className="mt-1 font-display text-2xl text-[#5b6b62]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-3">
          <div className="flex items-center gap-3 rounded-full bg-white/75 px-7 py-3 shadow-sm backdrop-blur-sm">
            <span aria-hidden className="text-lg">🗓️</span>
            <p className="font-display text-xl text-[#5b6b62]">{date}{time && ` · ${time}`}</p>
          </div>
          <p className="max-w-[22rem] text-[15px] leading-snug text-[#7c8b81]">
            <span aria-hidden className="mr-1">📍</span>{venue}
          </p>
        </footer>
      </div>
    </div>
  )
}
