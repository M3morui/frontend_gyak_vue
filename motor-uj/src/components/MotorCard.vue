<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <img :src="motor.image" class="card-img-top" :alt="motor.brand" style="width: 280px;object-fit:cover;">
      <div class="card-body">
        <h5 class="card-title">{{ motor.brand }}</h5>
        <!-- <button class="btn btn-primary" @click="$emit('details', book.id)">Részletek</button> -->
        <!-- könyv adatok, pl. cím, borító -->
        <button @click="goToDetails">Részletek</button>
      </div>
    </div>
  </div>
</template>
<script setup>
//defineProps(['book'])
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  motor: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/motorok/${props.motor.id}`)
}
</script>
