<template>
  <div class="app-bar">
    <icon type="chat" style="width: 60px; height: 60px; cursor: pointer" @click.native="open('chat')"></icon>
  </div>
</template>

<script>
export default {
  name: 'app-bar',
  methods: {
    open(app) {
      this.$store.commit('app/ADD_APP', app)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  min-width: 600px;
  height: 80px;
  padding: 0 16px;
  transform: translateX(-50%);
  box-shadow: $shadow;
  border-radius: $radius;
}
</style>
