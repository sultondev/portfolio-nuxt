<script setup lang="ts">

type Props = {
    lineClr?: string
    sepGap?: string
}

const props = withDefaults(defineProps<Props>(), {
  lineClr: 'dark:border-hrClr border-white',
  sepGap: 'my-6'
})
</script>

<template>
  <hr class="mx-auto 2xl:max-w-[1110px] xl:max-w-[1000px] lg:max-w-[780px]" :class="[props.lineClr, props.sepGap]" />
</template>