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
      linkMediaOptions:{
        addMediaScreen: true,
        log: true,
        xhtml: false,
        basePath: '/',
      },
      png: {
        compressionLevel: 9,
        quality: 60
      },
      // or using a custom background color
      // darkResizeOptions: { background: '#1f1f1f' },
    }, [... AllAppleDeviceNames]),
    images: ['public/nasdaq-icon-512.png']
  })
