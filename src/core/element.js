import Vue from 'vue'
import { Button, Input, Icon, Avatar, Dialog, Message } from 'element-ui'

Vue.use(Button)
  .use(Input)
  .use(Icon)
  .use(Avatar)
  .use(Dialog)

Vue.prototype.$message = Message
