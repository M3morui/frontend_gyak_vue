<template>
  <div v-if="book" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="book.cover" class="img-fluid mb-3" :alt="book.title" />
      </div>
      <div class="col-lg-8">
        <h2>{{ book.title }}</h2>
        <h5>{{ book.author }}</h5>
        <div class="card mb-3">
          <div class="card-body">
            <strong>Könyv adatai</strong>
            <div>Azonosító: {{ book.id }}</div>
            <div>ISBN: {{ book.isbn }}</div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>{{ book.description }}</p>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Értékelések</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${book.rate*20}%`">
              {{ book.rate }}/5
            </div>
          </div>
          <small>Több mint 10 millió olvasó értékelése alapján</small>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/books')">Vissza a könyvekhez</button>
        <button class="btn btn-primary">Kosárba tesz</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen könyv azonosítóval.</p>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useBooksStore } from '../stores/books'
import { computed, onMounted } from 'vue'
const route = useRoute()
const booksStore = useBooksStore()
onMounted(() => booksStore.fetchBooks())
const book = computed(() =>
  //booksStore.books.find(b => b.id === Number(route.params.id))
    booksStore.books.find(b => b.id == route.params.id)
)
</script>
