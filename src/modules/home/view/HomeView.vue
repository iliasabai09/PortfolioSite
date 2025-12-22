<script setup lang="ts">
import HeaderView from "../modules/header/HeaderView.vue";
import FeaturedProjectsView from "../modules/featured-projects/FeaturedProjectsView.vue";
import SkillsView from "../modules/skills/SkillsView.vue";
import ExperienceView from "../modules/experience/ExperienceView.vue";
import ReviewsView from "../modules/reviews/ReviewsView.vue";
import ContactFormView from "../modules/contact-form/ContactFormView.vue";
</script>

<template>
  <div class="home">
    <HeaderView/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <FeaturedProjectsView/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <SkillsView/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ExperienceView/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ReviewsView/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ContactFormView/>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 24px;
  img {
    margin: 0 auto;
  }
}
</style>