<script setup lang="ts">
import { LoginPage } from "@/ui/pages/auth/Login";
</script>

<template>
  <main class="auth-layout-content">
    <LoginPage />
  </main>
</template>

<style scoped lang="scss">
.auth-layout-content {
  padding-inline: var(--page-padding-inline);
  flex-grow: 1;
  display: flex;
}
</style>
