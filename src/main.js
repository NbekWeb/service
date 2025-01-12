import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/main.css'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Material Design styles
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import VMask from "@ssibrahimbas/v-mask";
const app = createApp(App)
const vuetify = createVuetify({
   components,
   directives,
   icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
         mdi,
      },
   },
});
app.use(createPinia())
app.use(router)
app.use(VMask)
app.use(vuetify);
app.mount('#app')
