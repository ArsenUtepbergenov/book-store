import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap lib
import 'bootstrap'
// import all custom styles
import './styles/index.scss'

createApp(App)
  .use(router)
  .mount('#app')
