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
      <div className="absolute inset-x-0 top-[300px] h-[360px] bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-green-600 to-green-700" />
      {/* diagonal energy slashes */}
      <div className="absolute -left-10 top-[270px] h-3 w-[120%] -rotate-3 bg-blue-700/90" />
      <div className="absolute -left-10 top-[648px] h-3 w-[120%] -rotate-3 bg-blue-700/90" />

      {/* Ashoka-chakra-style ring watermark in the white band */}
      <div
        className="pointer-events-none absolute left-1/2 top-[480px] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, #1e3a8a 0deg 7.5deg, transparent 7.5deg 15deg)',
        }}
      />

      <div className="relative flex h-full flex-col items-center px-12 py-10 text-center">
        {/* top — slogan over saffron */}
        <header className="flex flex-col items-center text-white">
          <div className="flex items-center gap-3">
            <VoteTick className="h-10 w-10 text-white" />
            <span className="text-sm font-bold uppercase tracking-[0.4em]">VOTE</span>
            <VoteTick className="h-10 w-10 text-white" />
          </div>
          <h1 className="mt-4 font-display text-[44px] font-black leading-[1.05] drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
            तुमचं मत,
            <br />
            तुमचा विकास
          </h1>
        </header>

        {/* center — photo circle straddling the white band */}
        <div className="relative mt-7">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-orange-500 via-white to-green-600 opacity-90 blur-[1px]" />
          <div className="relative grid h-[210px] w-[210px] place-items-center rounded-full border-[6px] border-dashed border-blue-700/70 bg-white text-center shadow-xl">
            <div className="flex flex-col items-center text-blue-800/80">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="mt-1 text-base font-bold tracking-widest">Photo</span>
            </div>
          </div>
        </div>

        {/* name + designation */}
        <h2 className="mt-6 font-display text-[40px] font-black leading-none text-blue-900">
          <span
            data-pdf-color="#1e3a8a"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent"
          >
            {personName}
          </span>
        </h2>
        <p className="mt-2 rounded-full bg-blue-700 px-5 py-1 text-[15px] font-bold uppercase tracking-[0.2em] text-white">
          {designation}
        </p>

        {/* bottom — ballot + party over green */}
        <footer className="mt-auto flex flex-col items-center text-white">
          <BallotBox className="h-16 w-16 text-amber-50" />
          <p className="mt-2 text-base">मतदानाचा दिनांक — {formatDate(date, date)}</p>
          <div className="mt-3 rounded-md bg-white px-9 py-2.5 shadow-lg">
            <span className="text-[24px] font-black uppercase tracking-wide text-green-700">
              {partyName}
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
