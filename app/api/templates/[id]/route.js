import { getTemplateById } from '@/templates'

// GET /api/templates/:id — metadata for a single template.
export function GET(_request, { params }) {
  const template = getTemplateById(params.id)
  if (!template) {
    return Response.json({ error: 'Template not found' }, { status: 404 })
  }
  const { Preview, ...meta } = template
  return Response.json(meta)
}
