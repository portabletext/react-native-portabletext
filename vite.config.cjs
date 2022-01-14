const path = require('path')
const {defineConfig} = require('vite')
const dts = require('vite-dts').default

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['esm'],
      name: 'react-native-portable-text',
      fileName: (format) => `react-native-portable-text.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-native'],
      output: {
        // Since we publish our ./src folder, there's no point in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
  },
  plugins: [dts()],
})
