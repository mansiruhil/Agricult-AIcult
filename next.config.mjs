/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure we're not generating a static site
  output: undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
