<script setup lang="ts">


import DSeparator from "~/components/UI/DSeparator.vue";
import ThemeSwitcher from "~/components/UI/ThemeSwitcher.vue";
import {useColorMode} from "../.nuxt/imports";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import Loading from "~/components/loading.vue";

const {locale, availableLocales, strategy} = useI18n()
const menuOpen = ref(false)
const themeColors: any = ref(null)
const route = useRoute()
const loading = ref(true)
function toggle() {
  menuOpen.value = !menuOpen.value
}

if(process.client) {
  themeColors.value = {'--active-link-clr': useColorMode().value === 'light' ? 'rgba(0,0,0,0.6)' : '#54b689'}
  watch(() => useColorMode().value, (current) =>{
    themeColors.value = {'--active-link-clr': useColorMode().value === 'light' ? 'rgba(0,0,0,0.6)' : '#54b689'}
  })

  watch(route, () => {
    if(menuOpen.value && process.client) {
        menuOpen.value = false
    }
  })
}



onMounted(async() => {
  await setTimeout(() => {
  if(process.client) loading.value = false
  }, 2000)

})

</script>

<template>
  <Loading :is-loading="loading" />
  <div class="lg:flex dark:text-textLight dark:bg-firstGray text-pDark " :class="{'max-h-screen overflow-hidden': loading}">
    <div class="relative  sm:min-w-[280px]">
      <client-only>
       <section class="menu-sidebar dark:bg-secondGray bg-primary lg:fixed w-full min-h-fit lg:w-[280px] py-6 px-5 lg:min-h-screen overflow-hidden lg:overflow-y-scroll  transition-all duration-500 lg:max-h-full" :class="{'menu-hide': !menuOpen, 'menu-open': menuOpen }" :style="{'--thumb-clr': useColorMode().value === 'dark' ? '#35404e': '#43926e'}">
      <button class="lg:hidden absolute" aria-label="toggle mobile menu" @click="toggle">
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
            <div class="w-[160px] h-[160px] mb-3 dark:bg-firstGray bg-white text-white mx-auto rounded-full flex justify-center items-center">
                          <nuxt-img src="/my-picture.webp" width="1000" class="w-[160px] rounded-full" format="webp" alt="my picture sidebar" />
<!--              <h6 class="text-7xl dark:text-white text-[#317355]">S</h6>-->
            </div>

            <p class="font-light relative max-w-[260px] mx-auto lg:max-w-full mb-8 text-center text-white before:content-[''] before:block before:w-[2px] before:h-[100%] before:bg-white before:absolute before:l-[4px]">
              <span class="px-1 block w-[100%]">
                We should never surrender
              </span>
            </p>
            <div class="flex lg:w-full justify-between md:max-w-[300px] md:justify-between max-w-[240px] mx-auto px-3">
              <a href="https://linkedin.com/in/sultondev" aria-label="linkedin account icon" target="_blank" rel="noopener noreferrer" class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="dark:text-white text-primary" size="22px" name="ri:linkedin-box-fill"></Icon>
              </a>
              <a href="https://github.com/sultondev" aria-label="linkedin account icon" target="_blank" rel="noopener noreferrer" class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="dark:text-white text-primary" size="22px" name="uiw:github"></Icon>
              </a>
              <a href="https://t.me/sultondev" aria-label="linkedin account icon" target="_blank" rel="noopener noreferrer" class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="dark:text-white text-primary" size="22px" name="uil:telegram"></Icon>
              </a>
              <a href="https://instagram.com/sultondev" aria-label="linkedin account icon" target="_blank" rel="noopener noreferrer" class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center">
                <Icon class="dark:text-white text-primary" size="22px" name="uil:instagram"></Icon>
              </a>
            </div>
          </div>
