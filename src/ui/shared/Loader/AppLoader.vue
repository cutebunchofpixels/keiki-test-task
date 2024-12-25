<script setup lang="ts">
import spritesheetPath from "@/assets/icons/spritesheet.svg";
</script>

<template>
  <svg class="loader">
    <use :xlink:href="`${spritesheetPath}#loader`"></use>
  </svg>
</template>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 2.5s linear infinite;
  width: 110px;
  height: 115px;
}
</style>
