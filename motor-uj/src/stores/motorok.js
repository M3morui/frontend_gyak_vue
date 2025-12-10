import { defineStore } from 'pinia'
import axios from 'axios'

export const useMotorokStore = defineStore('motorok', {
  state: () => ({ motorok: [] }),
  actions: {
    async fetchMotorok() {
      const response = await axios.get('http://localhost:3000/motorok')
      this.motorok = response.data
    }
  }
})
