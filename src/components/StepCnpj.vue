<template>
  <div class="input-container">
    <label for="companyName">Razão social</label>
    <input type="text" v-model="data.companyName" id="companyName" />
  </div>
  <div class="input-container">
    <label for="cnpj">CNPJ</label>
    <input type="number" v-model="data.cnpj" id="cnpj" />
  </div>
  <div class="input-container">
    <label for="openDate">Data de abertura</label>
    <input type="data" v-model="data.openDate" id="openDate" />
  </div>
  <div class="input-container">
    <label for="phone">Telefone</label>
    <input type="number" v-model="data.phone" id="phone" />
  </div>
</template>

<script setup>
defineProps({
  data: {
    companyName: String,
    cnpj: String,
    openDate: String,
    phone: String,
  },
});
</script>
