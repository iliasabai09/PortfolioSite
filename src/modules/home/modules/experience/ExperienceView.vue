<script setup lang="ts">
import ExperienceCard from "./components/ExperienceCard.vue";
import {EXPERIENCE_LIST} from "./constants";

</script>

<template>
  <div class="experience">
    <h2>Experience</h2>
    <p>Мой профессиональный путь и опыт работы в различных компаниях.</p>
    <div class="experience-cards">
      <ExperienceCard v-for="c in EXPERIENCE_LIST" :card="c"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience {
  h2 {
    font-size: 44px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 32px;
    line-height: 1.4rem;
    color: gray;
  }

  &-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>