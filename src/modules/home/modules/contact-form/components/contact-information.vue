<script setup lang="ts">

</script>

<template>
  <div class="info">
<!--    <h4 class="info-title">Contact Information</h4>-->
    <div class="info-items">
      <div class="info-item">
        <div class="info-item_imgWrapper">
          <img :src="'/icons/email.svg'" alt="frontend" width="24">
        </div>
        <div class="info-item-value">
          <div>Email</div>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item_imgWrapper">
          <img :src="'/icons/phone.svg'" alt="frontend" width="24">
        </div>
        <div class="info-item-value">
          <div>Phone</div>
          <a href="mailto:your.email@example.com">+1 (234) 567-890</a>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item_imgWrapper">
          <img :src="'/icons/email.svg'" alt="frontend" width="24">
        </div>
        <div class="info-item-value">
          <div>Location</div>
          <p>San Francisco, CA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  &-items {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  &-title {
    color: oklch(.21 .034 264.665);
    margin-bottom: 24px;
    font-weight: 400;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 12px;

    &-value {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &_imgWrapper {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background-image: linear-gradient(
              to bottom right,
              #3b82f6,
              #9333ea
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>