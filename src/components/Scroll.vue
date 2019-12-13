<template>
  <div class="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { wrapper } = this.$refs
      this.scroll = new BScroll(wrapper, {
        scrollY: true,
        click: true,
        mouseWheel: true,
        observeDom: true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
