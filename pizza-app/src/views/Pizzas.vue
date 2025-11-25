<script setup>
import pizzas from '../data/pizzas.json'
</script>

<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="pizza in pizzas"
      :key="pizza.id"
      class="bg-white rounded-xl shadow p-4 text-center"
    >
      <img
        :src="pizza.image"
        class="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h3 class="text-xl font-bold mb-2">{{ pizza.name }}</h3>
      <p class="mb-4 text-gray-600">{{ pizza.details }}</p>

      <!-- Méret gombok -->
      <div class="flex justify-center gap-3">
        <button class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
          Kicsi
        </button>
        <button class="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600">
          Közepes
        </button>
        <button class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
          Nagy
        </button>
      </div>
    </div>
  </div>
</template>