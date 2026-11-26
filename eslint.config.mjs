import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  {ignores: ['dist/**', 'lib/**', 'coverage/**']},
  {linterOptions: {reportUnusedDisableDirectives: 'off'}},
  ...compat.config({
    parserOptions: {
      ecmaFeatures: {modules: true},
      ecmaVersion: 9,
      sourceType: 'module',
    },
    extends: ['sanity', 'sanity/react', 'sanity/typescript', 'prettier'],
    rules: {'react/prop-types': 'off'},
  }),
]
