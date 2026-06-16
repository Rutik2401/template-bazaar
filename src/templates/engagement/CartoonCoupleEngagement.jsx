'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Hand-drawn cartoon couple sharing a ring moment (flat illustration) ─── */
function CartoonCouple({ className = '' }) {
  return (
    <svg viewBox="0 0 320 280" className={className} fill="none">
      <defs>
        <linearGradient id="cc-skin-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe1cf" />
          <stop offset="1" stopColor="#f7c7ad" />
        </linearGradient>
        <linearGradient id="cc-skin-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd8c2" />
          <stop offset="1" stopColor="#f3bb9d" />
        </linearGradient>
        <linearGradient id="cc-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbe0e8" />
          <stop offset="1" stopColor="#f3b9cf" />
        </linearGradient>
        <linearGradient id="cc-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b6b8c" />
          <stop offset="1" stopColor="#3c4a68" />
        </linearGradient>
        <linearGradient id="cc-rose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d7b8" />
          <stop offset="1" stopColor="#d9a06a" />
        </linearGradient>
        <radialGradient id="cc-glow" cx="0.5" cy="0.42" r="0.55">
          <stop offset="0" stopColor="#fff3ec" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff3ec" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo behind the pair */}
      <ellipse cx="160" cy="128" rx="128" ry="118" fill="url(#cc-glow)" />

      {/* shared shadow on ground */}
      <ellipse cx="160" cy="260" rx="96" ry="13" fill="#e0a98a" fillOpacity="0.35" />

      {/* ── GROOM (left) ── */}
      <g stroke="#7a4a33" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* legs */}
        <path d="M104 250 L104 196 M134 250 L134 196" stroke="#2e3a54" strokeWidth="13" />
        {/* shoes */}
        <path d="M96 252 h18 M126 252 h18" stroke="#27324a" strokeWidth="7" />
        {/* torso / suit */}
        <path
          d="M92 142 C92 124 104 116 119 116 C134 116 146 124 146 142 L150 200 L88 200 Z"
          fill="url(#cc-suit)"
        />
        {/* lapel + shirt */}
        <path d="M119 120 L108 156 L119 168 L130 156 Z" fill="#f4f1ea" stroke="none" />
        <path d="M119 122 L113 150 M119 122 L125 150" stroke="#2e3a54" strokeWidth="2" />
        {/* bow tie */}
        <path d="M114 132 l5 4 -5 4 Z M124 132 l-5 4 5 4 Z" fill="#d98aa6" stroke="none" />
        {/* near arm reaching to her hand */}
        <path d="M146 150 C166 154 178 166 184 178" stroke="url(#cc-suit)" strokeWidth="12" fill="none" />
        {/* far arm down */}
        <path d="M96 150 C86 164 86 180 90 192" stroke="url(#cc-suit)" strokeWidth="12" fill="none" />
        {/* neck */}
        <path d="M119 112 v10" stroke="#f3bb9d" strokeWidth="11" />
        {/* head */}
        <circle cx="119" cy="92" r="22" fill="url(#cc-skin-b)" stroke="#7a4a33" strokeWidth="2.2" />
        {/* hair */}
        <path
          d="M98 90 C96 70 108 60 120 60 C133 60 144 70 141 92 C138 80 130 76 120 76 C111 76 103 80 98 90 Z"
          fill="#3a2a22"
          stroke="none"
        />
        {/* face */}
        <circle cx="112" cy="92" r="1.9" fill="#4a3326" stroke="none" />
        <circle cx="126" cy="92" r="1.9" fill="#4a3326" stroke="none" />
        <path d="M114 100 q5 4 10 0" stroke="#a85a44" strokeWidth="1.8" fill="none" />
        <circle cx="106" cy="98" r="3" fill="#f6a08c" stroke="none" opacity="0.6" />
      </g>

      {/* ── BRIDE (right) ── */}
      <g stroke="#a85a64" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* gown */}
        <path
          d="M200 200 C196 168 198 146 214 138 C230 146 232 168 228 200 Z"
          fill="url(#cc-dress)"
        />
        <path d="M214 142 L214 196" stroke="#e79bb8" strokeWidth="1.6" opacity="0.7" />
        {/* shoulders / bodice */}
        <path d="M198 150 C200 134 208 128 214 128 C220 128 228 134 230 150 Z" fill="#f6cad9" stroke="none" />
        {/* near arm reaching toward groom — hands meet */}
        <path d="M200 150 C188 158 182 168 182 178" stroke="#f3bb9d" strokeWidth="9" fill="none" />
        {/* far arm */}
        <path d="M230 150 C242 160 244 176 240 190" stroke="#f3bb9d" strokeWidth="9" fill="none" />
        {/* neck */}
        <path d="M214 124 v8" stroke="#f3bb9d" strokeWidth="10" />
        {/* head */}
        <circle cx="214" cy="104" r="21" fill="url(#cc-skin-a)" stroke="#a85a64" strokeWidth="2.2" />
        {/* hair (bun + flowing) */}
        <path
          d="M194 104 C190 82 204 72 215 72 C228 72 240 84 235 106 C242 100 240 124 230 130 C236 116 232 100 224 96 C228 84 220 80 214 80 C206 80 200 86 200 96 C194 102 192 118 198 128 C190 122 190 110 194 104 Z"
          fill="#5a3a2c"
          stroke="none"
        />
        <circle cx="220" cy="74" r="7" fill="#5a3a2c" stroke="none" />
        {/* tiny flower in hair */}
        <circle cx="200" cy="86" r="4" fill="#f48fb1" stroke="none" />
        <circle cx="200" cy="86" r="1.6" fill="#fff3ec" stroke="none" />
        {/* face */}
        <circle cx="208" cy="104" r="1.9" fill="#6b3a3a" stroke="none" />
        <circle cx="220" cy="104" r="1.9" fill="#6b3a3a" stroke="none" />
        <path d="M210 112 q4 4 9 0" stroke="#c46a78" strokeWidth="1.8" fill="none" />
        <circle cx="224" cy="110" r="3" fill="#f6889d" stroke="none" opacity="0.6" />
      </g>

      {/* hands meeting + the ring sparkle between them */}
      <circle cx="184" cy="180" r="6" fill="#f7c7ad" stroke="#a85a44" strokeWidth="2" />
      <circle cx="184" cy="172" r="3.4" fill="none" stroke="#d9a06a" strokeWidth="2.2" />
      <path d="M184 168 l1.6 2.6 3 0.2 -2.3 2 0.8 2.9 -3.1-1.7 -3.1 1.7 0.8-2.9 -2.3-2 3-0.2 Z" fill="#fff" stroke="none" />

      {/* floating heart above the couple */}
      <path
        d="M160 40 C156 30 140 30 140 44 C140 56 160 66 160 66 C160 66 180 56 180 44 C180 30 164 30 160 40 Z"
        fill="url(#cc-rose)"
        stroke="#c98a6b"
        strokeWidth="2"
      />
      <path d="M150 44 c0 -5 5 -7 8 -5" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

      {/* little rose-gold sparkles floating */}
      <path d="M250 60 l1.4 4 4 1.4 -4 1.4 -1.4 4 -1.4-4 -4-1.4 4-1.4 Z" fill="#d9a06a" />
      <path d="M70 56 l1.1 3 3 1.1 -3 1.1 -1.1 3 -1.1-3 -3-1.1 3-1.1 Z" fill="#e0b48c" />
      <path d="M252 150 l1 2.8 2.8 1 -2.8 1 -1 2.8 -1-2.8 -2.8-1 2.8-1 Z" fill="#e0b48c" opacity="0.8" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1.2 6 4.8 9.6 12 12-7.2 2.4-10.8 6-12 12-1.2-6-4.8-9.6-12-12C7.2 9.6 10.8 6 12 0Z" />
    </svg>
  )
}

