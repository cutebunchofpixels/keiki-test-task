<script setup lang="ts" generic="T">
import { AppIcon } from "@/ui/shared/Icon";
import { IconName } from "@/ui/shared/Icon/constants";
import { computed } from "vue";

export type SelectItem<T> = {
  label: string;
  value: T;
};

export type SelectItemProps<T> = {
  item: SelectItem<T>;
  active?: boolean;
};

const props = withDefaults(defineProps<SelectItemProps<T>>(), {
  active: false,
});

const selectItemClasses = computed(() => ({
  "select-item_active": props.active,
}));
</script>

<template>
  <div class="select-item" :class="selectItemClasses">
    {{ item.label }}
    <AppIcon :name="IconName.Check" v-if="active" />
  </div>
</template>

<style scoped lang="scss">
.select-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.select-item_active {
  color: var(--accent-color);
}
</style>
