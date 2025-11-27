import { defineStore } from 'pinia'
import axios from 'axios'

export const useFilmekStore = defineStore('filmek', {
  state: () => ({
    filmek: []
  }),
  actions: {
    async fetchFilmek() {
      try {
        const response = await axios.get('http://localhost:3000/filmek')
        this.filmek = response.data.filmek ? response.data.filmek : response.data
      } catch (error) {
        console.error('Hiba a filmek betöltésekor:', error)
      }
    }
  }
})