<script setup lang="ts">
import { AppLogo } from "@/ui/shared/Logo";
import { LogoColor } from "@/ui/shared/Logo/constants";
import { FooterNavigation } from "./components/FooterNavigation";
import { FirstLineSubheading } from "./components/FirstLineSubheading";
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
  <div class="line-1">
    <div class="line-1__col-1">
      <AppLogo :color="LogoColor.Contrast" />
    </div>
    <div class="line-1__col-2">
      <FirstLineSubheading>Build for catlovers</FirstLineSubheading>
      <FooterNavigation />
    </div>
    <div class="line-1__col-3">
      <FirstLineSubheading>Social</FirstLineSubheading>
      <div class="line-1__socials">
        <AppIcon
          v-for="iconName in displayedSocials"
          :name="iconName"
          :key="iconName"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line-1 {
  display: flex;
  flex-direction: row;
}

.line-1__col-1 {
  margin-inline-end: auto;
}

.line-1__col-2 {
  margin-inline-end: 94px;
}

.line-1__socials {
  display: flex;
  flex-direction: row;
  column-gap: 24px;
}
</style>
