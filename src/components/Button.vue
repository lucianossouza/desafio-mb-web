<template>
  <button :class="['btn', customClass]" :type="type" @click="handleClick" :disabled="disabled">
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
  disabled: Boolean
});
</script>

<style>
.btn {
  width: 160px;
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: black;
  cursor: not-allowed;
}
</style>
