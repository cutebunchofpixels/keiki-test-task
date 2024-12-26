<script setup lang="ts">
import { FooterFirstLine } from "./components/FooterFirstLine";
import { FooterSecondLine } from "./components/FooterSecondLine";
import { FooterSeparator } from "./components/FooterSeparator";
</script>

<template>
  <footer class="footer">
    <div class="footer__first-line">
      <FooterFirstLine />
    </div>
    <div class="footer__separator">
      <FooterSeparator />
    </div>
    <FooterSecondLine />
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-inline: var(--page-padding-inline);
  background-color: var(--background-color-contrast);
  color: var(--font-color-contrast);
  display: flex;
  flex-direction: column;
  padding-block: 32px;
}

.footer__first-line {
  margin-bottom: 55px;
}

.footer__separator {
  margin-bottom: 32px;
}
</style>
