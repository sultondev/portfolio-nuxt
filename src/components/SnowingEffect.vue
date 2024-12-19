<template>
  <div class="snowfall-container" v-if="isWinter">
    <div v-for="i in snowflakesCount" :key="i" class="snowflake"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const snowflakesCount = ref(140);
const month = new Date().getMonth() + 1;
const isWinter = ref(month === 12 || month === 1);
onMounted(() => {
  // Set a random position, size, and speed for snowflakes
  const snowflakes = document.querySelectorAll(".snowflake");
  if (isWinter.value) {
    snowflakes.forEach((snowflake) => {
      const size = Math.random() * 5 + 5; // Random size between 5px and 10px
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Slow fall duration
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    });
  }
});

onUnmounted(() => {
  // Clean up styles if needed when the component is destroyed
  const snowflakes = document.querySelectorAll(".snowflake");
  snowflakes.forEach((snowflake) => {
    snowflake.style.animation = "none";
  });
});
</script>

<style scoped>
.snowfall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99999999999999999;
}

.snowflake {
  position: absolute;
  top: -10px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.3;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    opacity: 0;
    transform: translateY(0) scale(1);
  }
  10% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.1;
    transform: translateY(100vh) scale(0.5);
  }
}
</style>
