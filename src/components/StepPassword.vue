<script setup>
import Button from "./Button.vue";

defineProps({
  data: {
    password: String,
  },
  handleClick: Function,
});
</script>

<template>
  <div class="input-container">
    <label for="password">Sua senha</label>
    <input id="password" type="password" v-model="data.password" />
  </div>
  <Button type="button" :handleClick="handleClick" :disabled="!data.password">
    Continuar
  </Button>
</template>
