<script setup lang="ts">
import { useRoute } from "vue-router/composables";

import { useFactsStore } from "@/facts/store";

const route = useRoute();
const factsStore = useFactsStore();

const factId = Number(route.params.id);
const fact = factsStore.getFactById(factId);
</script>

<template>
  <div>
    <div v-if="!fact">No fact was found</div>
    <div v-else>{{ fact.text }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
