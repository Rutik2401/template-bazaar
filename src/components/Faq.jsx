'use client'

import { useState } from 'react'
import { useI18n } from '@/i18n/I18nProvider'
import { FAQ_ITEMS } from '@/data/faq'

/**
 * Single-open FAQ accordion. Smooth height reveal via the grid-rows 0fr→1fr
 * trick (no JS measuring), an animated chevron, and a friendly "still have a
 * question?" prompt below. All copy is i18n-driven.
 *
 * The Q&A list lives in `src/data/faq.js` so this visible accordion and the
 * FAQPage JSON-LD (rendered on the home page) stay in lockstep.
 */
const ITEMS = FAQ_ITEMS

export default function Faq() {
  const { t } = useI18n()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="container-page mt-24 scroll-mt-24 sm:mt-28">
      <div className="text-center">
        <span className="chip bg-gold-100 text-maroon-600">{t('faq.badge')}</span>
        <h2 className="mt-5 font-display text-3xl font-bold text-ink sm:text-4xl">
          {t('faq.title')}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-ink-muted">{t('faq.subtitle')}</p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200/70 overflow-hidden rounded-2.5xl border border-slate-200/70 bg-white shadow-soft">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50/70 sm:px-7"
              >
                <span className="text-[15px] font-semibold text-ink sm:text-base">{t(item.q)}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 text-maroon-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-muted sm:px-7">
                    {t(item.a)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
