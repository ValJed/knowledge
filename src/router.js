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
        component: () => import('./views/Home.vue')
      },
      {
        path: '/:id',
        name: 'User',
        component: () => import('./views/User.vue')

      },
      {
        path: '/:id/:project',
        name: 'Project',
        component: () => import('./views/Project.vue')
      },
      {
        path: '*',
        name: '404',
        component: () => import('./views/404.vue')
      }
    ]
  })
}
