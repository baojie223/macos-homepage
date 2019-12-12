<template>
  <div class="app-bar">
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
svg {
  stroke: #000;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
