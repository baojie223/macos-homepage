<template>
  <div class="background" :style="{ 'background-image': `url(${bgImg})`, 'background-color': bgColor }" @click.right.prevent="onRightClick">
    <my-mask ref="mask" @onClose="onMaskClose">
      <div :style="menuStyle">
        <ul class="menus">
          <li class="menu-item" @click="changeBackground">桌面壁纸</li>
          <li class="menu-item" @click="openChat">还有</li>
        </ul>
      </div>
    </my-mask>
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'background',
  data() {
    return {
      menuStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100px'
        // height: '200px'
      },

    }
  },
  computed: {
    ...mapState('settings', ['bgColor', 'bgImg'])
  },
  methods: {
    ...mapMutations('app', ['ADD_APP']),
    onRightClick(e) {
      this.menuStyle.top = e.clientY + 'px'
      this.menuStyle.left = e.clientX + 'px'
      this.$nextTick(() => {
        this.$refs.mask.open()
      })
    },
    onMaskClose() {},
    changeBackground() {
      console.log(1)
      this.ADD_APP('bg-setting')
      this.$refs.mask.close()
    },
    openChat() {
      this.ADD_APP('chat')
      this.$refs.mask.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  height: 100%;
  position: relative;
  // transition: background .3s;
  overflow: hidden;
}
.menus {
  background-color: #b0c4e7;
  border-radius: $--border-radius-base;
  box-shadow: $--box-shadow-light;
  .menu-item {
    padding: 8px 16px;
    cursor: pointer;
  }
  .menu-item + .menu-item {
    border-top: 2px solid #9db3d9;
  }
}
</style>
