<script lang="ts" setup>
import DSeparator from "~/components/UI/DSeparator.vue";
import ThemeSwitcher from "~/components/UI/ThemeSwitcher.vue";
import { useColorMode } from "../.nuxt/imports";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import { linkDefaulClasses } from "~/constants/UI/DNuxtLink";

const { locale, availableLocales, strategy } = useI18n();
const menuOpen = ref(false);
const themeColors: any = ref(null);
const route = useRoute();
const loading = ref(true);

function toggle() {
  menuOpen.value = !menuOpen.value;
}

watch(
  () => useColorMode().value,
  (current) => {
    themeColors.value = {
      "--active-link-clr":
        useColorMode().value === "light" ? "rgba(0,0,0,0.6)" : "#54b689",
    };
  },
);
watch(
  () => route.fullPath,
  async () => {
    if (menuOpen.value && process.client) {
      menuOpen.value = false;
    }
  },
);

onMounted(() => {
  setTimeout(() => {
    if (process.client) loading.value = false;
  }, 2000);
});

if (process.client) {
  themeColors.value = {
    "--active-link-clr":
      useColorMode().value === "light" ? "rgba(0,0,0,0.6)" : "#54b689",
  };
}
</script>

<template>
  <div class="">
    <Loading :is-loading="loading" />
    <div
      :class="{ 'max-h-screen overflow-hidden': loading }"
      class="lg:flex dark:text-textLight dark:bg-firstGray text-pDark"
    >
      <div class="relative sm:min-w-[280px]">
        <client-only>
          <section
            :class="[menuOpen ? 'menu-open' : 'menu-hide']"
            :style="{
              '--thumb-clr':
                useColorMode().value === 'dark' ? '#35404e' : '#43926e',
            }"
            class="menu-sidebar dark:bg-secondGray bg-primary lg:fixed w-full min-h-fit lg:w-[280px] py-6 px-5 lg:min-h-screen overflow-hidden lg:overflow-y-scroll transition-all duration-500 lg:max-h-full"
          >
            <button
              aria-label="toggle mobile menu"
              class="lg:hidden absolute"
              @click="toggle"
            >
              <div id="nav-icon4" :class="menuOpen ? 'open' : ''">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <h6
              class="text-[22px] text-center lg:mb-3 font-bold text-white whitespace-nowrap"
            >
              Sultonkhan Ablakulav
            </h6>
            <div
              :class="{ 'opacity-100': menuOpen }"
              class="py-2 transition-all duration-500 lg:opacity-100 opacity-0"
            >
              <div class="">
                <div
                  class="w-[160px] h-[160px] mb-3 dark:bg-firstGray bg-white text-white mx-auto rounded-full flex justify-center items-center"
                >
                  <nuxt-img
                    alt="my picture sidebar"
                    class="w-[160px] rounded-full"
                    format="webp"
                    src="/my-picture.webp"
                    width="1000"
                  />
                  <!--              <h6 class="text-7xl dark:text-white text-[#317355]">S</h6>-->
                </div>

                <p
                  class="font-light relative max-w-[260px] mx-auto lg:max-w-full mb-8 text-center text-white before:content-[''] before:block before:w-[2px] before:h-[100%] before:bg-white before:absolute before:l-[4px]"
                >
                  <span class="px-1 block w-[100%]">
                    We should never surrender
                  </span>
                </p>
                <div
                  class="flex lg:w-full justify-between md:max-w-[300px] md:justify-between max-w-[240px] mx-auto px-3"
                >
                  <a
                    aria-label="linkedin account icon"
                    class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center"
                    href="https://linkedin.com/in/sultondev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      class="dark:text-white text-primary"
                      name="ri:linkedin-box-fill"
                      size="22px"
                    ></Icon>
                  </a>
                  <a
                    aria-label="linkedin account icon"
                    class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center"
                    href="https://github.com/sultondev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      class="dark:text-white text-primary"
                      name="uiw:github"
                      size="22px"
                    ></Icon>
                  </a>
                  <a
                    aria-label="linkedin account icon"
                    class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center"
                    href="https://t.me/sultondev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      class="dark:text-white text-primary"
                      name="uil:telegram"
                      size="22px"
                    ></Icon>
                  </a>
                  <a
                    aria-label="linkedin account icon"
                    class="dark:bg-primary bg-white dark:hover:bg-primaryLight hover:bg-grayLight transition-all duration-200 p-1.5 rounded-full flex items-center justify-center"
                    href="https://instagram.com/sultondev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      class="dark:text-white text-primary"
                      name="uil:instagram"
                      size="22px"
                    ></Icon>
                  </a>
                </div>
              </div>
              <!--          <hr class="mb-8">-->
              <DSeparator />

              <div class="w-fit mx-auto">
                <nav
                  :style="themeColors"
                  class="nav flex flex-col lg:min-w-fit min-w-[260px] gap-3 mb-6"
                >
                  <nuxt-link
                    :to="localePath('/')"
                    aria-label="main page"
                    class="nav-links__item"
                  >
                    <Icon
                      class="text-[20px] mr-2"
                      name="fluent:person-20-filled"
                    />
                    <span class="text-lg font-semibold">
                      {{ $t("about_me") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    :to="localePath('/projects')"
                    aria-label="projects page"
                    class="nav-links__item"
                  >
                    <Icon
                      class="text-[20px] mr-2"
                      name="solar:programming-bold"
                    />
                    <span class="text-lg font-semibold">
                      {{ $t("my_projects") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    :to="localePath('/service')"
                    aria-label="service and pricing page"
                    class="nav-links__item"
                  >
                    <Icon class="text-[20px] mr-2" name="gridicons:briefcase" />
                    <span class="text-lg font-semibold">
                      {{ $t("my_service_pricing") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    :to="localePath('/resume')"
                    aria-label="resume page"
                    class="nav-links__item"
                  >
                    <Icon class="text-[20px] mr-2" name="pepicons-pop:cv" />
                    <span class="text-lg font-semibold">
                      {{ $t("my_resume") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    :to="localePath('/blog')"
                    aria-label="blog page"
                    class="nav-links__item"
                  >
                    <Icon
                      class="text-[20px] ml-0.5 mr-2"
                      name="fa6-solid:blog"
                    />
                    <span class="text-lg font-semibold">
                      {{ $t("my_blog") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    :to="localePath('/contacts')"
                    aria-label="contacts page"
                    class="nav-links__item"
                  >
                    <Icon
                      class="text-[20px] mr-2"
                      name="mdi:email-newsletter"
                    />
                    <span class="text-lg font-semibold">
                      {{ $t("my_contacts") }}
                    </span>
                  </nuxt-link>
                  <button aria-label="more" class="nav-links__item">
                    <Icon class="text-[20px] mr-2" name="mdi:cogs" />
                    <span class="text-lg font-semibold">
                      {{ $t("more") }}
                    </span>
                  </button>
                </nav>

                <DNuxtLink
                  :classes="[linkDefaulClasses]"
                  :message="$t('hire_me')"
                  arial-label="check my projects"
                  class="hire__link hover:!bg-[#224f3a] !bg-[#317355] block !min-w-full"
                  path="/projects"
                >
                  <Icon class="mr-2" name="cib:telegram-plane" />
                </DNuxtLink>
              </div>

              <DSeparator />

              <div class="">
                <h5 class="text-xl text-white font-bold mb-3 text-center">
                  {{ $t("choose_lang") }}
                </h5>
                <div
                  class="flex w-fit border mb-3 border-white text-white rounded font-bold mx-auto"
                >
                  <nuxt-link
                    v-for="avLocale in availableLocales"
                    :key="avLocale"
                    :class="locale === avLocale ? 'bg-primaryLight' : ''"
                    :to="switchLocalePath(avLocale)"
                    class="py-1.5 px-5 text-center first:border-r last:border-l hover:bg-primaryLight transition-all duration-200 first:rounded-l last:rounded-r uppercase"
                  >
                    {{ avLocale }}
                  </nuxt-link>
                </div>
              </div>

              <DSeparator />

              <div
                class="text-xl text-white font-bold mb-3 text-center flex items-center justify-center"
              >
                <div class="min-w-[20px] min-h-[20px] block mr-2 relative">
                  <TransitionGroup name="icons">
                    <Icon
                      v-if="useColorMode().value === 'light'"
                      class="left-0 absolute"
                      name="material-symbols:light-mode"
                    />
                    <Icon
                      v-else
                      class="left-0 absolute"
                      name="ic:round-dark-mode"
                    />
                  </TransitionGroup>
                </div>
                <span class="">
                  {{ $t(useColorMode().value) }} {{ $t("mode") }}
                </span>
              </div>
              <ThemeSwitcher />
            </div>
          </section>
        </client-only>
      </div>
      <div
        class="main-content w-full h-full min-h-screen flex flex-col justify-between"
      >
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
.menu-open {
  @apply max-h-[1044px];
}

.menu-hide {
  @apply max-h-[80px];
}

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
  --thumb-clr: "#43926e";
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
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
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
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
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