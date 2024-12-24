<template>
  <p class="error-message">
    <slot> </slot>
  </p>
</template>

<style scoped lang="scss">
.error-message {
  font-size: var(--font-body-sm);
  color: var(--error-color);
}
</style>
