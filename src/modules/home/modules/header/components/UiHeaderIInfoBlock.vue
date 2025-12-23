<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import Button from 'primevue/button';

const isDark = ref(false);
const themeStorageKey = 'theme';

const applyTheme = (value: boolean) => {
  document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
};

onMounted(() => {
  const saved = localStorage.getItem(themeStorageKey);
  if (saved) {
    isDark.value = saved === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme(isDark.value);
});

watch(isDark, (value) => {
  localStorage.setItem(themeStorageKey, value ? 'dark' : 'light');
  applyTheme(value);
});
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
    <div class="info-theme">
      <Button
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        :label="isDark ? 'Светлая тема' : 'Темная тема'"
        severity="secondary"
        @click="isDark = !isDark"
      />
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
    color: var(--color-muted);
    font-weight: bold;
  }

  h1 {
    font-size: 40px;
    line-height: 1.05;
    font-weight: 700;
    color: var(--color-text);
  }

  p {
    font-style: italic;
    color: var(--color-subtle);
  }

  &-name {
    background: var(--gradient-primary);
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

  &-theme {
    display: flex;
  }
}
</style>
