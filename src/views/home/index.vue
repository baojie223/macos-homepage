<template>
  <div class="home">
    <status-bar />
    <background />
    <app-bar />
  </div>
</template>

<script>
import { StatusBar, AppBar, Background } from './components'
export default {
  name: 'home',
  components: {
    StatusBar,
    AppBar,
    Background
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
