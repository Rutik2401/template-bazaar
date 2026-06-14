import Link from 'next/link'

/** Laksh wordmark + monogram. Links home. */
export default function Brand({ className = '' }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-maroon-500 text-lg font-bold text-white shadow-soft transition-transform group-hover:scale-105">
        L
      </span>
      <span className="text-xl font-extrabold tracking-tight text-ink">Laksh</span>
    </Link>
  )
}
