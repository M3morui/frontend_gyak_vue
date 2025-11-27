<template>
  <div class="container">
    <h2 class="my-4 text-center">Filmek</h2>
    <div class="row">
      <FilmCard v-for="film in filmekStore.filmek"
                :key="film.id"
                :film="film" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFilmekStore } from '../stores/filmek'
import FilmCard from '../components/FilmCard.vue'

const filmekStore = useFilmekStore()

onMounted(() => {
  filmekStore.fetchFilmek()
})
</script>