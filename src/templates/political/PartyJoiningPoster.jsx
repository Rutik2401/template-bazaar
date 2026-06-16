'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Party-joining motifs ───────────────────────────────────────────────── */

/** Two clasped hands — a welcome handshake. */
function Handshake({ className = '' }) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20l10-8 8 6" />
      <path d="M62 20l-10-8-8 6" />
      <path d="M20 18l8 7c2 2 5 2 7 0M44 18l-9 8" />
      <path d="M28 25l4 4c2 2 5 2 7 0l5-5" fill="currentColor" fillOpacity="0.18" />
      <path d="M2 20v14M62 20v14" />
    </svg>
  )
}

/** A waving flag on a pole. */
function Flag({ className = '' }) {
  return (
    <svg viewBox="0 0 48 56" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v48" />
      <path d="M12 8c8-4 16 4 24 0v18c-8 4-16-4-24 0V8Z" fill="currentColor" fillOpacity="0.25" />
    </svg>
  )
}

/**
 * Party Joining Poster — festive welcome flex banner. Deep India-green field
 * with a saffron spotlight, a handshake + flag motif, a dashed photo circle and
 * a bilingual "पक्ष प्रवेश / Welcome" theme. Natural design size: 720 × 960.
 */
export default function PartyJoiningPoster({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Shri Rajesh Patil'
  const partyName = values.partyName?.trim() || 'Jan Vikas Party'
  const designation = values.designation?.trim() || 'District President'
  const date = values.date?.trim() || '2026-06-20'

  const confetti = Array.from({ length: 22 })

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#052e16] font-display text-amber-50"
    >
      {/* green field with a saffron spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-800 via-green-900 to-[#031c0d]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_28%,rgba(249,115,22,0.55),transparent_55%)]" />

      {/* confetti dots */}
      {confetti.map((_, i) => {
        const left = (i * 37) % 100
        const top = (i * 53) % 60
        const palette = ['bg-orange-400', 'bg-amber-200', 'bg-white', 'bg-green-300']
        return (
          <span
            key={i}
            className={`pointer-events-none absolute h-2.5 w-2.5 rotate-45 opacity-80 ${palette[i % 4]}`}
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        )
      })}

      {/* gold double frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[14px] border-[3px] border-gold-300/70" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[10px] border border-amber-100/25" />

      <div className="relative flex h-full flex-col items-center px-12 pb-12 pt-16 text-center">
        {/* flags + welcome */}
        <div className="flex items-center gap-4 text-orange-300">
          <Flag className="h-12 w-10 -scale-x-100" />
          <span className="text-sm font-bold uppercase tracking-[0.45em] text-amber-100">Welcome</span>
          <Flag className="h-12 w-10" />
        </div>

        <h1 className="mt-4 font-display text-[52px] font-black leading-none">
          <span
            data-pdf-color="#fdba74"
            className="bg-gradient-to-b from-amber-100 via-orange-200 to-orange-400 bg-clip-text text-transparent"
          >
            पक्ष प्रवेश
          </span>
        </h1>
        <p className="mt-1 text-[18px] font-semibold tracking-[0.2em] text-amber-100/90">
          सहर्ष स्वागत आहे
        </p>

        {/* photo circle */}
        <div className="relative mt-7">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-orange-400 via-amber-200 to-green-400 opacity-85 blur-[2px]" />
          <div className="relative grid h-[200px] w-[200px] place-items-center rounded-full border-[6px] border-dashed border-amber-100/80 bg-[#052e16]/50 text-center">
            <div className="flex flex-col items-center text-amber-100/90">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
            </div>
          </div>
        </div>

        {/* name + designation */}
        <h2 className="mt-6 font-display text-[40px] font-black leading-none text-amber-50 drop-shadow-[0_2px_0_rgba(3,28,13,0.6)]">
          {personName}
        </h2>
        <p className="mt-2 text-[17px] font-semibold uppercase tracking-[0.25em] text-orange-300">
          {designation}
        </p>

        {/* handshake + date */}
        <div className="mt-6 flex flex-col items-center">
          <Handshake className="h-12 w-16 text-gold-200" />
          <p className="mt-2 text-base text-amber-100/90">दिनांक — {formatDate(date, date)}</p>
        </div>

        {/* party banner */}
        <div className="mt-auto w-full">
          <div className="mx-auto w-fit rounded-md bg-gradient-to-r from-orange-400 via-amber-200 to-green-400 p-[3px] shadow-[0_6px_0_rgba(3,28,13,0.55)]">
            <div className="rounded-[5px] bg-[#052e16] px-9 py-3">
              <span className="text-[24px] font-black uppercase tracking-wide text-amber-50">
                {partyName}
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-amber-100/80">
            सहर्ष स्वागत — समस्त पदाधिकारी व कार्यकर्ते
          </p>
        </div>
      </div>
    </div>
  )
}
