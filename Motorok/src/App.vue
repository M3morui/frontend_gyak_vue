<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Kezdőlap</RouterLink>
        <RouterLink to="/motor">Motorok</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #000;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 12px;
  box-sizing: border-box;
}

nav a {
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.wrapper {
  padding-top: 3rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;
  }
}
</style>
