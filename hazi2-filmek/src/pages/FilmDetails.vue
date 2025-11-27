<template>
  <div v-if="film" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="film.image" class="img-fluid mb-3" :alt="film.name" />
      </div>
      <div class="col-lg-8">
        <h2>{{ film.name }}</h2>
        <h5>{{ film.type }}</h5>
        <div class="card mb-3">
          <div class="card-body">
            <div>Azonosító: {{ film.id }}</div>
            <div>Hossza: {{ film.length }}</div>
          </div>
        </div>
        
        <div class="mb-3">
          <strong class="fs-3">Értékelés:</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${film.rate * 20}%`">
              {{ film.rate }}/5
            </div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>{{ film.description }}</p>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/filmek')">Vissza a listához</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen film azonosítóval.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useFilmekStore } from '../stores/filmek'
import { computed, watch, onMounted } from 'vue'

const route = useRoute()
const filmekStore = useFilmekStore()

onMounted(() => {
  if (filmekStore.filmek.length === 0) {
    filmekStore.fetchFilmek()
  }
})

const film = computed(() => filmekStore.filmek.find(b => b.id == route.params.id))

// Opció: ha még nincs betöltve, megvárhatnánk az adatok jövetelét, vagy használhatnál loading állapotot.
</script>