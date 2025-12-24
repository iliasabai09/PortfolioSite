<script setup lang="ts">
import ContactInformation from './components/contact-information.vue'
import ContactForm from './components/ContactForm.vue'
import {useI18n} from '../../../i18n'

const {t} = useI18n()
</script>

<template>
  <section class="contact">
    <h4 class="contact__title">{{ t.contact.title }}</h4>

    <p class="contact__subtitle">
      {{ t.contact.subtitle }}
    </p>

    <div class="contact__content">
      <ContactInformation />
      <ContactForm />
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  &__title {
    color: oklch(.21 .034 264.665);
    text-align: center;
    margin-bottom: 16px;
  }

  &__subtitle {
    text-align: center;
    color: oklch(.446 .03 256.802);
    max-width: 600px;
    margin: 0 auto 48px;
    font-size: 14px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: 48px;
  }

  @media (max-width: 768px) {
    &__title {
      font-size: 30px;
    }

    &__subtitle {
      margin-bottom: 32px;
    }

    &__content {
      flex-direction: column;
      gap: 24px;
    }
  }
}
</style>
