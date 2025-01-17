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

const handleSubmit = () => {
  console.log("Formulário enviado:", formData.value);
  alert("Formulário enviado com sucesso!");
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="currentStep === 0">
      <h2>Etapa 1 de 4</h2>
      <StepWelcome :data="formData.welcome" />
    </div>

    <div v-if="currentStep === 1">
      <h2>Etapa 2 de 4</h2>
      <StepCpf
        :data="formData.cpf"
        v-if="formData.welcome.userType === 'fisica'"
      />
      <StepCnpj
        :data="formData.cnpj"
        v-if="formData.welcome.userType === 'juridica'"
      />
    </div>

    <div v-if="currentStep === 2">
      <h2>Etapa 3 de 4</h2>
      <StepPassword :data="formData.password" />
    </div>

    <div v-if="currentStep === 3">
      <h2>Etapa 4 de 4</h2>
      <div class="input-container">
        <label for="email">Endereço de e-mail</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <StepCpf
        :data="formData.cpf"
        :userType="formData.welcome.userType"
        v-if="formData.welcome.userType === 'fisica'"
      />
      <StepCnpj
        :data="formData.cnpj"
        v-if="formData.welcome.userType === 'juridica'"
      />
      <div>
        <div class="input-container">
          <label for="passwoard">Sua senha</label>
          <input id="password" type="password" v-model="password" />
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
      <Button
        type="button"
        v-if="currentStep < totalSteps - 1"
        :handleClick="nextStep"
      >
        Continuar
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
