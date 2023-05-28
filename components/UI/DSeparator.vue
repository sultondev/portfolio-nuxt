<script setup lang="ts">

type Props = {
    lineClr: string
    sepGap: string
}

const props = withDefaults(defineProps<Props>(), {
  lineClr: 'border-hrClr',
  sepGap: 'my-8'
})
</script>

<template>
  <hr class="" :class="[props.lineClr, props.sepGap]" />
</template>