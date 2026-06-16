'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ganesha & festive motifs ──────────────────────────────────────────── */

function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 160 150" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* crown / mukut */}
      <path d="M80 8c-6 0-9 4-9 9 0 4 3 7 6 8-10 2-17 9-17 18h40c0-9-7-16-17-18 3-1 6-4 6-8 0-5-3-9-9-9Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="10" r="3" fill="currentColor" stroke="none" />
      {/* head */}
      <path d="M44 60c0-16 16-28 36-28s36 12 36 28c0 10-6 19-15 24" fill="currentColor" fillOpacity="0.12" />
      {/* big ears */}
      <path d="M44 56c-12-4-22 2-22 14s10 20 22 16" fill="currentColor" fillOpacity="0.16" />
      <path d="M116 56c12-4 22 2 22 14s-10 20-22 16" fill="currentColor" fillOpacity="0.16" />
      {/* tilak eyes */}
      <path d="M80 44v14" />
      <circle cx="66" cy="60" r="3" fill="currentColor" stroke="none" />
      <circle cx="94" cy="60" r="3" fill="currentColor" stroke="none" />
      {/* curved trunk */}
      <path d="M80 64c0 14-2 26-14 34-9 6-9 18 2 22 8 3 16-2 16-12" fill="currentColor" fillOpacity="0.14" />
      {/* tusks + laddoo */}
      <path d="M68 86c-4 4-6 9-5 14M92 86c4 4 6 9 5 14" opacity="0.7" />
      <circle cx="108" cy="104" r="9" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

function MarigoldString({ className = '' }) {
  return (
    <svg viewBox="0 0 640 40" preserveAspectRatio="none" className={className} fill="none">
      <path d="M0 8q320 28 640 0" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      {Array.from({ length: 17 }).map((_, i) => {
        const x = 20 + i * 37.5
        const dip = Math.sin((i / 16) * Math.PI) * 14
        return (
          <g key={i}>
            <circle cx={x} cy={10 + dip} r="6" fill="currentColor" fillOpacity="0.5" />
            <circle cx={x} cy={10 + dip} r="2.4" fill="currentColor" />
          </g>
        )
      })}
    </svg>
  )
}

/** A pleated modak (sweet dumpling), Bappa's favourite offering. */
function Modak({ className = '' }) {
  return (
    <svg viewBox="0 0 70 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M35 6c4 8 4 14 0 18c-4-4-4-10 0-18Z" fill="currentColor" fillOpacity="0.45" />
      <path d="M35 24c16 0 26 22 26 38c0 6-4 10-10 10H19c-6 0-10-4-10-10c0-16 10-38 26-38Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M35 24l-9 48M35 24l9 48M35 24v48M22 30l-7 40M48 30l7 40" opacity="0.6" />
    </svg>
  )
}

/** A radiant sunburst rosette for the canopy crest. */
function Rosette({ className = '' }) {
  const rays = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {rays.map((_, i) => (
        <line
          key={i}
          x1="40"
          y1="40"
          x2="40"
          y2="6"
          opacity={i % 2 === 0 ? 0.6 : 0.3}
          transform={`rotate(${(360 / rays.length) * i} 40 40)`}
        />
      ))}
      <circle cx="40" cy="40" r="9" fill="currentColor" fillOpacity="0.35" stroke="none" />
      <circle cx="40" cy="40" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Ganpati Invitation — festive saffron & red with a Ganesha mandap.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function GanpatiInvitation({ values }) {
  const { t } = useI18n()
  const event = values.eventName?.trim() || 'Ganesh Chaturthi'
  const family = values.familyName?.trim() || 'The Kulkarni Family'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Ganesh Mandap, Laxmi Road, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fff5dc] via-[#ffd699] to-[#ff9347] px-16 py-14 text-center font-serif text-[#7a1410]"
    >
      {/* warm vignette */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,transparent_48%,rgba(185,28,28,0.16))]" />

      {/* festive sunburst glow behind Ganesha */}
      <div className="pointer-events-none absolute left-1/2 top-[160px] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,77,0.7)_0%,rgba(249,115,22,0)_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[160px] h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5),transparent_66%)]" />

      {/* festive double border */}
      <div className="pointer-events-none absolute inset-4 rounded-[4px] border-2 border-[#b91c1c]/65" />
      <div className="pointer-events-none absolute inset-6 rounded-[2px] border border-[#ea580c]/65" />
      <div className="pointer-events-none absolute inset-6 rounded-[2px] [box-shadow:inset_0_0_24px_rgba(234,88,12,0.16)]" />

      {/* canopy crest + marigold garlands swagged across the top */}
      <Rosette className="absolute left-1/2 top-[24px] h-10 w-10 -translate-x-1/2 text-[#b91c1c]/75" />
      <MarigoldString className="absolute inset-x-6 top-[42px] h-9 text-[#ea580c]" />

      <header className="relative flex flex-col items-center pt-3">
        <span className="font-display text-4xl leading-none text-[#ea580c] [text-shadow:0_2px_10px_rgba(234,88,12,0.3)]">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-2 font-display text-[24px] tracking-wide text-[#b91c1c]">
          {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
        </p>
        <p className="mt-1 font-display text-[15px] tracking-[0.08em] text-[#c2410c]">॥ वक्रतुण्ड महाकाय ॥</p>
      </header>

      <Ganesha className="relative h-40 w-44 text-[#c2410c]" />

      <main className="relative flex flex-col items-center gap-3">
        <p className="text-[12px] uppercase tracking-[0.36em] text-[#9a3412]/85">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
        <h1 className="font-display text-[50px] font-semibold leading-[1.04]">
          <span
            data-pdf-color="#b91c1c"
            className="bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] bg-clip-text text-transparent [text-shadow:0_1px_0_rgba(255,255,255,0.25)]"
          >
            {event}
          </span>
        </h1>
        <div className="flex items-center gap-3 text-[#c2410c]">
          <Modak className="h-8 w-7" />
          <span className="h-px w-12 bg-[#b91c1c]/40" />
          <span className="text-[12px]">✦</span>
          <span className="h-px w-12 bg-[#b91c1c]/40" />
          <Modak className="h-8 w-7" />
        </div>
        <p className="text-[15px] italic text-[#9a3412]/90">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl tracking-wide text-[#b91c1c]">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-2">
        <div className="rounded-md border border-[#b91c1c]/55 bg-white/45 px-8 py-3 shadow-[0_4px_18px_rgba(185,28,28,0.16)]">
          <p className="font-display text-2xl text-[#7a1410]">{date}{time && ` · ${time}`}</p>
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug">{venue}</p>
        <p className="mt-2 text-[12px] uppercase tracking-[0.3em] text-[#b91c1c]">
          {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
        </p>
      </footer>
    </div>
  )
}
