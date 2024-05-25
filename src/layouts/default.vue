<script lang="ts" setup>
import DSeparator from "~/components/UI/DSeparator.vue";
import ThemeSwitcher from "~/components/UI/ThemeSwitcher.vue";
import {useColorMode} from "#imports";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";

const {locale, availableLocales} = useI18n();
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
    loading.value = false;
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
    <Loading :is-loading="loading"/>
    <div
        :class="{ 'max-h-screen overflow-hidden': loading }"
        class="lg:flex dark:text-textLight dark:bg-firstGray text-pDark"
    >
      <div class="relative sm:min-w-[280px]">
        <client-only>
          <section
              :style="{
              '--thumb-clr':
                useColorMode().value === 'dark' ? '#35404e' : '#43926e',
            }"
              class="menu-sidebar"
          >
            <div class="overflow-hidden">
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
            </div>
            <div
                :class="[{'menu-open' : menuOpen}]"
                class="menu-content"
            >
              <div
                  :class="[
                  'lg:py-2 transition-all overflow-hidden duration-500 lg:opacity-100 lg:block',
                  menuOpen ? 'opacity-100 py-2' : 'opacity-0',
                ]"
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
                <DSeparator/>

                <div class="w-fit mx-auto">
                  <nav
                      :style="themeColors"
                      class="nav flex flex-col lg:min-w-fit min-w-[260px] gap-3 mb-6"
                  >
                    <nuxt-link
                        active-class="active-link"
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
                        active-class="active-link"
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
                        active-class="active-link"
                        :to="localePath('/service')"
                        aria-label="service and pricing page"
                        class="nav-links__item"
                    >
                      <Icon class="text-[20px] mr-2" name="gridicons:briefcase"/>
                      <span class="text-lg font-semibold">
                        {{ $t("my_service_pricing") }}
                      </span>
                    </nuxt-link>
                    <nuxt-link
                        active-class="active-link"
                        :to="localePath('/resume')"
                        aria-label="resume page"
                        class="nav-links__item"
                    >
                      <Icon class="text-[20px] mr-2" name="pepicons-pop:cv"/>
                      <span class="text-lg font-semibold">
                        {{ $t("my_resume") }}
                      </span>
                    </nuxt-link>
                    <nuxt-link
                        active-class="active-link"
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
                        active-class="active-link"
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
                      <Icon class="text-[20px] mr-2" name="mdi:cogs"/>
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
                    <Icon class="mr-2" name="cib:telegram-plane"/>
                  </DNuxtLink>
                </div>

                <DSeparator/>

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

                <DSeparator/>

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
                <ThemeSwitcher/>
              </div>
            </div>
          </section>
        </client-only>
      </div>
      <div
          class="main-content w-full h-full min-h-screen flex flex-col justify-between"
      >
        <slot/>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>


.icons-enter-active,
.icons-leave-active {
  transition: all 0.5s ease;
}

.icons-enter-from,
.icons-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.active-link {
  @apply dark:text-primary
  text-gray-800;
}

</style>
