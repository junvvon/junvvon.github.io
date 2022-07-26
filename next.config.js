const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: { defaultLocale: 'ko', locales: ['ko', 'en'] },
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
