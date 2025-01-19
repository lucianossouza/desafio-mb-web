<script setup>
import Button from "../Button.vue";
import Title from "../Title.vue";

defineProps({
  data: {
    type: Object,
    default: () => ({ companyName: "", cnpj: "", openDate: "", phone: "" }),
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
      type="number"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      maxlength="14"
      v-model="data.cnpj"
      id="cnpj"
      placeholder="Digite apenas números"
    />

    <label for="openDate">Data de abertura</label>
    <input type="date" v-model="data.openDate" id="openDate" />

    <label for="phone">Telefone</label>
    <input
      v-model="data.phone"
      id="phone"
      type="number"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      maxlength="11"
      placeholder="Digite apenas números"
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
        !data.companyName ||
        !data.cnpj ||
        !data.openDate ||
        !data.phone ||
        data.phone.length < 8 ||
        data.cnpj.length < 14
      "
    >
      Continuar
    </Button>
  </div>
</template>
