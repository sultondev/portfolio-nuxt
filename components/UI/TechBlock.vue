<script setup lang="ts">
type Props = {
  name: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Bla',
  description: 'lorem widjaidjailid wia iwjdiwl jalj awjdwiljdwla jdlwja lwjdlw jlwdawj '
})
</script>

<template>
  <div class="">
    <slot name="icons" />
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