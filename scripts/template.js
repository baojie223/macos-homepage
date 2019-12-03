module.exports = {
  template: (name, css = 'scss') =>
    `<template>
  <div class="${name}">
    ${name} 
  </div>
</template>

<script>
export default {
  name: '${name}'
}
</script>

<style lang="${css}" scoped>
.${name} {
  
}
</style>
`
}
