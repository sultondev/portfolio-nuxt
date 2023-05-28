<script setup lang="ts">

import {useMainStore} from "~/store/mainStore";
import {storeToRefs} from "pinia";
import DButton from "~/components/UI/DButton.vue";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import SectionTitle from "~/components/UI/SectionTitle.vue";
import TechBlock from "~/components/UI/TechBlock.vue";
import DSeparator from "~/components/UI/DSeparator.vue";

const { locale } = useI18n()
const main = useMainStore()
// extract specific store properties
const { counter, doubleCounter } = storeToRefs(main)


</script>
<template>
  <div class="sm:text-2xl sm:text-green-500 xs:text-7xl xs:text-red-600 ">
    <div class="section-container">
      <div class="flex justify-between px-4">
        <div class="w-2/4">
          <h6 class="text-5xl dark:text-textLight font-bold mb-2 text-textDark">Sultonkhan Ablakulav</h6>
          <p class="dark:text-grayLight text-pDark text-2xl mb-4">Front-End developer</p>
          <p class="dark:text-grayLight text-pDark text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores, autem consectetur corporis doloribus ea explicabo
            illum iste iusto mollitia optio quaerat qui rerum, saepe tenetur unde voluptates voluptatibus voluptatum.
          </p>
          <div class="flex h-fit">
            <DButton :message="$t('check_projects')" class="text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2">
              <Icon name="ic:baseline-arrow-circle-right" class="mr-2 text-2xl" />
            </DButton>
            <DNuxtLink path="/resume" :message="$t('check_resume')" class="text-base 2xl:px-4 xl:px-3 px-2 mr-3 rounded font-bold py-2" classes="!bg-grayLighter hover:!bg-grayLightHover">
              <Icon name="mdi:file-document-multiple" class="mr-2 text-2xl" />
            </DNuxtLink>
          </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
             class="w-[400px] h-[300px]"
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
          <TechBlock description="jdwilaj dwlja djlw jalw" class="group mx-4 mb-8">
            <template #icons class="">
              <div class="group-hover:-translate-x-4 text-4xl  transition-all duration-300 linear -translate-x-1">
                <Icon name="bxl:javascript" class="text-yellow-400 p-0"  />
              </div>
            </template>
          </TechBlock>


          <TechBlock description="jdwilaj dwlja djlw jalw" class="group mx-4 mb-8">
            <template #icons class="">
              <div class="group-hover:-translate-x-4 text-4xl  transition-all duration-300 linear -translate-x-1">
                <Icon name="bxl:javascript" class="text-yellow-400 p-0"  />
              </div>
            </template>
          </TechBlock>


          <TechBlock description="jdwilaj dwlja djlw jalw" class="group mx-4 mb-8">
            <template #icons class="">
              <div class="group-hover:-translate-x-4 text-4xl  transition-all duration-300 linear -translate-x-1">
                <Icon name="bxl:javascript" class="text-yellow-400 p-0"  />
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
      <div class="">
        <SectionTitle title="Featured Projects" line-gap="ml-5" class="text-4xl mb-4" />


      </div>
    </section>
    <DSeparator class="mx-4" />
    <section class="section-container">
      <div class="">
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
  @apply mx-auto py-12 2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[700px];
}
</style>

