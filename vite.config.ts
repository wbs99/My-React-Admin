import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://shengxinjing.cn:7001/',
        changeOrigin: true,
        rewrite: path => path.replace(/\/api/, '')
      }
    }
  }
})