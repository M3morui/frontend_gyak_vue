import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Pizzas from '../pages/Pizzas.vue'
import PizzaDetails from '../pages/PizzaDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/pizzas', name: 'pizzas', component: Pizzas },
  { path: '/pizzas/:id', name: 'pizza',component: PizzaDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})