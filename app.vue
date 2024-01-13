<script setup>

const {t} = useI18n();
const metaOgTitle = ref(t("portfolio_meta_og_title"));
const description = ref(t("portfolio_meta_description"));
const metaOgDescription = ref(t("portfolio_meta_og_description"));
const metaOg = ref(t("portfolio_meta_og_description"));

useServerSeoMeta({
  ogTitle: metaOgTitle.value,
  description: description.value,
  ogDescription: metaOgDescription.value,
  ogImage:
      "https://media.licdn.com/dms/image/D4D22AQEPLzt9l-pOXg/feedshare-shrink_2048_1536/0/1688331795181?e=1691020800&v=beta&t=sZrEm1xBU0H16SY3zC7JS9TmDx3nLy0vEYzMUJ-sIQw",
  "og:image:height": "1000",
  keywords: `Full-Stack Developer, Front-End Development, Back-End Development, Web Applications, User Experience (UX), Responsive Design, Creative Designs, Robust Functionalities, Immersive Experiences, Innovation, Quality, Attention to Detail, Digital Presence, Website Development, Portfolio Showcase, Technology Integration, Code Optimization, Problem-Solving, Collaboration, Client Satisfaction`,
  ogType: "website",
  twitterCard: "summary_large_image",
  // twitterDomain: '',
  // twitterUrl: '',
  twitterTitle: metaOgTitle.value,
  twitterDescription: description.value,
  twitterImage:
      "https://media.licdn.com/dms/image/D4D22AQEPLzt9l-pOXg/feedshare-shrink_2048_1536/0/1688331795181?e=1691020800&v=beta&t=sZrEm1xBU0H16SY3zC7JS9TmDx3nLy0vEYzMUJ-sIQw",
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
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
@import "./assets/css/root.sass"
</style>
