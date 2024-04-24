<script setup lang="ts">
// import {$api} from "~/api";
// import type {ProductSingle} from "~/api/types/products";

const {t} = useI18n()
const metaTitle = ref(t('portfolio_meta_blog_title'))
// const {data}= $api.products.getProducts<ProductSingle>()
useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})
</script>

<template>
  <div class="">

  </div>
</template>
