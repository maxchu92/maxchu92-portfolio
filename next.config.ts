import type { NextConfig } from 'next';
const { version } = require('./package.json');

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    version,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/badge/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
