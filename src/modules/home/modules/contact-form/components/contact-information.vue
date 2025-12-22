<script setup lang="ts">
const email = 'iliasabaimain@gmail.com'
const phoneRaw = '+77009965396'
const phoneView = '+7 (700) 996-53-96'
const location = 'San Francisco, CA'
</script>

<template>
  <div class="contact-info">
    <div class="contact-info__list">
      <div class="contact-info__item">
        <div class="contact-info__icon">
          <img class="contact-info__icon-img" src="/icons/email.svg" alt="Email" width="24" height="24">
        </div>

        <div class="contact-info__content">
          <div class="contact-info__title">Email</div>
          <a class="contact-info__value" :href="`mailto:${email}`">{{ email }}</a>
        </div>
      </div>

      <div class="contact-info__item">
        <div class="contact-info__icon">
          <img class="contact-info__icon-img" src="/icons/phone.svg" alt="Phone" width="24" height="24">
        </div>

        <div class="contact-info__content">
          <div class="contact-info__title">Phone</div>
          <a class="contact-info__value" :href="`tel:${phoneRaw}`">{{ phoneView }}</a>
        </div>
      </div>

      <div class="contact-info__item">
        <div class="contact-info__icon">
          <img class="contact-info__icon-img" src="/icons/location.svg" alt="Location" width="24" height="24">
        </div>

        <div class="contact-info__content">
          <div class="contact-info__title">Location</div>
          <p class="contact-info__value">{{ location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-info {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom right, #3b82f6, #9333ea);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 40px;
  }

  &__icon-img {
    display: block;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
  }

  &__title {
    color: #6b6b6b;
    font-weight: 600;
  }

  &__value {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
