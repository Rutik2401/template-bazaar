'use client'

import Link from 'next/link'
import Layout from '@/components/Layout.jsx'
import { useI18n } from '@/i18n/I18nProvider'

export default function NotFoundPage() {
  const { t } = useI18n()

  return (
    <Layout>
      <div className="container-page flex flex-col items-center py-24 text-center">
        <p className="font-display text-7xl font-bold text-gold-400 sm:text-8xl">404</p>
        <h1 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
          {t('notFound.title')}
        </h1>
        <p className="mt-3 max-w-sm text-ink-muted">{t('notFound.desc')}</p>
        <Link href="/" className="btn-gold mt-9">
          {t('common.backHome')}
        </Link>
      </div>
    </Layout>
  )
}
