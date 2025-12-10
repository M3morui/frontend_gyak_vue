import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Motorok from '../pages/Motorok.vue'
import MotorDetails from '../pages/MotorDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/motorok', name: 'motorok', component: Motorok },
  { path: '/motorok/:id', name: 'motor',component: MotorDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})