<script setup lang="ts">
import ImgWrapper from "~/components/UI/ImgWrapper.vue";

</script>

<template>
  <div class="w-screen h-screen">
    <ImgWrapper :src="thumbnail" class="gradient-img  md:w-[165px] md:h-[185px] 2xs:w-[342px] 2xs:h-[230px] w-full object-cover " />
  </div>
</template>
