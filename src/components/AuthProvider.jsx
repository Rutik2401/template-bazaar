'use client'

import { SessionProvider } from 'next-auth/react'

/**
 * Client wrapper for NextAuth's SessionProvider so `useSession()` works in the
 * navbar, editor, etc. Mounted once near the root in app/layout.jsx. When auth
 * isn't configured yet, the session simply resolves to "unauthenticated" — the
 * free experience is unaffected.
 */
export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}
