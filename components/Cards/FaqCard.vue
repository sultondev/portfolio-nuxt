<script setup lang="ts">
type Props = {
  isCardOpen: boolean
  question: string
  answer: string
}

interface Emits {
  (e: 'openCard', val: string | number): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const test = ref(false)
</script>

<template>
  <div class="">

      <div class="flex rounded-t items-center justify-between dark:bg-grayDark bg-whiteLight py-2 px-4 cursor-pointer" @click="test = !test">
        <h6 class="text-lg font-semibold dark:hover:text-textLight dark:text-whiteGray shrink w-full">
          {{$t(question)}}
        </h6>
        <Icon name="material-symbols:keyboard-arrow-down" class="text-2xl justify-self-end arrow-rotate" :class="test ? 'rotate-180' : 'rotate-0' ">

        </Icon>
      </div>
      <div class="answer overflow-hidden rounded-b dark:bg-grayDark bg-whiteLight" :class="test ? 'faq-is-open' : 'faq-is-closed'">
        <div class="">
          {{$t(answer)}}
        </div>
      </div>
  </div>
</template>

<style scoped>
.answer {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 1, 1.55) 0s !important;
}

.arrow-rotate {
  transition: all 0.3s  cubic-bezier(0.68, -0.55, 1, 1.55) 0s !important;
}


.faq-is-closed {
  @apply h-[0px] invisible;
}

.faq-is-open {
  @apply h-[44px] visible py-2 px-4;
}
</style>