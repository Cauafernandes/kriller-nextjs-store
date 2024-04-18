/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    largePageDataBytes: 128 * 20000,
  },
};

export default nextConfig;
