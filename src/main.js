import { createApp } from 'vue'
import router from '@/router'
import '/node_modules/bulma/css/bulma.css'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
