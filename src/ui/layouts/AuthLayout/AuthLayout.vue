<script setup lang="ts">
import { AppHeader } from "@/ui/shared/Header";
import { AuthLayoutContent } from "./components/AuthLayoutContent";
</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout__header">
      <AppHeader />
    </div>
    <AuthLayoutContent />
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  display: flex;
  flex-direction: column;
}

.auth-layout__header {
  margin-bottom: 135px;
}
</style>
