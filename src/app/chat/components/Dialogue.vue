<template>
  <div class="dialog">
    <h2>{{ currentRoom.from }}</h2>
    <div class="read">
      <ul>
        <li v-for="(item, i) in currentRoom.msg" :key="i">
          <el-avatar
            :size="30"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          ></el-avatar>
          <div>{{ item }}</div>
        </li>
      </ul>
    </div>
    <div class="divider" ref="divider"></div>
    <div class="write"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  computed: {
    ...mapGetters(['currentRoom'])
  },
  created() {
    console.log(this.currentRoom)
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 16px;
  h2 {
    font-size: 20px;
  }
}
.divider {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 4px;
  cursor: s-resize;
  &::after {
    content: '';
    position: absolute;
    left: -50%;
    top: 50%;
    width: 200%;
    height: 1px;
    transform: scaleX(0.5);
    background-color: #f2f6fc;
  }
}
</style>
