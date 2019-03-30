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
        component: () => import('./views/Home/Home.vue')
      },
      {
        path: '/:id',
        name: 'User',
        component: () => import('./views/User/User.vue')

      },
      {
        path: '/project',
        name: 'Project',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./views/Project/Project.vue')
      }
    ]
  })
}
