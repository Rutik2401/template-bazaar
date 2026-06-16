'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Pastel engagement card — soft Scandinavian-luxe restraint.
 * A calm, airy composition of gentle multi-pastel organic blobs (lavender,
 * mint, peach, sky) drifting behind an abundance of negative space. A minimal
 * "engaged" mark, a clean display name, a thin date line and venue.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function PastelEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fbfaf8] font-sans text-[#3a3740]"
    >
      {/* soft pastel gradient mesh — organic rounded colour blocks */}
      <div className="pointer-events-none absolute inset-0">
        {/* lavender — top left */}
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#e6e0f5] blur-[90px]" />
        {/* sky — top right */}
        <div className="absolute -right-20 top-10 h-[360px] w-[360px] rounded-full bg-[#dbecf4] blur-[88px]" />
        {/* peach — bottom right */}
        <div className="absolute -bottom-28 -right-16 h-[440px] w-[440px] rounded-full bg-[#f7e3da] blur-[96px]" />
        {/* mint — bottom left */}
        <div className="absolute -bottom-20 -left-24 h-[400px] w-[400px] rounded-full bg-[#dcefe4] blur-[92px]" />
        {/* faint warm centre lift to keep middle calm and bright */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,_rgba(255,255,255,0.72),_transparent_60%)]" />
      </div>

      {/* hairline pastel border for quiet structure */}
      <div className="pointer-events-none absolute inset-7 rounded-[28px] border border-white/70" />
      <div className="pointer-events-none absolute inset-7 rounded-[28px] border border-[#e7e1d8]/60" />

      <div className="relative flex h-full flex-col items-center px-20 py-[88px] text-center">
        {/* ── Minimal engaged mark ── */}
        <header className="flex flex-col items-center">
          {/* two interlinked thin rings — restrained, pastel */}
          <svg viewBox="0 0 64 40" className="h-9 w-14" fill="none" strokeWidth="1.4">
            <circle cx="24" cy="22" r="13" stroke="#c9a9c4" />
            <circle cx="40" cy="22" r="13" stroke="#a9c4c9" />
            {/* tiny solitaire glint above the overlap */}
            <path d="M32 3l2.2 4-2.2 4-2.2-4L32 3Z" fill="#d8b9a6" stroke="none" />
          </svg>
          <p className="mt-7 font-sans text-[11px] font-medium uppercase tracking-[0.52em] text-[#9a93a8]">
            {t('template.common.engaged', 'Engaged')}
          </p>
        </header>

        {/* ── Names — centred, generous air ── */}
        <main className="flex flex-1 flex-col items-center justify-center">
          <p className="mb-9 max-w-[15rem] font-sans text-[12.5px] leading-relaxed tracking-[0.06em] text-[#8f8a9c]">
            {t('template.common.engagementOf', 'celebrating the engagement of')}
          </p>

          <h1
            className="bg-gradient-to-r from-[#b693c4] via-[#9bb6c9] to-[#d9a98f] bg-clip-text font-display text-[58px] font-normal leading-[1.02] tracking-tight text-transparent"
            data-pdf-color="#a89bc4"
          >
            {couple}
          </h1>

          {/* thin pastel underline accent */}
          <div className="mt-9 flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#cdbfd6]" />
            <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-[#cbb1bf]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b9cdcb]" />
          </div>
        </main>

        {/* ── Date + venue — thin, quiet ── */}
        <footer className="flex flex-col items-center gap-5">
          <p className="font-serif text-[20px] font-normal leading-snug tracking-wide text-[#56525f]">
            {date}
          </p>
          <span className="h-px w-10 bg-[#ded7e3]" />
          <p className="max-w-[16rem] font-sans text-[12px] font-medium uppercase leading-relaxed tracking-[0.32em] text-[#9a93a8]">
            {venue}
          </p>
        </footer>
      </div>
    </div>
  )
}
