<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router/composables";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import { AppButton } from "@/ui/shared/Button";
import { AppInput } from "@/ui/shared/Input";
import { AppLabel } from "@/ui/shared/Label";
import { ErrorMessage } from "@/ui/shared/ErrorMessage";
import { useAuthStore } from "@/auth/store";
import { nameInputErrorMessages } from "./constants";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref<string>("");
const formValidatorRef = ref<InstanceType<typeof ValidationObserver> | null>(
  null
);

async function handleFormSubmit() {
  const validationResult = await formValidatorRef.value?.validate();

  if (!validationResult) {
    return;
  }

  authStore.register(username.value);

  if (typeof route.query.redirect === "string") {
    router.push(route.query.redirect);
  } else {
    router.push("/facts");
  }
}
</script>

<template>
  <ValidationObserver slim ref="formValidatorRef">
    <form @submit.prevent="handleFormSubmit">
      <div class="login-form__name-input">
        <AppLabel for="name">Name</AppLabel>
        <ValidationProvider
          :rules="{ required: true, min: 3, max: 15, regex: /^[a-zA-Z]+$/ }"
          v-slot="{ errors, valid, touched }"
          :customMessages="nameInputErrorMessages"
        >
          <AppInput
            id="name"
            v-model="username"
            placeholder="Enter your name"
            :invalid="!valid && touched"
          />
          <ErrorMessage>{{ errors[0] }}</ErrorMessage>
        </ValidationProvider>
      </div>
      <div class="login-form__submit-button">
        <AppButton type="submit">Log in</AppButton>
      </div>
    </form>
  </ValidationObserver>
</template>

<style scoped lang="scss">
.login-form__name-input {
  margin-inline: auto;
  margin-bottom: 48px;
  max-width: 410px;
  width: 100%;
}

.login-form__submit-button {
  max-width: 225px;
  width: 100%;
  margin-inline: auto;
}
</style>
