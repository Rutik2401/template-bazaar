'use client'

import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/utils/cn'

/**
 * Compact globe dropdown to switch between English / मराठी / हिंदी.
 * Closes on outside click or Escape. Persists choice via the i18n provider.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, locales } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-ink-soft shadow-sm transition-all hover:border-slate-300 hover:bg-white active:scale-[0.97]"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-ink-muted" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
        </svg>
        <span className="min-w-[2ch] text-center">{current.short}</span>
        <svg viewBox="0 0 24 24" className={cn('h-3.5 w-3.5 text-ink-muted transition-transform', open && 'rotate-180')} fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lift animate-fade-in"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                  l.code === locale ? 'bg-gold-50 text-gold-700' : 'text-ink-soft hover:bg-slate-50',
                )}
              >
                <span>{l.label}</span>
                {l.code === locale && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
