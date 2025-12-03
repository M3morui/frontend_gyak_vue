<template>
  <div>
    <h1>User: {{ $route.params.id }}</h1>
    <router-view /> <!-- Beágyazott tartalom -->
  </div>
</template>