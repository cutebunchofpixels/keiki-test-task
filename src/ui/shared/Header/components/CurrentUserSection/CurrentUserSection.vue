<script setup lang="ts">
import { AppAvatar } from "@/ui/shared/Avatar";
import { AppPopover } from "@/ui/shared/Popover";
import { LogoutMenu } from "./components/LogoutMenu";
import { PopoverPlacement } from "@/ui/shared/Popover/constants";
</script>

<template>
  <AppPopover
    :placement="PopoverPlacement.BottomStart"
    :contentOffset="{ mainAxis: 26, crossAxis: -90 }"
  >
    <template #reference>
      <AppAvatar username="a" />
    </template>
    <template #content>
      <LogoutMenu />
    </template>
  </AppPopover>
</template>

<style lang="scss"></style>
