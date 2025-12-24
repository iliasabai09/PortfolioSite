<script setup lang="ts">
import {computed} from 'vue'
import ExperienceCard from "./components/ExperienceCard.vue";
import {localizedContent, useI18n} from '../../../i18n'

const {lang, t} = useI18n()

const experienceList = computed(() => localizedContent.experience[lang.value])
</script>

<template>
  <div class="experience">
    <h2>{{ t.experience.title }}</h2>
    <p>{{ t.experience.subtitle }}</p>
    <div class="experience-cards">
      <ExperienceCard v-for="c in experienceList" :card="c"/>
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

  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      margin-bottom: 24px;
    }
  }
}
</style>
