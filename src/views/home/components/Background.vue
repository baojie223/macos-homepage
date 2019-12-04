<template>
  <div class="background" @click.right.prevent="onRightClick">
    background
    <my-mask ref="mask" @onClose="onMaskClose">
      <div :style="menuStyle">
        <ul class="menus retina-border">
          <li class="menu-item">桌面壁纸</li>
          <li class="menu-item">还有</li>
        </ul>
      </div>
    </my-mask>
  </div>
</template>

<script>
export default {
  name: 'background',
  data() {
    return {
      menuStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100px',
        height: '200px'
      }
    }
  },
  methods: {
    onRightClick(e) {
      this.menuStyle.top = e.clientY + 'px'
      this.menuStyle.left = e.clientX + 'px'
      this.$nextTick(() => {
        this.$refs.mask.open()
      })
    },
    onMaskClose() {}
  }
}
</script>

<style lang="scss" scoped>
.background {
  height: 100%;
  padding-top: 32px;
}
.menus {
  background-color: #B0C4E7;
  box-shadow: $--box-shadow-light;
  .menu-item {
    padding: 8px 16px;
  }
  .menu-item + .menu-item {
    border-top: 2px solid #9DB3D9;
  }
}
</style>
