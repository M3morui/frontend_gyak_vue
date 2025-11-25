<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto p-4">
        <h1 class="text-4xl font-bold">Képgaléria</h1>
      </div>
    </header>

    <!-- Main galéria -->
    <main class="max-w-6xl mx-auto p-4">
      <ImageGallery />
    </main>

    <!-- Footer -->
    <footer class="mt-12 text-center text-sm text-gray-500">
      &copy; 2025 Galéria
    </footer>
  </div>
</template>

<script setup>
import ImageGallery from './components/ImageGallery.vue'
</script>
