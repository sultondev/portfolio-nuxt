<script setup lang="ts">
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";

type Props = {
  thumbnail?: string
  title?: string
  brief_text?: string
  link_to_post?: string
  created_at?: string
}

const props = withDefaults(defineProps<Props>(), {
  thumbnail: "https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg",
  title: "Getting started with Node JS",
  brief_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aspernatur commodi cum cupiditate delectus deleniti distinctio illo impedit ipsam, iusto neque obcaecati officiis possimus praesentium sed voluptas? Eveniet, quibusdam",
  created_at: "05.02.2015"
})

</script>


<template>
  <div class="blog-item__wrapper dark:bg-grayDark bg-whiteLight xl:max-w-[300px] lg:max-w-[290px] xs:max-w-[300px] max-w-full">
    <img class="w-full object-fill h-[170px]" :src="thumbnail" alt="">
    <div class="lg:p-5 p-4">
      <nuxt-link class="mb-4 block text-xl text-primary">
        {{title}}
      </nuxt-link>
      <div class="xl:mb-8 lg:mb-6 mb-4 blog-brief__text text-sm dark:text-grayLight">
        {{brief_text}}
      </div>
      <div class="xl:mb-8 lg:mb-6 mb-4 text-sm font-bold dark:text-grayLight">
        Language: English
      </div>
      <DNuxtLink arial-label="check my projects" path="/projects" :message="$t('read_more')" class="" :classes="[linkDefaulClasses, 'hover:underline']">
        <template #after-icon>
          <Icon name="ic:baseline-arrow-right-alt" class="mr-2 text-xl" />
        </template>
      </DNuxtLink>
    </div>
      <div class="lg:p-5 p-4 blog-item__date text-sm text-grayDarker">
        Published date: {{created_at}}
      </div>
  </div>
</template>

<style>
.blog-item__wrapper {
  @apply shadow-blogCard hover:shadow-cardItem transition-all duration-200 ;
}

.blog-brief__text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.blog-item__date {
  background-color: rgba(0,0,0,.03);
  border-top: 1px solid rgba(0,0,0,.125);
}
</style>