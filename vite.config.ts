import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
// import replace from '@rollup/plugin-replace'


const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  registerType: 'prompt',
  base: '/',
  workbox: {
    runtimeCaching: [{
      urlPattern: ({ url }) => {
        return url.pathname.startsWith('/api')
      },
      handler: "CacheFirst" as const,
      options: {
        cacheName: "api-cache",
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }],
  },
  // includeAssets: [
  //   "**/*"
  // ],
  manifest: {
    name: 'PWA Router',
    short_name: 'PWA Router',
    theme_color: '#ffffff',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: 'thndr.png', // <== don't add slash, for testing
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
