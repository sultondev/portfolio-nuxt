<script setup lang="ts">

import {useMainStore} from "~/store/mainStore";
import {storeToRefs} from "pinia";
import DButton from "~/components/UI/DButton.vue";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import SectionTitle from "~/components/UI/SectionTitle.vue";
import TechBlock from "~/components/UI/TechBlock.vue";
import DSeparator from "~/components/UI/DSeparator.vue";
import {TechsIUse} from '~/constants/index'

const { locale } = useI18n()
const main = useMainStore()
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main)


</script>
<template>
  <div class="sm:text-2xl sm:text-green-500 xs:text-7xl xs:text-red-600 ">
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
            <DButton :message="$t('check_projects')" class="text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2">
              <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
            </DButton>
            <DNuxtLink path="/resume" :message="$t('check_resume')" class="text-base  2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" classes="!bg-grayLighter hover:!bg-grayLightHover">
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
          <SectionTitle title="What do I do" line-gap="ml-5" class="text-4xl mb-4" />
          <p class="dark:text-textLight text-pDark text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores, autem consectetur corporis doloribus ea explicabo
            illum
          </p>
        </div>
        <div class="grid grid-cols-3 mb-8">
          <TechBlock v-for="tech in TechsIUse" :description="tech.description" :name="tech.name" class="group mx-4 mb-8">
            <template #icons class="">
              <div class="tech-icons-wrapper">
                <Icon v-for="techIcon in tech.icons" :name="techIcon.name" class="p-0" :style="{color: techIcon.color}"  />
              </div>
            </template>
          </TechBlock>

        </div>
        <div class="w-full">
          <DNuxtLink path="/service" :message="$t('check_service')" class="text-base block mx-auto 2xl:px-4 xl:px-3 px-2 rounded font-bold py-2" classes="">
            <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
          </DNuxtLink>
        </div>
		  </div>
	  </div>

    <DSeparator class="mx-4" />

    <section class="section-container">
      <div class="px-4">
        <SectionTitle title="Featured Projects" line-gap="ml-5" class="text-4xl mb-4" />


      </div>
    </section>
    <DSeparator class="mx-4" />
    <section class="section-container">
      <div class="px-4">
        <SectionTitle title="Latest Posts" line-gap="ml-5" class="text-4xl mb-4" />


      </div>
    </section>
  </div>
</template>

<style>

* {
  //font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

.section-container {
  @apply mx-auto py-12 2xl:max-w-[1110px] xl:max-w-[1000px] lg:max-w-[780px];
}

.tech-icons-wrapper {
  @apply group-hover:-translate-x-4 text-4xl  transition-all duration-300 -translate-x-1;
}

</style>

