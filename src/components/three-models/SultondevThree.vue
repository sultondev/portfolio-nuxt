<script setup lang="ts">
// import { useRenderLoop } from "#imports";
// const sphereRef = ref();
// const { onLoop } = useRenderLoop();
//
// onLoop(({ elapsed }) => {
//   if (sphereRef.value) {
//     sphereRef.value.position.y = Math.sin(elapsed);
//   }
// });

import { $fetch } from "ofetch";

const { scene: model } = await useGLTF("3d-models/sultondev.glb");
</script>

<template>
  <TresMesh>
    <primitive :object="model" />
    <!--    <TresSphereGeometry />-->
    <!--    <TresMeshNormalMaterial />-->
  </TresMesh>
</template>

<style scoped></style>
