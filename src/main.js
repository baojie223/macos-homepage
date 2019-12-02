import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import './styles/index.scss'

import { Button, Input, Icon, Avatar } from 'element-ui'
import BIcon from './components/BIcon.vue'
Vue.use(Button).use(Input).use(Icon).use(Avatar)
Vue.component('b-icon', BIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
