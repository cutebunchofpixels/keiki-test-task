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
  button_primary_disabled:
    props.variant === ButtonVariant.Primary && props.disabled,
  button_outlined: props.variant === ButtonVariant.Outlined,
  button_outlined_disabled:
    props.variant === ButtonVariant.Outlined && props.disabled,
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
}

.button:hover {
  cursor: pointer;
}

.button_primary {
  border: none;
  background-color: var(--accent-color);
  color: var(--font-color-contrast);
}

.button_primary_disabled {
  border: none;
  background-color: var(--font-color-muted);
  color: var(--font-color-contrast);
}

.button_outlined {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
}

.button_outlined_disabled {
  background: transparent;
  border: 1px solid var(--font-color-muted);
  color: var(--font-color-muted);
}
</style>
