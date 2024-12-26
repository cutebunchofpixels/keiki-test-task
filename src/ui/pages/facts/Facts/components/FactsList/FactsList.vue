<script setup lang="ts">
import { FactCard } from "@/ui/pages/facts/Facts/components/FactCard";
import { useFactsStore } from "@/facts/store";

const factsStore = useFactsStore();
</script>

<template>
  <div class="facts-list">
    <div
      v-for="fact in factsStore.displayFacts"
      :key="fact.id"
      class="facts-list__card"
    >
      <FactCard :fact="fact" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.facts-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px 30px;
  justify-content: center;
}

.facts-list__card {
  margin-inline: auto;
}
</style>
