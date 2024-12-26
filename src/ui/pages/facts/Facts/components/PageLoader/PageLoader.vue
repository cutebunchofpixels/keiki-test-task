<script setup lang="ts">
import { AppLoader } from "@/ui/shared/Loader";
</script>

<template>
  <div class="page-loader">
    <AppLoader />
  </div>
</template>

<style scoped lang="scss">
.page-loader {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
