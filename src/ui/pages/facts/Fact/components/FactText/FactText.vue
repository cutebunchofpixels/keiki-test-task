<script setup lang="ts">
export type FactTextProps = {
  text: string;
};

defineProps<FactTextProps>();
</script>

<template>
  <p class="fact-text">{{ text }}</p>
</template>

<style scoped lang="scss">
@use "@/assets/sass/abstracts";

.fact-text {
  font-size: var(--font-body-md);

  @include abstracts.mixins-respond(md) {
    font-size: var(--font-body-mld);
  }
}
</style>
