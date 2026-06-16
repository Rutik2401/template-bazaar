/**
 * Edge-safe NextAuth (Auth.js v5) base config.
 *
 * Kept free of Node-only code (no DB adapter, no node:crypto) so it can be
 * imported by both the full server instance (`src/auth.js`) AND the edge
 * middleware (`middleware.js`). Session strategy is JWT, so no database is
 * needed for sign-in to work — only the env vars below.
 *
 * Required env (see .env.example):
 *   AUTH_SECRET         any long random string (`npx auth secret` generates one)
 *   AUTH_GOOGLE_ID      Google OAuth client id
 *   AUTH_GOOGLE_SECRET  Google OAuth client secret
 *
 * The free funnel never touches auth — login is only needed to unlock premium
 * downloads (the gate lives in app/api/export, via src/lib/entitlements).
 */
import Google from 'next-auth/providers/google'

// Only register Google when its credentials are present, so the app still
// builds and runs (free templates fully work) before auth is configured.
const providers = []
if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  )
}

// ── Email OTP (passwordless) — scaffold ────────────────────────────────────
// "Google + OTP" was the chosen design. Real numeric-OTP delivery needs two
// pieces of infrastructure this project doesn't have yet:
//   1. an email/SMS sender (e.g. Resend, AWS SES, Twilio), and
//   2. a short-lived code store (e.g. Upstash Redis, or the DB added in phase C).
// To turn it on, add a Credentials provider here whose `authorize({ email, code })`
// verifies the code against that store, e.g.:
//
//   import Credentials from 'next-auth/providers/credentials'
//   providers.push(Credentials({
//     id: 'otp',
//     name: 'Email OTP',
//     credentials: { email: {}, code: {} },
//     authorize: async ({ email, code }) => {
//       const ok = await verifyOtp(email, code)   // your store + sender
//       return ok ? { email, name: email.split('@')[0] } : null
//     },
//   }))
//
// Until then, Google is the active sign-in method.

/** @type {import('next-auth').NextAuthConfig} */
export const authConfig = {
  providers,
  trustHost: true,
  session: { strategy: 'jwt' },
  pages: {
    // No bespoke pages yet — NextAuth's default screens are used. Sign-in is
    // also triggered inline from the navbar / editor via signIn('google').
  },
  callbacks: {
    /**
     * Runs in middleware for matched (protected) routes. Public routes are not
     * matched at all (see middleware.js), so the free funnel is never gated.
     */
    authorized({ auth }) {
      return Boolean(auth?.user)
    },
  },
}
