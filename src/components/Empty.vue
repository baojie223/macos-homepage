<template>
  <div class="empty">
    <icon type="like" class="icon"></icon>
    <span class="text">找点事做吧~</span>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss" scoped>
.empty {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 80px;
  min-height: 80px;
  .icon {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
  }
  .text {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 26px;
  }
}
</style>
