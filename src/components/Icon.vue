<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + type" />
  </svg>
</template>

<script>
export default {
  name: '',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  created() {
    if (document.querySelector('#iconfont')) return
    const script = document.createElement('script')
    script.id = 'iconfont'
    script.src = 'https://at.alicdn.com/t/font_1535173_bzzoiwg713g.js'
    document.head.appendChild(script)
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>
