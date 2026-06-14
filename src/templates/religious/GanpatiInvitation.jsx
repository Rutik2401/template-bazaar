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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fff3d6] via-[#ffd699] to-[#ff9d57] px-16 py-14 text-center font-serif text-[#7a1410]"
    >
      {/* festive sunburst glow behind Ganesha */}
      <div className="pointer-events-none absolute left-1/2 top-[150px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.5)_0%,rgba(249,115,22,0)_62%)]" />

      {/* festive double border */}
      <div className="pointer-events-none absolute inset-4 rounded-[4px] border-2 border-[#b91c1c]/60" />
      <div className="pointer-events-none absolute inset-6 rounded-[2px] border border-[#ea580c]/60" />

      {/* marigold garlands swagged across the top */}
      <MarigoldString className="absolute inset-x-6 top-7 h-9 text-[#ea580c]" />

      <header className="relative flex flex-col items-center pt-2">
        <span className="font-display text-4xl leading-none text-[#ea580c]">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-2 font-display text-[24px] tracking-wide text-[#b91c1c]">
          {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
        </p>
      </header>

      <Ganesha className="relative h-40 w-44 text-[#c2410c]" />

      <main className="relative flex flex-col items-center gap-3">
        <p className="text-[12px] uppercase tracking-[0.36em] text-[#9a3412]/85">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
        <h1 className="font-display text-[50px] font-semibold leading-[1.04]">
          <span
            data-pdf-color="#b91c1c"
            className="bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] bg-clip-text text-transparent"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-[#9a3412]/90">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl text-[#b91c1c]">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-2">
        <div className="rounded-md border border-[#b91c1c]/50 bg-white/35 px-8 py-3">
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
