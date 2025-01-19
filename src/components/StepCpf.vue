<script setup>
import Button from "./Button.vue";
import Title from "./Title.vue";

defineProps({
  data: {
    name: String,
    cpf: String,
    birthdate: String,
    phone: String,
  },
  nextButtonClick: Function,
  previousButtonClick: Function,
  showButton: Boolean,
});
</script>

<template>
  <Title text="Pessoa Física" />
  <div class="input-container">
    <label for="nome">Nome</label>
    <input
      type="text"
      v-model="data.name"
      id="nome"
      placeholder="Pedro Álvares"
    />
  </div>
  <div class="input-container">
    <label for="cpf">CPF</label>
    <input
      type="text"
      v-model="data.cpf"
      id="cpf"
      placeholder="000.000.000-00"
    />
  </div>
  <div class="input-container">
    <label for="birthdate">Data de nascimento</label>
    <input type="date" v-model="data.birthdate" id="birthdate" />
  </div>
  <div class="input-container">
    <label for="phone">Telefone</label>
    <input
      type="phone"
      v-model="data.phone"
      id="phone"
      placeholder="15 99999-9999"
    />
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
      v-if="showButton"
      type="button"
      :handleClick="nextButtonClick"
      :disabled="!data.name || !data.cpf || !data.birthdate || !data.phone"
    >
      Continuar
    </Button>
  </div>
</template>

<style scoped>
.buttons {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
