<script setup lang="ts">
import HeaderView from "../modules/header/HeaderView.vue";
import FeaturedProjectsView from "../modules/featured-projects/FeaturedProjectsView.vue";
import SkillsView from "../modules/skills/SkillsView.vue";
import ExperienceView from "../modules/experience/ExperienceView.vue";
import ReviewsView from "../modules/reviews/ReviewsView.vue";
import ContactFormView from "../modules/contact-form/ContactFormView.vue";
import {useI18n} from '../../i18n'

const {t} = useI18n()
</script>

<template>
  <div class="home">
    <HeaderView/>
    <img class="home-arrow" src="/icons/arrow-down.gif" :alt="t.common.arrowAlt" width="50">
    <FeaturedProjectsView/>
    <img class="home-arrow" src="/icons/arrow-down.gif" :alt="t.common.arrowAlt" width="50">
    <SkillsView/>
    <img class="home-arrow" src="/icons/arrow-down.gif" :alt="t.common.arrowAlt" width="50">
    <ExperienceView/>
<!--    <img class="home-arrow" src="/icons/arrow-down.gif" :alt="t.common.arrowAlt" width="50">-->
<!--    <ReviewsView/>-->
    <img class="home-arrow" src="/icons/arrow-down.gif" :alt="t.common.arrowAlt" width="50">
    <ContactFormView/>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 24px;
  &-arrow {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 36px;
    padding: 16px;

    &-arrow {
      width: 36px;
    }
  }
}
</style>
