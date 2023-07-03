<script setup lang="ts">

const {t} = useI18n()
const metaOgTitle = ref(t('portfolio_meta_og_title'))
const description = ref(t('portfolio_meta_description'))
const metaOgDescription = ref(t('portfolio_meta_og_description'))
const metaOg = ref(t('portfolio_meta_og_description'))


useServerSeoMeta({
  ogTitle: '404 not found',
  description: '404 not found',
  ogDescription: '404 not found',
  ogImage: 'https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-Retro-Error-Page.png',
  'og:image:height': '1000',
  keywords: '404 not found',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  // twitterDomain: '',
  // twitterUrl: '',
  twitterTitle: '404 not found',
  twitterDescription: '404 not found',
  twitterImage: 'https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-Retro-Error-Page.png'
})



type Props = {
  error: {
    message: string
    url: string
  }
}

defineProps<Props>()
const router = useRouter()
function goToPrev() {
  router.go(-1)
}
</script>

<template>
  <div class="error-wrapper relative bg-black min-h-screen" >

      <div class="noise"></div>
      <div class="overlay"></div>
      <div class="terminal">
        <h1>Error <span class="errorcode">404</span></h1>
        <p class="output">{{$t('not_found_output_first')}}</p>

        <i18n-t
            tag="p"
            keypath="not_found_output_second"
            class="output"
        >
          <template #back>
            <button @click="goToPrev()">{{$t('not_found_back')}}</button>
          </template>
          <template #home>
            <NuxtLink to="/">{{$t('not_found_home')}}</NuxtLink>
          </template>
        </i18n-t>
         <p class="output">Good luck.</p>
      </div>
  </div>
</template>


<style scoped>
@import 'https://fonts.googleapis.com/css?family=Inconsolata';


.error-wrapper {
  box-sizing: border-box;
  height: 100%;
  background-color: #000000;
  background-image: radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Inconsolata', Helvetica, sans-serif;
  font-size: 1.5rem;
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
      0 0 1ex rgba(51, 255, 51, 1),
      0 0 2px rgba(255, 255, 255, 0.8);
}

.noise {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: .02;
}

.overlay {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background:
      repeating-linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0) 100%);
  background-size: auto 4px;
  z-index: 1;
}

.overlay::before {
  content: "";
  pointer-events: none;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      0deg,
      transparent 0%,
      rgba(32, 128, 32, 0.2) 2%,
      rgba(32, 128, 32, 0.8) 3%,
      rgba(32, 128, 32, 0.2) 3%,
      transparent 100%);
  background-repeat: no-repeat;
  animation: scan 7.5s linear 0s infinite;
}

@keyframes scan {
  0%        { background-position: 0 -100vh; }
  35%, 100% { background-position: 0 100vh; }
}

.terminal {
  box-sizing: inherit;
  position: absolute;
  height: 100%;
  width: 1000px;
  max-width: 100%;
  padding: 4rem;
  text-transform: uppercase;
}

.output {
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
      0 0 1px rgba(51, 255, 51, 0.4),
      0 0 2px rgba(255, 255, 255, 0.8);
}

.output::before {
  content: "> ";
}

/*
.input {
  color: rgba(192, 255, 192, 0.8);
  text-shadow:
      0 0 1px rgba(51, 255, 51, 0.4),
      0 0 2px rgba(255, 255, 255, 0.8);
}

.input::before {
  content: "$ ";
}
*/

a, button {
  color: #fff;
  text-decoration: none;
}

a::before, button::before {
  content: "[";
}

a::after, button::after {
  content: "]";
}

.errorcode {
  color: white;
}
</style>