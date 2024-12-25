<script setup lang="ts">
import { AppMenu } from "@/ui/shared/Menu";
import type { MenuItem } from "@/ui/shared/Menu/components/MenuItem";
import { useAuthStore } from "@/auth/store";
import { useRouter } from "vue-router/composables";

const authStore = useAuthStore();
const router = useRouter();

function handleLogout() {
  authStore.logout();
  router.push("/login");
}

const menuConfig: MenuItem[] = [
  { id: "logout", caption: "Log out", action: handleLogout },
];
</script>

<template>
  <div class="logout-menu">
    <AppMenu :items="menuConfig" />
  </div>
</template>

<style scoped lang="scss">
.logout-menu {
  width: 148px;
}
</style>
