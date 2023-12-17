import {
  combinePresetAndAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
  AllAppleDeviceNames,
  } from '@vite-pwa/assets-generator/config'


  export default defineConfig({
    headLinkOptions: {
      preset: '2023'
    },
    preset: combinePresetAndAppleSplashScreens(minimal2023Preset, {
      // dark splash screens using black background (the default)
      darkResizeOptions: { background: 'black', fit: 'contain' },
      linkMediaOptions:{
        addMediaScreen: true,
        log: true,
        xhtml: false
      },
      png: {
        compressionLevel: 9,
        quality: 60
      },
      name: (landscape, size, dark) => {
        return `apple-splash-${landscape ? 'landscape' : 'portrait'}-${typeof dark === 'boolean' ? (dark ? 'dark-' : 'light-') : ''}${size.width}x${size.height}.png`
      }
      // or using a custom background color
      // darkResizeOptions: { background: '#1f1f1f' },
    }, [... AllAppleDeviceNames]),
    images: ['public/nasdaq-icon-512.png']
  })
