<script setup lang="ts">
import { onMounted } from "vue";

import { useFactsStore } from "@/facts/store";
import { FactsList } from "./components/FactsList";
import { PageLoader } from "./components/PageLoader";
import { LoadMore } from "./components/LoadMore";

const factsStore = useFactsStore();

onMounted(() => {
  if (factsStore.isEmpty) {
    factsStore.loadMore();
  }
});
</script>

<template>
  <div class="facts-page">
    <PageLoader v-if="factsStore.isLoading" />
    <div v-else>
      <FactsList />
      <LoadMore />
    </div>
  </div>
</template>

<style scoped lang="scss">
.facts-page {
  height: 100%;
}
</style>
