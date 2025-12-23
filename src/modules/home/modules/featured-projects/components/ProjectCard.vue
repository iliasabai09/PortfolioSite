<script setup lang="ts">
import Chip from "primevue/chip";

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card" v-reveal-on-scroll>
    <img
        class="card-img"
        :src="project.img"
        alt="">
    <div class="card-content">
      <h4 class="card-title">{{ project.title }}</h4>
      <p class="card-text">{{ project.description }}</p>
      <div class="card-specs">
        <Chip v-for="s in project.stack" :label="s"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 300px;
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: var(--shadow-card);
  -moz-box-shadow: var(--shadow-card);
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: .8s ease;

  &:hover {
    transition: .8s ease;
    -webkit-box-shadow: var(--shadow-card-hover);
    -moz-box-shadow: var(--shadow-card-hover);
    box-shadow: var(--shadow-card-hover);
  }

  &-content {
    padding: 16px;
  }

  &-img {
    width: 100%;
    height: 180px;
  }

  &-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  &-text {
    font-size: 14px;
    font-style: italic;
    color: var(--color-muted);
    margin-bottom: 12px;
  }

  &-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: var(--color-muted);
  }
}
</style>
