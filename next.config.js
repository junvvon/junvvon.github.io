const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [optimizedImages, {}],
  [withBundleAnalyzer],
  withFonts(),
  {
    images: {
      domains: ['user-images.githubusercontent.com'],
    },
  },
]);
