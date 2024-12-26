<script setup lang="ts">
import { AppIcon } from "@/ui/shared/Icon";
import { IconName } from "@/ui/shared/Icon/constants";

const displayedSocials = [
  IconName.Instagram,
  IconName.Facebook,
  IconName.Youtube,
  IconName.X,
];
</script>

<template>
  <div class="socials-list">
    <AppIcon
      v-for="iconName in displayedSocials"
      :name="iconName"
      :key="iconName"
    />
  </div>
</template>

<style scoped lang="scss">
.socials-list {
  display: flex;
  flex-direction: row;
  column-gap: 24px;
}
</style>
