<script setup lang="ts">
import { computed } from "vue";

import { AppAvatar } from "@/ui/shared/Avatar";
import { AppPopover } from "@/ui/shared/Popover";
import { LogoutMenu } from "./components/LogoutMenu";
import { PopoverPlacement } from "@/ui/shared/Popover/constants";
import { useAuthStore } from "@/auth/store";

const authStore = useAuthStore();

const showCurrentUser = computed(() => {
  return authStore.user !== null;
});
</script>

<template>
  <AppPopover
    :placement="PopoverPlacement.BottomStart"
    :contentOffset="{ mainAxis: 26, crossAxis: -90 }"
    v-if="showCurrentUser"
  >
    <template #reference>
      <AppAvatar :username="authStore.user?.username" />
    </template>
    <template #content>
      <LogoutMenu />
    </template>
  </AppPopover>
</template>

<style lang="scss"></style>
