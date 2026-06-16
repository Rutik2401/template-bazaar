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
      <circle cx="12" cy="4" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Lotus emblem with layered petals. */
function Lotus({ className = '' }) {
  const petals = Array.from({ length: 7 })
  return (
    <svg viewBox="0 0 80 56" className={className} fill="none" strokeLinejoin="round">
      {petals.map((_, i) => {
        const a = -60 + (i - 3) * 20
        return (
          <path
            key={i}
            transform={`rotate(${a} 40 52)`}
            d="M40 52c6-22 0-38 0-40c0 2-6 18 0 40Z"
            fill="currentColor"
            fillOpacity={0.4 + (3 - Math.abs(i - 3)) * 0.16}
          />
        )
      })}
      <path d="M16 52h48" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  )
}

/** Garland toran swag for the top. */
function Toran({ className = '' }) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6c48 40 144 40 192 0" />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 12 + i * 22
        const y = 6 + Math.sin((i / 8) * Math.PI) * 30
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 12} />
            <circle cx={x} cy={y + 18} r="5.5" fill="currentColor" fillOpacity="0.85" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/** Corner flourish for the gold frame. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 30c0-16 12-28 28-28" />
      <path d="M10 30c0-11 9-20 20-20" opacity="0.7" />
      <circle cx="6" cy="6" r="2.4" fill="currentColor" stroke="none" />
      <path d="M2 44c8 0 14-6 14-14" opacity="0.5" />
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
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_28%,rgba(249,115,22,0.6),transparent_55%)]" />
      {/* faint sunburst behind the photo */}
      <div
        className="pointer-events-none absolute left-1/2 top-[420px] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(253,224,71,0.8) 0deg 5deg, transparent 5deg 11deg)',
        }}
      />

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

      {/* gold double frame + corner flourishes */}
      <div className="pointer-events-none absolute inset-5 rounded-[14px] border-[3px] border-gold-300/70" />
      <div className="pointer-events-none absolute inset-[26px] rounded-[10px] border border-amber-100/25" />
      <CornerFlourish className="pointer-events-none absolute left-7 top-7 h-12 w-12 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute right-7 top-7 h-12 w-12 -scale-x-100 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 left-7 h-12 w-12 -scale-y-100 text-gold-200/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-7 right-7 h-12 w-12 -scale-100 text-gold-200/70" />

      {/* marigold toran swag under the frame */}
      <Toran className="pointer-events-none absolute left-1/2 top-[52px] h-14 w-[460px] -translate-x-1/2 text-orange-300/80" />

      <div className="relative flex h-full flex-col items-center px-12 pb-12 pt-[112px] text-center">
        {/* flags + welcome */}
        <div className="flex items-center gap-4 text-orange-300">
          <Flag className="h-12 w-10 -scale-x-100" />
          <span className="text-sm font-bold uppercase tracking-[0.5em] text-amber-100">Welcome</span>
          <Flag className="h-12 w-10" />
        </div>

        <h1 className="mt-4 font-display text-[54px] font-black leading-none drop-shadow-[0_3px_0_rgba(3,28,13,0.6)]">
          <span
            data-pdf-color="#fdba74"
            className="bg-gradient-to-b from-amber-100 via-orange-200 to-orange-400 bg-clip-text text-transparent"
          >
            पक्ष प्रवेश
          </span>
        </h1>
        <p className="mt-1.5 text-[19px] font-semibold tracking-[0.22em] text-amber-100/95 [text-shadow:0_2px_0_rgba(3,28,13,0.5)]">
          सहर्ष स्वागत आहे
        </p>

        {/* photo medallion in an ornate gold frame */}
        <div className="relative mt-8">
          {/* radiant glow */}
          <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.5),transparent_70%)] blur-[2px]" />
          {/* tricolour beaded ring */}
          <div className="relative grid h-[224px] w-[224px] place-items-center rounded-full bg-gradient-to-tr from-orange-400 via-amber-200 to-green-400 p-[7px] shadow-[0_10px_26px_rgba(3,28,13,0.55)]">
            <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-green-800 to-[#052e16] p-[5px]">
              {/* dashed photo placeholder */}
              <div className="grid h-full w-full place-items-center rounded-full border-[5px] border-dashed border-amber-100/80 bg-[#052e16]/50 text-center">
                <div className="flex flex-col items-center text-amber-100/90">
                  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
                </div>
              </div>
            </div>
          </div>
          {/* beads on the ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2
            const r = 115
            return (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-amber-50/85"
                style={{
                  left: `calc(50% + ${Math.cos(a) * r}px)`,
                  top: `calc(50% + ${Math.sin(a) * r}px)`,
                  transform: 'translate(-50%,-50%)',
                }}
              />
            )
          })}
        </div>

        {/* name + designation */}
        <h2 className="mt-7 font-display text-[42px] font-black leading-none text-amber-50 drop-shadow-[0_2px_0_rgba(3,28,13,0.7)]">
          {personName}
        </h2>
        <p className="mt-2.5 text-[17px] font-semibold uppercase tracking-[0.26em] text-orange-300">
          {designation}
        </p>

        {/* handshake + date */}
        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center gap-3 text-gold-200">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-200/70" />
            <Handshake className="h-12 w-16" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-200/70" />
          </div>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold-200/40 bg-black/15 px-4 py-1 text-[15px] text-amber-100/95">
            दिनांक — {formatDate(date, date)}
          </p>
        </div>

        {/* party banner */}
        <div className="mt-auto w-full">
          <div className="mx-auto w-fit rounded-md bg-gradient-to-r from-orange-400 via-amber-200 to-green-400 p-[3px] shadow-[0_6px_0_rgba(3,28,13,0.6)]">
            <div className="flex items-center gap-3 rounded-[5px] bg-[#052e16] px-8 py-3">
              <Lotus className="h-6 w-8 text-amber-200" />
              <span className="text-[24px] font-black uppercase tracking-wide text-amber-50">
                {partyName}
              </span>
              <Lotus className="h-6 w-8 text-amber-200" />
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-amber-100/85">
            सहर्ष स्वागत — समस्त पदाधिकारी व कार्यकर्ते
          </p>
        </div>
      </div>
    </div>
  )
}
