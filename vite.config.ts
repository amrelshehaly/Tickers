import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  registerType: 'autoUpdate',
  base: '/',
  workbox: {
    runtimeCaching: [{
      urlPattern: /^https:\/\/api\.polygon\.io\/v3\/reference\/tickers\/*/,
      handler: "NetworkFirst" as const,
      options: {
        cacheName: "api-cache",
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
  {
    urlPattern: ({ request }) => {
      return request.destination === 'image';
    },
    handler: "CacheFirst" as const,
    options: {
      cacheName: "images",
      cacheableResponse: {
        statuses: [0, 200],
      },
      expiration:{
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
        purgeOnQuotaError: true
      }
    }
  },
  {
    urlPattern: ({ request }) => {
      return request.destination === 'script';
    },
    handler: "CacheFirst" as const,
    options: {
      cacheName: "scripts",
      cacheableResponse: {
        statuses: [0, 200],
      },
    }
  }
],
  },
  includeAssets: [
    "**/*"
  ],
  manifest: {
    name: 'thndr app',
    short_name: 'thndr app',
    theme_color: '#ffffff',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    icons: [
      {
        src: 'nasdaq-icon.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: 'nasdaq-icon-512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  devOptions: {
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions),
  ],
})
