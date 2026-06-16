/**
 * App Router middleware — auth gate for protected areas only.
 *
 * It uses the EDGE-SAFE base config (src/auth.config.js), so it never pulls in
 * Node-only auth code. The `matcher` deliberately scopes it to `/account/*`
 * (the future signed-in dashboard) — every public route, including browsing,
 * previewing and downloading FREE templates, is left untouched so the funnel
 * stays frictionless. Premium download gating is enforced separately and
 * authoritatively in app/api/export.
 */
import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  matcher: ['/account/:path*'],
}
