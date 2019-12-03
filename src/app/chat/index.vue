<template>
  <div class="home">
    <div class="main p-md d-flex" style="flex-direction: column">
      <div class="top">
        <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <span>{{ name }}</span>
      </div>
      <div
        class="middle"
        style="height: 100%; background: #eee; margin: 16px 0; overflow-y: scroll; overflow-x: hidden"
      >
        <template v-for="item in data">
          <div v-if="item.name === name" :key="item.time" class="msg-box right">
            <p>{{ item.data }}</p>
            <div class="triangle-right"></div>
            <el-avatar :src="item.avatar" size="small" class="avatar-right"></el-avatar>
            <span class="name">{{ item.name }}</span>
          </div>
          <div v-else class="msg-box left" :key="item.time">
            <p>{{ item.data }}</p>
            <div class="triangle-left"></div>
            <el-avatar :src="item.avatar" size="small" class="avatar-left"></el-avatar>
            <span class="name">{{ item.name }}</span>
          </div>
        </template>
      </div>
      <div class="bottom d-flex" style="justify-content: space-between">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          style="margin: 0 16px"
          ref="input"
          @keydown.enter.native="send($event)"
        ></el-input>
        <el-button circle icon="iconfont icon-send" @click="send"></el-button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="beforeClose">
      <el-input v-model="name" placeholder="请输入你的昵称"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import io from 'socket.io-client'
const data = []
export default {
  name: 'home',
  data() {
    return {
      input: '',
      name: '',
      data,
      ws: null,
      dialogVisible: true,
      socket: null,
      unloadEvent: null
    }
  },
  created() {
    this.initSocket()
  },
  beforeDestroy() {
    window.removeEventListener('load', this.enter)
    window.removeEventListener('unload', this.leave)
  },
  methods: {
    initSocket() {
      this.socket = io('http://localhost:3000')

      this.socket.on('update', msg => {
        // console.log(msg)
        this.data = msg
      })

      this.socket.on('someone enter', name => {
        this.$message(`${name}来啦~`)
        console.log(name + 'entered')
      })
      this.socket.on('someone leave', name => {
        this.$message(`${name} 溜了~`)
      })

      window.addEventListener('unload', this.leave)
      window.addEventListener('load', this.enter)
    },
    enter() {
      this.socket.emit('enter', this.name)
    },
    leave() {
      this.socket.emit('leave', this.name)
    },
    send() {
      const msg = {
        name: this.name,
        avatar:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        time: Date.now(),
        data: this.input
      }
      this.socket.emit('update', msg)
      this.input = ''
      this.$refs.input.blur()
    },
    beforeClose(done) {
      if (this.name) {
        done()
      } else {
        this.$message('取一个名字吧~')
      }
    }
  }
}
</script>

<style lang="scss">
@mixin triangleMixin($direction) {
  background: inherit;
  border: inherit;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  @if ($direction == left) {
    transform: rotate(45deg);
  }
  @if ($direction == right) {
    transform: rotate(-135deg);
  }
  @if ($direction == top) {
    transform: rotate(135deg);
  }
  @if ($direction == bottom) {
    transform: rotate(-45deg);
  }
}
.home {
  height: 100%;
  // background: linear-gradient(to right, #85a5ff 0, #d6e4ff 50%, #85a5ff 100%);
  background-image: radial-gradient(
    circle closest-corner at top,
    $geekblue-2 0%,
    $geekblue-5 100%
  );
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 800px;
  background-color: #eee;
  border-radius: 30px;
  box-shadow: $--box-shadow-light;
  // color: $geekblue-5;
}
.msg-box {
  position: relative;
  width: 200px;
  min-height: 30px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px 8px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.left {
  margin-left: 40px;
}
.right {
  margin-left: auto;
  margin-right: 40px;
}
.triangle-left {
  position: absolute;
  top: calc(50% - 5px);
  left: -5px;
  width: 10px;
  height: 10px;
  @include triangleMixin(left);
}
.triangle-right {
  position: absolute;
  top: calc(50% - 5px);
  right: -5px;
  width: 10px;
  height: 10px;
  @include triangleMixin(right);
}
.avatar-left {
  position: absolute;
  left: -40px;
  top: calc(50% - 15px);
}
.avatar-right {
  position: absolute;
  right: -40px;
  top: calc(50% - 15px);
}
.name {
  position: absolute;
  top: -24px;
  left: 50%;
}
</style>
