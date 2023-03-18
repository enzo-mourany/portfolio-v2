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
  },
};

export default nextConfig;