<template>
  <div id="app" class="center">
    <div class="ticker-wrapper">
      <TickerLeft text="Ez a szöveg balra fut folyamatosan — hírek • hírek • hírek • hírek • hírek • hírek •" />
      <TickerRight text="Ez a szöveg jobbra fut folyamatosan — friss információk • friss információk • friss információk •" />
    </div>
  </div>
</template>

<script>
import TickerLeft from './components/TickerLeft.vue'
import TickerRight from './components/TickerRight.vue'

export default {
  name: 'App',
  components: {
    TickerLeft,
    TickerRight
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

.ticker-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
</style>