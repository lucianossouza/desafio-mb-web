<template>
  <h2>
    Etapa <span class="step">{{ step }}</span> de {{ totalSteps }}
  </h2>
</template>

<script setup>
defineProps({
  step: {
    type: Number,
    required: true,
  },
  totalSteps: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.step {
  color: orange;
}
</style>
