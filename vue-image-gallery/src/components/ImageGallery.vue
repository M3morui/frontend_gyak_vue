<template>
  <div class="flex flex-col items-center">
    <!-- Kereső mező -->
    <div class="mb-6 w-full max-w-md">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Keresés állatok között…"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-center"
      />
    </div>

    <!-- Galéria -->
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(item, index) in filteredImages"
        :key="index"
        class="overflow-hidden rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition cursor-pointer flex flex-col items-center"
        @click="openModal(index)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-40 h-40 object-cover rounded-md"
        />
        <div class="p-2 text-center">
          <p class="text-sm font-medium mb-1">{{ item.alt }}</p>
          <div class="text-xs text-gray-500">
            <span
              v-for="(tag, tIndex) in item.tags"
              :key="tIndex"
              class="mr-1"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalIndex !== null"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <button
        class="absolute top-4 right-4 text-white text-3xl font-bold"
        @click="closeModal"
      >
        &times;
      </button>
      <img
        :src="filteredImages[modalIndex].src"
        class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const images = ref([
  { src: "/html images/buzzard-g99ddae5b5_640.jpg", alt: "Egerészölyv", tags: ["bird", "buzzard", "raptor"] },
  { src: "/html images/cat-g0a810d44e_640.jpg", alt: "Macska", tags: ["cat", "pet"] },
  { src: "/html images/cat-g6bbb6497c_640.jpg", alt: "Macska", tags: ["cat", "pet"] },
  { src: "/html images/cat-gcf31c7a4c_640.jpg", alt: "Macska", tags: ["cat", "pet"] },
  { src: "/html images/chipmunk-gd016ab7bb_640.jpg", alt: "Mókus (Chipmunk)", tags: ["chipmunk", "rodent"] },
  { src: "/html images/discus-fish-gbb33632a6_640.jpg", alt: "Diszkoszhal", tags: ["fish", "aquarium"] },
  { src: "/html images/dog-gb3f966c04_640.jpg", alt: "Kutya", tags: ["dog", "pet"] },
  { src: "/html images/duck-g5e7745769_640.jpg", alt: "Kacsa", tags: ["duck", "bird", "water"] },
  { src: "/html images/elephant-g70de77915_640.jpg", alt: "Elefánt", tags: ["elephant", "wild"] },
  { src: "/html images/fox-gefcd80457_640.jpg", alt: "Róka", tags: ["fox", "wild"] },
  { src: "/html images/fox-gf17355a9e_640.jpg", alt: "Róka", tags: ["fox", "wild"] },
  { src: "/html images/giraffe-gd54d66f36_640.jpg", alt: "Zsiráf", tags: ["giraffe", "wild", "savanna"] },
  { src: "/html images/giraffe-gd106c6b73_640.jpg", alt: "Zsiráf", tags: ["giraffe", "wild", "savanna"] },
  { src: "/html images/guinea-pig-g5112ae860_640.jpg", alt: "Tengerimalac", tags: ["guinea pig", "pet"] },
  { src: "/html images/iceland-g5d20e6383_640.jpg", alt: "Ló", tags: ["horse", "icelandic horse"] },
  { src: "/html images/leopard-ga1ad34f8a_640.jpg", alt: "Leopárd", tags: ["leopard", "wild", "bigcat"] },
  { src: "/html images/llama-gcdd0e6912_640.jpg", alt: "Láma", tags: ["llama", "farm"] },
  { src: "/html images/raccoon-gfabf1c121_640.jpg", alt: "Mosómedve", tags: ["raccoon", "wild", "forest"] },
  { src: "/html images/sheep-g9da9770cc_640.jpg", alt: "Birka", tags: ["sheep", "farm"] },
  { src: "/html images/snail-g541a55e29_640.jpg", alt: "Csiga", tags: ["snail", "insect"] }
])



const searchTerm = ref('')

const filteredImages = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return images.value
  return images.value.filter(item =>
    item.alt.toLowerCase().includes(term) ||
    item.tags.some(tag => tag.toLowerCase().includes(term))
  )
})

const modalIndex = ref(null)

function openModal(idx) {
  modalIndex.value = idx
}

function closeModal() {
  modalIndex.value = null
}
</script>
