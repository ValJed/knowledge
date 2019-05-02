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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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
