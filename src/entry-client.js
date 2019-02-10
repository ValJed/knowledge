import { createApp } from './app'

console.log('=============> in entry client <================')
const { app } = createApp()

console.log('app ===> ', app)
app.$mount('#app')
