const { geekblue } = require('@ant-design/colors')

const colorVars = geekblue.reduce((prev, curr, i) => {
  return `${prev} $geekblue-${i + 1}: ${curr};`
}, '')

module.exports = {
  devServer: {
    port: 4000,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import './src/styles/element-variables.scss'; ${colorVars} $shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); $radius: 8px;`
      }
    }
  }
}
