<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from "vue";

import { ButtonVariant } from "@/ui/shared/Button/constants";

export type ButtonProps = {
  variant?: ButtonVariant;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: ButtonVariant.Primary,
});

const buttonClasses = computed(() => ({
  button_primary: props.variant === ButtonVariant.Primary,
  button_outlined: props.variant === ButtonVariant.Outlined,
}));
</script>

<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="button"
    :class="buttonClasses"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  font: inherit;
  padding-block: 15px;
  width: 100%;
  font-weight: var(--fw-semibold);
  border-radius: var(--border-radius-normal);
}

.button:hover {
  cursor: pointer;
}

.button_primary {
  border: none;
  background-color: var(--accent-color);
  color: var(--font-color-contrast);
}

.button_outlined {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
}
</style>
