<script setup lang="ts">

import {useI18n} from "#imports";
import { watch } from 'vue';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  defaultValue?: Option;
  placeholder: string;
  selectFieldName?: string
  placeholderFieldName?: string
  closeAfterSelect?: boolean
}

interface Emits {
  'update:value': (value: string) => void;
}

const {t} = useI18n()
const props = withDefaults(defineProps<Props>(), {
  selectFieldName: 'value',
  placeholderFieldName: 'label',
  closeAfterSelect: true
});
const isDropdownOpen = ref(false)
const emits = defineEmits<Emits>();

const selectedOption = ref(props.defaultValue || {});

const handleSelectChange = () => {
  emits('update:value', selectedOption.value);
};

type DropdownClickHandler = () => void;
const handleDropdownClick: DropdownClickHandler = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const dropdownCloser: DropdownClickHandler = () => {
  isDropdownOpen.value = false
}

const selectOption = (option: Option) => {
  selectedOption.value = option
}

watch(selectedOption, (current)=> {
  handleSelectChange()
  if(props.closeAfterSelect) {
    dropdownCloser()
  }
})

</script>

<template>
  <div class="relative">
    <div class="outside-click" :class="isDropdownOpen ? 'block fixed' : 'hidden'" @click="dropdownCloser()">

    </div>
    <div class="select-field" @click="handleDropdownClick">
      <h6 v-if="Object.values(selectedOption).length == 0" class="text-lg font-semibold dark:hover:text-textLight dark:text-whiteGray shrink w-full">
        {{placeholder}}
      </h6>
      <h6 v-else class="text-lg font-semibold dark:hover:text-textLight dark:text-whiteGray shrink w-full">
        {{selectedOption[placeholderFieldName]}}
      </h6>
      <Icon name="material-symbols:keyboard-arrow-down" class="text-2xl justify-self-end arrow-rotate" :class="isDropdownOpen ? 'rotate-180' : 'rotate-0' ">

      </Icon>
    </div>
    <div class="options-wrapper" :class="isDropdownOpen ? 'dropdown-is-open' : 'dropdown-is-closed'">
      <div v-for="option in options" class="option" @click="selectOption(option)">
          {{option.label}}
      </div>
    </div>
  </div>
</template>


<style scoped>

.outside-click {
  @apply w-full h-full top-0 z-10 left-0;
}

.select-field {
  @apply flex rounded items-center justify-between dark:bg-grayDark bg-whiteLight py-2 px-4 cursor-pointer relative z-20;
}

.options-wrapper {
  @apply overflow-hidden w-3/4 mt-2 py-2 dark:bg-grayDark bg-whiteLight absolute z-10 translate-x-1/2 right-1/2 rounded;
  transition: all 0.4s linear !important;
}
.option {
  @apply py-2 pl-8 w-full cursor-pointer dark:before:bg-primary relative;
}

.option::before {
  transition: all 0.2s linear !important;
  content: "";
  display: block;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.option:hover::before {
  width: 4px;
}

.arrow-rotate {
  transition: all 0.3s  cubic-bezier(0.68, -0.55, 1, 1.55) 0s !important;
}


.dropdown-is-closed {
  @apply opacity-0 invisible mt-4;
}

.dropdown-is-open {
  @apply opacity-100 visible;
}
</style>