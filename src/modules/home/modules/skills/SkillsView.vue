<script setup lang="ts">
import {computed} from 'vue'
import SkillCard from "./components/SkillCard.vue";
import {localizedContent, useI18n} from '../../../i18n'

const {lang, t} = useI18n()

const skills = computed(() => localizedContent.skills[lang.value])
</script>

<template>
  <div class="skills">
    <h2>{{ t.skills.title }}</h2>
    <p>{{ t.skills.subtitle }}</p>
    <div class="skills-cards">
      <SkillCard v-for="s in skills" :skill="s"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
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
    width: 100%;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    &-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      margin-bottom: 24px;
    }

    &-cards {
      grid-template-columns: 1fr;
    }
  }
}
</style>
