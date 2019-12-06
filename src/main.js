import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './styles/index.scss'

import './core/element'
import './core/globalComponents'

import appRegister from './plugins/appRegister'

import localforage from 'localforage'

Vue.prototype.$db = localforage

Vue.use(appRegister)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
