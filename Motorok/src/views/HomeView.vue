<script setup>
</script>

<template>
  <main>
    <h1>Kezdőlap</h1>
    <p>Ez a webhely néhány motorkerékpárról szolgáltat információt.</p>
    <p>A "Motorok" menüpontban a kiválasztott motorról a "Részletek" gombra történő kattintást követően juthat további információhoz</p>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin: 0;
  text-align: center;
}

p {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: black;
  text-align: center;
}
</style>
