<script setup lang="ts">



const btnDefaultClass= 'transition-all duration-800 linear max-w-fit text-white hover:bg-primaryHover flex items-center justify-center bg-primary text-center w-full py-2 rounded-md'

type Props = {
  message: string
  iconName?: string
  classes?: string
  iconClass?: '',
  url: string
}

const props =  withDefaults(defineProps<Props>(), {
  message: 'button',
  classes: '',
  iconName: '',
  iconClass: '',
  url: '#'
})


</script>


<template>
  <a :href="props.url" rel="noreferrer" :aria-label="props.message"  :class="[btnDefaultClass,props.classes]">
    <slot />
    <span class="">{{props.message}}</span>
  </a>
</template>