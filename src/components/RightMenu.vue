<template>
  <div class="right-menu">
    <div class="menu">
      menu
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    open() {
      document.querySelector('body').appendChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
.right-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .1);
}
.menu {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
