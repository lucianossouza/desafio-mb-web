<script setup>
import Button from "./Button.vue";
import Title from "./Title.vue";

defineProps({
  data: {
    password: String,
  },
  nextButtonClick: Function,
  previousButtonClick: Function,
});
</script>

<template>
  <Title text="Senha de acesso" />
  <div class="input-container">
    <label for="password">Sua senha</label>
    <input id="password" type="password" v-model="data.password" />
  </div>
  <div class="buttons">
    <Button
      type="button"
      :customClass="'btn-secondary'"
      :handleClick="previousButtonClick"
    >
      Voltar
    </Button>
    <Button
      type="button"
      :handleClick="nextButtonClick"
      :disabled="!data.password"
    >
      Continuar
    </Button>
  </div>
</template>
