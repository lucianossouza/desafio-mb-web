<template>
  <div class="input-container">
    <label for="passwoard">Sua senha</label>
    <input
      id="password"
      type="password"
      v-model="data.password"
    />
  </div>
</template>

<script setup>
defineProps({
  data: {
    password: String,
  },
});
</script>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
label {
  margin-bottom: 12px;
  margin-right: 10px;
}
input,
select {
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 8px;
}
</style>
