<script setup>
import Button from "./Button.vue";
import Title from "./Title.vue";

defineProps({
  data: {
    email: String,
    userType: String,
  },
  handleClick: Function,
});
</script>

<template>
  <Title text="Seja bem vindo(a)" />
  <div class="input-container">
    <label for="email">Endereço de e-mail</label>
    <input
      id="email"
      type="email"
      v-model="data.email"
      placeholder="exemplo@exemplo.com.br"
    />
  </div>

  <div class="checkbox-container">
    <div class="checkbox">
      <input
        type="radio"
        name="userType"
        id="pessoa-fisica"
        v-model="data.userType"
        value="fisica"
      />
      <label for="pessoa-fisica">Pessoa física</label>
    </div>

    <div class="checkbox">
      <input
        type="radio"
        name="userType"
        id="pessoa-juridica"
        v-model="data.userType"
        value="juridica"
      />
      <label for="pessoa-juridica">Pessoa jurídica</label>
    </div>
  </div>

  <Button
    type="button"
    :handleClick="handleClick"
    :disabled="!data.userType || !data.email"
  >
    Continuar
  </Button>
</template>
