'use client'

import Link from 'next/link'
import Layout from '@/components/Layout.jsx'
import Reveal from '@/components/Reveal.jsx'
import PremiumCollection from '@/components/PremiumCollection.jsx'
import FeatureShowcase from '@/components/FeatureShowcase.jsx'
import Faq from '@/components/Faq.jsx'
import { useI18n } from '@/i18n/I18nProvider'

const STEPS = [
  { n: '1', titleKey: 'home.step1Title', textKey: 'home.step1Text' },
  { n: '2', titleKey: 'home.step2Title', textKey: 'home.step2Text' },
  { n: '3', titleKey: 'home.step3Title', textKey: 'home.step3Text' },
]

const TRUST = [
  { icon: '🪔', titleKey: 'home.trust1Title', textKey: 'home.trust1Text' },
  { icon: '🌐', titleKey: 'home.trust2Title', textKey: 'home.trust2Text' },
  { icon: '🖨️', titleKey: 'home.trust3Title', textKey: 'home.trust3Text' },
  { icon: '⚡', titleKey: 'home.trust4Title', textKey: 'home.trust4Text' },
]

const STATS = [
  { value: '95+', labelKey: 'home.statDesigns' },
  { value: '25', labelKey: 'home.statCategories' },
  { value: '3', labelKey: 'home.statLanguages' },
  { value: '₹0', labelKey: 'home.statFree' },
]

export default function HomePage() {
  const { t } = useI18n()

  // Render the translated hero title with its final word accented for a
  // premium touch — works across locales without hardcoding English.
  const heroTitle = t('home.heroTitle')
  const lastSpace = heroTitle.lastIndexOf(' ')
  const heroHead = lastSpace > 0 ? heroTitle.slice(0, lastSpace) : heroTitle
  const heroAccent = lastSpace > 0 ? heroTitle.slice(lastSpace + 1) : ''

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft, premium decorative backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-7rem] h-72 w-72 -translate-x-1/2 rounded-full bg-gold-300/30 blur-[110px]" />
          <div className="absolute right-[-5rem] top-2 h-64 w-64 rounded-full bg-maroon-400/20 blur-[120px]" />
          <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-rose-300/20 blur-[120px]" />
        </div>

        <div className="container-page pt-1 text-center sm:pt-6">
          <span className="chip animate-fade-in">{t('home.badge')}</span>

          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-[1.85rem] font-bold leading-[1.1] text-ink sm:mt-7 sm:text-6xl animate-fade-up">
            {heroHead}
            {heroAccent && (
              <>
                {' '}
                <span className="gradient-text">{heroAccent}</span>
              </>
            )}
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-balance text-[15px] text-ink-muted sm:mt-5 sm:text-lg animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {t('home.heroSubtitle')}
          </p>

          <div
            className="mx-auto mt-7 flex max-w-md flex-col items-center justify-center gap-2.5 animate-fade-up sm:mt-9 sm:max-w-none sm:flex-row sm:gap-3"
            style={{ animationDelay: '140ms' }}
          >
            <Link
              href="/category/wedding"
              className="btn-gold btn-lg w-full rounded-full sm:w-auto"
            >
              {t('home.ctaPrimary')}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="#how-it-works" className="btn-ghost btn-lg w-full rounded-full sm:w-auto">
              {t('home.ctaSecondary', 'See how it works')}
            </a>
          </div>

          {/* Quick stats */}
          <dl
            className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-x-6 gap-y-4 animate-fade-up sm:mt-12 sm:max-w-none sm:grid-cols-4 sm:gap-x-14 sm:gap-y-7"
            style={{ animationDelay: '220ms' }}
          >
            {STATS.map((s) => (
              <div key={s.labelKey} className="text-center">
                <dt className="gradient-text font-display text-2xl font-bold sm:text-4xl">{s.value}</dt>
                <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted sm:text-xs">
                  {t(s.labelKey)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Premium Collection — flagship Wedding & Engagement showcase */}
      <Reveal>
        <PremiumCollection />
      </Reveal>

      {/* Explore Categories — SaaS-style CTA card */}
      <Reveal>
        <section className="container-page mt-16 sm:mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-gold-200/60 bg-gradient-to-br from-white via-gold-50/40 to-amber-50/30 px-6 py-12 text-center shadow-soft sm:px-16 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-3rem] top-[-3rem] h-48 w-48 rounded-full bg-gold-200/30 blur-[80px]" />
            <div className="absolute right-[-2rem] bottom-[-2rem] h-40 w-40 rounded-full bg-amber-200/25 blur-[70px]" />
          </div>

          <span className="chip bg-gradient-to-r from-gold-100 to-amber-100 text-gold-700">
            {t('home.exploreBadge', '✦ Explore')}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-bold text-ink sm:text-3xl">
            {t('home.exploreTitle', 'Find the perfect template for every occasion')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-relaxed text-ink-muted sm:text-base">
            {t('home.exploreText', 'From wedding invites and festival greetings to resumes and business cards — 25+ categories, 95+ premium designs, all free to use.')}
          </p>

          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-4 text-center sm:max-w-xl">
            <div>
              <p className="font-display text-2xl font-bold text-gold-600">25+</p>
              <p className="mt-0.5 text-xs text-ink-muted">{t('home.exploreStat1', 'Categories')}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gold-600">95+</p>
              <p className="mt-0.5 text-xs text-ink-muted">{t('home.exploreStat2', 'Templates')}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gold-600">3</p>
              <p className="mt-0.5 text-xs text-ink-muted">{t('home.exploreStat3', 'Languages')}</p>
            </div>
          </div>

          <Link
            href="/categories"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 px-7 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            {t('home.browseAll', 'Browse all categories')}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
      </Reveal>

      {/* Feature showcase — how the editor feels */}
      <Reveal>
        <FeatureShowcase />
      </Reveal>

      {/* How it works */}
      <section id="how-it-works" className="container-page mt-24 scroll-mt-24">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
            {t('home.howItWorks')}
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card p-7 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-maroon-500 text-base font-bold text-white shadow-soft">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{t(s.titleKey)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t(s.textKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us — trust strip */}
      <section className="container-page mt-24">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
            {t('home.trustTitle', 'Why families and professionals choose us')}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((f, i) => (
            <Reveal key={f.titleKey} delay={i * 80}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 text-2xl">
                  {f.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{t(f.titleKey)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t(f.textKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <Reveal>
        <Faq />
      </Reveal>

      {/* Closing call-to-action */}
      <Reveal>
        <section className="container-page mt-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-500 via-maroon-500 to-gold-500 px-6 py-14 text-center shadow-lift sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_20%,white,transparent_55%)]"
          />
          <h2 className="relative mx-auto max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            {t('home.finalTitle', 'Your celebration is one template away')}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-base text-white/85 sm:text-lg">
            {t('home.finalText')}
          </p>
          <Link
            href="/category/wedding"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-lg font-bold text-maroon-600 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            {t('home.ctaPrimary')}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
      </Reveal>
    </Layout>
  )
}
