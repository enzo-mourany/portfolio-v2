/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/404',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;