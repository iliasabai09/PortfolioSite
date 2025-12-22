<script setup lang="ts">
import {computed, ref} from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import type {IPayloadForm} from "../interfaces";

const form = ref<IPayloadForm>({
  username: '',
  email: '',
  message: '',
})

const isDisabled = computed(() =>
    Object.values(form.value).some((v) => !String(v).trim())
)
</script>

<template>
  <form class="contact-form">
    <div class="contact-form__field">
      <label for="username" class="contact-form__label">Username</label>
      <InputText
          id="username"
          v-model="form.username"
          size="large"
          class="contact-form__control"
      />
    </div>

    <div class="contact-form__field">
      <label for="email" class="contact-form__label">Email</label>
      <InputText
          type="email"
          id="email"
          v-model="form.email"
          size="large"
          class="contact-form__control"
      />
    </div>

    <div class="contact-form__field">
      <label for="message" class="contact-form__label">Message</label>
      <Textarea
          id="message"
          v-model="form.message"
          size="large"
          class="contact-form__control contact-form__control--textarea"
      />
    </div>

    <Button
        label="Send Message"
        icon="pi pi-send"
        iconPos="right"
        :disabled="isDisabled"
        class="contact-form__submit"
    />
  </form>
</template>

<style scoped lang="scss">
.contact-form {
  width: 414px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__label {
    font-size: 12px;
    color: #424242;
  }

  &__control {
    font-size: 14px;
  }

  &__control--textarea {
    resize: none;
    height: 100px;
    font-size: 14px;
  }

  &__submit {
  }
}
</style>
