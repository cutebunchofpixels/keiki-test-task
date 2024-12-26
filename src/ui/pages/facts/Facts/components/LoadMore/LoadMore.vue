<script setup lang="ts">
import { useFactsStore } from "@/facts/store";
import { AppButton } from "@/ui/shared/Button";
import { ButtonVariant } from "@/ui/shared/Button/constants";
import { watch } from "vue";

const factsStore = useFactsStore();
</script>

<template>
  <div class="load-more">
    <div class="load-more__button">
      <AppButton
        :variant="ButtonVariant.Outlined"
        @click="factsStore.loadMore()"
        :disabled="factsStore.isFetching || !factsStore.hasNext"
      >
        {{ factsStore.isFetching ? "Loading..." : "Load more facts" }}
      </AppButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.load-more {
  display: flex;
  align-items: center;
  justify-content: center;
}

.load-more__button {
  max-width: 310px;
  width: 100%;
}
</style>
