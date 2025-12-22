<script setup lang="ts">
import UiAvatar from "./components/UiAvatar.vue";
import UiHeaderIInfoBlock from "./components/UiHeaderIInfoBlock.vue";
</script>

<template>
<div class="header gradient-wave">
  <UiAvatar/>
  <UiHeaderIInfoBlock/>
</div>

</template>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 44px;
  justify-content: space-between;
}
</style>