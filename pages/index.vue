<script setup lang="ts">

import {useMainStore} from "~/store/mainStore";
import {storeToRefs} from "pinia";
import DButton from "~/components/UI/DButton.vue";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import SectionTitle from "~/components/UI/SectionTitle.vue";
import TechBlock from "~/components/UI/TechBlock.vue";
import DSeparator from "~/components/UI/DSeparator.vue";
import {TechsIUse} from '~/constants/index'
import FtProjectCard from "~/components/Cards/FtProjectCard.vue";
import BlogItemCard from "~/components/Cards/BlogItemCard.vue";

import {btnDefaultClasses, linkDefaulClasses} from "~/constants/UI/DNuxtLink"
import {useNuxtApp} from "#imports";

const { locale, t } = useI18n()
const main = useMainStore()
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main)
const  { $intersectionAnimation } = useNuxtApp()

const metaTitle = ref(t('portfolio_meta_about_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})


onMounted(() => {
  $intersectionAnimation()
})

</script>
<template>
  <div class="">
    <div class="section-bottom__border">
      <div class="section-container">
        <div class="flex justify-between lg:flex-row flex-col">
          <div class="lg:w-[60%] lg:pr-2 w-full observable">
            <h6 class="text-5xl dark:text-textLight font-bold mb-2 text-textDark">Sultonkhan Ablakulav</h6>
            <p class="dark:text-grayLight text-pDark text-2xl mb-4">Front-End developer</p>

            <i18n-t
                tag="p"
                keypath="summary"
                class="dark:text-grayLight text-pDark text-base mb-4"
            >
              <template #resume>
                <DNuxtLink :path="localePath('/resume')" :message="$t('summary_resume')" :classes="[linkDefaulClasses]" />
              </template>
              <template #projects>
                <DNuxtLink :path="localePath('/projects')" :message="$t('summary_projects')" :classes="[linkDefaulClasses]" />
              </template>
            </i18n-t>
            <div class="flex sm:flex-row flex-col h-fit lg:mb-0 mb-20 observable">
              <DNuxtLink path="/projects" :message="$t('check_projects')" class="sm:mb-0 mb-4 text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" :classes="[btnDefaultClasses]">
                <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
              </DNuxtLink>
              <DNuxtLink path="/resume" :message="$t('check_resume')" class="text-base  2xl:px-4 xl:px-3 px-3 mr-3 rounded font-bold py-2 text-white" classes="flex justify-start max-w-fit transition-all duration-800 linear dark:bg-grayLighter dark:hover:bg-grayLightHover bg-pDark hover:bg-pDarkHover">
                <Icon name="mdi:file-document-multiple" class="mr-2 text-2xl" />
              </DNuxtLink>
            </div>
          </div>
          <img src="../assets/images/about-picture.jpg"
               class="xl:w-[400px] xl:h-[300px] object-cover observable lg:w-[340px] lg:h-[260px] w-full min-h-[300px]"
               alt="" />
        </div>
      </div>
    </div>


	  <div class="section-container">
		  <div class="">
        <div class="observable">
          <SectionTitle :title="$t('skills_i_have')" line-gap="ml-5" class="text-4xl mb-4" />
          <p class="text-pDark dark:text-whiteGray text-base mb-8">
            {{$t('skills_summary')}}
          </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8">
          <TechBlock v-for="tech in TechsIUse"
                     :description="tech[locale]"
                     :tech-icons="tech.icons"
                     :name="tech.name"
                     class="observable"
          />
        </div>
        <div class="w-full observable">
          <DNuxtLink path="/service" :message="$t('check_service')" class="text-base block mx-auto 2xl:px-4 xl:px-3 px-2 rounded font-bold py-2" :classes="btnDefaultClasses">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>
		  </div>
	  </div>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="">
        <SectionTitle title="Featured Projects" line-gap="ml-5" class="observable text-4xl mb-12" />
        <div class="grid xl:grid-cols-2 place-items-center w-full">
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6 observable" />
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6 observable" />
        </div>
        <div class="w-fit mx-auto">
          <DNuxtLink path="/projects" :message="$t('check_projects')" :classes="btnDefaultClasses" class="observable text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>
      </div>
    </section>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="">
        <SectionTitle title="Latest Posts" line-gap="ml-5" class="observable text-4xl mb-4" />

        <div class="grid xl:grid-cols-3 lg:grid-cols-2 place-items-center">
          <BlogItemCard link_to_post="" class="my-8 observable"/>
        </div>

        <div class="w-fit mx-auto">
          <DNuxtLink path="/blog" :message="$t('blog')" class="text-base observable 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" :classes="[btnDefaultClasses]">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<style>




</style>

