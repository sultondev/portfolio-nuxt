<script setup lang="ts">

interface Props {
  value: string;
  label: string;
  type?: string
}

interface Emits {
  'update:value': (value: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

const emits = defineEmits<Emits>();

const internalValue = ref(props.value);
const internalType = ref(props.type)
const handleChange = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  internalValue.value = newValue;
  emits('update:value', newValue);
};

const clearInput = () => {
  internalValue.value = ''
  emits('update:value', '')
}
</script>

<template>
  <div class="group relative flex items-center ">
    <input :type="internalType" class="input-self w-full text-base " :value="internalValue" @input="handleChange" />
    <div class="input-inactive-line">

    </div>
    <div class="input-active-line group-focus-within:w-full" :class="internalValue.length > 0 ? '!w-full' : 'w-0'">

    </div>
    <div class="input-label group-focus-within:-top-6 dark:group-focus-within:!text-white" :class="internalValue.length > 0 ? '!-top-6' : 'top-0'">
      {{label}}
    </div>
    <button class="input-value-clear text-xl bg-transparent -translate-y-0.5 " :class="internalValue.length > 0 ? 'visible' : 'invisible'" @click="clearInput">
      <Icon name="ic:round-close" class="text-primary bg-transparent"/>
    </button>
  </div>
</template>

<style>

.input-label {
  @apply absolute top-0 left-0 transition-all duration-300 pointer-events-none;
  /* fonts */
  @apply text-base font-semibold dark:text-grayLight;
}

.input-self {
  @apply bg-transparent outline-0;
}


.input-inactive-line {
  @apply absolute -bottom-1.5 w-full bg-solidGray h-[2px];
}
.input-active-line {
  @apply absolute -bottom-1.5 w-0 bg-primary h-[2px] transition-all duration-300;
}
</style>