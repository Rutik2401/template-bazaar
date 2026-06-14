import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

/**
 * App shell. Pages that need a full-bleed working area (the editor) opt in via
 * `bare` — a full-height workspace with no footer (it has its own sticky export
 * bar). Everything else gets the centered container + the global footer.
 */
export default function Layout({ children, bare = false }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className={bare ? 'flex-1' : 'flex-1 py-8 sm:py-12'}>{children}</main>
      {!bare && <Footer />}
    </div>
  )
}
