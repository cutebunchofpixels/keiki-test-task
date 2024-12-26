<script setup lang="ts">
import { AppLogo } from "@/ui/shared/Logo";
import { LogoColor } from "@/ui/shared/Logo/constants";
import { FooterNavigation } from "./components/FooterNavigation";
import { FirstLineSubheading } from "./components/FirstLineSubheading";
import { SocialsList } from "./components/SocialsList";
</script>

<template>
  <div class="line-1">
    <div class="line-1__logo">
      <AppLogo :color="LogoColor.Contrast" />
    </div>
    <div class="line-1__slogan">
      <FirstLineSubheading>Build for catlovers</FirstLineSubheading>
      <FooterNavigation />
    </div>
    <div class="line-1__socials">
      <FirstLineSubheading>Social</FirstLineSubheading>
      <SocialsList />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/sass/abstracts";

.line-1 {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  row-gap: 24px;

  @include abstracts.mixins-respond(sm) {
    grid-template-columns: 1fr auto;
  }

  @include abstracts.mixins-respond(md) {
    grid-template-columns: 1fr auto auto;
  }
}

.line-1__logo {
  margin-inline-end: auto;
}

.line-1__slogan {
  margin-inline-end: 94px;
}

.line-1__socials {
  @include abstracts.mixins-respond(sm) {
    grid-column-start: 2;
  }

  @include abstracts.mixins-respond(md) {
    grid-column-start: auto;
  }
}
</style>
