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

import {btnDefaultClasses} from "~/constants/UI/DNuxtLink"
import {useI18n} from "vue-i18n";

const main = useMainStore()
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main)
const {locale} = useI18n()
locale.value = 'ru'

</script>
<template>
  <div class="">
    <div class="section-container">
      <div class="flex justify-between lg:flex-row flex-col px-4">
        <div class="lg:w-2/4 w-full">
          <h6 class="text-5xl dark:text-textLight font-bold mb-2 text-textDark">Sultonkhan Ablakulav</h6>
          <p class="dark:text-grayLight text-pDark text-2xl mb-4">Front-End developer</p>
          <p class="dark:text-grayLight text-pDark text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores, autem consectetur corporis doloribus ea explicabo
            illum iste iusto mollitia optio quaerat qui rerum, saepe tenetur unde voluptates voluptatibus voluptatum.
          </p>
          <div class="flex h-fit lg:mb-0 mb-20">
            <DNuxtLink path="/projects" :message="$t('check_projects')" class="text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" :classes="[btnDefaultClasses]">
              <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
            </DNuxtLink>
            <DNuxtLink path="/resume" :message="$t('check_resume')" class="text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2 text-white" classes="transition-all duration-800 linear dark:bg-grayLighter dark:hover:bg-grayLightHover bg-pDark hover:bg-pDarkHover">
              <Icon name="mdi:file-document-multiple" class="mr-2 text-2xl" />
            </DNuxtLink>
          </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
             class="xl:w-[400px] xl:h-[300px] lg:w-[340px] lg:h-[260px] w-full min-h-[300px]"
             alt="" />
      </div>
    </div>

    <DSeparator class="mx-4" />

	  <div class="section-container">
		  <div class="">
        <div class="px-4">
          <SectionTitle :title="$t('skills_i_have')" line-gap="ml-5" class="text-4xl mb-4" />
          <p class="dark:text-textLight text-pDark text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores, autem consectetur corporis doloribus ea explicabo
            illum
          </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8">
          <TechBlock v-for="tech in TechsIUse"
                     :description="tech.description"
                     :tech-icons="tech.icons"
                     :name="tech.name"
          />
        </div>
        <div class="w-full">
          <DNuxtLink path="/service" :message="$t('check_service')" class="text-base block mx-auto 2xl:px-4 xl:px-3 px-2 rounded font-bold py-2" :classes="btnDefaultClasses">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>
		  </div>
	  </div>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="px-4">
        <SectionTitle title="Featured Projects" line-gap="ml-5" class="text-4xl mb-12" />
        <div class="grid xl:grid-cols-2 place-items-center w-full">
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6" />
          <FtProjectCard class="md:px-6 md:py-12 sm:p-4 py-6" />
        </div>
        <div class="w-fit mx-auto">
          <DNuxtLink path="/projects" :message="$t('check_projects')" :classes="btnDefaultClasses" class="text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>
      </div>
    </section>
    <DSeparator class="mx-4" />
    <section class="section-container">
      <div class="px-4">
        <SectionTitle title="Latest Posts" line-gap="ml-5" class="text-4xl mb-4" />

        <div class="grid xl:grid-cols-3 lg:grid-cols-2 place-items-center">
          <BlogItemCard link_to_post="" class="my-8"/>
        </div>

        <div class="w-fit mx-auto">
          <DNuxtLink path="/blog" :message="$t('blog')" class="text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" :classes="[btnDefaultClasses]">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<style>

* {
  //font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

.section-container {
  @apply mx-auto py-12 2xl:max-w-[1110px] xl:max-w-[1000px] lg:max-w-[780px] overflow-x-hidden;
}



</style>

