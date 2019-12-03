<template>
  <div class="home">
    <status-bar />
  </div>
</template>

<script>
import { StatusBar } from './components'
export default {
  name: 'home',
  components: {
    StatusBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
