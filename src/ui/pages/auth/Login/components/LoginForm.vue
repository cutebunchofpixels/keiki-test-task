<script setup lang="ts">
import { AppButton } from "@/ui/shared/Button";
import { AppInput } from "@/ui/shared/Input";
import { AppLabel } from "@/ui/shared/Label";
</script>

<template>
  <form @submit.prevent>
    <div class="login-form__name-input">
      <AppLabel for="name">Name</AppLabel>
      <AppInput id="name" value="2" />
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
