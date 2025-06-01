// next.config.js (or next.config.mjs)
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
        // port: '', // Add if you use a specific port for local images
        // pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1'
        // port: '',
        // pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.svgl.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**' // Or be more specific like '/a/**' if you know the path structure
      }
    ]
  }
}

export default nextConfig
