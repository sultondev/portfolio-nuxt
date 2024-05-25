<script setup lang="ts">
type TechIcon = {
  name: string,
  color: string
  darkThemeColor?: string
}
type Props = {
  techIcons: TechIcon[],
  name: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Bla',
  description: 'lorem widjaidjailid wia iwjdiwl jalj awjdwiljdwla jdlwja lwjdlw jlwdawj '
})
</script>

<template>
  <div class="group mx-4 mb-8">
    <div class="tech-icons-wrapper mb-1">
      <Icon v-for="techIcon in techIcons" :name="techIcon.name" class="pr-1" :style="{color: useColorMode().value == 'dark' ? (techIcon.darkThemeColor ?? techIcon.color) : techIcon.color}"  />
    </div>
    <h6 class="dark:text-white text-black font-bold text-base mb-1.5">
      {{props.name}}
    </h6>
    <p class="text-black dark:text-whiteGray text-sm">
      {{
        props.description
      }}
    </p>
  </div>
</template>


<style>
.tech-icons-wrapper {
  @apply text-4xl  transition-all duration-300  group-hover:scale-110 -translate-x-1;
}

.tech-icons-wrapper-lg {
  @apply group-hover:-translate-x-0.5 text-4xl  transition-all duration-500 ease-linear  group-hover:scale-110;
}
</style>-