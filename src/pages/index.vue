<script lang="ts" setup>
import { useMainStore } from "~/store/mainStore";
import { storeToRefs } from "pinia";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import SectionTitle from "~/components/UI/SectionTitle.vue";
import TechBlock from "~/components/UI/TechBlock.vue";
import DSeparator from "~/components/UI/DSeparator.vue";
import { TechsIUse } from "~/constants/index";
import FtProjectCard from "~/components/Cards/FtProjectCard.vue";
import BlogItemCard from "~/components/Cards/BlogItemCard.vue";

import { btnDefaultClasses, linkDefaulClasses } from "~/constants/UI/DNuxtLink";

const { locale, t } = useI18n();
const main = useMainStore();
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main);
const { $intersectionAnimation } = useNuxtApp();

const metaTitle = ref(t("portfolio_meta_about_title"));
const { isMobile } = useDevice();

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
});

onMounted(() => {
  $intersectionAnimation();
});
</script>
<template>
  <div class="">
    <div class="section-bottom__border">
      <div class="section-container">
        <div class="flex justify-between lg:flex-row flex-col">
          <div class="lg:w-[60%] lg:pr-2 w-full observable">
            <h6
              class="text-5xl dark:text-textLight font-bold mb-2 text-textDark"
            >
              Sultonkhan Ablakulav
            </h6>
            <p class="dark:text-grayLight text-pDark text-2xl mb-4">
              Front-End developer
            </p>

            <i18n-t
              class="dark:text-grayLight text-pDark text-base mb-4"
              keypath="summary"
              scope="global"
              tag="p"
            >
              <template #resume>
                <DNuxtLink
                  :classes="[linkDefaulClasses]"
                  :message="$t('summary_resume')"
                  :path="localePath('/resume')"
                  arial-label="check my resume"
                />
              </template>
              <template #projects>
                <DNuxtLink
                  :classes="[linkDefaulClasses]"
                  :message="$t('summary_projects')"
                  :path="localePath('/projects')"
                  arial-label="check my projects"
                />
              </template>
            </i18n-t>
            <div
              class="flex sm:flex-row flex-col h-fit lg:mb-0 mb-20 observable"
            >
              <DNuxtLink
                :classes="[btnDefaultClasses]"
                :message="$t('check_projects')"
                arial-label="check my projects"
                class="sm:mb-0 mb-4 text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2"
                path="/projects"
              >
                <Icon
                  class="mr-2 text-2xl"
                  name="ic:baseline-arrow-circle-right"
                />
              </DNuxtLink>
              <DNuxtLink
                :message="$t('check_resume')"
                arial-label="check my resume"
                class="text-base 2xl:px-4 xl:px-3 px-3 mr-3 rounded font-bold py-2 text-white"
                classes="flex justify-start max-w-fit transition-all duration-800 linear dark:bg-grayLighter dark:hover:bg-grayLightHover bg-pDark hover:bg-pDarkHover"
                path="/resume"
              >
                <Icon class="mr-2 text-2xl" name="mdi:file-document-multiple" />
              </DNuxtLink>
            </div>
          </div>
          <nuxt-img
            alt="my picture"
            class="xl:w-[400px] xl:h-[300px] object-cover observable lg:w-[340px] lg:h-[260px] w-full min-h-[300px]"
            src="/about-picture.webp"
            width="1000"
          />
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="">
        <div class="observable">
          <SectionTitle
            :title="$t('skills_i_have')"
            class="text-4xl mb-4"
            line-gap="ml-5"
          />
          <p class="text-pDark dark:text-whiteGray text-base mb-8">
            {{ $t("skills_summary") }}
          </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8">
          <TechBlock
            v-for="tech in TechsIUse"
            :description="tech[locale]"
            :name="tech.name"
            :tech-icons="tech.icons"
            class="observable"
          />
        </div>
        <div class="w-full observable">
          <DNuxtLink
            :classes="btnDefaultClasses"
            :message="$t('check_service')"
            arial-label="check my services"
            class="text-base block mx-auto 2xl:px-4 xl:px-3 px-2 rounded font-bold py-2"
            path="/service"
          >
            <Icon class="mr-2 text-2xl" name="ic:baseline-arrow-circle-right" />
          </DNuxtLink>
        </div>
      </div>
    </div>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="">
        <SectionTitle
          class="observable text-4xl mb-12"
          line-gap="ml-5"
          title="Featured Projects"
        />
        <div class="grid xl:grid-cols-2 place-items-center w-full">
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6 observable" />
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6 observable" />
        </div>
        <div class="w-fit mx-auto">
          <DNuxtLink
            :classes="btnDefaultClasses"
            :message="$t('check_projects')"
            arial-label="check my projects"
            class="observable text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2"
            path="/projects"
          >
            <Icon class="mr-2 text-2xl" name="ic:baseline-arrow-circle-right" />
          </DNuxtLink>
        </div>
      </div>
    </section>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="">
        <SectionTitle
          class="observable text-4xl mb-4"
          line-gap="ml-5"
          title="Latest Posts"
        />

        <div class="grid xl:grid-cols-3 lg:grid-cols-2 place-items-center">
          <BlogItemCard class="my-8 observable" link_to_post="" />
        </div>

        <div class="w-fit mx-auto">
          <DNuxtLink
            :classes="[btnDefaultClasses]"
            :message="$t('blog')"
            arial-label="check my blog page"
            class="text-base observable 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2"
            path="/blog"
          >
            <Icon class="mr-2 text-2xl" name="ic:baseline-arrow-circle-right" />
          </DNuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
