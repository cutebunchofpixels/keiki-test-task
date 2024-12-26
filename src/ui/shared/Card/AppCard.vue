<template>
  <div class="card">
    <div class="card__heading">
      <slot name="heading"></slot>
    </div>

    <div class="card__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card__heading {
  margin-bottom: 24px;
}
</style>
