import Link from 'next/link'

/**
 * Template Bazaar logo: a market-stall mark (an arched canopy over a
 * counter — the silhouette of a bazaar stall) rendered in the brand
 * gold→maroon gradient, paired with the wordmark. Links home.
 */
export default function Brand({ className = '' }) {
  return (
    <Link
      href="/"
      aria-label="Template Bazaar — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-gold-400 to-maroon-500 shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
        {/* subtle top sheen */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/15" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-[22px] w-[22px] text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* stall canopy: a scalloped market awning */}
          <path d="M3.5 9.5c1.4 0 1.4-1.6 2.8-1.6S7.7 9.5 9.1 9.5s1.4-1.6 2.9-1.6 1.4 1.6 2.8 1.6 1.5-1.6 2.9-1.6 1.4 1.6 2.8 1.6" />
          {/* awning roofline */}
          <path d="M4 6.6h16" />
          {/* stall posts + counter */}
          <path d="M5 9.7v10M19 9.7v10" />
          <path d="M3.5 19.7h17" />
          {/* the goods on the counter — three stacked templates */}
          <path d="M8.4 13.2h7.2M9.2 16h5.6" strokeWidth="1.6" />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-ink">
        Template <span className="gradient-text">Bazaar</span>
      </span>
    </Link>
  )
}
