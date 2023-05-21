<script setup lang="ts">
import {useMainStore} from "~/store/mainStore";
import {storeToRefs} from "pinia";

const { locale } = useI18n()
const main = useMainStore()
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main)

</script>
<template>
  <div class="sm:text-2xl sm:text-green-500 xs:text-7xl xs:text-red-600">
    Index page
  </div>
</template>

<style>

</style>

