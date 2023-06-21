<script setup lang="ts">
const props = defineProps<{ classes: string }>()
</script>


<template>
  <table class="table">
    <thead>
      <slot name="thead"></slot>
    </thead>
    <tbody>
      <slot name="tbody"></slot>
    </tbody>
  </table>
</template>


<style>
.table {
  @apply px-1;
}

.table thead tr th {
  @apply py-4 px-8 border dark:border-tbBrClrDark border-tbBrClrWhite text-primary font-semibold dark:bg-grayDark bg-whiteLight;
}

.table tbody tr th {
  @apply py-4 px-8 border dark:border-tbBrClrDark border-tbBrClrWhite font-semibold xl:w-1/4 w-2/4 text-left dark:bg-grayDark bg-whiteLight;
}

.table tbody tr td {
  @apply py-5 px-4 border dark:border-tbBrClrDark border-tbBrClrWhite w-1/4  text-center;
}

</style>