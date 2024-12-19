<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      src: string | null
      alt?: string
      width?: number
      height?: number
      class?: { [key: string]: string } | string[] | string
      lazy?: boolean
    }>(),
    {
      lazy: true,
      alt: '',
      class: '',
      width: undefined,
      height: undefined,
    }
)

const {
  public: { CDN_URL },
} = useRuntimeConfig()

// const srcUrl = computed((): string => {
//   if (typeof props.src === 'string') {
//     if (/http/g.test(props.src) || process.dev) return props.src
//     if (/^\//.test(props.src)) return CDN_URL + props.src
//     else if (props.src) return `${CDN_URL}/${props.src}`
//   }
//   return `${CDN_URL}/img/loader.gif`
// })
</script>
<template>
  <NuxtImg
      :src="src"
      :style="{ visibility: !src ? 'hidden' : 'visible' }"
      :alt="alt || ''"
      :class="props.class"
      :loading="lazy ? 'lazy' : 'eager'"
      :width="width"
      :height="height"
  ></NuxtImg>
</template>
