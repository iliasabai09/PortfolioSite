<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <div class="info">
    <h1>Привет, я <span class="info-name">Абай Илияс</span></h1>
    <div class="info-subtitle headline-6">Expert developer</div>
    <p class="headline-8">
      Passionate full-stack developer crafting beautiful and functional web experiences. I turn ideas into elegant
      solutions using modern technologies.
    </p>
    <div class="info-socials">
      <Button icon="pi pi-github" severity="secondary" rounded aria-label="github"></Button>
      <Button icon="pi pi-linkedin" severity="secondary" rounded aria-label="linkedin"></Button>
      <Button icon="pi pi-envelope" severity="secondary" rounded aria-label="envelope"></Button>
    </div>
    <div class="info-actions">
      <Button label="Скачать резюме" icon="pi pi-download" iconPos="right"/>
      <Button label="Связатся" icon="pi pi-phone" severity="secondary"/>
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
