'use client'

import { useEffect, useState } from 'react'
import { I18nProvider } from '@/i18n/I18nProvider'
import { getTemplateById } from '@/templates'

/**
 * Headless render target for server-side export.
 *
 * The export API (`/api/export`) navigates a real headless Chrome to the
 * `/print/<id>` route, waits for the `data-print-ready` flag, then captures
 * `page.pdf()` (vector, selectable text) or `page.screenshot()` (HD PNG) at the
 * template's natural size. Because it re-uses the SAME Preview component +
 * Tailwind + next/font as the editor, the output is pixel-identical to the live
 * preview — and Chrome renders gradient `bg-clip-text` text natively, so no
 * html2canvas workarounds.
 *
 * Form values arrive in the URL *hash* (not the query): unlimited Unicode
 * (Marathi/Hindi) survives without edge URL-length limits and never hits logs.
 *   /print/<id>?locale=mr#<encodeURIComponent(JSON.stringify(values))>
 *
 * Rendered from a thin server `page.jsx` that marks the route `noindex` (these
 * capture pages must never appear in search results).
 */
export default function PrintView({ templateId }) {
  const template = getTemplateById(templateId)
  const [state, setState] = useState(null) // { values, locale } — resolved after mount

  // Decode values from the hash + locale from the query (client-only).
  useEffect(() => {
    let values = {}
    try {
      const raw = window.location.hash.slice(1)
      if (raw) values = JSON.parse(decodeURIComponent(raw))
    } catch {
      values = {}
    }
    const locale = new URLSearchParams(window.location.search).get('locale') || 'en'
    setState({ values, locale })
  }, [])

  // Signal "ready to capture" once values are applied AND web fonts have painted.
  useEffect(() => {
    if (!state || !template) return
    let cancelled = false
    const flag = () => {
      if (!cancelled) document.documentElement.setAttribute('data-print-ready', '1')
    }
    if (document.fonts?.ready) {
      // Two rAFs ensure layout/paint settled after fonts swap in.
      document.fonts.ready.then(() =>
        requestAnimationFrame(() => requestAnimationFrame(flag)),
      )
    } else {
      requestAnimationFrame(flag)
    }
    return () => {
      cancelled = true
    }
  }, [state, template])

  // Hard reset so the capture box sits flush at (0,0) for an exact clip.
  const reset = (
    <style>{`html,body{margin:0!important;padding:0!important;background:#fff!important}`}</style>
  )

  if (!template) {
    return (
      <div data-print-ready="1" style={{ padding: 24, fontFamily: 'sans-serif' }}>
        {reset}
        Template not found
      </div>
    )
  }

  const { width, height, Preview } = template

  // Pre-decode placeholder (kept un-flagged so the API never captures too early).
  if (!state) {
    return (
      <div style={{ width, height, background: '#fff' }}>
        {reset}
      </div>
    )
  }

  return (
    <I18nProvider initialLocale={state.locale}>
      {reset}
      <div data-export-capture style={{ width, height, background: '#fff', overflow: 'hidden' }}>
        <Preview values={state.values} />
      </div>
    </I18nProvider>
  )
}
