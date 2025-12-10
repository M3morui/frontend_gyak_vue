<template>
  <div v-if="motor" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="motor.image" class="img-fluid mb-3" :alt="motor.brand" />
      </div>
      <div class="col-lg-8">
        <h2>{{ motor.brand }}</h2>
        <h5>{{ motor.model }}</h5>
        <div class="card mb-3">
          <div class="card-body">
            <strong>Motorok adatai</strong>
            <div>Azonosító: {{ motor.id }}</div>
            <div>Évjárat: {{ motor.year }}</div>
            <div>Motor: {{ motor.engine }}</div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>{{ motor.type }}</p>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Értékelések</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${motor.rate*20}%`">
              {{ motor.rate }}/5
            </div>
          </div>
          <small>Több mint 5 millió használó értékelése alapján</small>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/motorok')">Vissza a motorokhoz</button>
        <button class="btn btn-primary">Kosárba tesz</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen motor azonosítóval.</p>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useMotorokStore } from '../stores/motorok'
import { computed, onMounted } from 'vue'
const route = useRoute()
const motorokStore = useMotorokStore()
onMounted(() => motorokStore.fetchMotorok())
const motor = computed(() =>
  //booksStore.books.find(b => b.id === Number(route.params.id))
    motorokStore.motorok.find(b => b.id == route.params.id)
)
</script>
