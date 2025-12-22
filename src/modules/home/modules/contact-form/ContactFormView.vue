<script setup lang="ts">
import ContactInformation from './components/ContactInformation.vue'
import ContactForm from './components/ContactForm.vue'
</script>

<template>
  <section class="contact">
    <h4 class="contact__title">Get In Touch</h4>

    <p class="contact__subtitle">
      I'm always open to discussing new projects, creative ideas, or opportunities
      to be part of your vision.
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
}
</style>
