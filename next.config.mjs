// Only import Cloudflare helpers in development/local environments
let initOpenNextCloudflareForDev

if (process.env.NODE_ENV !== 'production') {
  const cloudflareModule = await import('@opennextjs/cloudflare')
  initOpenNextCloudflareForDev = cloudflareModule.initOpenNextCloudflareForDev
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    // Use direct image URLs in local/dev to avoid optimizer DNS/IP restrictions on some external hosts.
    unoptimized: process.env.NODE_ENV !== 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
}

if (initOpenNextCloudflareForDev) {
  initOpenNextCloudflareForDev()
}

export default nextConfig
