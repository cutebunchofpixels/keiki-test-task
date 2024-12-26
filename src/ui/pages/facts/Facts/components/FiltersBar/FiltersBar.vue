<script setup lang="ts">
import { FilteringSelect } from "./components/FilteringSelect";
import { SearchInput } from "./components/SearchInput";
</script>

<template>
  <div class="filters-bar">
    <SearchInput />
    <FilteringSelect />
  </div>
</template>

<style scoped lang="scss">
.filters-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
