<script setup lang="ts">
type Props = {
  message?: string;
  iconName?: string;
  classes?: string | string[];
  iconClass?: "";
  path: string | object;
  arialLabel?: string;
};

const props = withDefaults(defineProps<Props>(), {
  message: "button",
  classes: "",
  iconName: "",
  iconClass: "",
  path: "/",
  arialLabel: "",
});
</script>

<template>
  <nuxt-link
    :to="localePath(props.path)"
    aria-label="check my links"
    :class="[props.classes, 'whitespace-nowrap']"
  >
    <slot />
    <span class="whitespace-nowrap">{{ props.message }}</span>
    <slot name="after-icon" />
  </nuxt-link>
</template>
