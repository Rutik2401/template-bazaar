/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // The export API launches headless Chrome. These native/heavy packages must
  // stay external (not bundled) so Vercel traces & ships the Chromium binary.
  experimental: {
    serverComponentsExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
    // The Chromium binary is loaded from disk at runtime (not `require`d), so the
    // tracer won't include it automatically — force it into the export function.
    outputFileTracingIncludes: {
      '/api/export': ['./node_modules/@sparticuz/chromium/bin/**'],
    },
  },
  // Long-lived immutable caching for fingerprint-stable static assets (fonts +
  // images) improves repeat-visit performance and Core Web Vitals. Next already
  // sets immutable caching for /_next/static, so we only cover /public assets.
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:file*(.svg|.png|.jpg|.jpeg|.webp|.ico|.woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
