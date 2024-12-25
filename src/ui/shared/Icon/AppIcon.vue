<script setup lang="ts">
import { IconName, IconSize } from "@/ui/shared/Icon/constants";

import spritesheetPath from "@/assets/icons/spritesheet.svg";
import { computed } from "vue";

export type IconProps = {
  name: IconName;
  size: IconSize;
};

const props = withDefaults(defineProps<IconProps>(), {
  size: IconSize.Md,
});

const iconClasses = computed(() => ({
  icon_md: props.size === IconSize.Md,
  icon_sm: props.size === IconSize.Sm,
}));
</script>

<template>
  <svg :class="iconClasses">
    <use :xlink:href="`${spritesheetPath}#${props.name}`"></use>
  </svg>
</template>

<style scoped lang="scss">
.icon_md {
  width: 24px;
  height: 24px;
}

.icon_sm {
  width: 16px;
  height: 16px;
}
</style>
