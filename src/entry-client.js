import { createApp } from './main'

console.log('=============> in entry client <================')
const { app, router } = createApp()

router.onReady(() => {
  console.log('app ===> ', app)
  app.$mount('#app')
})
