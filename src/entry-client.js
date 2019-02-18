import { createApp } from './main'

const { app, router } = createApp()

router.onReady(() => {
  console.log('app ===> ', app)
  app.$mount('#app')
})
