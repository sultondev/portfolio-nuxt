<script setup lang="ts">
import ComingSoon from "~/components/ComingSoon.vue";

const {t} = useI18n()
const metaTitle = ref(t('portfolio_meta_blog_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})
</script>

<template>
  <div class="flex-1 flex justify-center items-center">
    <ComingSoon title="This page is under development" />
  </div>
</template>
