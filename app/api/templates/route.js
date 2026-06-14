import { templateList } from '@/templates'
import { categories } from '@/data/categories'

// Drop the React Preview component — keep only JSON-serializable metadata.
function toMeta(template) {
  const { Preview, ...meta } = template
  return meta
}

// GET /api/templates — list all categories and template metadata.
export function GET() {
  return Response.json({
    categories,
    templates: templateList.map(toMeta),
  })
}
