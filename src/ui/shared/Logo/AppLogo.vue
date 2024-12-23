<script lang="ts">
import type { PropType } from "vue";

import accentLogo from "@/assets/images/logo-accent.png";
import contrastLogo from "@/assets/images/logo-contrast.png";

export enum LogoColors {
  Accent,
  Contrast,
}

const logoUrls = {
  [LogoColors.Accent]: accentLogo,
  [LogoColors.Contrast]: contrastLogo,
};

export default {
  props: {
    color: {
      type: Number as PropType<LogoColors>,
      required: true,
    },
  },

  computed: {
    logoUrl() {
      return logoUrls[this.color];
    },
  },
};
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
