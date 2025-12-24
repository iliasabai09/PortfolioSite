<script setup lang="ts">

import ProjectCard from "./components/ProjectCard.vue";
import {PROJECTS} from "./constants";
</script>

<template>
  <div class="featured">
    <h2>Featured Projects</h2>
    <p>Here are some of my recent projects that showcase my skills and experience in web development.</p>
    <div class="featured-cards">
      <project-card v-for="p in PROJECTS" :project="p"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.featured {
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      margin-bottom: 24px;
    }

    &-cards {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
