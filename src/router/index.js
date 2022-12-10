import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SpotsView from '../views/SpotsView.vue'
import CreateSpotView from '../views/CreateSpotView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/spots',
    name: 'spots',
    component: SpotsView,
  },
  {
    path: '/createspot',
    name: 'createspot',
    component: CreateSpotView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
