<template>
  <div class="app-bar">
    app-bar 
  </div>
</template>

<script>
export default {
  name: 'app-bar'
}
</script>

<style lang="scss" scoped>
.app-bar {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 80px;
  transform: translateX(-50%);
  box-shadow: $--box-shadow-light;
  border-radius: 8px;
}
</style>
