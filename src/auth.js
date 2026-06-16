/**
 * Full server-side NextAuth (Auth.js v5) instance.
 *
 * Exposes:
 *   - handlers  → mounted at app/api/auth/[...nextauth]/route.js
 *   - auth      → read the session in Server Components / Route Handlers
 *                 (used by app/api/export to enforce the premium paywall)
 *   - signIn/signOut → server actions (the client uses next-auth/react instead)
 *
 * The config lives in src/auth.config.js so the edge middleware can share it.
 */
import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
