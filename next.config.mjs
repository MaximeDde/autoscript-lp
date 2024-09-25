/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // Add the images configuration
    images: {
        domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};

export default nextConfig;
