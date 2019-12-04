import RightMenu from '../components/RightMenu.vue'

export default {
  install: (Vue) => {
    const Menu = Vue.extend(RightMenu)
    let menuVm
    Vue.prototype.$menu = () => {
      if (!menuVm) {
        menuVm = new Menu()
        menuVm.$mount()
      }
      return menuVm
    }
  }
}
