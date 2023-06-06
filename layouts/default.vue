<script setup lang="ts">


import DSeparator from "~/components/UI/DSeparator.vue";
import ThemeSwitcher from "~/components/UI/ThemeSwitcher.vue";
import {useColorMode} from "../.nuxt/imports";

const {locale} = useI18n()
const menuOpen = ref(false)
function toggle() {
  menuOpen.value = !menuOpen.value
}
function changeLang(selectedLang: string) {
  locale.value = selectedLang
}

</script>

<template>
  <div class="lg:flex  dark:text-textLight dark:bg-firstGray text-pDark">
    <div class="relative  sm:min-w-[280px]">
      <section class="menu-sidebar bg-secondGray lg:fixed w-full min-h-fit lg:w-[280px] py-6 px-5 lg:min-h-screen overflow-hidden lg:overflow-y-scroll  transition-all duration-500 lg:max-h-full" :class="{'menu-hide': !menuOpen, 'menu-open': menuOpen }">
      <button class="lg:hidden absolute" @click="toggle">
        <div id="nav-icon4" :class="menuOpen ? 'open' : ''">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <h6 class="text-[22px] text-center lg:mb-3 font-bold text-white whitespace-nowrap">
        Sultonkhan Ablakulav
      </h6>
        <div class="py-2 transition-all duration-500 lg:opacity-100 opacity-0" :class="{'opacity-100': menuOpen }">
          <div class="">
            <div class="w-[160px] h-[160px] mb-3 bg-firstGray text-white mx-auto rounded-full mb-3 flex justify-center items-center">
              <!--            <img src="../assets/images/my-picture.jpeg" class="w-[160px] rounded-full" alt="">-->
              <h6 class="text-7xl">S</h6>
            </div>

            <p class="font-light relative max-w-[260px] mx-auto lg:max-w-full mb-8 text-center text-white before:content-[''] before:block before:w-[2px] before:h-[100%] before:bg-white before:absolute before:l-[4px]">
              <span class="px-1 block w-[100%]">
                We should never surrender
              </span>
            </p>
            <div class="flex lg:w-full lg:justify-between lg:gap-0 md:max-w-[300px] md:justify-between max-w-fit mx-auto px-3">
              <a href="https://linkedin.com/in/sultondev" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primaryLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-white" size="22px" name="ri:linkedin-box-fill"></Icon>
              </a>
              <a href="https://github.com/sultondev" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primaryLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-white" size="22px" name="uiw:github"></Icon>
              </a>
              <a href="https://t.me/sultondev" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primaryLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-white" size="22px" name="uil:telegram"></Icon>
              </a>
              <a href="https://instagram.com/sultondev" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primaryLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="text-white" size="22px" name="uil:instagram"></Icon>
              </a>
            </div>
          </div>
<!--          <hr class="mb-8">-->
          <DSeparator />

          <div class="w-fit mx-auto">
            <nav class="flex flex-col lg:min-w-fit min-w-[260px] gap-3 mb-6">

              <nuxt-link to="/" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="fluent:person-20-filled" />
                <span class="text-lg font-semibold">
              {{ $t('about_me')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/projects" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="solar:programming-bold" />
                <span class="text-lg font-semibold">
              {{ $t('my_projects')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/service" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="gridicons:briefcase" />
                <span class="text-lg font-semibold">
              {{ $t('my_service_pricing')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/resume" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="pepicons-pop:cv" />
                <span class="text-lg font-semibold">
              {{ $t('my_resume')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/blog" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="fa6-solid:blog" />
                <span class="text-lg font-semibold">
              {{ $t('my_blog')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/contacts" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="mdi:email-newsletter" />
                <span class="text-lg font-semibold">
              {{ $t('my_contacts')}}
            </span>
              </nuxt-link>
              <nuxt-link to="/" class="text-grayLight hover:text-white flex items-center ">
                <Icon class="text-[20px] mr-2" name="mdi:cogs" />
                <span class="text-lg font-semibold">
              {{ $t('more')}}
            </span>
              </nuxt-link>
            </nav>
            <button class="text-white hover:bg-primaryHover flex items-center justify-center bg-primary text-center w-full py-2 rounded-md">
              <Icon name="cib:telegram-plane" class="mr-2" />
              <span class="font-bold">
              {{$t('hire_me')}}
            </span>
            </button>
          </div>
<!--          <hr class="mb-3">-->
          <DSeparator />

          <div class="">
            <h5 class="text-xl text-white font-bold mb-3 text-center">{{$t('choose_lang')}}</h5>
            <div class="flex w-fit border mb-3 border-white text-white rounded font-bold mx-auto">
              <button @click="changeLang('en')" class="py-2 px-6 text-center border-r
          hover:bg-primaryLight transition-all duration-200 rounded-l"
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
          hover:bg-primaryLight transition-all duration-200 rounded-r"
                      :class="locale === 'uz' ? 'bg-primaryLight' : ''"
              >
                UZ
              </button>
            </div>
          </div>

          <DSeparator />

          <h5 class="text-xl text-white font-bold mb-3 text-center">{{$t(useColorMode().value)}} {{$t('mode')}}</h5>
          <ThemeSwitcher />
        </div>
    </section>
    </div>
    <div class="w-full h-full  min-h-screen">
      <slot />
    </div>
  </div>
</template>

<style >
.router-link-active {
  color: #00dc82;
  transition: all 250ms;
}

.router-link-active:hover {
  color: #00dc82;
}

.menu-sidebar::-webkit-scrollbar {
  width: 6px;
}

.menu-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.menu-sidebar::-webkit-scrollbar-thumb {
  background: #35404e;
}


#nav-icon4 {
  width: 45px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon4 span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #fff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}


#nav-icon4 {
}

#nav-icon4 span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 14px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 28px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 8px;
  left: 8px;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}
</style>