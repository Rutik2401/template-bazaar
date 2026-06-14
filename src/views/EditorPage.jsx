'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout.jsx'
import FormField from '@/components/FormField.jsx'
import TemplateStage from '@/components/TemplateStage.jsx'
import ExportBar from '@/components/ExportBar.jsx'
import Toast from '@/components/Toast.jsx'
import { useTemplateForm } from '@/hooks/useTemplateForm'
import { getTemplateById, localizedTemplate } from '@/templates'
import { getCategoryById } from '@/data/categories'
import { exportNodeToPdf } from '@/utils/exportPdf'
import { exportViaServer } from '@/utils/exportRemote'
import { slugify } from '@/utils/slug'
import { cn } from '@/utils/cn'
import { useI18n } from '@/i18n/I18nProvider'

export default function EditorPage({ templateId }) {
  const { t, locale } = useI18n()
  const template = getTemplateById(templateId)

  // Hooks must run unconditionally — safe because `template` is stable per route.
  const { values, update, reset } = useTemplateForm(template)
  const captureRef = useRef(null)
  const [busyFormat, setBusyFormat] = useState(null) // 'pdf' | 'png' | null
  const [toast, setToast] = useState('')
  const [mobileTab, setMobileTab] = useState('edit') // 'edit' | 'preview'

  if (!template) {
    return (
      <Layout>
        <div className="container-page text-center">
          <h1 className="text-2xl font-bold text-ink">{t('editor.templateNotFound')}</h1>
          <Link href="/" className="btn-primary mt-6">
            {t('common.backHome')}
          </Link>
        </div>
      </Layout>
    )
  }

  const category = getCategoryById(template.category)

  // Print-quality export via headless Chrome on the server: vector PDF (selectable
  // text) or HD PNG. Falls back to the legacy client-side capture only if the
  // server is unreachable (cold start / offline), so a download always succeeds.
  const handleExport = async (format) => {
    if (busyFormat) return
    setBusyFormat(format)
    const ext = format === 'png' ? 'png' : 'pdf'
    const title = values[template.fields[0]?.name] || template.name
    const fileName = `${slugify(title)}-laksh.${ext}`
    try {
      await exportViaServer({
        templateId,
        values,
        locale,
        format,
        width: template.width,
        height: template.height,
        fileName,
      })
      setToast(format === 'png' ? t('editor.imageDownloaded', 'Image downloaded') : t('editor.pdfDownloaded'))
    } catch (err) {
      console.error(err)
      // Last-resort client fallback (PDF only — the legacy html2canvas path).
      if (format === 'pdf') {
        try {
          await exportNodeToPdf(captureRef.current, { fileName })
          setToast(t('editor.pdfDownloaded'))
          return
        } catch (fallbackErr) {
          console.error(fallbackErr)
        }
      }
      setToast(t('editor.pdfError'))
    } finally {
      setBusyFormat(null)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Made with Laksh',
      text: 'Check out what I created on Laksh!',
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        /* user cancelled — fall through */
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href)
      setToast(t('editor.linkCopied'))
    } catch {
      setToast(t('editor.shareSoon'))
    }
  }

  return (
    <Layout bare>
      <div className="flex h-[calc(100dvh-4rem)] flex-col">
        {/* Sub header */}
        <div className="glass-bar flex items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={`/category/${template.category}`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white/70 text-ink-soft transition-colors hover:border-slate-300 hover:bg-white"
              aria-label={t('editor.backToTemplates')}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-ink">
                {localizedTemplate(template, 'name', locale)}
              </p>
              <p className="truncate text-xs text-ink-muted">
                {t(`categories.${template.category}.name`, category?.name)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={reset}
            className="hidden text-sm font-semibold text-ink-muted transition-colors hover:text-ink sm:inline"
          >
            {t('common.reset')}
          </button>
        </div>

        {/* Mobile segmented control */}
        <div className="grid grid-cols-2 gap-1 border-b border-slate-200 bg-slate-100/80 p-1 lg:hidden">
          {[
            ['edit', t('editor.fillDetails')],
            ['preview', t('editor.preview')],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setMobileTab(key)}
              className={cn(
                'rounded-lg py-2.5 text-sm font-semibold transition-all',
                mobileTab === key
                  ? 'bg-white text-ink shadow-sm ring-1 ring-black/5'
                  : 'text-ink-muted hover:text-ink-soft',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Two-panel work area */}
        <div className="min-h-0 flex-1">
          <div className="grid h-full lg:grid-cols-2">
            {/* FORM */}
            <div
              className={cn(
                'h-full overflow-y-auto px-5 py-7 sm:px-8 sm:py-9',
                mobileTab === 'preview' && 'hidden lg:block',
              )}
            >
              <div className="mx-auto max-w-md space-y-5 animate-fade-in">
                <p className="text-sm text-ink-muted">{t('editor.fillPrompt')}</p>
                {template.fields.map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    value={values[field.name]}
                    onChange={update}
                  />
                ))}
                <button
                  type="button"
                  onClick={reset}
                  className="btn-ghost w-full sm:hidden"
                >
                  {t('common.resetSample')}
                </button>
              </div>
            </div>

            {/* LIVE PREVIEW */}
            <div
              className={cn(
                'h-full overflow-y-auto bg-gradient-to-b from-slate-100 to-slate-200/60 lg:border-l lg:border-slate-200',
                mobileTab === 'edit' && 'hidden lg:block',
              )}
            >
              <div className="flex min-h-full items-start justify-center p-5 sm:p-8">
                <div className="w-full max-w-[460px]">
                  <TemplateStage template={template} values={values} captureRef={captureRef} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExportBar onExport={handleExport} onShare={handleShare} busyFormat={busyFormat} />
      </div>

      <Toast message={toast} onDismiss={() => setToast('')} />
    </Layout>
  )
}
