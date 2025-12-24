<script setup lang="ts">
import Button from 'primevue/button';
import {useI18n} from '../../../../i18n'

const {t} = useI18n()
</script>

<template>
  <div class="info">
    <h1>{{ t.header.greeting }} <span class="info-name">Абай Илияс</span></h1>
    <div class="info-subtitle headline-6">{{ t.header.subtitle }}</div>
    <p class="headline-8">
      {{ t.header.description }}
    </p>
    <div class="info-socials">
      <a href="https://github.com/iliasabai09" target="_blank">
        <Button icon="pi pi-github" severity="secondary" rounded aria-label="github"></Button>
      </a>
      <a href="https://www.linkedin.com/in/iliyas-abay-b1099b318/" target="_blank">
        <Button icon="pi pi-linkedin" severity="secondary" rounded aria-label="linkedin"></Button>
      </a>
      <a href="mailto:iliasabaimain@gmail.com" target="_blank">
        <Button icon="pi pi-envelope" severity="secondary" rounded aria-label="envelope"></Button>
      </a>
    </div>
    <div class="info-actions">
      <a href="/docs/resume.pdf" download="">
        <Button :label="t.header.resume" icon="pi pi-download" iconPos="right"/>
      </a>
      <a href="tel:+77009965396">
        <Button :label="t.header.contact" icon="pi pi-phone" severity="secondary"/>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  &-subtitle {
    color: gray;
    font-weight: bold;
  }

  h1 {
    font-size: 40px;
    line-height: 1.05;
    font-weight: 700;
    color: #0b1020;
  }

  p {
    font-style: italic;
    color: #363636;
  }

  &-name {
    background: linear-gradient(90deg, #3b82f6 0%, #7c6cff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  &-socials {
    display: flex;
    gap: 16px;
  }

  &-actions {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    h1 {
      font-size: 28px;
    }

    &-socials {
      justify-content: center;
      flex-wrap: wrap;
    }

    &-actions {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }
  }
}
</style>
