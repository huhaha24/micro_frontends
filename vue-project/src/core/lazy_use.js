/**
 * 文件说明：放置需要懒加载的第三方库内容
 */

import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'

import {
  Layout, Menu, Breadcrumb,
  Icon, Button, Modal, Input, Form, Select,
  message
} from 'ant-design-vue'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)

Vue.use(Icon)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Input)
Vue.use(Form)
Vue.use(Select)

Vue.prototype.$message = message

