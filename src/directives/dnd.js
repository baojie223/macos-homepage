import Vue from 'vue'

Vue.directive('dnd', {
  componentUpdated(el, binding) {
    console.log(el, binding)
    const { id } = binding
    const target = document.querySelector(`#${id}`)
    console.log(target)
  }
})
