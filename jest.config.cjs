/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  snapshotFormat: {printBasicPrototype: false},
  transformIgnorePatterns: ['node_modules/(?!.pnpm|react-native|@react-native)'],
}

module.exports = config
