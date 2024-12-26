<script setup lang="ts" generic="T">
import { computed } from "vue";
import VSelect from "vue-select";

import { AppIcon } from "@/ui/shared/Icon";
import { IconName } from "@/ui/shared/Icon/constants";
import { AppSelectItem, type SelectItem } from "./components/SelectItem";

export type SelectProps<T> = {
  items: SelectItem<T>[];
  value: T;
};

export type SelectEmits<T> = {
  (e: "input", value: T): void;
};

const props = defineProps<SelectProps<T>>();
const emit = defineEmits<SelectEmits<T>>();

const selectedOption = computed(
  () => props.items.find((item) => item.value === props.value) as SelectItem<T>
);

function handleOptionSelect(option: SelectItem<T>) {
  emit("input", option.value);
}
</script>

<template>
  <VSelect
    :options="items"
    :searchable="false"
    :clearable="false"
    :value="selectedOption"
    @option:selected="handleOptionSelect"
    class="select"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #open-indicator="{ attributes }">
      <AppIcon :name="IconName.ChevronDown" v-bind="attributes" />
    </template>
    <template #option="item">
      <AppSelectItem
        :item="item"
        :active="item.value === selectedOption.value"
      />
    </template>
  </VSelect>
</template>

<style scoped lang="scss">
.select {
  font: inherit;

  :deep(.vs__dropdown-menu) {
    border: none;
    background-color: var(--accent-color-light);
    padding: 12px 16px;
    margin-top: 6px;
    border-radius: 6px;
    box-shadow: none;
    padding: 0;
  }

  :deep(.vs__dropdown-toggle) {
    border: none;
    background-color: var(--accent-color-light);
    padding: 12px 16px;
    border-radius: 6px;
  }

  :deep(.vs__dropdown-option) {
    padding: 12px 16px;
    background-color: var(--accent-color-light);
  }

  :deep(.vs__dropdown-option--highlight) {
    background-color: var(--accent-color-light-hover);
    color: unset;
  }

  :deep(.vs__selected) {
    opacity: 1 !important;
  }
}
</style>
