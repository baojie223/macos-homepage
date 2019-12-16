import BgSetting from '../app/BgSetting.vue'
import Chat from '../app/chat/chat.vue'
import Markdown from '../app/markdown/markdown.vue'

const appRegister = {
  install: (Vue) => {
    Vue.component('bg-setting', BgSetting)
    Vue.component('chat', Chat)
    Vue.component('markdown', Markdown)
  }
}

export default appRegister