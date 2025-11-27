<template>
  <div class="hero">
    <div class="hero-content">
      <h1>Filmezz velünk!</h1>
      <p>Csakis a legjobb filmeket lehet itt megtalálni nálunk.</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-image: url("https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;  
  align-items: center;    
  text-align: center;
  color: white;
  position: relative;
}


.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
}

.hero p {
  font-size: 1.3rem;
}
</style>