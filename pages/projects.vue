<script setup lang="ts">

import {btnDefaultClasses, linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
</script>

<template>
  <div class="">
    <div class="bg-[#fafafa] dark:bg-transparent">
      <div class="section-container">
        <div class="text-center px-4">
          <div class="w-fit mx-auto">
            <h6 class="text-3xl dark:text-textLight font-bold mb-2 text-textDark">Projects</h6>
            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[92%] mx-auto mb-4">
              {{$t('projects_substring')}}
            </p>

            <DNuxtLink path="/projects" :message="$t('hire_me')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              <Icon name="cib:telegram-plane" class="mr-2" />
            </DNuxtLink>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
</style>