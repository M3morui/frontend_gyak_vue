<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl mb-6 text-center font-bold">Képtár lapozással</h1>

    <!-- Képek rácsban -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-center">
      <ImageCard
        v-for="image in pagedImages"
        :key="image.id"
        :src="image.src"
        :alt="image.title"
        :title="image.title"
      />
    </div>

    <!-- Lapozás gombok -->
    <div class="flex justify-center space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-blue-200"
      >
        Előző
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-blue-200"
      >
        Következő
      </button>
    </div>

    <!-- Oldalszám -->
    <p class="mt-4 text-center">Oldal: {{ currentPage }} / {{ totalPages }}</p>
  </div>
</template>

<script>
import ImageCard from './components/ImageCard.vue'

export default {
  name: 'App',
  components: { ImageCard },
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      images: [
        { id: 1, src: '/images/photo1.jpg', title: 'Kép 1' },
        { id: 2, src: '/images/photo2.jpg', title: 'Kép 2' },
        { id: 3, src: '/images/photo3.jpg', title: 'Kép 3' },
        { id: 4, src: '/images/photo4.jpg', title: 'Kép 4' },
        { id: 5, src: '/images/photo5.jpg', title: 'Kép 5' },
        { id: 6, src: '/images/photo6.jpg', title: 'Kép 6' },
        { id: 7, src: '/images/photo7.jpg', title: 'Kép 7' },
        { id: 8, src: '/images/photo8.jpg', title: 'Kép 8' },
        { id: 9, src: '/images/photo9.jpg', title: 'Kép 9' },
        { id: 10, src: '/images/photo10.jpg', title: 'Kép 10' },
        { id: 11, src: '/images/photo11.jpg', title: 'Kép 11' },
        { id: 12, src: '/images/photo12.jpg', title: 'Kép 12' },
        { id: 13, src: '/images/photo13.jpg', title: 'Kép 13' },
        { id: 14, src: '/images/photo14.jpg', title: 'Kép 14' },
        { id: 15, src: '/images/photo15.jpg', title: 'Kép 15' },
        { id: 16, src: '/images/photo16.jpg', title: 'Kép 16' },
        { id: 17, src: '/images/photo17.jpg', title: 'Kép 17' },
        { id: 18, src: '/images/photo18.jpg', title: 'Kép 18' },
        { id: 19, src: '/images/photo19.jpg', title: 'Kép 19' },
        { id: 20, src: '/images/photo20.jpg', title: 'Kép 20' },
      ],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.images.length / this.pageSize)
    },
    pagedImages() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.images.slice(start, start + this.pageSize)
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
  },
}
</script>