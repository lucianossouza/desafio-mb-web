<script setup>
import Button from "../Button.vue";
import Title from "../Title.vue";

defineProps({
  data: {
    type: Object,
    default: () => ({ name: "", cpf: "", birthdate: "", phone: "" }),
  },
  nextButtonClick: Function,
  previousButtonClick: Function,
  showButton: Boolean,
});
</script>

<template>
  <Title v-if="showButton" text="Pessoa Física" />
  <div class="input-container">
    <label for="nome">Nome</label>
    <input
      type="text"
      v-model="data.name"
      id="nome"
      placeholder="Digite seu nome"
    />
  </div>
  <div class="input-container">
    <label for="cpf">CPF</label>
    <input
      type="number"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      maxlength="14"
      v-model="data.cpf"
      id="cpf"
      placeholder="Digite apenas números"
    />
  </div>
  <div class="input-container">
    <label for="birthdate">Data de nascimento</label>
    <input type="date" v-model="data.birthdate" id="birthdate" />
  </div>
  <div class="input-container">
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
        !data.name ||
        !data.cpf ||
        !data.birthdate ||
        !data.phone ||
        data.phone.length < 8 ||
        data.cpf.length < 11
      "
    >
      Continuar
    </Button>
  </div>
</template>
