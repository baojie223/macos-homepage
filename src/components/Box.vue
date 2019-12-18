<template>
  <div :id="id" class="box" ref="box">
    <div class="drag-header" @mousedown="onDrag" @click.prevent="() => void 0">
      <span class="dot-red" @click="onClose"></span>
      <span class="dot-yellow" @click="onScale"></span>
      <span class="dot-green" @click="onHidden"></span>
      <span class="title">{{ app }}</span>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <!-- 隐藏的缩放边界 -->
    <div class="boundary b-l" @mousedown="onResize($event, 'l')"></div>
    <div class="boundary b-r" @mousedown="onResize($event, 'r')"></div>
    <div class="boundary b-t" @mousedown="onResize($event, 't')"></div>
    <div class="boundary b-b" @mousedown="onResize($event, 'b')"></div>
    <div class="angle a-lt" @mousedown="onResize($event, 'lt')"></div>
    <div class="angle a-lb" @mousedown="onResize($event, 'lb')"></div>
    <div class="angle a-rt" @mousedown="onResize($event, 'rt')"></div>
    <div class="angle a-rb" @mousedown="onResize($event, 'rb')"></div>
  </div>
</template>

<script>
export default {
  // provide() {
  //   return {
  //     size: this.size
  //   }
  // },
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
      initialW: 0,
      initialH: 0,
      id: 'box-' + Date.now(),
      activeBoundary: null,
      isActive: false,
      size: {
        height: 600
      }
    }
  },
  watch: {
    isActive(newVal) {
      if (newVal) {
        this.$refs.box.style.zIndex = 50
      } else {
        this.$refs.box.style.zIndex = 49
      }
    }
  },
  methods: {
    onDrag(ev) {
      const { box } = this.$refs
      const { left, top, width, height } = box.getBoundingClientRect()
      this.initialX = ev.clientX - left
      this.initialY = ev.clientY - top + 32
      this.initialW = width
      this.initialH = height
      this.isActive = true
      document.addEventListener('mousemove', this.dragMove)
      document.addEventListener('mouseup', this.dragUp)
      document.body.style.userSelect = 'none'
    },
    dragMove(ev) {
      const { box } = this.$refs
      const left = ev.clientX - this.initialX
      const top =
        ev.clientY - this.initialY > 0 ? ev.clientY - this.initialY : 0
      const right = document.documentElement.clientWidth - left - this.initialW
      const bottom = document.documentElement.clientHeight - top - this.initialH - 32
      box.style.left = `${left}px`
      box.style.top = `${top}px`
      box.style.right = `${right}px`
      box.style.bottom = `${bottom}px`
    },
    dragUp() {
      this.isActive = false
      document.removeEventListener('mousemove', this.dragMove)
      document.removeEventListener('mouseup', this.dragUp)
      document.body.style.userSelect = 'auto'
    },
    onScale() {
      const { classList } = this.$refs.box
      if (classList.contains('cover')) {
        classList.remove('cover')
        setTimeout(() => {
          classList.remove('transition')
        }, 350)
      } else {
        classList.add('transition')
        classList.add('cover')
      }
    },
    onHidden() {},
    onClose() {
      this.$store.commit('app/DEL_APP', this.app)
    },
    onResize(e, direction) {
      this.activeBoundary = direction
      document.addEventListener('mousemove', this.resizeMove)
      document.addEventListener('mouseup', this.resizeUp)
      document.body.style.userSelect = 'none'
      // this.$refs.mask.open()
      // this.$nextTick(() => {
      //   // console.log(this.$refs.mask)
      //   // const mask = this.$refs.mask.$el
      //   // mask.style.cursor="e-resize"
      //   // console.log(mask)
      //   document.addEventListener('mousemove', this.resizeMove)
      //   document.addEventListener('mouseup', this.resizeUp)
      // })
    },
    resizeMove(e) {
      // console.log(e)
      const { box } = this.$refs
      const { width, height } = box.getBoundingClientRect()
      // const mask = this.$refs.mask.$el
      switch (this.activeBoundary) {
        case 'l':
          if (width < 600) break
          box.style.left = `${e.x}px`
          break
        case 'r':
          if (width < 600) break
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          break
        case 't':
          if (height < 400) break
          box.style.top = `${e.clientY - 32 > 0 ? e.clientY - 32 : 0}px`
          break
        case 'b':
          if (height < 400) break
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        case 'lt':
          if (width < 600) break
          if (height < 400) break
          box.style.left = `${e.clientX}px`
          box.style.top = `${e.clientY - 32 > 0 ? e.clientY - 32 : 0}px`
          break
        case 'lb':
          if (width < 600) break
          if (height < 400) break
          box.style.left = `${e.clientX}px`
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        case 'rt':
          if (width < 600) break
          if (height < 400) break
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          box.style.top = `${e.clientY - 32 > 0 ? e.clientY - 32 : 0}px`
          break
        case 'rb':
          if (width < 600) break
          if (height < 400) break
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        default:
      }
      document.addEventListener('mouseup', this.resizeUp)
    },
    resizeUp() {
      // const { $el: mask } = this.$refs.mask
      // console.log(mask)
      // const mask = this.$refs.mask.$el
      document.removeEventListener('mousemove', this.resizeMove)
      document.removeEventListener('mouseup', this.resizeUp)
      document.body.style.userSelect = 'auto'
      // this.$refs.mask.close()
      // 用于provide，暂时停用
      // const { height } = this.$refs.box.getBoundingClientRect()
      // this.size.height = height
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: calc(50% - 400px);
  right: calc(50% - 400px);
  top: calc(50% - 300px);
  bottom: calc(50% - 300px);
  // width: 800px;
  // height: 600px;
  border-radius: $radius;
  box-shadow: $shadow;
  // overflow: hidden;
  // transition: all 0.3s ease;
  .drag-header {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    background: linear-gradient(to bottom, #e6e6e6 0, #d5d5d5 100%);
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
    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .main {
    position: relative;
    z-index: 99;
    height: 100%;
    background: #f0f0f0;
  }

  .boundary {
    position: absolute;
    z-index: 100;
    background-color: transparent;
  }
  .b-l {
    top: 0;
    left: -4px;
    bottom: 0;
    width: 8px;
    cursor: e-resize;
  }
  .b-r {
    top: 0;
    right: -4px;
    bottom: 0;
    width: 8px;
    cursor: e-resize;
  }
  .b-t {
    top: -4px;
    left: 0;
    right: 0;
    height: 8px;
    cursor: s-resize;
  }
  .b-b {
    bottom: -4px;
    left: 0;
    right: 0;
    height: 8px;
    cursor: s-resize;
  }

  .angle {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: 101;
    background-color: transparent;
  }
  .a-lt {
    top: -4px;
    left: -4px;
    cursor: se-resize;
  }
  .a-lb {
    bottom: -4px;
    left: -4px;
    cursor: sw-resize;
  }
  .a-rt {
    top: -4px;
    right: -4px;
    cursor: sw-resize;
  }
  .a-rb {
    bottom: -4px;
    right: -4px;
    cursor: se-resize;
  }
}
.cover {
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  bottom: 16px !important;
}
.transition {
  transition: all 0.3s ease;
}
</style>
