/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://news-backend-qf0h.onrender.com/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**',
    }]
  }
};

module.exports = nextConfig;
