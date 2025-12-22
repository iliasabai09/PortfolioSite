<script setup lang="ts">
import {ref} from "vue";
import Rating from 'primevue/rating';
import Avatar from 'primevue/avatar';
const value = ref(5);
defineProps({
  card: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="card">
    <img src="/icons/review.svg" alt="">
    <p>{{ card.text }}</p>
    <Rating :default-value="card.rating" class="card-rating"/>
    <div class="card-user">
      <Avatar image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" class="mr-2"
              shape="circle"/>
      <div class="card-user_info">
        <div class="card-user_info-name">{{ card.name }}</div>
        <div class="card-user_info-position">{{ card.position }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  img {
    margin-bottom: 16px;
  }

  padding: 12px;
  border-radius: 12px;
  border: solid 2px var(--color-border);

  &-rating {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
    font-style: italic;
    color: var(--color-muted);
    font-size: 14px;
  }

  &-user {
    display: flex;
    align-items: center;
    gap: 12px;

    &_info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      &-name {
        font-size: 14px;
      }

      &-position {
        color: var(--color-muted);
        font-size: 12px;
      }
    }
  }
}
</style>
