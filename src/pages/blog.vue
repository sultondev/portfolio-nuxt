<script setup lang="ts">
const {t} = useI18n()
const metaTitle = ref(t('portfolio_meta_blog_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})
</script>

<template>
  <div class="">
    blog
  </div>
</template>
