/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@monorepo/ui'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
