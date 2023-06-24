<script>


</script>

<template>
  <footer class="text-center pt-12 pb-8">
    <h3 class="dark:text-whiteGray text-sm">
      {{$t('made_by')}}
    </h3>
    <div class="flex flex-wrap justify-center items-center">
      <Icon name="ri:copyright-fill" class="text-primary mx-1" />
      <p class="mx-1 dark:text-whiteGray text-sm">
        Copyright 2023.
      </p>
      <div class="flex flex-wrap justify-center">
        <p class="mx-1 dark:text-whiteGray text-sm">
          {{$t('copy_rights')}}
        </p>
        <nuxt-link to="/" class="text-primary text-sm hover:underline">
          {{$t('policy')}}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>