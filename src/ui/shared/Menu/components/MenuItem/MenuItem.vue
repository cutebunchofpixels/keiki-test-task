<script setup lang="ts">
export type MenuItem = {
  id: string;
  caption: string;
  action: () => void;
};

export type MenuItemProps = {
  item: MenuItem;
};

type MenuItemEmits = {
  (e: "click", value: MenuItem): void;
};

defineProps<MenuItemProps>();
const emit = defineEmits<MenuItemEmits>();

function handleItemClick(item: MenuItem) {
  item.action();
  emit("click", item);
}
</script>

<template>
  <button @click="() => handleItemClick(item)" class="menu-item">
    {{ item.caption }}
  </button>
</template>

<style scoped lang="scss">
.menu-item {
  background: transparent;
  border: none;
  padding-inline: 16px;
  font-size: var(--font-body-sm);
  font-weight: var(--fw-normal);
  cursor: pointer;
  width: 100%;
  text-align: start;
}
</style>
