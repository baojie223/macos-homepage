<template>
  <div class="home">
    <div class="main p-md d-flex" style="flex-direction: column">
      <div class="top">
        <el-button style="float: left">按钮</el-button>
      </div>
      <div class="middle" style="height: 100%">
        
      </div>
      <div class="bottom">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button round><b-icon type="send" /></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      input: ''
    }
  },
  created() {}
}
</script>

<style lang="scss">
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
  border-radius: $--border-radius-base;
  box-shadow: $--box-shadow-light;
  color: $geekblue-5;
}
</style>
