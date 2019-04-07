import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { createRouter } from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(elementUi)

export const createApp = () => {
  const router = createRouter()

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })

  return { app, router }
}
