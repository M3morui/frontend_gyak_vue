<template>
  <nav class="bg-black text-white p-4 flex justify-between items-center">
    <!-- Bal oldalon a cím -->
    <h1 class="font-bold text-xl">Pizza Webshop</h1>

    <!-- Jobb oldali linkek -->
    <ul class="flex gap-6">
      <li>
        <router-link to="/" class="text-red-500 hover:underline">Főoldal</router-link>
      </li>
      <li>
        <router-link to="/pizzas" class="text-red-500 hover:underline">Pizzák</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>