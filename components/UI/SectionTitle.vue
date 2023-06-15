<script setup lang="ts">
type Props = {
  title?: string
	lineClr?: string
  lineGap?: string
}

const props = withDefaults(defineProps<Props>(), {
	title: 'Title',
	lineClr: 'primary',
  lineGap: 'ml-2',
})
</script>

<template>
  <h6 class="relative section__title text-3xl dark:text-white text-textDark font-semibold">
    <span :class="props.lineGap">
    {{props.title}}
    </span>
  </h6>
</template>

<style lang="sass">
.section__title::before
  @apply bg-primary

.section
  &__title
    position: relative
    &::before
      display: block
      content: ''
      width: 5px
      height: 120%
      position: absolute
      top: 50%
      left: 0
      transform: translateY(-50%)

</style>