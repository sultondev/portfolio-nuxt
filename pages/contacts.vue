<script setup lang="ts">

import DInput from "~/components/UI/DInput.vue";
import DTextarea from "~/components/UI/DTextarea.vue";
</script>

<template>
  <div class="">
    <div>
      contacts
    </div>

    <DInput label="Full name" value="" class="w-[400px] mx-auto mb-40" type="email">

    </DInput>

    <DTextarea label="Message" value="" class="w-[400px] mx-auto" />
  </div>
</template>
