import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,webp,png,svg,ttf,mp4}'],
      },
      manifest: {
        name: '2026新年快乐',
        short_name: '2026新年快乐',
        description: '2026新年快乐',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        display_override: ['standalone', 'fullscreen'],
        theme_color: '#d84e47',
        background_color: '#d84e47',
        orientation: 'portrait',
        icons: [
          {
            src: '/assets/images/horse180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/assets/images/horse192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/images/horse512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
