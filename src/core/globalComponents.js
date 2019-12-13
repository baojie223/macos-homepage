import Vue from 'vue'
import Icon from '../components/Icon.vue'
import Mask from '../plugins/mask'
import Box from '../components/Box.vue'

Vue.component('icon', Icon)
Vue.component('box', Box)

Vue.use(Mask)