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
    <div class="tech-icons-wrapper gap-3">
      <Icon v-for="techIcon in techIcons" :name="techIcon.name" class="p-0 " :style="{color: useColorMode().value == 'dark' ? (techIcon.darkThemeColor ?? techIcon.color) : techIcon.color}"  />
    </div>
    <h6 class="dark:text-white text-textDark font-bold text-xl">
      {{props.name}}
    </h6>
    <p class="text-pDark dark:text-whiteGray text-base">
      {{
        props.description
      }}
    </p>
  </div>
</template>


<style>
.tech-icons-wrapper {
  @apply text-4xl  transition-all duration-300  group-hover:scale-110;
}

.tech-icons-wrapper-lg {
  @apply group-hover:-translate-x-1 text-4xl  transition-all duration-300  group-hover:scale-110;
}
</style>-