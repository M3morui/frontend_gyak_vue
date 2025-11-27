import { defineStore } from 'pinia'
import axios from 'axios'

export const usePizzasStore = defineStore('pizzas', {
  state: () => ({
    pizzas: []
  }),
  actions: {
    async fetchPizzas() {
      try {
        const response = await axios.get('http://localhost:3000/pizzas')
        this.pizzas = response.data.pizzas ? response.data.pizzas : response.data
      } catch (error) {
        console.error('Hiba a pizzák betöltésekor:', error)
      }
    }
  }
})