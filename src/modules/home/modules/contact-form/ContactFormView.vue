<script setup lang="ts">

import ContactInformation from "./components/contact-information.vue";
import ContactForm from "./components/ContactForm.vue";
</script>

<template>
  <div class="contact">
    <h4 class="contact-title">Get In Touch</h4>
    <p class="contact-subtitle">I'm always open to discussing new projects, creative ideas, or opportunities to be part
      of your vision.</p>
    <div class="contact-blocks">
      <ContactInformation/>
      <ContactForm/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  &-title {
    color: oklch(.21 .034 264.665);
    text-align: center;
    margin-bottom: 16px;
  }

  &-subtitle {
    text-align: center;
    color: oklch(.446 .03 256.802);
    max-width: 600px;
    margin: 0 auto 48px;
    font-size: 14px;
  }

  &-blocks {
    display: flex;
    justify-content: space-between;
  }
}
</style>