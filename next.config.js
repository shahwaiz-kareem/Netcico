/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["imgs.search.brave.com","www.unfe.org","images.app.goo.gl,images.unsplash.com" , "*"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
}

module.exports = nextConfig
