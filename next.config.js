/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/graphql/:path*',
          destination: 'https://localhost:443/graphql/:path*',
        },
        {
          source: '/api/:path*',
          destination: 'http://localhost:4002/api/:path*',
        },
      ]
    }
  },
}

module.exports = nextConfig
