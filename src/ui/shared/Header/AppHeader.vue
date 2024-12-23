<script lang="ts">
import { AppAvatar } from "@/ui/shared/Avatar";
import { AppLogo } from "@/ui/shared/Logo";
import { LogoColors } from "@/ui/shared/Logo";

export default {
  components: {
    AppLogo,
    AppAvatar,
  },

  computed: {
    LogoColors() {
      return LogoColors;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <AppLogo :color="LogoColors.Accent" />
    </div>
    <AppAvatar username="a" />
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
