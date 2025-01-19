<template>
  <button
    :class="customClass"
    :type="type"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  handleClick: Function,
  type: {
    type: String,
    default: "button",
  },
  customClass: {
    type: String,
    default: "",
  },
  disabled: Boolean,
});
</script>
