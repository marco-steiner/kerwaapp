import DefaultLayout from '~/layouts/Default.vue'

//import VueOffline from 'vue-offline'


//global stylesheet (Jetzt ueber sass-loader-plugin)
//import '~/assets/style/_variables.scss'
//import '~/assets/style/styles.scss'

export default function (Vue, { head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  if (isClient) {
    //Vue.use(VueOffline);
  }

  // Remove "viewport" meta tag
  const gIndex = head.meta.findIndex(e => e.name === 'viewport')
  if (gIndex !== -1) head.meta.splice(gIndex, 1)

  // Add a meta tag
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover'
  })

  // Add Splashscreen Images
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2048-2732.png',
    media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2732-2048.png',
    media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1668-2388.png',
    media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2388-1668.png',
    media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1668-2224.png',
    media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2224-1668.png',
    media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1536-2048.png',
    media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2048-1536.png',
    media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1242-2688.png',
    media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2688-1242.png',
    media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1125-2436.png',
    media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2436-1125.png',
    media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-828-1792.png',
    media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1792-828.png',
    media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1242-2208.png',
    media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-2208-1242.png',
    media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-750-1334.png',
    media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1334-750.png',
    media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-640-1136.png',
    media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
  })
  head.link.push({
    rel: 'apple-touch-startup-image',
    href: 'https://app.kerwacrew.de/wp-content/themes/kerwaapp/img/apple-splash-1136-640.png',
    media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
  })
  
}
