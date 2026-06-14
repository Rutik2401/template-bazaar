/**
 * Locale configuration. Adding a language = add an entry here + a dictionary
 * file in `./locales`, then register it in `./locales/index.js`.
 */
export const LOCALES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'mr', label: 'मराठी', short: 'मरा' },
  { code: 'hi', label: 'हिंदी', short: 'हिं' },
]

export const DEFAULT_LOCALE = 'en'

/** localStorage key used to remember the user's choice across visits. */
export const STORAGE_KEY = 'laksh.locale'
