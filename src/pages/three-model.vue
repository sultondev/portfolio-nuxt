<script setup lang="ts"></script>

<template>
  <div class="">
    <TresCanvas clear-color="#000000">
      <OrbitControls />
      <TresPerspectiveCamera />
      <Suspense>
        <SultondevThree />
      </Suspense>
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[10, 10, 10]" intensity="1" />

      <TresGridHelper />
    </TresCanvas>
  </div>
</template>

<style scoped>
canvas {
  height: 80vh !important;
}

@media (min-width: 768px) {
  canvas {
    height: 90vh !important;
  }
}
</style>
