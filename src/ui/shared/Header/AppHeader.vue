<script setup lang="ts">
import { AppLogo } from "@/ui/shared/Logo";
import { LogoColor } from "@/ui/shared/Logo/constants";
import { CurrentUserSection } from "./components/CurrentUserSection";
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <AppLogo :color="LogoColor.Accent" />
    </div>
    <CurrentUserSection />
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 96px;
  padding-inline: var(--page-padding-inline);
  display: flex;
  align-items: center;
  background-color: var(--accent-color-light);
}

.header__logo {
  margin-inline-end: auto;
}
</style>
