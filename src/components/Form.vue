<script setup>
import { ref } from "vue";
import StepWelcome from "./StepWelcome.vue";
import StepCpf from "./StepCpf.vue";
import StepCnpj from "./StepCnpj.vue";
import StepPassword from "./StepPassword.vue";
import StepTitle from "./StepTitle.vue";
import StepConfirmation from "./StepConfirmation.vue";

const currentStep = ref(0);
const totalSteps = 4;
const formData = ref({
  welcome: { email: "", userType: "" },
  cpf: { name: "", cpf: "", birthdate: "", phone: "" },
  cnpj: { companyName: "", cnpj: "", openDate: "", phone: "" },
  password: { password: "" },
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

    formData.value = {
      welcome: { email: "", userType: "" },
      cpf: { name: "", cpf: "", birthdate: "", phone: "" },
      cnpj: { companyName: "", cnpj: "", openDate: "", phone: "" },
      password: { password: "" },
    };
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
      :data="formData.welcome"
      :handleClick="nextStep"
    />

    <StepCpf
      v-if="currentStep === 1 && formData.welcome.userType === 'fisica'"
      :data="formData.cpf"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
      :showButton="true"
    />

    <StepCnpj
      v-if="currentStep === 1 && formData.welcome.userType === 'juridica'"
      :data="formData.cnpj"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
      :showButton="true"
    />

    <StepPassword
      v-if="currentStep === 2"
      :data="formData.password"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
    />

    <StepConfirmation
      v-if="currentStep === 3"
      :email="formData.welcome.email"
      :password="formData.password.password"
      :previousButtonClick="prevStep"
      :nextButtonClick="nextStep"
    >
      <StepCpf
        v-if="formData.welcome.userType === 'fisica'"
        :data="formData.cpf"
        :previousButtonClick="prevStep"
        :nextButtonClick="nextStep"
        :showButton="false"
      />

      <StepCnpj
        v-if="formData.welcome.userType === 'juridica'"
        :data="formData.cnpj"
        :previousButtonClick="prevStep"
        :nextButtonClick="nextStep"
        :showButton="false"
      />
    </StepConfirmation>
  </form>
</template>
