<script setup>
import Button from "./Button.vue";
import Title from "./Title.vue";

defineProps({
  email: String,
  password: String,
  previousButtonClick: Function,
});
</script>

<template>
  <Title text="Revise suas informações" />
  <div class="input-container">
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" :value="email" />
  </div>

  <slot />

  <div class="input-container">
    <label for="password">Senha</label>
    <input id="password" type="password" :value="password" />
  </div>

  <div class="buttons">
    <Button
      type="button"
      :customClass="'btn-secondary'"
      :handleClick="previousButtonClick"
    >
      Voltar
    </Button>
    <Button type="submit"> Cadastrar </Button>
  </div>
</template>
