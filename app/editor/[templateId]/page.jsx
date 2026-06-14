import EditorPage from '@/views/EditorPage.jsx'

export default function Page({ params }) {
  return <EditorPage templateId={params.templateId} />
}
