<script setup lang="ts">
import { computed } from "vue";

export type AvatarProps = {
  username: string;
};

const props = defineProps<AvatarProps>();

const firstLetter = computed(() =>
  props.username.charAt(0).toLocaleUpperCase()
);
</script>

<template>
  <div class="avatar">
    {{ firstLetter }}
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: var(--font-color-contrast);
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
