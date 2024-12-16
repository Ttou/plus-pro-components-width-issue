import 'element-plus/dist/index.css'
import 'plus-pro-components/index.css'
import './style.css'

import ElementPlus from 'element-plus'
import PlusProComponents from 'plus-pro-components'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(ElementPlus)
  .use(PlusProComponents)
  .mount('#app')
