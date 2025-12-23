<script setup lang="ts">

import ReviewCart from "./components/ReviewCart.vue";
import {REVIEWS} from "./constants";
</script>

<template>
  <div class="reviews">
    <h2>Отзывы Клиентов</h2>
    <p>Что говорят обо мне клиенты и коллеги, с которыми я работал.</p>
    <div class="reviews-cards">
      <ReviewCart v-for="r in REVIEWS" :card="r"/>
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
    color: var(--color-muted);
  }

  &-cards {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
  }
}
</style>
