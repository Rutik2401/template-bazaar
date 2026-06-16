'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { categories } from '@/data/categories'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Header category search. As the user types it live-filters all categories
 * (by localised name, tagline and id) and shows a dropdown; picking one jumps
 * straight to that category page. Works on every page that renders the navbar.
 * Keyboard: ↑/↓ to move, Enter to open, Esc to close. Closes on outside click.
 */
export default function CategorySearch() {
  const { t } = useI18n()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const wrapRef = useRef(null)

  const q = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!q) return []
    return categories
      .map((cat) => ({
        cat,
        name: t(`categories.${cat.id}.name`, cat.name),
        tagline: t(`categories.${cat.id}.tagline`, cat.tagline),
      }))
      .filter(({ cat, name, tagline }) =>
        `${name} ${tagline} ${cat.name} ${cat.tagline} ${cat.id}`.toLowerCase().includes(q),
      )
      .slice(0, 8)
  }, [q, t])

  // Reset the highlighted row whenever the query changes.
  useEffect(() => setActive(0), [q])

  // Close the dropdown on any click outside the component.
  useEffect(() => {
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const go = (id) => {
    setOpen(false)
    setQuery('')
    router.push(`/category/${id}`)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (!results.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => (a + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => (a - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      go((results[active] || results[0]).cat.id)
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full max-w-xs">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={t('nav.searchPlaceholder', 'Search categories…')}
          aria-label={t('nav.searchPlaceholder', 'Search categories')}
          className="w-full rounded-full border border-slate-200 bg-white/70 py-2 pl-9 pr-3 text-sm text-ink shadow-sm outline-none backdrop-blur transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-200/50"
        />
      </div>

      {open && q && (
        <div className="absolute right-0 z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white py-1.5 shadow-lift">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-muted">
              {t('nav.searchNoResults', 'No categories found')}
            </p>
          ) : (
            <ul className="max-h-[60vh] overflow-y-auto">
              {results.map(({ cat, name, tagline }, i) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(cat.id)}
                    className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                      i === active ? 'bg-slate-100' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${cat.accent} text-lg`}
                    >
                      {cat.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">{name}</span>
                      <span className="block truncate text-xs text-ink-muted">{tagline}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
