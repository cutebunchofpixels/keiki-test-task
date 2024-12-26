<template>
  <p class="first-line-subheading">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss">
.first-line-subheading {
  font-size: var(--font-body-md);
  font-weight: var(--fw-bold);
  margin-bottom: 8px;
}
</style>
