<template>
  <div class="input-container">
    <label for="email">Endereço de e-mail</label>
    <input id="email" type="email" v-model="data.email">
  </div>

  <div class="input-container">
    <div class="checkbox-container">
      <input type="radio" name="userType" id="pessoa-fisica" v-model="data.userType" value="fisica">
      <label for="pessoa-fisica">Pessoa física</label>
    </div>

    <div class="checkbox-container">
      <input type="radio" name="userType" id="pessoa-juridica" v-model="data.userType" value="juridica">
      <label for="pessoa-juridica">Pessoa jurídica</label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    email: String,
    userType: String
  }
});
</script>