<script setup lang="ts">

import { linkDefaulClasses } from "~/constants/UI/DNuxtLink";
import {projects} from "~/constants/index"
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import FtProjectCard from "~/components/Cards/FtProjectCard.vue";
import {useI18n} from "#imports";



const {locale, t} = useI18n()

const metaTitle = ref(t('portfolio_meta_projects_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})

</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent">
      <div class="section-container">
        <div class="text-center px-4">
          <div class="w-fit mx-auto">
            <h6 class="text-3xl dark:text-textLight font-bold mb-2 text-textDark">
              {{ $t('my_projects')}}
            </h6>
            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[92%] mx-auto mb-4">
              {{$t('projects_substring')}}
            </p>

            <DNuxtLink arial-label="check my services" path="/service" :message="$t('hire_me')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              <Icon name="cib:telegram-plane" class="mr-2" />
            </DNuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container">

      <div class="grid xl:grid-cols-2 place-items-center w-full">
        <FtProjectCard v-for="project in projects" :thumbnail="project.thumbnail" :name="project.name" :link_to_project="project.link_to_project" :description="project[locale]" class="min-w-full md:px-4 md:py-4 sm:p-4 py-2" />


      </div>
    </div>

  </div>
</template>

<style>
</style>