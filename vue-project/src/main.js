import Vue from 'vue'
import './core/lazy_use' // 第三方库部分内容懒加载
import App from './App.vue'
import { router } from '@/config/router.config.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
