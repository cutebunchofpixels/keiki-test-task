<script setup lang="ts">
import type { MenuItem } from "@/ui/shared/Menu/components/MenuItem/MenuItem.vue";
import { MenuItemComponent } from "./components/MenuItem";

export type MenuProps = {
  items: MenuItem[];
};

type MenuEmits = {
  (e: "click:item", value: MenuItem): void;
};

defineProps<MenuProps>();
const emit = defineEmits<MenuEmits>();

function handleItemClick(item: MenuItem) {
  emit("click:item", item);
}
</script>

<template>
  <div class="menu">
    <MenuItemComponent
      v-for="item in items"
      :key="item.caption"
      :item="item"
      @click="handleItemClick"
    />
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: var(--accent-color-light);
  border-radius: var(--border-radius-normal);
  padding-block: 12px;
}
</style>
