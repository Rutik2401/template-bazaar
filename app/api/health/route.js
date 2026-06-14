export const dynamic = 'force-dynamic'

// GET /api/health — simple liveness probe for the deployed backend.
export function GET() {
  return Response.json({
    status: 'ok',
    service: 'template-bazaar-api',
    timestamp: new Date().toISOString(),
  })
}
