'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Two-column "how the editor feels" showcase: a benefit list on the left and a
 * live-looking invite mockup with floating UI chips on the right. Mirrors the
 * classic feature-showcase layout while staying in the gold/maroon brand world.
 */

// Each feature pairs a distinct line icon with a translated benefit line.
const FEATURES = [
  { key: 'showcase.f1', icon: 'eye' },
  { key: 'showcase.f2', icon: 'globe' },
  { key: 'showcase.f3', icon: 'doc' },
  { key: 'showcase.f4', icon: 'share' },
  { key: 'showcase.f5', icon: 'devices' },
  { key: 'showcase.f6', icon: 'sparkle' },
]

function FeatureIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-5 w-5',
  }
  switch (name) {
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="2.6" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
        </svg>
      )
    case 'doc':
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      )
    case 'share':
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
        </svg>
      )
    case 'devices':
      return (
        <svg {...common}>
          <rect x="2" y="4" width="14" height="11" rx="1.5" />
          <path d="M2 19h14" />
          <rect x="17" y="9" width="5" height="11" rx="1.5" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
  }
}

export default function FeatureShowcase() {
  const { t } = useI18n()

  return (
    <section className="container-page mt-24 sm:mt-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy + benefit list */}
        <div>
          <span className="chip bg-gold-100 text-maroon-600">{t('showcase.badge')}</span>
          <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {t('showcase.title')}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            {t('showcase.subtitle')}
          </p>

          <ul className="mt-8 divide-y divide-slate-200/70 border-y border-slate-200/70">
            {FEATURES.map((f) => (
              <li key={f.key} className="flex items-center gap-4 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-maroon-600">
                  <FeatureIcon name={f.icon} />
                </span>
                <span className="text-[15px] font-medium text-ink sm:text-base">{t(f.key)}</span>
              </li>
            ))}
          </ul>

          <Link href="/category/wedding" className="btn-gold btn-lg mt-9 w-full sm:w-auto">
            {t('showcase.cta')}
          </Link>
        </div>

        {/* Right — invite mockup with floating chips */}
        <div className="relative mx-auto w-full max-w-md">
          {/* soft glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-300/40 via-rose-200/30 to-maroon-400/30 blur-2xl"
          />

          {/* faux invite card */}
          <div className="bg-paper rounded-3xl border border-gold-300/70 p-1.5 shadow-lift">
            <div className="rounded-[1.35rem] border border-gold-300/60 px-6 py-10 text-center sm:px-8">
              <p className="font-display text-sm tracking-[0.2em] text-maroon-500">
                {t('template.wedding.blessing')}
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-ink-soft">
                {t('template.common.saveTheDate')}
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-ink">{t('showcase.mockName1')}</p>
              <p className="my-1 font-display text-lg italic text-gold-600">
                {t('template.common.weds')}
              </p>
              <p className="font-display text-3xl font-bold text-ink">{t('showcase.mockName2')}</p>
              <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <p className="text-sm font-medium text-ink-muted">{t('showcase.mockDate')}</p>
            </div>
          </div>

          {/* floating chips */}
          <span className="absolute -left-3 top-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-lift sm:-left-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('showcase.chipLive')}
          </span>

          <span className="absolute -right-2 top-16 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-maroon-600 shadow-lift sm:-right-5">
            {t('showcase.chipLang')}
          </span>

          <span className="absolute -right-2 bottom-20 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-lift sm:-right-6">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('showcase.chipPdf')}
          </span>

          <span className="absolute -left-3 bottom-8 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-lift sm:-left-6">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-maroon-500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('showcase.chipShare')}
          </span>
        </div>
      </div>
    </section>
  )
}
