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
      component: () => import(/* webpackChunkName: "about" */ './views/create.vue'),
      props: {
        
      }
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
    },
    {
      path: '/leaderboard',
      name: "Your Team",
      component: () => import('./views/leaderboard.vue')
    }
  ]
})
