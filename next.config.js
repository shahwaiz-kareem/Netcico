/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: "shorturl.at",
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: "localhost",
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
