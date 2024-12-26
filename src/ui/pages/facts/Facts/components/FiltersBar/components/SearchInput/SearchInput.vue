<script setup lang="ts">
import { AppInput } from "@/ui/shared/Input";
import { AppIcon } from "@/ui/shared/Icon";
import { IconName } from "@/ui/shared/Icon/constants";
import { useFactsStore } from "@/facts/store";

const factsStore = useFactsStore();
</script>

<template>
  <div class="search-input">
    <AppInput placeholder="Search facts here" v-model="factsStore.search">
      <template #prepend-inner>
        <div class="search-input__prepend">
          <AppIcon :name="IconName.Magnify" />
        </div>
      </template>
    </AppInput>
  </div>
</template>

<style scoped lang="scss">
.search-input__prepend {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
