import Vue from 'vue'
import BIcon from '@/components/BIcon.vue'
import Mask from '../plugins/mask'
// import RightMenu from '../plugins/rightMenu'
import Box from '../components/Box.vue'

Vue.component('b-icon', BIcon)
// Vue.use(RightMenu)
Vue.component('box', Box)

Vue.use(Mask)