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
  <a :href="project.link" target="_blank">
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
  </a>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  text-transform: none;
  color: var(--gray);
}

.card {
  height: 100%;
  max-width: 300px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 21px 7px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 21px 7px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 21px 7px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: .8s ease;

  &:hover {
    transition: .8s ease;
    -webkit-box-shadow: 0px 0px 18px 13px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 18px 13px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 18px 13px rgba(34, 60, 80, 0.2);
  }

  &-content {
    padding: 16px;
  }

  &-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  &-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: var(--gray);
  }

  &-text {
    font-size: 14px;
    font-style: italic;
    color: grey;
    margin-bottom: 12px;
  }

  &-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: grey;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    &-img {
      height: 160px;
    }
  }
}
</style>
