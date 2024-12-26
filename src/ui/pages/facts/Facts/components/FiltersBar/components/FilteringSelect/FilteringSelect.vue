<script setup lang="ts">
import { useFactsStore } from "@/facts/store";
import { FilteringOption } from "@/facts/types/FilteringOption";
import { AppSelect } from "@/ui/shared/Select";
import type { SelectItem } from "@/ui/shared/Select/components/SelectItem";

const selectItems: SelectItem<FilteringOption>[] = [
  { label: "All facts", value: FilteringOption.All },
  { label: "Show long ones first", value: FilteringOption.LongFirst },
  { label: "Show short ones first", value: FilteringOption.ShortFirst },
  { label: "Short ones only", value: FilteringOption.OnlyShort },
  { label: "Long ones only", value: FilteringOption.OnlyLong },
];

const factsStore = useFactsStore();
</script>

<template>
  <div class="filtering-select">
    <AppSelect :items="selectItems" v-model="factsStore.filteringOption" />
  </div>
</template>
