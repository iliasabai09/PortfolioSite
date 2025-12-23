<script setup lang="ts">
import SkillCard from "./components/SkillCard.vue";
import {SKILLS} from "./constants";
</script>

<template>
  <div class="skills">
    <h2>Skills & Expertise</h2>
    <p>I work with a wide range of modern technologies and tools to build scalable and efficient applications.</p>
    <div class="skills-cards">
      <SkillCard v-for="s in SKILLS" :skill="s"/>
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
