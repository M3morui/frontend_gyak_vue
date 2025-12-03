<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const goToUser = (id) => router.push({ name: 'user', params: { id } }) // Programmatikus
</script>

<template>
  <nav>
    <RouterLink to="/">Kezdőlap</RouterLink>
    <button @click="goToUser(123)">User 123</button>
    <RouterLink to="/user/456/profile">User 456 profil</RouterLink>
  </nav>
</template>