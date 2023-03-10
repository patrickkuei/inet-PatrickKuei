module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@inet(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '^.+\\.svg$': 'svg-jest',
    '^.+\\.(jpg|png)$': 'jest-transform-stub',
    '^.+\\.css$': 'jest-transform-css',
  },
}
