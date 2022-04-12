/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://localhost:443/'
      },
    ]
  },
};

module.exports = nextConfig;
