import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './form.js'

import './axios.js'
import { router } from './router'
import store from './store'
import './globalMixin'


Vue.config.productionTip = false

new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')
