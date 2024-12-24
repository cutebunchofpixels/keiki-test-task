<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="auth-layout-content">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.auth-layout-content {
  padding-inline: var(--page-padding-inline);
  flex-grow: 1;
  display: flex;
}
</style>
