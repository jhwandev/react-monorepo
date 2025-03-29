/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@atomic/ui'],
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
      exclude: /node_modules/,
    });
    return config;
  },
}

module.exports = nextConfig 