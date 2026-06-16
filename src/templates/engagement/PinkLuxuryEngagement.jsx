'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Rose-gold botanical sprig (dainty, inline SVG) ─────────────────────── */
function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 140 60" className={className} fill="none" stroke="currentColor">
      <path d="M8 52 C46 50 64 30 84 18 C100 8 118 6 132 8" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
      <path d="M44 40 c-8 -7 -8 -18 -2 -25 c8 5 9 18 2 25Z" fill="currentColor" fillOpacity="0.16" strokeWidth="1" />
      <path d="M66 27 c-6 -8 -3 -18 4 -23 c6 7 4 18 -4 23Z" fill="currentColor" fillOpacity="0.14" strokeWidth="1" />
      <path d="M90 16 c-4 -8 1 -17 9 -20 c4 8 -1 17 -9 20Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1" />
      <circle cx="116" cy="9" r="3.4" fill="currentColor" stroke="none" opacity="0.85" />
      <circle cx="30" cy="48" r="2.4" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  )
}

/* ── Tiny rose-gold rosette ──────────────────────────────────────────────── */
function Rosette({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <defs>
        <radialGradient id="rosette-fill" cx="50%" cy="42%" r="60%">
          <stop offset="0" stopColor="#fbe7ee" />
          <stop offset="0.55" stopColor="#e8a9c2" />
          <stop offset="1" stopColor="#c97a96" />
        </radialGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="11"
          rx="5"
          ry="9"
          fill="url(#rosette-fill)"
          fillOpacity="0.85"
          transform={`rotate(${(i / 8) * 360} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="5" fill="#d9a25c" fillOpacity="0.9" />
      <circle cx="20" cy="20" r="2.2" fill="#fbeed2" />
    </svg>
  )
}

function Shimmer({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1.1 6.2 4.7 9.8 12 12-7.3 2.2-10.9 5.8-12 12-1.1-6.2-4.7-9.8-12-12C7.3 9.8 10.9 6.2 12 0Z" />
    </svg>
  )
}

/**
 * Pink Luxury engagement — blush & rose-pink with rose-gold foil accents,
 * pearlescent sheen and a scalloped clamshell top arch. Boutique-glam.
 * Natural design size: 640 × 900.
 */
export default function PinkLuxuryEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff6fa] via-[#fce0ec] to-[#f6c6da] font-serif text-[#7a4258]"
    >
      {/* pearlescent sheen — diagonal soft highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent" />
      <div className="absolute -left-24 top-1/4 h-[420px] w-[220px] -rotate-12 bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-2xl" />

      {/* blush & rose-gold glows */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f7b7d0]/55 blur-3xl" />
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#ecc18f]/40 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#f4a8c6]/45 blur-3xl" />

      {/* scalloped clamshell top arch (rose-gold foil) */}
      <svg
        viewBox="0 0 640 360"
        className="absolute left-0 top-0 h-[360px] w-[640px]"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pl-foil" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e8b98e" />
            <stop offset="0.4" stopColor="#d98aa6" />
            <stop offset="0.75" stopColor="#caa15c" />
            <stop offset="1" stopColor="#e8b98e" />
          </linearGradient>
          <radialGradient id="pl-clam" cx="50%" cy="0%" r="85%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#fbd2e2" stopOpacity="0.55" />
            <stop offset="1" stopColor="#f3aecb" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {/* fluted clamshell body */}
        <path
          d="M20 8 C170 8 470 8 620 8 C612 150 470 318 320 330 C170 318 28 150 20 8 Z"
          fill="url(#pl-clam)"
        />
        {/* fluted ribs */}
        {Array.from({ length: 11 }).map((_, i) => {
          const x = 70 + i * 50
          return (
            <path
              key={i}
              d={`M320 26 C${x} 90 ${x} 200 ${320 + (320 - x) * -0.0} ${300 - Math.abs(320 - x) * 0.32}`}
              stroke="#d99fb8"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          )
        })}
        {/* scalloped lower edge */}
        <path
          d="M44 150 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0 q22 34 44 0"
          stroke="url(#pl-foil)"
          strokeWidth="2"
          strokeOpacity="0.85"
        />
        {/* arch outline */}
        <path
          d="M20 10 C612 10 612 10 620 10 C612 150 470 318 320 330 C170 318 28 150 20 10 Z"
          stroke="url(#pl-foil)"
          strokeWidth="2.4"
          strokeOpacity="0.9"
        />
      </svg>

      {/* dainty rose-gold sprigs in corners */}
      <Sprig className="absolute left-3 top-[300px] h-16 w-36 text-[#c99268]" />
      <Sprig className="absolute right-3 top-[300px] h-16 w-36 -scale-x-100 text-[#c99268]" />
      <Sprig className="absolute -bottom-1 left-4 h-16 w-36 -scale-y-100 text-[#c99268]" />
      <Sprig className="absolute -bottom-1 right-4 h-16 w-36 -scale-x-100 -scale-y-100 text-[#c99268]" />

      {/* scattered shimmer */}
      <Shimmer className="absolute left-20 top-1/2 h-3.5 w-3.5 text-[#d9a25c]/70" />
      <Shimmer className="absolute right-24 top-[58%] h-3 w-3 text-[#d9a25c]/60" />
      <Shimmer className="absolute right-1/3 bottom-40 h-2.5 w-2.5 text-[#e0879f]/70" />

      {/* glowing center halo */}
      <div className="absolute left-1/2 top-[58%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),rgba(251,210,226,0.25),transparent_70%)]" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-[68px] text-center">
        <header className="flex flex-col items-center gap-4">
          <Rosette className="h-12 w-12 drop-shadow-[0_4px_10px_rgba(201,122,150,0.3)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.62em] text-[#c07d99]">
            {t('template.common.engagementCeremony', 'Engagement Ceremony')}
          </p>
          <div className="flex items-center gap-2.5 text-[#cf9bb6]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#cf9bb6]" />
            <Shimmer className="h-3 w-3 text-[#d9a25c]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#cf9bb6]" />
          </div>
        </header>

        <main className="flex flex-col items-center gap-6">
          <p className="font-script text-[26px] leading-none text-[#b87d96]">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-script text-[68px] font-medium leading-[1.04]">
            <span
              data-pdf-color="#c25f88"
              className="bg-gradient-to-r from-[#e58aa9] via-[#d96f95] to-[#caa15c] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
          <p className="max-w-[20rem] text-[16px] italic leading-relaxed text-[#9c6c81]">
            {t('template.common.requestPleasure', 'request the pleasure of your company')}
          </p>
          <Sprig className="h-9 w-44 text-[#c99268]" />
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-[26px] border border-[#e6b9cd] bg-white/55 px-12 py-6 shadow-[0_14px_36px_-20px_rgba(180,90,130,0.55)] backdrop-blur-sm">
            <p className="font-display text-[26px] tracking-wide text-[#9c4d6e]">
              {date}
              {time && <span className="text-[#caa15c]"> · {time}</span>}
            </p>
            <div className="mx-auto my-2.5 flex items-center justify-center gap-2 text-[#d4a05c]">
              <span className="h-px w-12 bg-[#e6b9cd]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#d4a05c]/80" />
              <span className="h-px w-12 bg-[#e6b9cd]" />
            </div>
            <p className="text-[16px] leading-snug text-[#7a4258]">{venue}</p>
          </div>

          <p className="text-[14px] italic leading-relaxed text-[#bb87a0]">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-script text-[26px] not-italic tracking-wide text-[#9c4d6e]">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
