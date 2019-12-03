const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const program = require('commander')
const { template } = require('./template')

const success = log => console.log(chalk.green(log))
const warning = log => console.log(chalk.yellow(log))
const error = log => console.log(chalk.red(log))

program
  .version('0.0.1')
  .option('-c, --comp <type>', 'comp')
  .option('-p, --path <type>', 'path')
  .option('-s, --style <type>', 'css pre-processor')

program.parse(process.argv)

try {
  const comp = program.comp.replace(/[A-Z]/g, (match, i) => {
    if (i === 0) {
      return match.toLowerCase()
    } else {
      return `-${match.toLowerCase()}`
    }
  })
  // const comp = 'shit'
  const url = path.resolve(
    __dirname,
    `../src/${program.path}/${program.comp}.vue`
  )

  if (fs.existsSync(url)) {
    warning(`${url}已存在`)
    return
  }

  const tpl = template(comp, program.style || 'scss')

  fs.writeFile(url, tpl, () => {
    success('创建成功!')
    console.log(program.comp)
  })
} catch(err) {
  error('创建失败, 请传入合法参数')
}
