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

const app = createApp(App)

app.directive('reveal-on-scroll', {
    mounted(el) {
        const target = el as HTMLElement & { _revealObserver?: IntersectionObserver }
        target.classList.add('reveal-on-scroll')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {threshold: 0.2}
        )
        observer.observe(target)
        target._revealObserver = observer
    },
    unmounted(el) {
        const target = el as HTMLElement & { _revealObserver?: IntersectionObserver }
        if (target._revealObserver) {
            target._revealObserver.disconnect()
            delete target._revealObserver
        }
    }
})

app
    .use(router)
    .use(PrimeVue, PRIME_VUE_CONFIG)
    .use(DialogService)
    .use(ToastService)
    .use(ConfirmationService)
    .mount('#app')
