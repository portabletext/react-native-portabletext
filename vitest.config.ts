import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['vitest-react-native/setup'],
    globals: true,
    server: {
      deps: {
        external: ['react-native'],
      },
    },
  },
})
