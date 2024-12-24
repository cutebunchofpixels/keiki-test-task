<script setup lang="ts">
import { computed, ref } from "vue";

export type InputProps = {
  invalid?: boolean;
  value: string;
};

type InputEmits = {
  (e: "input", value: string): void;
};

defineEmits<InputEmits>();

const props = withDefaults(defineProps<InputProps>(), {
  invalid: false,
});

const focused = ref<boolean>(false);
const inputElementRef = ref<HTMLInputElement | null>(null);

const inputClasses = computed(() => {
  return {
    input_focused: focused.value,
    input_invalid: props.invalid,
  };
});

function handleInputClick() {
  inputElementRef.value?.focus();
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="input" :class="inputClasses" @click="handleInputClick">
    <slot name="prepend-inner"></slot>
    <input
      :value="props.value"
      @input="$emit('input', $event.target.value)"
      @focus="focused = true"
      @blur="focused = false"
      class="input__element"
      ref="inputElementRef"
      v-bind="$attrs"
    />
    <slot name="append-inner"></slot>
  </div>
</template>

<style scoped lang="scss">
.input {
  background-color: var(--accent-color-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border-color var(--transition-duration-normal);
  cursor: text;
}

.input__element {
  font: inherit;
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  margin-inline: 9px;
  width: 100%;
  caret-color: var(--accent-color);
}

.input__element::placeholder {
  color: var(--font-color-muted);
}

.input_focused {
  border-color: var(--accent-color);
}

.input_invalid {
  border-color: var(--error-color);
}
</style>
