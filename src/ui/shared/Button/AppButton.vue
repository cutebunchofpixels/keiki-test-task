<script setup lang="ts">
import { computed } from "vue";

import { ButtonVariant } from "@/ui/shared/Button/constants";

export type ButtonProps = {
  variant?: ButtonVariant;
  disabled?: boolean;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: ButtonVariant.Primary,
  disabled: false,
});

const buttonClasses = computed(() => ({
  button_primary: props.variant === ButtonVariant.Primary,
  button_outlined: props.variant === ButtonVariant.Outlined,
  button_text: props.variant === ButtonVariant.Text,
}));
</script>

<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
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
  cursor: pointer;
}

.button_primary {
  border: none;
  background-color: var(--accent-color);
  color: var(--font-color-contrast);

  &:disabled {
    background-color: var(--font-color-muted);
  }
}

.button_outlined {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);

  &:disabled {
    border-color: var(--font-color-muted);
    color: var(--font-color-muted);
  }
}

.button_text {
  border: none;
  background: transparent;
  padding-block: 4px;
  font-weight: var(--fw-normal);

  &:disabled {
    color: var(--font-color-muted);
  }
}
</style>
