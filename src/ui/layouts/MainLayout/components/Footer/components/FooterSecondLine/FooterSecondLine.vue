<script setup lang="ts">
import { AppIcon } from "@/ui/shared/Icon";
import { IconName, IconSize } from "@/ui/shared/Icon/constants";
</script>

<template>
  <div class="line-2">
    <p class="line-2__all-rights">@cats.com inc. All rights reserved.</p>
    <div class="line-2__locale-picker">
      <span>English</span>
      <AppIcon :name="IconName.ChevronDown" :size="IconSize.Sm" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.line-2 {
  display: flex;
  justify-content: space-between;
}

.line-2__all-rights {
  opacity: 80%;
  font-size: var(--font-body-sm);
}

.line-2__locale-picker {
  font-size: var(--font-body-sm);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
}
</style>
