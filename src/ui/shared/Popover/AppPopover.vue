<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { autoUpdate, offset, useFloating } from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";
import type { PopoverPlacement } from "@/ui/shared/Popover/constants";

export type PopoverProps = {
  placement: PopoverPlacement;
  contentOffset: {
    mainAxis: number;
    crossAxis: number;
  };
};

const props = defineProps<PopoverProps>();

const reference = ref<HTMLDivElement | null>(null);
const floating = ref<HTMLDivElement | null>(null);
const floatingVisible = ref<boolean>(false);

const { floatingStyles } = useFloating(reference, floating, {
  placement: props.placement,
  whileElementsMounted: autoUpdate,
  middleware: [
    offset({
      mainAxis: props.contentOffset.mainAxis,
      crossAxis: props.contentOffset.crossAxis,
    }),
  ],
});

const contentClasses = computed(() => ({
  content_hidden: !floatingVisible.value,
}));

export type AppPopoverProps = {
  maxWidth: string;
};

function showFloating() {
  floatingVisible.value = true;
}

function hideFloating() {
  floatingVisible.value = false;
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    floatingVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});

onClickOutside(floating, hideFloating);
</script>

<template>
  <div>
    <div
      ref="reference"
      class="reference"
      tabindex="0"
      @click="showFloating"
      @keydown.enter="showFloating"
    >
      <slot name="reference"> </slot>
    </div>
    <div ref="floating" :style="floatingStyles" :class="contentClasses">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reference {
  cursor: pointer;
}

.content_hidden {
  visibility: hidden;
}
</style>
