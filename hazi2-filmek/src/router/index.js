import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Filmek from '../pages/Filmek.vue'
import FilmDetails from '../pages/FilmDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/filmek', name: 'filmek', component: Filmek },
  { path: '/filmek/:id', name: 'film',component: FilmDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})