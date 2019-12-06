<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$db.getItem('bgColor').then(res => {
        console.log(res)
        this.$store.dispatch('settings/setBg', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>