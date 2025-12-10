<template>
  <div>
    <h1 style="text-align:center;margin-bottom:1em;">Motorok</h1>
    <div class="motor-grid">
       <!-- <div v-for="motor in motors" :key="motor.id" class="motor-card"> -->
        <div v-for="motor in motorStore.motors" :key="motor.id" class="motor-card">
        <img :src="motor.image" :alt="motor.brand" />
        <div style="padding:12px;">
          <div style="font-weight: bold; margin-bottom:6px;">{{ motor.brand }}</div>
          <button @click="showDetails(motor)">Részletek</button>
        </div>
      </div>
    </div>

    <div v-if="selectedMotor" class="details-panel">
      <h2>Részletek: {{ selectedMotor.brand }} {{ selectedMotor.model }}</h2>
      <ul>
        <li>Modell: {{ selectedMotor.model }}</li>
        <li>Évjárat: {{ selectedMotor.year }}</li>
        <li>Motor: {{ selectedMotor.engine }}</li>
        <li>Típus: {{ selectedMotor.type }}</li>
      </ul>
      <button @click="selectedMotor = null">Bezárás</button>
    </div>

  </div>
</template>

<script>
// local data.json fájl kezelése
// import motorcycleData from '/data.json'

import { useMotorStore } from '../stores/motorStore'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const motorStore = useMotorStore()
    const selectedMotor = ref(null)

    onMounted(async () => {
  const res = await fetch('http://localhost:3000/motorcycles')
  const data = await res.json()
  motorStore.setMotors(data)
   })
   /* onMounted(() => {
    // Adat betöltése
    fetch('http://localhost:3000/motorcycles')
      .then(res => res.json())
      .then(data => {
           console.log('Fetched data:', data)
           motorStore.setMotors(data)
      })
})*/

    
    function showDetails(motor) {
       console.log('Selected motor:', motor);
       selectedMotor.value = motor
    }

    return { motorStore, selectedMotor, showDetails }
  }
}

/*export default {
  data() {
    return {
      motors: [],
      selectedMotor: null
    }
  },
  mounted() {
    // read from local data.json file
    // this.motors = motorcycleData.motorcycles
    // read from rest api server
    fetch('http://localhost:3000/motorcycles')
      .then(response => response.json())
      .then(data => {
        this.motors = data
      })
      .catch(error => console.error('Hiba az adatok lekérésekor:', error))
  },
  methods: {
    showDetails(motor) {
      this.selectedMotor = motor
    }
  }
}*/

</script>

<style scoped>
.motor-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.motor-card {
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 3px 20px 0 #bbb;
  overflow: hidden;
  min-width: 220px;
}
.motor-card img {
  width: 100%;
  height: 175px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}
.motor-card button {
  background: #3565fc;
  color: #fff;
  padding: 0.2em 1em;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}
.details-panel {
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f2f2f2;
}
.details-panel h2 {
  margin-top: 0;
}
.details-panel button {
  background: #cc0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
