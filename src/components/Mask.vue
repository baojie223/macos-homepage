<template>
  <transition name="fade">
    <div v-if="visible" class="mask" @click="close" @click.right.prevent="() => void 0">
      <div class="wrapper" @click.stop="() => void 0">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      if (!document.querySelector('body .mask')) {
        document.querySelector('body').appendChild(this.$el)
      }
      this.visible = true
    },
    close() {
      this.visible = false
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  .wrapper {
    position: relative;
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .15s;
}
</style>
