<script setup lang="ts">

import DInput from "~/components/UI/DInput.vue";
import DTextarea from "~/components/UI/DTextarea.vue";
import DDropdownSelect from "~/components/UI/DDropdownSelect.vue";


</script>

<template>
  <div class="">
    <div>
      contacts
    </div>

    <DInput label="Full name" value="" class="w-[400px] mx-auto mb-40" type="email">

    </DInput>


    <DDropdownSelect class="max-w-[400px] mx-auto" :options="[{label: 'Basic', value: '1'},{label: 'premium', value: '1'}, {label: 'gold', value: '1'}]" placeholder="dwadwa" :default-value="{label: 'gold', value: '1'}" />
    <DTextarea label="Message" value="" class="w-[400px] mx-auto" />
  </div>
</template>


