const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@inet': path.resolve(__dirname, 'src'),
  }),
)
