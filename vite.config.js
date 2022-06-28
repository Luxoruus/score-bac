import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    symlinks: false,
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      vue: path.resolve(`./node_modules/vue`)
    }
  },
  base: '/score-bac/',
})
