<script setup lang="ts">
const {locale} = useI18n()
  function changeLang(selectedLang: string) {
    locale.value = selectedLang
  }
</script>

<template>
  <div class="flex">
    <section class="bg-secondGray py-6 px-8 sm:min-w-[280px] min-h-screen">
      <div class="">
          <h6 class="">
            Sultonkhan Ablakulav
          </h6>
          <div class="">
            <img src="" alt="">
          </div>

          <p>
            Quote
          </p>
          <div class="flex w-full justify-between">
            <a href="" class="bg-primary p-2 rounded-full flex items-center justify-center">
              <Icon class="text-white" size="22px" name="el:linkedin"></Icon>
            </a>
            <a href="" class="bg-primary p-2 rounded-full flex items-center justify-center">
              <Icon class="text-white" size="22px" name="uiw:github"></Icon>
            </a>
            <a href="" class="bg-primary p-2 rounded-full flex items-center justify-center">
              <Icon class="text-white" size="22px" name="uil:telegram"></Icon>
            </a>
            <a href="" class="bg-primary p-2 rounded-full flex items-center justify-center">
              <Icon class="text-white" size="22px" name="uil:instagram"></Icon>
            </a>
          </div>
      </div>
      <hr>
      <div class="w-fit mx-auto">
        <nav class="flex flex-col  w-fit gap-2 mb-6">

          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="fluent:person-20-filled" />
            <span class="text-lg font-semibold">
            {{ $t('about_me')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="solar:programming-bold" />
            <span class="text-lg font-semibold">
            {{ $t('my_projects')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="gridicons:briefcase" />
            <span class="text-lg font-semibold">
            {{ $t('my_service_pricing')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="pepicons-pop:cv" />
            <span class="text-lg font-semibold">
            {{ $t('my_resume')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="fa6-solid:blog" />
            <span class="text-lg font-semibold">
            {{ $t('my_blog')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="mdi:email-newsletter" />
            <span class="text-lg font-semibold">
            {{ $t('my_contacts')}}
          </span>
          </a>
          <a href="" class="text-grayLight hover:text-white flex items-center ">
            <Icon class="text-[20px] mr-2" name="mdi:cogs" />
            <span class="text-lg font-semibold">
            {{ $t('more')}}
          </span>
          </a>
        </nav>
        <button class="text-white hover:bg-primaryHover flex items-center justify-center bg-primary text-center w-full py-2 rounded-md">
          <Icon name="cib:telegram-plane" class="mr-2" />
          <span class="">
            {{$t('hire_me')}}
          </span>
        </button>
      </div>
      <hr>
      <div class="">
        <h5 class="text-xl text-white font-bold mb-4 text-center">{{$t('choose_lang')}}</h5>
        <div class="flex w-fit border border-white text-white rounded font-bold ">
          <button @click="changeLang('en')" class="py-2 px-6 text-center border-r
          hover:bg-primaryLight transition-all duration-200"
          :class="locale === 'en' ? 'bg-primaryLight' : ''"
          >
              EN
          </button>
          <button @click="changeLang('ru')" class="py-2 px-6 text-center border-r
          hover:bg-primaryLight transition-all duration-200"
          :class="locale === 'ru' ? 'bg-primaryLight' : ''"
          >
              RU
          </button>
          <button @click="changeLang('uz')" class="py-2 px-6 text-center
          hover:bg-primaryLight transition-all duration-200"
          :class="locale === 'uz' ? 'bg-primaryLight' : ''"
          >
              UZ
          </button>
        </div>
      </div>
    </section>
    <div class="w-full h-full bg-firstGray min-h-screen">
      <slot />
    </div>
  </div>
</template>

