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
      <div className="flex items-center gap-1.5">
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
          className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink sm:px-2.5 sm:py-2 sm:text-sm sm:font-semibold"
          title={t('auth.signOut', 'Sign out')}
        >
          {/* Logout icon — visible on mobile, labeled on desktop */}
          <svg viewBox="0 0 24 24" className="h-4 w-4 sm:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="hidden sm:inline">{t('auth.signOut', 'Sign out')}</span>
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
