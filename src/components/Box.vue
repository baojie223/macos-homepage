<template>
  <div :id="id" class="box" ref="box">
    <div class="drag-header" @click.prevent="() => void 0" @mousedown="onMouseDown($event)">
      <span class="dot-red" @click="onClose"></span>
      <span class="dot-yellow" @click="onScale"></span>
      <span class="dot-green" @click="onHidden"></span>
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
    <my-mask ref="mask"></my-mask>
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
      isDrag: false,
      position: {},
      pos: {},
      id: Date.now(),
      left: 0,
      width: 0,
      realLeft: 'calc(50% - 400px)',
      activeBoundary: null
    }
  },
  methods: {
    onMouseDown(ev) {
      const { box } = this.$refs
      const { left, top } = box.getBoundingClientRect()
      this.initialX = ev.clientX - left
      this.initialY = ev.clientY - top
      this.isDrag = true
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(ev) {
      const { box } = this.$refs
      box.style.left = `${ev.clientX - this.initialX}px`
      box.style.top = `${
        ev.clientY - this.initialY > 32 ? ev.clientY - this.initialY : 32
      }px`
    },
    onMouseUp() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    },
    onScale() {
      const { classList } = this.$refs.box

      if (classList.contains('cover')) {
        classList.remove('cover')
        this.position = this.pos
      } else {
        const {
          top,
          left,
          width,
          height
        } = this.$refs.box.getBoundingClientRect()
        this.pos = { top, left, width, height }
        classList.add('cover')
      }
    },
    onHidden() {},
    onClose() {
      this.$store.commit('app/DEL_APP', this.app)
    },
    onResize(e, direction) {
      this.activeBoundary = direction
      // console.log(e)
      // const {
      //   left,
      //   right,
      //   top,
      //   bottom,
      //   width
      // } = this.$refs.box.getBoundingClientRect()
      // this.left = left
      // this.width = width
      // this.$refs.mask.$el.style.cursor = 'pointer'
      // this.$refs.mask.open()
      // const { $el: mask } = this.$refs.mask
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseup', this.up)
    },
    onResizeStart() {
      console.log()
    },
    move(e) {
      const { box } = this.$refs
      switch (this.activeBoundary) {
        case 'l':
          box.style.left = `${e.clientX}px`
          break
        case 'r':
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          break
        case 't':
          box.style.top = `${e.clientY}px`
          break
        case 'b':
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        case 'lt':
          box.style.left = `${e.clientX}px`
          box.style.top = `${e.clientY}px`
          break
        case 'lb':
          box.style.left = `${e.clientX}px`
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        case 'rt':
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          box.style.top = `${e.clientY}px`
          break
        case 'rb':
          box.style.right = `${document.documentElement.clientWidth -
            e.clientX}px`
          box.style.bottom = `${document.documentElement.clientHeight -
            e.clientY}px`
          break
        default:
      }
    },
    up() {
      // const { $el: mask } = this.$refs.mask
      document.removeEventListener('mousemove', this.move)
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
  overflow: hidden;
  transition: all 0.3s ease;
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
  left: 0;
  right: 0;
  top: 32px;
  bottom: 0;
}
</style>
