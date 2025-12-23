<script setup lang="ts">
import Chip from 'primevue/chip'

defineProps({
  skill: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="card" v-reveal-on-scroll>
    <div class="card-header">
      <div class="card-iconWrapper">
        <img :src="'/icons/' + skill.icon" alt="frontend" width="24">
      </div>
      <h4>{{ skill.title }}</h4>
    </div>
    <div class="card-skills">
      <Chip v-for="s in skill.skills" :label="s"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 24px;
  border-radius: 12px;
  border: solid 2px oklch(0.93 0.01 2.1);
  max-width: 305px;

  h4 {
    color: oklch(.21 .034 264.665);
    font-weight: 500;
  }

  &-iconWrapper {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-image: linear-gradient(
            to bottom right,
            #3b82f6,
            #9333ea
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-header {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 16px;
  }

  &-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
