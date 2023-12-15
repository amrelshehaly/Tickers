import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
// import replace from '@rollup/plugin-replace'


const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  registerType: 'autoUpdate',
  base: '/',
  workbox: {
    runtimeCaching: [{
      urlPattern: ({ url }) => {
        return url.pathname.startsWith('/api')
      },
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
  // {
  //   urlPattern: ({ request }) => {
  //     return request.destination === 'script';
  //   },
  //   handler: "CacheFirst" as const,
  //   options: {
  //     cacheName: "scripts",
  //     cacheableResponse: {
  //       statuses: [0, 200],
  //     },
  //   }
  // }
],
    // globPatterns: ['**/src/**/*'],
    // globIgnores: [
    //   "**/node_modules/**/*",
    //   "sw.js",
    //   "workbox-*.js"
    // ],
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
    
    icons: [
      {
        src: 'nasdaq.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
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

const replaceOptions = { __DATE__: new Date().toISOString() }
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'
const selfDestroying = process.env.SW_DESTROY === 'true'

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
  pwaOptions.strategies = 'injectManifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
}

if (claims)
  pwaOptions.registerType = 'autoUpdate'

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = 'true'
}

if (selfDestroying)
  pwaOptions.selfDestroying = selfDestroying

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions),
    // replace({ preventAssignment: true, values: replaceOptions}),
  ],
})
