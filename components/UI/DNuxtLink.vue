<script setup lang="ts">




type Props = {
  message: string
  iconName?: string
  classes?: string | string[]
  iconClass?: '',
  path: string
}

const props =  withDefaults(defineProps<Props>(), {
  message: 'button',
  classes: '',
  iconName: '',
  iconClass: '',
  path: '/'
})


</script>


<template>
  <NuxtLink :to="localePath(props.path)" :class="[props.classes]">
    <slot />
    <span class="whitespace-nowrap text-inherit">{{props.message}}</span>
    <slot name="after-icon" />
  </NuxtLink>
</template>