<script setup lang="ts">
import {computed} from 'vue'
import ReviewCart from "./components/ReviewCart.vue";
import {localizedContent, useI18n} from '../../../i18n'

const {lang, t} = useI18n()

const reviews = computed(() => localizedContent.reviews[lang.value])
</script>

<template>
  <div class="reviews">
    <h2>{{ t.reviews.title }}</h2>
    <p>{{ t.reviews.subtitle }}</p>
    <div class="reviews-cards">
      <ReviewCart v-for="r in reviews" :card="r"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews {
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
    justify-content: center;
    width: 100%;
    gap: 12px;
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
      align-items: stretch;
    }
  }
}
</style>
