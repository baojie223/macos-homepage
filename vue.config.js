const { geekblue } = require('@ant-design/colors')

const colorVars = geekblue.reduce((prev, curr, i) => {
  return `${prev} $geekblue-${i + 1}: ${curr};`
}, '')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import './src/styles/element-variables.scss'; ${colorVars}`
      }
    }
  },
  proxy: {
    
  }
}
