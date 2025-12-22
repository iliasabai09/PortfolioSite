<script setup lang="ts">
</script>

<template>
  <div class="avatar">
    <img class="avatar-img" src="/images/profile-photo.jpg" alt="avatar">
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: fit-content;
  &-img {
    width: 200px;
    border-radius: 12px;
  }
  &-text {
    text-align: center;
    color: var(--color-muted);
  }
}
</style>
