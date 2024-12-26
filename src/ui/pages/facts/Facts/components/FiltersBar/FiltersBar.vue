<script setup lang="ts">
import { FilteringSelect } from "./components/FilteringSelect";
import { SearchInput } from "./components/SearchInput";
</script>

<template>
  <div class="filters-bar">
    <div class="filters-bar__search-input">
      <SearchInput />
    </div>
    <div class="filters-bar__filtering-select">
      <FilteringSelect />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/sass/abstracts";

.filters-bar {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @include abstracts.mixins-respond(md) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.filters-bar__search-input {
  max-width: 400px;
  width: 100%;

  @include abstracts.mixins-respond(md) {
    max-width: 370px;
  }
}

.filters-bar__filtering-select {
  max-width: 400px;
  width: 100%;

  @include abstracts.mixins-respond(md) {
    max-width: 300px;
  }
}
</style>
