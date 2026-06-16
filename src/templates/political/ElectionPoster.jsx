'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* ── Election campaign motifs ───────────────────────────────────────────── */

/** A ballot box with a vote slip dropping in. */
function BallotBox({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* slip */}
      <rect x="24" y="6" width="16" height="20" rx="1.5" fill="currentColor" fillOpacity="0.25" />
      <path d="M28 12h8M28 17h8" />
      {/* box */}
      <path d="M12 30h40l-4 26H16L12 30Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M22 30v-4h20v4" />
      {/* slot */}
      <path d="M26 33h12" strokeWidth="3" />
    </svg>
  )
}

/** A check / vote tick inside a rounded square. */
function VoteTick({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.14" />
      <path d="M15 25l6 7 13-15" />
    </svg>
  )
}

/** The Ashoka chakra — 24-spoke wheel. */
function Chakra({ className = '' }) {
  const spokes = Array.from({ length: 24 })
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="32" cy="32" r="29" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      {spokes.map((_, i) => (
        <line
          key={i}
          x1="32"
          y1="6"
          x2="32"
          y2="58"
          transform={`rotate(${i * 7.5} 32 32)`}
          opacity="0.9"
        />
      ))}
    </svg>
  )
}

/** A pointed campaign pennant / flag on a pole. */
function Pennant({ className = '' }) {
  return (
    <svg viewBox="0 0 48 56" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v50" />
      <path d="M12 8h28l-9 10 9 10H12V8Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="12" cy="4" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Star burst accent. */
function Star({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l2.6 6.5L21 9.8l-4.8 4.4L17.6 21 12 17.4 6.4 21l1.4-6.8L3 9.8l6.4-1.3L12 2Z" />
    </svg>
  )
}

/**
 * Election Campaign Poster — high-energy tricolour flex banner: saffron top,
 * white mid, green base. A ballot/vote symbol, a bold slogan, the candidate's
 * name and a dashed photo circle. Natural design size: 720 × 960.
 */
export default function ElectionPoster({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Shri Rajesh Patil'
  const partyName = values.partyName?.trim() || 'Jan Vikas Party'
  const designation = values.designation?.trim() || 'District President'
  const date = values.date?.trim() || '2026-06-20'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-white font-display text-slate-900"
    >
      {/* tricolour bands */}
      <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-orange-500 to-orange-400" />
      <div className="absolute inset-x-0 top-[300px] h-[360px] bg-gradient-to-b from-white to-orange-50/40" />
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-green-600 to-green-700" />

      {/* saffron-band rays for energy */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[300px] opacity-25"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 0%, rgba(255,237,213,0.9) 0deg 4deg, transparent 4deg 9deg)',
        }}
      />

      {/* navy divider slashes with thin gold edge */}
      <div className="absolute -left-10 top-[270px] h-[14px] w-[120%] -rotate-3 bg-blue-800 shadow-[0_2px_0_rgba(253,224,71,0.7)]" />
      <div className="absolute -left-10 top-[648px] h-[14px] w-[120%] -rotate-3 bg-blue-800 shadow-[0_-2px_0_rgba(253,224,71,0.7)]" />

      {/* Ashoka-chakra ring watermark in the white band */}
      <Chakra className="pointer-events-none absolute left-1/2 top-[480px] h-72 w-72 -translate-x-1/2 -translate-y-1/2 text-blue-900/10" />

      <div className="relative flex h-full flex-col items-center px-12 py-10 text-center">
        {/* top — slogan over saffron */}
        <header className="flex flex-col items-center text-white">
          <div className="flex items-center gap-3 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            <VoteTick className="h-9 w-9 text-white" />
            <span className="text-sm font-extrabold uppercase tracking-[0.5em]">Vote</span>
            <VoteTick className="h-9 w-9 text-white" />
          </div>
          <h1 className="mt-3 font-display text-[46px] font-black leading-[1.04] [text-shadow:0_3px_0_rgba(154,52,18,0.55)]">
            तुमचं मत,
            <br />
            तुमचा विकास
          </h1>
          <div className="mt-2 flex items-center gap-2 text-amber-100">
            <Star className="h-3 w-3" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-white/90">
              तुमच्या उज्ज्वल भविष्यासाठी
            </span>
            <Star className="h-3 w-3" />
          </div>
        </header>

        {/* center — photo medallion straddling the white band */}
        <div className="relative mt-6">
          {/* tricolour glow */}
          <div className="absolute -inset-5 rounded-full bg-[conic-gradient(from_140deg,#f97316,#ffffff,#16a34a,#f97316)] opacity-80 blur-[3px]" />
          {/* navy + gold bezel */}
          <div className="relative grid h-[232px] w-[232px] place-items-center rounded-full bg-gradient-to-tr from-blue-800 to-blue-900 p-[7px] shadow-[0_12px_28px_rgba(30,58,138,0.45)]">
            <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-tr from-gold-300 via-amber-200 to-gold-300 p-[5px]">
              {/* dashed photo placeholder */}
              <div className="grid h-full w-full place-items-center rounded-full border-[5px] border-dashed border-blue-700/60 bg-white text-center">
                <div className="flex flex-col items-center text-blue-800/80">
                  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
                </div>
              </div>
            </div>
          </div>
          {/* flanking pennants */}
          <Pennant className="absolute -left-12 top-6 h-16 w-12 text-orange-500" />
          <Pennant className="absolute -right-12 top-6 h-16 w-12 -scale-x-100 text-green-600" />
        </div>

        {/* name + designation */}
        <h2 className="mt-6 font-display text-[42px] font-black leading-none">
          <span
            data-pdf-color="#1e3a8a"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent"
          >
            {personName}
          </span>
        </h2>
        <p className="mt-2.5 rounded-full bg-blue-800 px-6 py-1.5 text-[15px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_3px_8px_rgba(30,58,138,0.4)]">
          {designation}
        </p>

        {/* bottom — ballot + party over green */}
        <footer className="mt-auto flex flex-col items-center text-white">
          <div className="flex items-center gap-3 text-amber-50">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-100/70" />
            <BallotBox className="h-14 w-14" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-100/70" />
          </div>
          <p className="mt-2 text-[15px] tracking-wide text-amber-50/95">
            मतदानाचा दिनांक — {formatDate(date, date)}
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-md bg-white px-9 py-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
            <span className="text-lg text-green-700">★</span>
            <span className="text-[24px] font-black uppercase tracking-wide text-green-700">
              {partyName}
            </span>
            <span className="text-lg text-green-700">★</span>
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.4em] text-amber-50/85">
            एकच ध्यास — विकासाचा प्रवास
          </p>
        </footer>
      </div>
    </div>
  )
}
