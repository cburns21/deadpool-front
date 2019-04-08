import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'Create a Team',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/create.vue')
    },
    {
      path: '/ballot',
      name: 'Fill Out Your Ballot',
      component: () => import(/* webpackChunkName: "about" */ './views/ballot.vue')
    },
    {
      path: '/teams',
      name: "Find Your Team",
      component: () => import('./views/teams.vue')
    }
  ]
})
