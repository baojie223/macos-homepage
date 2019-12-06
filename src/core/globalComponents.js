import Vue from 'vue'
import BIcon from '@/components/BIcon.vue'
import Mask from '../plugins/mask'
// import RightMenu from '../plugins/rightMenu'
import UniversalContainer from '../components/UniversalContainer.vue'

Vue.component('b-icon', BIcon)
// Vue.use(RightMenu)
Vue.component('universal-container', UniversalContainer)

Vue.use(Mask)