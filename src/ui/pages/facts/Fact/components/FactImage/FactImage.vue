<script setup lang="ts">
export type FactImageProps = {
  image: string;
};

defineProps<FactImageProps>();
</script>

<template>
  <img :src="image" class="fact-image" />
</template>

<style scoped lang="scss">
.fact-image {
  border-radius: var(--border-radius-normal);
  width: 100%;
}
</style>
