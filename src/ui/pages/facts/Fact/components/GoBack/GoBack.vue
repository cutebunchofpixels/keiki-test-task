<script setup lang="ts">
import { useRouter } from "vue-router/composables";

import { AppButton } from "@/ui/shared/Button";
import { ButtonVariant } from "@/ui/shared/Button/constants";
import { AppIcon } from "@/ui/shared/Icon";
import { IconName } from "@/ui/shared/Icon/constants";

const router = useRouter();

function handleBackClick() {
  router.push("/facts");
}
</script>

<template>
  <div class="go-back">
    <AppButton @click="handleBackClick" :variant="ButtonVariant.Text">
      <div class="go-back__button">
        <AppIcon :name="IconName.ChevronLeft" />
        <span>Back</span>
      </div>
    </AppButton>
  </div>
</template>

<style scoped lang="scss">
.go-back {
  max-width: 83px;
  width: 100%;
}

.go-back__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2px;
}
</style>
