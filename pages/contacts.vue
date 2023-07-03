<script setup lang="ts">

import DInput from "~/components/UI/DInput.vue";
import DTextarea from "~/components/UI/DTextarea.vue";
import DDropdownSelect from "~/components/UI/DDropdownSelect.vue";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import {useI18n} from "#imports";
import DButton from "~/components/UI/DButton.vue";
const {t} = useI18n()

const metaTitle = ref(t('portfolio_meta_contacts_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})

const submitData = reactive({
  fullname: '',
  email: '',
  package: {},
  message: '',
})

const packageOptions = ref([
  {label:t( 'service_plan_basic'), value: '1'},
  {label: t( 'service_plan_standard'), value: '2'},
  {label: t( 'service_plan_premium'), value: '3'},
  {label: t( 'service_plan_gold'), value: '4'}
])

function updateSubmitData(value: string, fieldName?: 'fullname' | 'email' | 'package' | 'message') {
  if(fieldName) {
    submitData[fieldName] = value
  }
}

</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent ">
      <div class="section-container">
        <div class="text-center px-4">
          <div class="w-fit mx-auto">
            <h6 class="text-3xl dark:text-textLight font-bold mb-2 text-textDark">
              {{ $t('my_contacts')}}
            </h6>

            <i18n-t
                tag="p"
                keypath="contact_explanations"
                class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto mb-2"
            >
              <template #email>
                <a href="mailto:sultondeveloper@gmail.com" :class="[linkDefaulClasses]">
                  sultondeveloper@gmail.com
                </a>
              </template>
            </i18n-t>

            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mb-3 mx-auto">
              {{$t('contact_follow')}}
            </p>

            <div class="flex lg:w-full justify-between md:max-w-[240px] md:justify-between max-w-[240px] mx-auto px-3">
              <a href="https://linkedin.com/in/sultondev" target="_blank" rel="noopener noreferrer" class="bg-transparent  dark:hover:text-primaryLightHover hover:text-primaryDarkHover text-primary transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-inherit text-3xl"  name="ri:linkedin-box-fill"></Icon>
              </a>
              <a href="https://github.com/sultondev" target="_blank" rel="noopener noreferrer" class="bg-transparent  dark:hover:text-primaryLightHover hover:text-primaryDarkHover text-primary transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-inherit text-3xl"  name="uiw:github"></Icon>
              </a>
              <a href="https://t.me/sultondev" target="_blank" rel="noopener noreferrer" class="bg-transparent  dark:hover:text-primaryLightHover hover:text-primaryDarkHover text-primary transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-inherit text-3xl"  name="uil:telegram"></Icon>
              </a>
              <a href="https://instagram.com/sultondev" target="_blank" rel="noopener noreferrer" class="bg-transparent  dark:hover:text-primaryLightHover hover:text-primaryDarkHover text-primary transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-inherit text-3xl"  name="uil:instagram"></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20">
      <div class="md:max-w-[600px] sm:max-w-[520px] 2xs:max-w-[400px] xs:max-w-[300px] mx-w-[90%] mx-auto">
        <DInput :label="$t('full_name')" update-field-name="fullname" @update:value="updateSubmitData" class="mx-auto mb-16" type="text">
        </DInput>

        <DInput :label="$t('email')" update-field-name="email" @update:value="updateSubmitData" class="mx-auto mb-14" type="text">
        </DInput>

        <DDropdownSelect class="mx-auto mb-4" :options="packageOptions" :placeholder="$t('package_select')" @update:value="updateSubmitData" update-field-name="package" />
        <DNuxtLink :path="localePath('/service')" :message="$t('package_hard_select')" class="block text-center mb-16" :classes="[linkDefaulClasses]">

        </DNuxtLink>

        <DTextarea :label="$t('message')" value="" class="mx-auto mb-12" @update:value="updateSubmitData" update-field-name="message" />

        <DButton :message="$t('send_message')" class="md:px-14 sm:px-8 px-4 font-semibold mx-auto">

        </DButton>
      </div>



    </div>

  </div>
</template>


