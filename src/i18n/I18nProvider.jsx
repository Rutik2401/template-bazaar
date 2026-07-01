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

  // Resolve the active locale on the client only. When `initialLocale` is forced
  // (e.g. the headless /print route during export) we honour it and skip this.
  //
  // Precedence: a `?lang=` query param (the hreflang strategy — lets crawlers and
  // shared links land directly in a language) wins over the saved preference, so
  // an hreflang URL like `/?lang=mr` renders Marathi. Otherwise fall back to the
  // visitor's last choice in localStorage.
  useEffect(() => {
    if (initialLocale) return
    const isValid = (code) => code && LOCALES.some((l) => l.code === code)
    try {
      const fromUrl = new URLSearchParams(window.location.search).get('lang')
      if (isValid(fromUrl)) {
        setLocaleState(fromUrl)
        return
      }
    } catch {
      /* URL unavailable — fall through to storage */
    }
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (isValid(saved)) setLocaleState(saved)
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
      const isPluralOptions = typeof fallback === 'object' && fallback !== null && 'count' in fallback

      let value = resolve(active, path)
      if (isPluralOptions && typeof value === 'object' && value !== null) {
        value = fallback.count === 1 ? value.one : value.other
      }

      if (typeof value === 'string') {
        if (isPluralOptions) {
          return value.replace(/\{\{count\}\}/g, String(fallback.count))
        }
        return value
      }

      let fallbackValue = resolve(dictionaries[DEFAULT_LOCALE], path)
      if (isPluralOptions && typeof fallbackValue === 'object' && fallbackValue !== null) {
        fallbackValue = fallback.count === 1 ? fallbackValue.one : fallbackValue.other
      }

      if (typeof fallbackValue === 'string') {
        if (isPluralOptions) {
          return fallbackValue.replace(/\{\{count\}\}/g, String(fallback.count))
        }
        return fallbackValue
      }

      if (fallback !== undefined) {
        if (isPluralOptions) {
          const defaultVal = fallback.defaultValue || path
          return defaultVal.replace(/\{\{count\}\}/g, String(fallback.count))
        }
        return fallback
      }

      return path
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
