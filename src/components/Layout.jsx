import Navbar from './Navbar.jsx'

/**
 * App shell. Pages that need a full-bleed working area (the editor) can opt out
 * of the centered container by rendering their own layout — this just provides
 * the persistent navbar + page background.
 */
export default function Layout({ children, bare = false }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className={bare ? 'flex-1' : 'flex-1 py-8 sm:py-12'}>{children}</main>
    </div>
  )
}
