<script setup>
const { t, locale } = useI18n();
const metaOgTitle = ref(t("portfolio_meta_og_title"));
const description = ref(t("portfolio_meta_description"));
const metaOgDescription = ref(t("portfolio_meta_og_description"));
const metaOg = ref(t("portfolio_meta_og_description"));

useServerSeoMeta({
  ogTitle: metaOgTitle.value,
  description: description.value,
  ogDescription: metaOgDescription.value,
  ogImage:
    "https://github.com/sultondev/portfolio-nuxt/blob/main/src/public/neon-think-icons-none-brand.png?raw=true",
  "og:image:height": "1000",
  keywords: `Full-Stack Developer, Front-End Development, Back-End Development, Web Applications, User Experience (UX), Responsive Design, Creative Designs, Robust Functionalities, Immersive Experiences, Innovation, Quality, Attention to Detail, Digital Presence, Website Development, Portfolio Showcase, Technology Integration, Code Optimization, Problem-Solving, Collaboration, Client Satisfaction`,
  ogType: "website",
  twitterCard: "summary_large_image",
  // twitterDomain: '',
  // twitterUrl: '',
  twitterTitle: metaOgTitle.value,
  twitterDescription: description.value,
  twitterImage:
    "https://github.com/sultondev/portfolio-nuxt/blob/main/src/public/neon-think-icons-none-brand.png?raw=true",
});
useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator
        :duration="4000"
        :height="3"
        :throttle="0"
        color="#54b689"
      />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
@import "assets/css/root"
</style>
