<template>
  <div class="status-bar">
    
  </div>
</template>

<script>
export default {
  name: 'status-bar',
}
</script>

<style lang="scss" scoped>
.status-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 32px;
  background-color: #1d2635;
  box-shadow: $--box-shadow-light;
}
</style>
