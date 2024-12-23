<script lang="ts">
import { AppHeader } from "@/ui/shared/Header";
import { AuthLayoutContent } from "./components/AuthLayoutContent";

export default {
  components: {
    AppHeader,
    AuthLayoutContent,
  },
};
</script>

<template>
  <div class="auth-layout">
    <AppHeader />
    <AuthLayoutContent />
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  display: flex;
  flex-direction: column;
}
</style>
