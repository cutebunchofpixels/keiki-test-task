<script setup lang="ts">
import { computed } from "vue";

import { LogoColor } from "./constants";

import accentLogo from "@/assets/images/logo-accent.png";
import contrastLogo from "@/assets/images/logo-contrast.png";

export type LogoProps = {
  color: LogoColor;
};

const props = defineProps<LogoProps>();

const logoUrls = {
  [LogoColor.Accent]: accentLogo,
  [LogoColor.Contrast]: contrastLogo,
};

const logoUrl = computed(() => logoUrls[props.color]);
</script>

<template>
  <img class="logo" :src="logoUrl" alt="Cats.com logo" />
</template>

<style scoped lang="scss">
.logo {
  width: 185px;
  height: 67px;
}
</style>
