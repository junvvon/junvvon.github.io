const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [optimizedImages, {}],
  withFonts(),
  {
    images: {
      domains: ['user-images.githubusercontent.com'],
    },
  },
]);
