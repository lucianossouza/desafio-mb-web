<script setup>
import { ref } from "vue";
import StepWelcome from "./Steps/StepWelcome.vue";
import StepCpf from "./Steps/StepCpf.vue";
import StepCnpj from "./Steps/StepCnpj.vue";
import StepPassword from "./Steps/StepPassword.vue";
import StepTitle from "./StepTitle.vue";
import StepConfirmation from "./Steps/StepConfirmation.vue";

const currentStep = ref(0);
const totalSteps = 4;
const formData = ref({
  email: undefined,
  userType: undefined,
  name: undefined,
  cpf: undefined,
  birthdate: undefined,
  phone: undefined,
  companyName: undefined,
  cnpj: undefined,
  openDate: undefined,
  phone: undefined,
  password: undefined,
});

const responseMessage = ref("");
const isSuccess = ref(false);

async function handleSubmit() {
  try {
    const response = await fetch("http://localhost:3000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const result = await response.json();
    responseMessage.value = result.message;
    isSuccess.value = true;
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    responseMessage.value = "Ocorreu um erro ao enviar o formulário.";
    isSuccess.value = false;
  }
}

const nextStep = () => {
  if (currentStep.value < totalSteps - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <StepTitle :step="currentStep + 1" :totalSteps="totalSteps" />

    <StepWelcome
      v-if="currentStep === 0"
      :data="formData"
      :handleClick="nextStep"
    />

    <StepCpf
      v-if="currentStep === 1 && formData.userType === 'fisica'"
      :data="formData"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
      :showButton="true"
    />

    <StepCnpj
      v-if="currentStep === 1 && formData.userType === 'juridica'"
      :data="formData"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
      :showButton="true"
    />

    <StepPassword
      v-if="currentStep === 2"
      v-model="formData.password"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
    />

    <StepConfirmation
      v-if="currentStep === 3"
      :email="formData.email"
      :password="formData.password"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
    >
      <StepCpf
        v-if="formData.userType === 'fisica'"
        :data="formData"
        :previousButtonClick="prevStep"
        :nextButtonClick="nextStep"
        :showButton="false"
      />

      <StepCnpj
        v-if="formData.userType === 'juridica'"
        :data="formData"
        :previousButtonClick="prevStep"
        :nextButtonClick="nextStep"
        :showButton="false"
      />
    </StepConfirmation>
  </form>
</template>
