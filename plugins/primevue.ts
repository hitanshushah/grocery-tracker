// plugins/primevue.ts
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Card from 'primevue/card' // ✅ ADD THIS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true
  })
  nuxtApp.vueApp.use(ToastService)

  // ✅ Global registration
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('Card', Card) // ✅ ADD THIS
})
