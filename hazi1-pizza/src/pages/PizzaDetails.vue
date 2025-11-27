<template>
  <div v-if="pizza" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="pizza.image" class="img-fluid mb-3" :alt="pizza.name" />
      </div>
      <div class="col-lg-8">
        <h2>{{ pizza.name }}</h2>
        <h5>{{ pizza.type }}</h5>
        <div class="card mb-3">
          <div class="card-body">
            <div>Azonosító: {{ pizza.id }}</div>
            <div>Ár: {{ pizza.price }}</div>
          </div>
        </div>
        
        <div class="mb-3">
          <strong class="fs-3">Értékelés:</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${pizza.rate * 20}%`">
              {{ pizza.rate }}/5
            </div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>{{ pizza.toppings }}</p>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/pizzas')">Vissza a listához</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen pizza azonosítóval.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePizzasStore } from '../stores/pizzas'
import { computed, watch, onMounted } from 'vue'

const route = useRoute()
const pizzasStore = usePizzasStore()

onMounted(() => {
  if (pizzasStore.pizzas.length === 0) {
    pizzasStore.fetchPizzas()
  }
})

const pizza = computed(() => pizzasStore.pizzas.find(b => b.id == route.params.id))

// Opció: ha még nincs betöltve, megvárhatnánk az adatok jövetelét, vagy használhatnál loading állapotot.
</script>