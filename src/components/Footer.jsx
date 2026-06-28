'use client'

import Link from 'next/link'
import Brand from './Brand.jsx'
import { useI18n } from '@/i18n/I18nProvider'

const POPULAR = [
  { id: 'wedding', icon: '💍' },
  { id: 'engagement', icon: '💑' },
  { id: 'birthday', icon: '🎉' },
  { id: 'resume', icon: '📄' },
  { id: 'biodata', icon: '📋' },
  { id: 'festival', icon: '🪔' },
]

const QUICK_LINKS = [
  { href: '/categories', labelKey: 'footer.allTemplates', fallback: 'All Templates', icon: 'grid' },
  { href: '/#how-it-works', labelKey: 'footer.howItWorks', fallback: 'How it works', icon: 'steps' },
  { href: '/#faq', labelKey: 'faq.badge', fallback: 'FAQ', icon: 'help' },
]

function LinkIcon({ name }) {
  const cls = 'h-4 w-4 shrink-0 text-gold-500'
  switch (name) {
    case 'grid':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      )
    case 'steps':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      )
    case 'help':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-slate-200/70 bg-gradient-to-b from-white to-slate-50">
      <div className="container-page py-12 sm:py-16">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand + tagline */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Brand />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {t('footer.tagline', "India's handcrafted bazaar of beautiful templates — for every celebration and every milestone.")}
            </p>

            {/* Quick links with icons */}
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-gold-600"
                  >
                    <LinkIcon name={link.icon} />
                    {t(link.labelKey, link.fallback)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular categories */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink">
              {t('footer.popularCategories', 'Popular Categories')}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {POPULAR.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="group flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold-600"
                  >
                    <span className="text-base transition-transform duration-200 group-hover:scale-110">{cat.icon}</span>
                    {t(`categories.${cat.id}.name`, cat.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink">
              {t('footer.support', 'Support')}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#faq" className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-gold-600">
                  <svg className="h-4 w-4 shrink-0 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  {t('faq.badge', 'FAQ')}
                </Link>
              </li>
              <li>
                <a href="mailto:hello@templatebazaar.online" className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-gold-600">
                  <svg className="h-4 w-4 shrink-0 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {t('footer.email', 'Email us')}
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-ink-muted transition-all hover:border-gold-300 hover:text-gold-600 hover:shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-ink-muted transition-all hover:border-green-300 hover:text-green-600 hover:shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-ink-muted transition-all hover:border-sky-300 hover:text-sky-500 hover:shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200/70 pt-6 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} {t('common.appName', 'Template Bazaar')}. {t('footer.rights', 'All rights reserved.')}</p>
          <p className="font-medium text-ink-soft">{t('footer.madeWithLove', 'Made with ❤️ in India')}</p>
        </div>
      </div>
    </footer>
  )
}
