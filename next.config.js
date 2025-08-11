/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        }
      ],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  