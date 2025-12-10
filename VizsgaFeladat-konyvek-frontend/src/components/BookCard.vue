<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <img :src="book.cover" class="card-img-top" :alt="book.title" style="height:280px;object-fit:cover;">
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <!-- <button class="btn btn-primary" @click="$emit('details', book.id)">Részletek</button> -->
        <!-- könyv adatok, pl. cím, borító -->
        <button @click="goToDetails">Részletek</button>
      </div>
    </div>
  </div>
</template>
<script setup>
//defineProps(['book'])
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  book: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/books/${props.book.id}`)
}
</script>
