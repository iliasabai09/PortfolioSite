<script setup lang="ts">
import {onBeforeUnmount, onMounted} from "vue";
import HeaderView from "../modules/header/HeaderView.vue";
import FeaturedProjectsView from "../modules/featured-projects/FeaturedProjectsView.vue";
import SkillsView from "../modules/skills/SkillsView.vue";
import ExperienceView from "../modules/experience/ExperienceView.vue";
import ReviewsView from "../modules/reviews/ReviewsView.vue";
import ContactFormView from "../modules/contact-form/ContactFormView.vue";

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.scroll-reveal'));
  if (!elements.length) return;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});

  elements.forEach((element) => observer?.observe(element));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <div class="home">
    <HeaderView class="scroll-reveal"/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <FeaturedProjectsView class="scroll-reveal"/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <SkillsView class="scroll-reveal"/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ExperienceView class="scroll-reveal"/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ReviewsView class="scroll-reveal"/>
    <img src="/icons/arrow-down.gif" alt="arrow" width="50">
    <ContactFormView class="scroll-reveal"/>
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
