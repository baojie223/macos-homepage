import BgSetting from '../app/BgSetting.vue'
import Chat from '../app/chat/chat.vue'

const appRegister = {
  install: (Vue) => {
    Vue.component('bg-setting', BgSetting)
    Vue.component('chat', Chat)
  }
}

export default appRegister