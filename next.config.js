const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
