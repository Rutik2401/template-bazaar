'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Floral, sweet motifs ──────────────────────────────────────────────── */

/** Five-petal blossom with a soft layered centre. */
function Bloom({ className = '', petal = '#f9a8c4', center = '#fcd34d' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="16"
          rx="9"
          ry="14"
          fill={petal}
          transform={`rotate(${i * 72} 32 32)`}
        />
      ))}
      {/* inner petal sheen */}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`s${i}`}
          cx="32"
          cy="20"
          rx="3.5"
          ry="7"
          fill="#ffffff"
          fillOpacity="0.35"
          transform={`rotate(${i * 72} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="8" fill={center} />
      <circle cx="32" cy="32" r="4" fill="#fff" fillOpacity="0.6" />
    </svg>
  )
}

/** Leafy floral vine for the corners. */
function FloralVine({ className = '' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" stroke="#d98aa8" strokeWidth="2" strokeLinecap="round">
      <path d="M8 152C8 96 36 44 96 16" />
      <path d="M8 152C8 110 24 72 60 44" opacity="0.4" strokeWidth="1.4" />
      {[
        [28, 120], [50, 86], [78, 52], [104, 26],
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y}c-14 -6 -22 -18 -22 -30`} fill="#f6c3d4" fillOpacity="0.55" stroke="#e79ab6" strokeWidth="1.5" />
          <path d={`M${x} ${y}c14 -6 22 -18 22 -30`} fill="#fcdfe9" fillOpacity="0.55" stroke="#e79ab6" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="2" fill="#f472b6" stroke="none" />
        </g>
      ))}
    </svg>
  )
}

/** Tiny heart. */
function Heart({ className = '', fill = '#f472b6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill}>
      <path d="M12 21s-7-4.6-9.3-9C1 8.6 2.7 5 6.2 5 8.4 5 10 6.5 12 8.7 14 6.5 15.6 5 17.8 5 21.3 5 23 8.6 21.3 12 19 16.4 12 21 12 21Z" />
    </svg>
  )
}

/** Sleeping cradle ringed with petals — a tender girl-themed motif. */
function CradleBloom({ className = '' }) {
  return (
    <svg viewBox="0 0 150 120" className={className} fill="none">
      {/* halo */}
      <circle cx="75" cy="60" r="52" fill="#fff" fillOpacity="0.6" />
      {/* arched canopy */}
      <path d="M22 96C22 50 48 30 75 30s53 20 53 66" stroke="#e79ab6" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* hanging cradle */}
      <path d="M40 72h70c-1 22-15 36-35 36s-34-14-35-36Z" fill="#fbc4d8" fillOpacity="0.7" stroke="#e79ab6" strokeWidth="2" />
      <path d="M40 72h70" stroke="#e79ab6" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 88c6 6 14 9 23 9s17-3 23-9" stroke="#db2777" strokeWidth="1.6" strokeOpacity="0.4" strokeLinecap="round" />
      {/* chains */}
      <path d="M50 56v16M100 56v16" stroke="#e79ab6" strokeWidth="2" strokeLinecap="round" />
      {/* finial bloom */}
      <circle cx="75" cy="30" r="6" fill="#f472b6" />
      <circle cx="75" cy="30" r="2.5" fill="#fff" fillOpacity="0.7" />
    </svg>
  )
}

/**
 * Sweet baby-girl Bārsā — soft pinks, blush florals & "It's a Girl".
 * Natural design size: 640 × 900 (portrait card).
 */
export default function GirlBaras({ values }) {
  const { t } = useI18n()
  const baby = values.babyName?.trim() || 'Baby Aadya'
  const parents = values.parentName?.trim() || 'Rahul & Sneha'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Our Residence, Nashik'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff3f8] via-[#ffe6f0] to-[#ffeef4] font-serif text-[#9d4f6e]"
    >
      {/* blush glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#fcc0d8]/45 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#f9a8c4]/40 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />

      {/* floral corner vines */}
      <FloralVine className="absolute left-0 top-0 h-44 w-44" />
      <FloralVine className="absolute right-0 top-0 h-44 w-44 [transform:scaleX(-1)]" />
      <FloralVine className="absolute left-0 bottom-0 h-44 w-44 [transform:scaleY(-1)]" />
      <FloralVine className="absolute right-0 bottom-0 h-44 w-44 [transform:scale(-1,-1)]" />

      {/* scattered blooms */}
      <Bloom className="absolute left-16 top-24 h-9 w-9 drop-shadow-sm" />
      <Bloom className="absolute right-16 top-40 h-7 w-7" petal="#fbc4d8" center="#f9a8c4" />
      <Bloom className="absolute left-20 bottom-44 h-7 w-7" petal="#f7b8cf" />
      <Heart className="absolute right-24 top-24 h-4 w-4" fill="#f9a8c4" />
      <Heart className="absolute left-28 bottom-60 h-3.5 w-3.5" fill="#fbc4d8" />

      {/* delicate inner frame */}
      <div className="pointer-events-none absolute inset-7 rounded-[2rem] border border-[#f3a9c5]/70" />
      <div className="pointer-events-none absolute inset-[34px] rounded-[1.6rem] border border-dashed border-[#f9c4da]/80" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-20 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#d77ba1]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          {/* It's a Girl ribbon */}
          <div className="relative mt-5 rounded-full bg-gradient-to-r from-[#f9a8c4] to-[#f472b6] px-8 py-2 shadow-[0_14px_34px_-14px_rgba(244,114,182,0.85)]">
            <span className="pointer-events-none absolute inset-x-3 top-1 h-1/3 rounded-full bg-white/30" />
            <p className="relative font-display text-lg font-semibold tracking-wide text-white">
              {t('template.common.itsAGirl', "It's a Girl")}
            </p>
          </div>
        </header>

        <main className="flex flex-col items-center">
          {/* tender cradle-bloom emblem */}
          <CradleBloom className="h-28 w-36 drop-shadow-sm" />
          <p className="mt-3 text-[15px] italic text-[#d77ba1]">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <h1 className="mt-2 font-display text-[60px] font-semibold leading-tight">
            <span
              data-pdf-color="#e85a96"
              className="bg-gradient-to-br from-[#f9a8c4] via-[#f472b6] to-[#db2777] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            >
              {baby}
            </span>
          </h1>
          <div className="mt-4 flex items-center gap-2.5 text-[#e07ba0]">
            <span className="h-px w-8 bg-[#f3a9c5]" />
            <Heart className="h-3 w-3" fill="#f472b6" />
            <span className="text-[11px] uppercase tracking-[0.32em]">
              {t('template.common.proudParents', 'Proud Parents')}
            </span>
            <Heart className="h-3 w-3" fill="#f472b6" />
            <span className="h-px w-8 bg-[#f3a9c5]" />
          </div>
          <p className="mt-2 font-display text-2xl text-[#9d4f6e]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-3">
          <div className="rounded-2xl border border-[#f3a9c5]/70 bg-white/75 px-10 py-3 shadow-[0_12px_28px_-18px_rgba(219,39,119,0.5)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#d77ba1]">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-[#b04576]">{date}{time && ` · ${time}`}</p>
          </div>
          <p className="max-w-[22rem] text-[16px] leading-snug text-[#9d4f6e]">{venue}</p>
        </footer>
      </div>
    </div>
  )
}
