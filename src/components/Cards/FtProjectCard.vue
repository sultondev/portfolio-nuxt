<script setup lang="ts">
import ImgWrapper from "~/components/UI/ImgWrapper.vue";

type Props = {
  thumbnail?: string
  name?: string
  description?: string
  client_info?: string
  link_to_project?: string
}
const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {
  name: 'teest',
  thumbnail: "https://media.istockphoto.com/id/1365567894/vector/hand-drawn-vector-tic-tac-toe-game-noughts-and-crosses-doodle-sketch.jpg?s=612x612&w=0&k=20&c=pSs72urXBp6V8pnXvuJIfX3krtUoFhHaX6fG2g1PxUQ=",
  description: 'Eligendi laboriosam laudantium vel. Ab beatae deleniti deserunt dolorem dolores expedita harum illo minima, necessitatibus perferendis praesentium, repudiandae saepe sint! Dolorum ducimus iure maiores officiis, provident quidem soluta velit voluptatem.',
  client_info: "Personal Project",
  link_to_project: "https://kia-qarshi.uz/"
})

</script>

<template>
  <div class="">
    <div class="dark:bg-grayDark bg-whiteLight shadow-cardItem flex md:flex-row flex-col lg:max-w-full md:max-w-[70%] 2xs:max-w-[300px]  mx-auto">
      <ImgWrapper :src="thumbnail" class="gradient-img  md:w-[165px] md:h-[185px] 2xs:w-[342px] 2xs:h-[230px] w-full object-cover " />
      <div class="flex flex-col justify-between p-5 md:min-h-[185px] min-h-[210px]">
        <div class="max-w-fit">
          <nuxt-link :to="link_to_project" class="text-xl text-primary block mb-4 hover:underline transition-all duration-300">
            {{name}}
          </nuxt-link>
          <div class="ft-project__description text-sm text-pDark dark:text-whiteGray ">
            {{description}}
          </div>
        </div>

        <div class="text-xs dark:text-grayLight">
          <!-- Should be added in uz, en, ru in json file the word client       -->
          {{t('client')}}: {{client_info}}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ft-project__description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.gradient-img {
  @apply relative
    before:content-['']
    before:block
    before:w-full
    before:h-full
  ;
}
</style>
