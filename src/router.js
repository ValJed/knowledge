import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home')
      },
      {
        path: '/:id',
        name: 'User',
        component: () => import('./views/User')

      },
      {
        path: '/:id/:project',
        name: 'Project',
        component: () => import('./views/Project')
      },
      {
        path: '*',
        name: '404',
        component: () => import('./views/404')
      }
    ]
  })
}
