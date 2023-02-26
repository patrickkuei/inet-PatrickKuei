const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const jestConfig = require(path.resolve(__dirname, 'jest.config.js'))

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@inet': path.resolve(__dirname, 'src'),
    }),
  ),
  jest: (config) => {
    Object.assign(config, jestConfig)
    return config
  },
}