<!--          <hr class="mb-8">-->
          <DSeparator />

          <div class="w-fit mx-auto">
            <nav class="nav flex flex-col lg:min-w-fit min-w-[260px] gap-3 mb-6" :style="themeColors">

                <nuxt-link :to="localePath('/')" class="nav-links__item" aria-label="main page">
                  <Icon class="text-[20px] mr-2" name="fluent:person-20-filled" />
                  <span class="text-lg font-semibold">
                    {{ $t('about_me')}}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/projects')" aria-label="projects page" class="nav-links__item">
                  <Icon class="text-[20px] mr-2" name="solar:programming-bold" />
                  <span class="text-lg font-semibold">
                    {{ $t('my_projects')}}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/service')" aria-label="service and pricing page" class="nav-links__item">
                  <Icon class="text-[20px] mr-2" name="gridicons:briefcase" />
                  <span class="text-lg font-semibold">
                    {{ $t('my_service_pricing')}}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/resume')" aria-label="resume page" class="nav-links__item">
                  <Icon class="text-[20px] mr-2" name="pepicons-pop:cv" />
                  <span class="text-lg font-semibold">
                    {{ $t('my_resume')}}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/blog')" aria-label="blog page" class="nav-links__item">
                  <Icon class="text-[20px] ml-0.5 mr-2" name="fa6-solid:blog" />
                  <span class="text-lg font-semibold">
                    {{ $t('my_blog')}}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/contacts')" aria-label="contacts page" class="nav-links__item">
                  <Icon class="text-[20px] mr-2" name="mdi:email-newsletter" />
                  <span class="text-lg font-semibold">
                    {{ $t('my_contacts')}}
                  </span>
                </nuxt-link>
                <button class="nav-links__item" aria-label="more">
                  <Icon class="text-[20px] mr-2" name="mdi:cogs" />
                  <span class="text-lg font-semibold">
                    {{ $t('more')}}
                  </span>
                </button>

              </nav>

            <DNuxtLink arial-label="check my projects" path="/projects" :message="$t('hire_me')" class="hire__link hover:!bg-[#224f3a] !bg-[#317355] block !min-w-full" :classes="[linkDefaulClasses]">
              <Icon name="cib:telegram-plane" class="mr-2" />
            </DNuxtLink>
          </div>

          <DSeparator />

          <div class="">
            <h5 class="text-xl text-white font-bold mb-3 text-center">{{$t('choose_lang')}}</h5>
            <div class="flex w-fit border mb-3 border-white text-white rounded font-bold mx-auto">
              <nuxt-link
                  v-for="avLocale in availableLocales"
                  :key="avLocale"
                  class="py-1.5 px-5 text-center first:border-r last:border-l
          hover:bg-primaryLight transition-all duration-200 first:rounded-l last:rounded-r uppercase"
                  :class="locale === avLocale ? 'bg-primaryLight' : ''"
                  :to="switchLocalePath(avLocale)">
                {{ avLocale }}
              </nuxt-link>
            </div>
          </div>

          <DSeparator />

          <div class="text-xl text-white font-bold mb-3 text-center flex items-center justify-center">
            <div class="min-w-[20px] min-h-[20px] block mr-2 relative">
              <TransitionGroup name="icons">
                <Icon name="material-symbols:light-mode" class="left-0 absolute" v-if="useColorMode().value === 'light' " />
                <Icon name="ic:round-dark-mode" class="left-0 absolute" v-else />
              </TransitionGroup>
            </div>
            <span class="">
              {{$t(useColorMode().value)}} {{$t('mode')}}
            </span>
          </div>
          <ThemeSwitcher />
        </div>
    </section>
      </client-only>

    </div>
    <div class="main-content w-full h-full min-h-screen flex flex-col justify-between">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style>
.icons-enter-active,
.icons-leave-active {
  transition: all 0.5s ease;
}
.icons-enter-from,
.icons-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.nav {
  --active-link-clr: #54b689;
}

.menu-sidebar {
  --thumb-clr: '#43926e';
}
.nav-links__item {
  @apply text-grayLight dark:hover:text-white hover:text-[rgba(0,0,0,0.6)] flex items-center;
}

.hire__link {
  @apply dark:hover:!bg-primaryHover dark:!bg-primary !text-white text-base text-center rounded font-bold py-2;
}

.router-link-active {
  color: var(--active-link-clr);
  transition: all 250ms;
}


.menu-sidebar::-webkit-scrollbar {
  width: 6px;
}

.menu-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.menu-sidebar::-webkit-scrollbar-thumb {
  background: var(--thumb-clr);
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--clr-primary);
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