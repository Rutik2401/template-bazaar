'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Navbar auth control. Signed out → a "Sign in" button (Google). Signed in →
 * the user's avatar + a "Sign out" action. Login is never required to browse,
 * preview or download free templates — this is purely for unlocking premium.
 */
export default function AuthButton() {
  const { t } = useI18n()
  const { data: session, status } = useSession()

  // Avoid a flash of the wrong state during the initial session fetch.
  if (status === 'loading') return null

  if (session?.user) {
    const name = session.user.name || session.user.email || 'Account'
    const initial = name.trim().charAt(0).toUpperCase() || 'U'
    return (
      <div className="flex items-center gap-2">
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt={name}
            className="h-8 w-8 rounded-full ring-1 ring-slate-200"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-white">
            {initial}
          </span>
        )}
        <button
          type="button"
          onClick={() => signOut()}
          className="hidden rounded-lg px-2.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink sm:inline-flex"
        >
          {t('auth.signOut', 'Sign out')}
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => signIn('google')}
      className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink"
    >
      {t('auth.signIn', 'Sign in')}
    </button>
  )
}