function TinyHeart({ className = '' }) {
  return (
    <svg viewBox="0 0 24 22" className={className} fill="currentColor">
      <path d="M12 6 C10 1 2 1 2 8 C2 14 12 20 12 20 C12 20 22 14 22 8 C22 1 14 1 12 6 Z" />
    </svg>
  )
}

/**
 * Cartoon Couple engagement card — illustrated flat-art couple sharing a ring moment.
 * Pastel blush & rose-gold, playful and charming. Natural design size: 640 × 900.
 */
export default function CartoonCoupleEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const tagline = values.tagline?.trim() || 'The beginning of forever'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff6f1] via-[#fdeae4] to-[#f8d8cf] font-sans text-rose-900"
    >
      {/* pastel glows */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#fbcdda]/50 blur-3xl" />
      <div className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-[#f8cdba]/50 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#f4c2d4]/45 blur-3xl" />

      {/* polka-dot confetti texture (very soft) */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(#e8a9bf66 2px, transparent 2px), radial-gradient(#e7b48c66 2px, transparent 2px)',
          backgroundSize: '46px 46px, 46px 46px',
          backgroundPosition: '0 0, 23px 23px',
        }}
      />

      {/* dashed rose-gold frame */}
      <div className="absolute inset-[20px] rounded-[34px] border-2 border-dashed border-[#d59f7f]/55" />
      <div className="absolute inset-[28px] rounded-[28px] border border-[#e7c4ad]/50" />

      {/* scattered sparkles & hearts */}
      <Sparkle className="absolute left-14 top-[150px] h-4 w-4 text-[#d9a06a]/70" />
      <Sparkle className="absolute right-16 top-[120px] h-3 w-3 text-[#d9a06a]/55" />
      <TinyHeart className="absolute right-[60px] top-[210px] h-4 w-4 text-[#ef9bb5]/70" />
      <TinyHeart className="absolute left-[58px] top-[240px] h-3 w-3 text-[#ef9bb5]/55" />

      <div className="relative flex h-full flex-col items-center px-14 pb-[70px] pt-[68px] text-center">
        {/* ── upper ~55%: cartoon illustration ── */}
        <div className="flex w-full flex-col items-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/55 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#bd7a5b] shadow-sm backdrop-blur-sm">
            {t('template.common.engaged', 'We’re Engaged')}
          </span>

          <div className="relative mt-4">
            {/* dappled disc behind couple */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-md" />
            <CartoonCouple className="relative h-[400px] w-[440px] drop-shadow-[0_10px_24px_rgba(201,138,107,0.28)]" />
          </div>
        </div>

        {/* ── lower: names, tagline, footer ── */}
        <main className="mt-2 flex w-full flex-col items-center gap-4">
          <h1 className="font-script text-[64px] font-medium leading-[0.95] tracking-tight">
            <span
              data-pdf-color="#d4607c"
              className="bg-gradient-to-r from-[#e07898] via-[#d6845f] to-[#dca25a] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>

          <div className="flex items-center gap-3 text-[#d9a06a]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d9a06a]" />
            <TinyHeart className="h-3.5 w-3.5 text-[#ef9bb5]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d9a06a]" />
          </div>

          <p className="max-w-[20rem] font-serif text-[18px] italic leading-relaxed text-rose-500/90">
            {tagline}
          </p>
        </main>

        {/* rounded soft footer pill */}
        <footer className="mt-auto w-full">
          <div className="mx-auto flex max-w-[26rem] items-center justify-center gap-4 rounded-[26px] bg-white/65 px-7 py-4 shadow-[0_8px_24px_rgba(201,138,107,0.18)] backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#bd7a5b]">
                {t('template.common.saveTheDate', 'Save the Date')}
              </span>
              <p className="font-serif text-[19px] leading-tight text-rose-800">{date}</p>
            </div>
            <span className="h-9 w-px bg-[#e0b48c]/60" />
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#bd7a5b]">
                {t('template.common.venue', 'Venue')}
              </span>
              <p className="max-w-[12rem] font-serif text-[15px] leading-snug text-rose-800">{venue}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
