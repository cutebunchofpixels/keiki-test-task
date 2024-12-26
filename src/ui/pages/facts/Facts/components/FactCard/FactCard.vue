<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router/composables";

import { AppCard } from "@/ui/shared/Card";
import type { Fact } from "@/facts/entities/Fact";

export type FactCardProps = {
  fact: Fact;
};

const props = defineProps<FactCardProps>();

const router = useRouter();

const textClasses = computed(() => ({
  "fact-card__text-short": props.fact.isShort,
  "fact-card__text-long": !props.fact.isShort,
}));

function handleCardClick() {
  router.push(`/fact/${props.fact.id}`);
}
</script>

<template>
  <div
    class="fact-card"
    @click="handleCardClick"
    @keydown.enter="handleCardClick"
    tabindex="0"
  >
    <AppCard>
      <template #heading>
        <img :src="fact.image" class="fact-card__image" />
      </template>
      <template #body>
        <div class="fact-card__body">
          <p :class="textClasses">
            {{ fact.text }}
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
  max-width: 410px;
  transition: background-color var(--transition-duration-normal);
  cursor: pointer;
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

.fact-card__text-short {
  font-size: var(--font-body-lg);
  font-weight: var(--fw-bold);
  color: var(--font-color-body-lg);
}

.fact-card__text-long {
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
