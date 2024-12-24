<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router/composables";

import { AppButton } from "@/ui/shared/Button";
import { AppInput } from "@/ui/shared/Input";
import { AppLabel } from "@/ui/shared/Label";
import { useAuthStore } from "@/auth/store";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref<string>("");

function handleFormSubmit() {
  authStore.register(username.value);

  if (typeof route.query.redirect === "string") {
    router.push(route.query.redirect);
  } else {
    router.push("/facts");
  }
}
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="login-form__name-input">
      <AppLabel for="name">Name</AppLabel>
      <AppInput id="name" v-model="username" />
    </div>
    <div class="login-form__submit-button">
      <AppButton>Click</AppButton>
    </div>
  </form>
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
