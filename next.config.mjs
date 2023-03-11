/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'enzomourany.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'enzomourany.fr',
        defaultLocale: 'fr',
        http: true,
      },
    ],
  },
};

export default nextConfig;