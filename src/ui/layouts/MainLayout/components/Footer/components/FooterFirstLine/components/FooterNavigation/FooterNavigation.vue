<script setup lang="ts">
const navigationItems = ["About", "Blog"];
</script>

<template>
  <nav>
    <ul class="navigation__list">
      <li v-for="item in navigationItems" :key="item" class="navigation__item">
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation__list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.navigation__item {
  font-size: var(--font-body-sm);
  opacity: 80%;
}
</style>
