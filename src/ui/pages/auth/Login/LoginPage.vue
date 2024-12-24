<script setup lang="ts">
import { LoginForm } from "@/ui/pages/auth/Login/components";
</script>

<template>
  <div class="login-page">
    <h1 class="login-page__header">Log in</h1>
    <LoginForm />
  </div>
</template>

<style scoped lang="scss">
.login-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.login-page__header {
  font-size: var(--font-heading-md);
  font-weight: var(--fw-bold);
  margin-inline: auto;
  margin-bottom: 48px;
}
</style>
