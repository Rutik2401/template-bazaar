'use client'

import { formatDate, toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Clean professional A4 invoice — header band, billed-to block, an itemised
 * table parsed from a textarea ("Item | Qty | Price" per line) and a total.
 * Natural design size: 794 × 1123 (A4 portrait @ 96dpi).
 */
export default function BusinessInvoice({ values }) {
  const { t } = useI18n()
  const business = values.businessName?.trim() || 'Mehta Solutions'
  const invoiceNo = values.invoiceNumber?.trim() || 'INV-2026-014'
  const date = formatDate(values.date, '14 June 2026')
  const billedTo = values.personName?.trim() || 'Sharma Enterprises'
  const amount = values.amount?.trim() || '₹ 48,500'

  const rows = toList(values.items, { separator: /\n/ }).map((line) => {
    const [item = '', qty = '', price = ''] = line.split('|').map((s) => s.trim())
    return { item, qty, price }
  })
  const items = rows.length
    ? rows
    : [
        { item: 'Brand Strategy & Identity', qty: '1', price: '₹ 18,000' },
        { item: 'Website Design (5 pages)', qty: '1', price: '₹ 22,000' },
        { item: 'Social Media Kit', qty: '3', price: '₹ 8,500' },
      ]

  const monogram = (business.charAt(0) || 'M').toUpperCase()

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] flex-col overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* top accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600" />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="flex items-start justify-between px-14 pt-12">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-3xl font-bold text-white shadow-lg shadow-indigo-200">
            {monogram}
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-slate-900">{business}</p>
            <p className="text-[13px] text-slate-400">{t('template.common.contactUs', 'Contact')}</p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900">
            {t('template.common.invoice', 'Invoice')}
          </h1>
          <p className="mt-1 text-[14px] font-semibold text-indigo-600">{invoiceNo}</p>
        </div>
      </header>

      {/* ── Meta: billed to + date ──────────────────────────────────────── */}
      <section className="mt-10 flex items-stretch justify-between gap-6 px-14">
        <div className="flex-1 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            {t('template.common.billedTo', 'Billed To')}
          </p>
          <p className="mt-2 text-[20px] font-semibold text-slate-900">{billedTo}</p>
        </div>
        <div className="flex w-56 flex-col justify-center rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-300">
            {t('template.common.date', 'Date')}
          </p>
          <p className="mt-2 text-[20px] font-semibold">{date}</p>
        </div>
      </section>

      {/* ── Items table ─────────────────────────────────────────────────── */}
      <section className="mt-10 px-14">
        <div className="grid grid-cols-[1fr_80px_140px] rounded-t-xl bg-slate-900 px-6 py-3.5 text-[12px] font-bold uppercase tracking-wider text-white">
          <span>Description</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>
        <div className="rounded-b-xl ring-1 ring-slate-100">
          {items.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_80px_140px] items-center px-6 py-4 text-[15px] ${
                i % 2 ? 'bg-slate-50/70' : 'bg-white'
              }`}
            >
              <span className="font-medium text-slate-800">{row.item || '—'}</span>
              <span className="text-center text-slate-500">{row.qty || '1'}</span>
              <span className="text-right font-semibold text-slate-900">{row.price || '—'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Total ───────────────────────────────────────────────────────── */}
      <section className="mt-8 flex justify-end px-14">
        <div className="flex w-80 items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 px-7 py-5 text-white shadow-xl shadow-indigo-200">
          <span className="text-[14px] font-semibold uppercase tracking-[0.18em]">
            {t('template.common.total', 'Total')}
          </span>
          <span className="font-display text-3xl font-extrabold">{amount}</span>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t border-slate-100 px-14 py-8">
        <p className="text-[13px] text-slate-400">
          Thank you for your business. Payment is due within 15 days of the invoice date.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-slate-800">{business}</p>
      </footer>

      {/* faint watermark */}
      <span className="pointer-events-none absolute bottom-24 right-10 select-none font-display text-[200px] font-bold leading-none text-slate-900/[0.03]">
        {monogram}
      </span>
    </div>
  )
}
