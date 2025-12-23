<script setup lang="ts">
import Chip from "primevue/chip";

defineProps({
  card: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="card" v-reveal-on-scroll>
    <h3>{{ card.title }}</h3>
    <div class="card-company">
      <i class="pi pi-briefcase"></i>
      <h4>{{ card.company }}</h4>
    </div>
    <p class="card-description">{{ card.description }}</p>
    <div class="card-skills">
      <Chip v-for="s in card.skills" :label="s"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 12px;
  border: solid 2px var(--color-border);
  padding: 16px;

  &-skills {
    display: flex;
    gap: 16px;
  }

  &-description {
    margin-bottom: 12px;
  }

  &-company {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    h4 {
      font-weight: 400;
    }
  }

  h3 {
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: var(--color-muted);
  }
}
</style>
