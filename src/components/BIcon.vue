<template>
  <!-- <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + type" />
  </svg> -->
  <i :class="'iconfont icon-' + type"></i>
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
    const link = document.createElement('link')
    link.id = 'iconfont'
    link.rel = 'text/stylesheet'
    link.href = 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.css'
    document.head.appendChild(link)
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 16px;
}
</style>
