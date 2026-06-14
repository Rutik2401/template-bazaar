/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
}

export default nextConfig
