<template>
  <div class="border rounded shadow p-2 max-w-xs">
    <img :src="src" :alt="alt" class="w-full h-48 object-cover rounded">
    <p class="mt-2 text-center font-semibold">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: 'Kép' },
    title: { type: String, default: '' },
  },
}
</script>