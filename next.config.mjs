/** @type {import('next').NextConfig} */

// ── Content Security Policy ────────────────────────────────────────────────
// Note: 'unsafe-inline' is required in script-src because:
//   1. Next.js injects inline hydration scripts at runtime (no nonce support without custom server)
//   2. The chapter viewer renders srcDoc iframes with sandbox="allow-same-origin",
//      which means the iframe inherits the parent CSP — and each chapter is an
//      inline <script> block. Removing 'unsafe-inline' would break all chapters.
// Even with 'unsafe-inline', CSP still meaningfully:
//   - Blocks object/embed/Flash via object-src 'none'
//   - Limits data exfiltration via connect-src whitelist
//   - Prevents base-tag injection via base-uri 'self'
//   - Prevents clickjacking via frame-ancestors 'self'
//   - Blocks external scripts not on the whitelist
// 'unsafe-eval' policy:
//   - dev: Turbopack + React dev mode require eval() everywhere (HMR, callstack rebuild)
//   - prod: kept OUT of the global CSP (eval-free), EXCEPT the math simulator route, whose
//     graph plotting compiles user functions via `new Function(...)`. Scoping it to that one
//     route keeps the rest of the app as locked-down as before.
const isDev = process.env.NODE_ENV !== 'production';
const SIM_PATH = '/discere/matematika';
const localSupabaseConnectSrc = isDev
  ? ' http://127.0.0.1:54321 http://localhost:54321 ws://127.0.0.1:54321 ws://localhost:54321'
  : '';

const buildCSP = (allowEval) => [
  "default-src 'self'",
  // Next.js bundles + inline hydration + srcDoc iframe inline scripts (+ eval where allowed)
  "script-src 'self' 'unsafe-inline'" + (allowEval ? " 'unsafe-eval'" : "")
    + " https://www.googletagmanager.com https://plausible.io",
  // Inline styles + Google Fonts CSS
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Google Fonts actual font files
  "font-src 'self' https://fonts.gstatic.com",
  // Supabase API + own API routes + GA beacons
  "connect-src 'self' https://*.supabase.co https://*.supabase.io https://www.google-analytics.com https://plausible.io"
    + localSupabaseConnectSrc,
  // Canvas toDataURL → data: / video/audio blobs → blob:
  "img-src 'self' data: blob:",
  // No Flash, no plugins
  "object-src 'none'",
  // Prevent base-tag injection attacks
  "base-uri 'self'",
  // Prevent clickjacking — only same origin can iframe this app
  "frame-ancestors 'self'",
  // Allow srcDoc chapter iframes (they are same-origin due to allow-same-origin)
  "frame-src 'self' blob:",
].join('; ');

// Non-CSP security headers (applied to every route).
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  // @supabase/ssr uses Web Locks API for token refresh serialization.
  // React Strict Mode double-mounts components in dev, leaving orphaned locks
  // that cause "lock released because another request stole it" errors.
  reactStrictMode: false,

  // Preusmjeri mrtve konverzijske rute (ugrađene u 100+ CTA-ova kroz skripte/poglavlja)
  // na stvarnu cjenovničku stranicu. Query paramovi (?ctx=, ?promo=, ?cta=) se čuvaju.
  async redirects() {
    return [
      { source: '/pricing', destination: '/pretplata', permanent: false },
      { source: '/cijene', destination: '/pretplata', permanent: false },
    ];
  },

  async headers() {
    return [
      // CSP for the math simulator route — allows eval (graph plotting via new Function).
      // Listed first; its source is mutually exclusive with the global rule below so the
      // browser never receives two (intersecting) CSP headers for this path.
      {
        source: SIM_PATH,
        headers: [{ key: 'Content-Security-Policy', value: buildCSP(true) }],
      },
      // CSP for every OTHER route — eval-free in prod (eval only in dev for Turbopack).
      {
        source: '/((?!discere/matematika$).*)',
        headers: [{ key: 'Content-Security-Policy', value: buildCSP(isDev) }],
      },
      // Non-CSP security headers everywhere.
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Enable supported optimizations.
  experimental: {
    optimizePackageImports: [
      'react',
      'react-dom',
    ],
  },

  // Explicit Turbopack config prevents mixed webpack/turbopack error on Next 16.
  // Set root to project directory to prevent Turbopack from scanning the entire Desktop.
  turbopack: {
    root: new URL('.', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  },

  // Reduce memory during build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
