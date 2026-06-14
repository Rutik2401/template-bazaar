/**
 * Server-only helper that emits a JSON-LD <script> into the document.
 *
 * Intentionally has NO 'use client' directive: it is rendered exclusively from
 * server components (app/layout.jsx and the route page.jsx files), so the
 * structured data lands in the initial HTML where crawlers read it — never
 * shipped to the client bundle.
 *
 * @param {{ data: object | object[] }} props
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input flows in here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
