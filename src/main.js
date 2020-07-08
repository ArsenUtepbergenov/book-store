import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import bootstrap lib
import 'bootstrap'
// turn off warning about mode development
Vue.config.productionTip = false
// import all custom styles
import './styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
