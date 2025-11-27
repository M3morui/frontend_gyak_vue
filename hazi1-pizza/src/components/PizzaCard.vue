<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <img :src="pizza.image" class="card-img-top" :alt="pizza.name" style="height:280px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">{{ pizza.name }}</h5>
        <button @click="goToDetails" class="btn btn-primary">Részletek</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  pizza: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/pizzas/${props.pizza.id}`)
}
</script>