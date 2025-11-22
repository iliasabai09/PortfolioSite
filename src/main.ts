import {createApp} from 'vue'
import './assets/styles/global.scss'
import App from './App.vue'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import {ConfirmationService} from "primevue";
import {ToastService} from "primevue";
import DialogService from 'primevue/dialogservice';
import {PRIME_VUE_CONFIG} from "../primevue.config.ts";
import {router} from "./router";

createApp(App)
    .use(router)
    .use(PrimeVue, PRIME_VUE_CONFIG)
    .use(DialogService)
    .use(ToastService)
    .use(ConfirmationService)
    .mount('#app')
