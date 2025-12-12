<template>
  <div class="ticker">
    <div class="track">
      <span class="glow">{{ text }}</span>
      <span class="glow">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TickerLeft',
  props: {
    text: { type: String, required: true }
  }
}
</script>

<style scoped>
.ticker {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.track {
  display: inline-flex;
  animation: moveLeft 12s linear infinite;
}

.track span {
  padding-right: 50px;
  font-size: 2em;
}

.glow {
  animation: glowColor 4s linear infinite;
  text-shadow:
    0 0 2px currentColor,
    0 0 4px currentColor,
    0 0 8px currentColor,
    0 0 12px currentColor;
}

@keyframes glowColor {
  0%   { color: #ff0044; }
  25%  { color: #ff8800; }
  50%  { color: #00ffcc; }
  75%  { color: #0099ff; }
  100% { color: #ff0044; }
}

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
