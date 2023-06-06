<script setup lang="ts">
import {useColorMode} from "#imports";
function switchTheme() {
  useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'
}

</script>

<template>
  <client-only>
    <div class="w-[74px] mx-auto rounded-full border-[3px] dark:border-primary flex cursor-pointer" @click="switchTheme()">
      <button class="theme-switcher__btn dark:bg-primary bg-white m-1 rounded-full "
              ref="themeBtn"
        :class="[useColorMode().value === 'light' ? 'light-button translate-x-[100%]' : 'dark-button translate-x-0']"
      >
      </button>
    </div>
  </client-only>
</template>

<style lang="sass">

.theme-switcher__btn
  width: 30px
  height: 24px

.light-button
  animation: light-animation 400ms linear

.dark-button
  animation: dark-animation 400ms linear



@keyframes light-animation
  0%
    width: 30px
    transform: translateX(0)
  50%
    width: 70%
    transform: translateX(0)
  96%
    width: 30px
  100%
    transform: translateX(100%)


@keyframes dark-animation
  0%
    width: 30px
    transform: translateX(100%)
  50%
    width: 70%
    transform: translateX(0%)
  96%
    width: 30px
  100%
    transform: translateX(0)


</style>