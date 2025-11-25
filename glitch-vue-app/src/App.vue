<template>
  <div id="app" class="center">
    <GlitchText text="Glitch animáció Vue 3-ban" />
  </div>
</template>

<script>
import GlitchText from './components/GlitchText.vue'

export default {
  name: 'App',
  components: {
    GlitchText
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #121212;
  color: white;
  margin: 0;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
}
</style>
