<script setup lang="ts">

useServerSeoMeta({
  ogTitle: "404 not found",
  description: "404 not found",
  ogDescription: "404 not found",
  ogImage:
    "https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-Retro-Error-Page.png",
  ogImageHeight: "1000",
  keywords: "404 not found",
  ogType: "website",
  twitterCard: "summary_large_image",
  // twitterDomain: '',
  // twitterUrl: '',
  twitterTitle: "404 not found",
  twitterDescription: "404 not found",
  twitterImage:
    "https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-Retro-Error-Page.png",
});

</script>

<template>
  <div class="bg-white w-full justify-center flex flex-col items-center h-screen">
    <ImgWrapper src="assets/banners/error_404.svg" class="w-2/4 h-2/4 mb-4" />
    <NuxtLink to="/" class="2xl:text-4xl text-2xl underline">{{ $t("not_found_home") }}</NuxtLink>
  </div>
</template>

<style scoped>
</style>
