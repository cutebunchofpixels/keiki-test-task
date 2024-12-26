<script setup lang="ts">
import { AppHeader } from "@/ui/shared/Header";
import { MainLayoutConent } from "./components/MainLayoutContent";
import { AppFooter } from "./components/Footer";
</script>

<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <AppHeader />
    </div>
    <MainLayoutConent />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main-layout__header {
  margin-bottom: 56px;
}
</style>
