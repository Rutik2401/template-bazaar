'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, LOCALES, STORAGE_KEY } from './config'
import { dictionaries } from './locales'

const I18nContext = createContext(null)

/** Resolve a dotted path ("home.heroTitle") against a dictionary object. */
function resolve(dict, path) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), dict)
}

/**
 * App-wide i18n provider. Default locale is English; the user's choice is
 * persisted to localStorage and applied after mount (so server and first client
 * render always agree — no hydration mismatch).
 */
export function I18nProvider({ children, initialLocale }) {
  const [locale, setLocaleState] = useState(initialLocale || DEFAULT_LOCALE)

  // Restore saved preference on the client only. When `initialLocale` is forced
  // (e.g. the headless /print route during export) we honour it and skip storage.
  useEffect(() => {
    if (initialLocale) return
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved && LOCALES.some((l) => l.code === saved)) setLocaleState(saved)
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, [initialLocale])

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((code) => {
    setLocaleState(code)
    try {
      window.localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* ignore */
    }
  }, [])

  /**
   * Translate a key. Falls back to English, then to the provided `fallback`,
   * then to the key itself — so the UI never shows a blank.
   * @param {string} path
   * @param {string} [fallback]
   */
  const t = useCallback(
    (path, fallback) => {
      const active = dictionaries[locale] || dictionaries[DEFAULT_LOCALE]
      const value = resolve(active, path)
      if (typeof value === 'string') return value

      const fallbackValue = resolve(dictionaries[DEFAULT_LOCALE], path)
      if (typeof fallbackValue === 'string') return fallbackValue

      return fallback !== undefined ? fallback : path
    },
    [locale],
  )

  const value = useMemo(() => ({ locale, setLocale, t, locales: LOCALES }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Access the i18n context. Throws if used outside the provider. */
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
