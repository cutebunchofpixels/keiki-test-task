<script setup lang="ts">
import { useFactsStore } from "@/facts/store";
import { FactsList } from "./components/FactsList";
import { PageLoader } from "./components/PageLoader";
import { LoadMore } from "./components/LoadMore";
import { PageHeading } from "./components/PageHeading";
import { FiltersBar } from "./components/FiltersBar";
import { FactsError } from "./components/FactsError";

const factsStore = useFactsStore();
</script>

<template>
  <div class="facts-page">
    <FactsError v-if="factsStore.isError" />
    <PageLoader v-else-if="factsStore.isLoading" />
    <template v-else>
      <div class="facts-page__heading">
        <PageHeading />
      </div>
      <div class="facts-page__filters-bar">
        <FiltersBar />
      </div>
      <div class="facts-page__list">
        <FactsList />
      </div>
      <div class="fact-page__load-more">
        <LoadMore />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.facts-page {
  height: 100%;
}

.facts-page__heading {
  margin-bottom: 32px;
}

.facts-page__filters-bar {
  margin-bottom: 32px;
}

.facts-page__list {
  margin-bottom: 56px;
}

.fact-page__load-more {
  margin-bottom: 48px;
}
</style>
