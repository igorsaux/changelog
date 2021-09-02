import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime',
        'whatwg-fetch'
      ]
    })
  ],
  mode: 'production'
})
