<script setup>
import Button from "../Button.vue";
import Title from "../Title.vue";

defineProps({
  data: {
    companyName: String,
    cnpj: String,
    openDate: String,
    phone: String,
  },
  nextButtonClick: Function,
  previousButtonClick: Function,
  showButton: Boolean,
});
</script>

<template>
  <Title text="Pessoa Jurídica" v-if="showButton" />
  <div class="input-container">
    <label for="companyName">Razão social</label>
    <input
      type="text"
      v-model="data.companyName"
      id="companyName"
      placeholder="Razão social da empresa"
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
  <div class="buttons" v-if="showButton">
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
      :disabled="
        !data.companyName || !data.cnpj || !data.openDate || !data.phone
      "
    >
      Continuar
    </Button>
  </div>
</template>
