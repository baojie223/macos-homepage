<template>
  <div class="universal-container" ref="container">
    <div class="drag-header" @click.prevent="() => void 0" @mousedown="onMouseDown($event)">
      <span class="dot-red" @click="onClose"></span>
      <span class="dot-yellow" @click="onScale"></span>
      <span class="dot-green" @click="onHidden"></span>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    app: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      initialX: 0,
      initialY: 0,
      isDrag: false
    }
  },
  methods: {
    onMouseDown(ev) {
      const { container } = this.$refs
      const { left, top } = container.getBoundingClientRect()
      this.initialX = ev.clientX - left
      this.initialY = ev.clientY - top
      this.isDrag = true
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(ev) {
      const { container } = this.$refs
      container.style.left = `${ev.clientX - this.initialX}px`
      container.style.top = `${
        ev.clientY - this.initialY > 32 ? ev.clientY - this.initialY : 32
      }px`
    },
    onMouseUp() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    },
    onScale() {
      console.log(this.$refs.container)
    },
    onHidden() {},
    onClose() {
      this.$store.commit('app/DEL_APP', this.app)
    }
  }
}
</script>

<style lang="scss" scoped>
.universal-container {
  position: absolute;
  left: calc(50% - 400px);
  top: calc(50% - 300px);
  width: 800px;
  height: 600px;
  border-radius: $--border-radius-base;
  box-shadow: $--box-shadow-light;
  overflow: hidden;
  .drag-header {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    background: linear-gradient(top, #e6e6e6 0, #d5d5d5 100%);
    .dot {
      &-red {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #f56c6c;
        cursor: pointer;
      }
      &-yellow {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #e6a23c;
        margin-left: 8px;
        cursor: pointer;
      }
      &-green {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #67c23a;
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }
  .main {
    height: 100%;
    background: #f0f0f0;
  }
}

</style>
