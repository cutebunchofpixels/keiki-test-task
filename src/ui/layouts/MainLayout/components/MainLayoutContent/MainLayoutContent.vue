<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="main-layout-content">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.main-layout-content {
  padding-inline: var(--page-padding-inline);
}
</style>
