<script lang="ts">
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<template>
  <main class="auth-layout-content">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.auth-layout-content {
  padding-inline: var(--page-padding-inline);
}
</style>
