<script setup>
import Button from "./Button.vue";

defineProps({
  data: {
    companyName: String,
    cnpj: String,
    openDate: String,
    phone: String,
  },
  handleClick: Function,
  showButton: Boolean,
});
</script>

<template>
  <div class="input-container">
    <label for="companyName">Razão social</label>
    <input
      type="text"
      v-model="data.companyName"
      id="companyName"
      placeholder="00.000.000/0000-00"
    />
  </div>
  <div class="input-container">
    <label for="cnpj">CNPJ</label>
    <input
      type="text"
      v-model="data.cnpj"
      id="cnpj"
      placeholder="00.000.000/0000-00"
    />

    <label for="openDate">Data de abertura</label>
    <input type="date" v-model="data.openDate" id="openDate" />

    <label for="phone">Telefone</label>
    <input
      type="phone"
      v-model="data.phone"
      id="phone"
      placeholder="15 0000-0000"
    />
  </div>
  <Button
    v-if="showButton"
    type="button"
    :handleClick="handleClick"
    :disabled="!data.companyName || !data.cnpj || !data.openDate || !data.phone"
  >
    Continuar
  </Button>
</template>
