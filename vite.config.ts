import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import wasm from 'vite-plugin-wasm' // Support for WebAssembly
import topLevelAwait from 'vite-plugin-top-level-await' // Support for top-level await

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
