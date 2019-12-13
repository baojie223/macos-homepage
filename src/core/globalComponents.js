import Vue from 'vue'
import Icon from '../components/Icon.vue'
import Mask from '../plugins/mask'
import Box from '../components/Box.vue'
import Empty from '../components/Empty.vue'
import Scroll from '../components/Scroll.vue'

Vue.component('icon', Icon)
Vue.component('box', Box)
Vue.component('empty', Empty)
Vue.component('scroll', Scroll)

Vue.use(Mask)