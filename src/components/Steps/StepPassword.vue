<script setup>
import Button from "../Button.vue";
import Title from "../Title.vue";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  nextButtonClick: Function,
  previousButtonClick: Function,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <Title text="Senha de acesso" />
  <div class="input-container">
    <label for="password">Sua senha</label>
    <input
      id="password"
      type="password"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
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
      type="button"
      :handleClick="nextButtonClick"
      :disabled="!modelValue"
    >
      Continuar
    </Button>
  </div>
</template>
