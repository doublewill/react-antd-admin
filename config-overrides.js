const { override, addWebpackAlias } = require("customize-cra");

const path = require("path");

module.exports = override(addWebpackAlias({
  '@': path.resolve('./src'),
  'pages': path.resolve('./src/pages'),
  'store': path.resolve('./src/store'),
}))

