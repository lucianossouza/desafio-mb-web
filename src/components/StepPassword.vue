<template>
  <div class="input-container">
    <label for="passwoard">Sua senha</label>
    <input
      id="password"
      type="password"
      v-model="data.password"
    />
  </div>
</template>

<script setup>
defineProps({
  data: {
    password: String,
  },
});
</script>
