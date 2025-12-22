<script setup lang="ts">
import {computed, ref} from "vue";
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from "primevue/button";

const form = ref({
  username: "",
  email: "",
  message: "",
})

const disabled = computed(() => !!Object.values(form.value).find(v => !v))

</script>

<template>
  <form class="form">
    <div class="form-field">
      <label for="username" class="form-field_label">Username</label>
      <InputText id="username" v-model="form.username" aria-describedby="username-help" size="large"/>
    </div>
    <div class="form-field">
      <label for="Email" class="form-field_label">Email</label>
      <InputText id="Email" v-model="form.email" aria-describedby="Email-help" size="large"/>
    </div>
    <div class="form-field">
      <label for="Message" class="form-field_label">Message</label>
      <Textarea id="Message" v-model="form.message" aria-describedby="Message-help" size="large"/>
    </div>
    <Button label="Send Message" icon="pi pi-send" iconPos="right" :disabled="disabled"/>
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 414px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  #Message {
    resize: none;
    height: 100px;
    font-size: 14px;
  }

  &-field {
    &_label {
      font-size: 12px;
      color: #424242;
    }

    input {
      font-size: 14px;
    }

    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>