<script setup lang="ts">
type Props = {
  title: string
}
withDefaults(defineProps<Props>(),{
  title: 'title'
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <ImgWrapper src="assets/banners/coming_soon.svg"
                class="w-2/4 h-2/4 mb-4" />
    <h1 class="2xl:text-4xl text-2xl dark:text-grayLight">
      {{ title }}
    </h1>
  </div>
</template>
