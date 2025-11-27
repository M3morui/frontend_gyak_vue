<template>
  <div class="container">
    <h2 class="my-4 text-center">Pizzák</h2>
    <div class="row">
      <PizzaCard v-for="pizza in pizzasStore.pizzas"
                :key="pizza.id"
                :pizza="pizza" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePizzasStore } from '../stores/pizzas'
import PizzaCard from '../components/PizzaCard.vue'

const pizzasStore = usePizzasStore()

onMounted(() => {
  pizzasStore.fetchPizzas()
})
</script>