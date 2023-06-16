<script setup lang="ts">

import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {useI18n} from "#imports";


const {locale} = useI18n()
</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent">
      <div class="section-container">
        <div class="text-center px-4">
          <div class="w-fit mx-auto">
            <h6 class="text-3xl dark:text-textLight font-bold mb-2 text-textDark">
              {{ $t('my_service_pricing')}}
            </h6>

<!--            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto mb-4">-->
<!--              {{$t('service_substring_experience')}}-->
<!--            </p>-->

            <i18n-t keypath="service_substring_experience" tag="p" class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto mb-4">
              <template v-slot:projects>
                <DNuxtLink path="/projects" :message="$t('my_portfolio_projects')" class="hover:text-primaryGray hover:underline text-primary">
                </DNuxtLink>
              </template>
              <template v-slot:resume>
                <DNuxtLink path="/resume" :message="$t('my_service_resume')" class="hover:text-primaryGray hover:underline text-primary">
                </DNuxtLink>
              </template>
            </i18n-t>

            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto">
              {{$t('service_substring_cooperation')}}
            </p>

<!--            <DNuxtLink path="/service" :message="$t('hire_me')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">-->
<!--              <Icon name="cib:telegram-plane" class="mr-2" />-->
<!--            </DNuxtLink>-->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
