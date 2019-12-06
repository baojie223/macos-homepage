<template>
  <div class="home">
    <status-bar />
    <background>
      <template v-for="app in activeApps">
        <transition name="scale" :key="app">
          <component :is="app"></component>
        </transition>
      </template>
    </background>
    <app-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { StatusBar, AppBar, Background } from './components'
export default {
  name: 'home',
  components: {
    StatusBar,
    AppBar,
    Background
  },
  computed: {
    ...mapState('app', ['activeApps'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s;
  transform: scale(1);
  transform-origin: 50% 50%;
}
.scale-enter,
.scale-leave-to {
  // transition: all 0.3s;
  // transform: scale(0.01);
  // transform-origin: 50% 50%;
  transform: scale(0);
}
</style>
