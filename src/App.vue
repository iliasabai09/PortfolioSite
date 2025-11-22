<script setup lang="ts">
import {DynamicDialog, Toast, ConfirmDialog} from "primevue";
</script>

<template>
  <div class="container">
    <router-view/>
    <DynamicDialog/>
    <Toast/>
    <ConfirmDialog/>
  </div>
</template>

<style scoped>

</style>
