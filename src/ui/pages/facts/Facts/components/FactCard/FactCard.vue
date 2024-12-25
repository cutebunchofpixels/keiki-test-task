<script setup lang="ts">
import { computed } from "vue";

import { AppCard } from "@/ui/shared/Card";
import { SHORT_FACT_MAX_LENGTH } from "@/ui/pages/facts/Facts/components/FactCard/constants";

export type FactCardProps = {
  fact: string;
  image: string;
};

const props = defineProps<FactCardProps>();

const isShortFact = computed(() => props.fact.length <= SHORT_FACT_MAX_LENGTH);
const textClasses = computed(() => ({
  "fact-card__text_short": isShortFact.value,
  "fact-card__text-long": !isShortFact.value,
}));
</script>

<template>
  <div class="fact-card">
    <AppCard>
      <template #heading>
        <img :src="image" class="fact-card__image" />
      </template>
      <template #body>
        <div class="fact-card__body">
          <p :class="textClasses">
            {{ fact }}
          </p>
        </div>
      </template>
    </AppCard>
  </div>
</template>

<style scoped lang="scss">
.fact-card {
  border-radius: var(--border-radius-normal);
  max-height: 460px;
  transition: background-color var(--transition-duration-normal);
}

.fact-card:hover {
  background-color: var(--accent-color-light);
}

.fact-card__image {
  border-radius: var(--border-radius-normal);
}

.fact-card__body {
  padding: 16px;
}

.fact-card__text_short {
  font-size: var(--font-body-lg);
  font-weight: var(--fw-bold);
  color: var(--font-color-body-lg);
}

.fact-card__text_long {
  font-size: var(--font-body-md);
  font-weight: var(--fw-normal);
  color: var(--font-color-body);

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
