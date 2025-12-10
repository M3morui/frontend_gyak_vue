import { defineStore } from 'pinia'

export const useMotorStore = defineStore('motor', {
  state: () => ({
    motors: []
  }),
  actions: {
    setMotors(motors) {
      this.motors = motors
    }
  }
})
