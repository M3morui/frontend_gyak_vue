<script setup>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <div id="app">
    <NavMenu />
    <main style="padding: 20px;">
      <RouterView />
    </main>
  </div>
</template>