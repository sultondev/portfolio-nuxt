<script setup lang="ts">



const btnDefaultClass= 'transition-all duration-800 linear max-w-fit text-white hover:bg-primaryHover flex items-center justify-center bg-primary text-center w-full rounded-md'

type Props = {
  message: string
  iconName?: string
  classes?: string
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
  <NuxtLink :to="props.path" :class="[btnDefaultClass,props.classes]">
    <slot />
    <span class="whitespace-nowrap">{{props.message}}</span>
  </NuxtLink>
</template>