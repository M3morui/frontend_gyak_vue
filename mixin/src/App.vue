<script setup>
import Counter from './components/Counter.vue'
</script>

<template>
  <div id="app" style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <h1>Vue 3 Composables (Mixin alternatíva)</h1>
    <p>Frissítsd az oldalt: az értékek megmaradnak localStorage-ból!</p>
    <Counter />
  </div>
</template>