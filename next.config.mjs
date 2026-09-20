/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';
const SIM_PATH = '/discere/matematika';
const localSupabaseConnectSrc = isDev
  ? ' http://127.0.0.1:54321 http://localhost:54321 ws://127.0.0.1:54321 ws://localhost:54321'
  : '';

const buildCSP = (allowEval) => [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'" + (allowEval ? " 'unsafe-eval'" : "")
    + " https://www.googletagmanager.com https://plausible.io",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://*.supabase.co https://*.supabase.io https://www.google-analytics.com https://plausible.io"
    + localSupabaseConnectSrc,
  "img-src 'self' data: blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "frame-src 'self' blob:",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },

  async redirects() {
    return [
      { source: '/pricing', destination: '/pretplata', permanent: false },
      { source: '/cijene', destination: '/pretplata', permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: SIM_PATH,
        headers: [{ key: 'Content-Security-Policy', value: buildCSP(true) }],
      },
      {
        source: '/((?!discere/matematika$).*)',
        headers: [{ key: 'Content-Security-Policy', value: buildCSP(isDev) }],
      },
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  experimental: {
    optimizePackageImports: [
      'react',
      'react-dom',
    ],
  },

  productionBrowserSourceMaps: false,
};

export default nextConfig;
