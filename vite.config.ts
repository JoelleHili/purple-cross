import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_index.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
