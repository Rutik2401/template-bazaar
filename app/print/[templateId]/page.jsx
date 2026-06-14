import PrintView from '@/views/PrintView.jsx'

// These pages exist only as a render target for the PDF/PNG export API. They
// must never be indexed or followed by crawlers.
export const metadata = {
  robots: { index: false, follow: false, nocache: true },
}

export default function Page({ params }) {
  return <PrintView templateId={params.templateId} />
}
