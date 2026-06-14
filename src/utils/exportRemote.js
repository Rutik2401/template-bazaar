/**
 * Print-quality export via the server (/api/export → headless Chrome).
 *
 * Produces a VECTOR PDF (selectable text, sharp at any zoom) or an HD PNG (3×
 * device pixels) — Canva-grade output, far beyond the client html2canvas path.
 * POSTs the live form values, then streams the returned file to a download.
 *
 * @param {object} opts
 * @param {string} opts.templateId
 * @param {Record<string,string>} opts.values
 * @param {string} opts.locale       Active UI locale, so text exports in-language.
 * @param {'pdf'|'png'} opts.format
 * @param {number} opts.width        Template natural width (px).
 * @param {number} opts.height       Template natural height (px).
 * @param {string} [opts.fileName]
 * @returns {Promise<void>}
 */
export async function exportViaServer({ templateId, values, locale, format, width, height, fileName }) {
  const res = await fetch('/api/export', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ templateId, values, locale, format, width, height, fileName }),
  })

  if (!res.ok) {
    let detail = ''
    try {
      detail = (await res.json())?.detail || ''
    } catch {
      /* non-JSON error body — ignore */
    }
    throw new Error(`Export failed (${res.status})${detail ? `: ${detail}` : ''}`)
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName || `template-bazaar.${format === 'png' ? 'png' : 'pdf'}`
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}
