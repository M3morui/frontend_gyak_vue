<template>
  <div class="hero">
    <div class="hero-content">
      <h1>Üdvözöljük a Pizza Toronyban!</h1>
      <p>Csakis a legjobb pizzákat lehet itt megtalálni nálunk.</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1513104890138-7c749659a591");
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