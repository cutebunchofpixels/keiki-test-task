<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router/composables";

import { useFactsStore } from "@/facts/store";
import { GoBack } from "./components/GoBack";
import { FactImage } from "./components/FactImage";
import { FactText } from "./components/FactText";

const route = useRoute();
const factsStore = useFactsStore();

const factId = computed(() => Number(route.params.id));
const fact = computed(() => factsStore.getFactById(factId.value));
</script>

<template>
  <div class="fact-page">
    <div v-if="!fact">No fact was found</div>
    <template v-else>
      <div class="fact-page__go-back">
        <GoBack />
      </div>
      <div class="fact-page__fact-image">
        <FactImage :image="fact.image" />
      </div>
      <div class="fact-page__fact-text">
        <FactText :text="fact.text" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.fact-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fact-page__go-back {
  margin-bottom: 48px;
}

.fact-page__fact-image,
.fact-page__fact-text {
  margin-inline: auto;
  max-width: 855px;
}

.fact-page__fact-image {
  max-width: 855px;
  width: 100%;
  margin-bottom: 41px;
}

.fact-page__fact-text {
  margin-bottom: 141px;
}
</style>
