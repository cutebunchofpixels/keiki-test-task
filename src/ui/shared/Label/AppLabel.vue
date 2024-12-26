<template>
  <label class="label" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
.label {
  font-size: var(--font-body-md);
  font-weight: var(--fw-medium);
}
</style>
