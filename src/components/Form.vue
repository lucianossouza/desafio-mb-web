<script setup>
import { ref } from "vue";
import StepWelcome from "./StepWelcome.vue";
import StepCpf from "./StepCpf.vue";
import StepCnpj from "./StepCnpj.vue";
import StepPassword from "./StepPassword.vue";
import Button from "./Button.vue";

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

    formData.value = { name: "", email: "", message: "" };
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
    <div v-if="currentStep === 0">
      <h2>Etapa 1 de 4</h2>
      <StepWelcome :data="formData.welcome" :handleClick="nextStep" />
    </div>

    <div v-if="currentStep === 1">
      <h2>Etapa 2 de 4</h2>
      <StepCpf
        :data="formData.cpf"
        :handleClick="nextStep"
        v-if="formData.welcome.userType === 'fisica'"
        :showButton="true"
      />
      <StepCnpj
        :data="formData.cnpj"
        :handleClick="nextStep"
        v-if="formData.welcome.userType === 'juridica'"
        :showButton="true"
      />
    </div>

    <div v-if="currentStep === 2">
      <h2>Etapa 3 de 4</h2>
      <StepPassword :data="formData.password" :handleClick="nextStep" />
    </div>

    <div v-if="currentStep === 3">
      <h2>Etapa 4 de 4</h2>
      <div class="input-container">
        <label for="email">Endereço de e-mail</label>
        <input type="email" id="email" :value="formData.welcome.email" />
      </div>
      <StepCpf
        :data="formData.cpf"
        v-if="formData.welcome.userType === 'fisica'"
        :showButton="false"
      />
      <StepCnpj
        :data="formData.cnpj"
        v-if="formData.welcome.userType === 'juridica'"
        :showButton="false"
      />
      <div>
        <div class="input-container">
          <label for="password">Sua senha</label>
          <input
            id="password"
            type="password"
            :value="formData.password.password"
          />
        </div>
      </div>
    </div>

    <div class="buttons">
      <Button
        type="button"
        :customClass="'btn-secondary'"
        @click="prevStep"
        v-if="currentStep > 0"
      >
        Voltar
      </Button>
      <Button type="submit" v-if="currentStep === totalSteps - 1">
        Cadastrar
      </Button>
    </div>
  </form>
</template>

<style>
.buttons {
  display: flex;
  gap: 10px;
}
.btn-secondary {
  background-color: #fff;
  color: orange;
  border: 1px solid orange;
}
</style>
