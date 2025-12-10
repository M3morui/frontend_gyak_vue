<template>
  <div class="container">
    <h2 class="my-4 text-center">Motorok</h2>
    <div class="row">
      <MotorCard v-for="motor in motorokStore.motorok"
                :key="motor.id"
                :motor="motor"
                @details="showDetails" />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useMotorokStore } from '../stores/motorok'
import MotorCard from '../components/MotorCard.vue'

const motorokStore = useMotorokStore()
onMounted(() => motorokStore.fetchMotorok())
const showDetails = id => { console.log('Motor azonosító:', id) }
</script>
