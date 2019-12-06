import Vue from 'vue'
import { Button, Input, Icon, Avatar, Dialog, Message, ColorPicker } from 'element-ui'

Vue.use(Button)
  .use(Input)
  .use(Icon)
  .use(Avatar)
  .use(Dialog)
  .use(ColorPicker)

Vue.prototype.$message = Message
