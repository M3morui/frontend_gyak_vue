import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pizzas from '../views/Pizzas.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/pizzas', name: 'Pizzas', component: Pizzas }
  ]
})

export default router