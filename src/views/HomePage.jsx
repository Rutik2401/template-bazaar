'use client'

import Link from 'next/link'
import Layout from '@/components/Layout.jsx'
import CategoryCard from '@/components/CategoryCard.jsx'
import { categories } from '@/data/categories'
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
      <section className="container-page text-center">
        <span className="chip animate-fade-in">{t('home.badge')}</span>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] text-ink sm:text-6xl animate-fade-up">
          {heroHead}
          {heroAccent && (
            <>
              {' '}
              <span className="gradient-text">{heroAccent}</span>
            </>
          )}
        </h1>

        <p
          className="mx-auto mt-5 max-w-xl text-balance text-lg text-ink-muted animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          {t('home.heroSubtitle')}
        </p>

        <div
          className="mt-9 flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row"
          style={{ animationDelay: '140ms' }}
        >
          <Link href="/category/wedding" className="btn-gold btn-lg">
            {t('home.ctaPrimary')}
          </Link>
          <a href="#how-it-works" className="btn-ghost btn-lg">
            {t('home.ctaSecondary', 'See how it works')}
          </a>
        </div>
      </section>

      {/* Category cards */}
      <section className="container-page mt-16 sm:mt-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container-page mt-24 scroll-mt-24">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          {t('home.howItWorks')}
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-7 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-maroon-500 text-base font-bold text-white shadow-soft">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{t(s.titleKey)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t(s.textKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us — trust strip */}
      <section className="container-page mt-24">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          {t('home.trustTitle', 'Why families and professionals choose us')}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((f) => (
            <div key={f.titleKey} className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 text-2xl">
                {f.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{t(f.titleKey)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t(f.textKey)}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
