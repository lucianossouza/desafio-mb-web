<template>
  <div class="input-container">
    <label for="nome">Nome</label>
    <input type="text" v-model="data.name" id="nome">
  </div>
  <div class="input-container">
    <label for="cpf">CPF</label>
    <input type="number" v-model="data.cpf" id="cpf">
  </div>
  <div class="input-container">
    <label for="data">Data de nascimento</label>
    <input type="data" v-model="data.birthdate" id="data">
  </div>
  <div class="input-container">
    <label for="data">Telefone</label>
    <input type="phone" v-model="data.phone" id="phone">
  </div>
</template>

<script setup>
defineProps({
  data: {
    name: String,
    cpf: String,
    birthdate: String,
    phone: String,
  }
});
</script>