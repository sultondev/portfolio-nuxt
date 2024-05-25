<script setup lang="ts">
const {t} = useI18n()
const metaTitle = ref(t('portfolio_meta_skills_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})

</script>

<template>
  <div class="">
    Skills
  </div>
</template>