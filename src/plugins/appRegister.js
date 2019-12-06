import BgSetting from '../app/BgSetting.vue'

const appRegister = {
  install: (Vue) => {
    Vue.component('bg-setting', BgSetting)
  }
}

export default appRegister