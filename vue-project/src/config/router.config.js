import vue from 'vue'
import VueRouter from 'vue-router'
import { SUB_APP_BASIC_PATH_MAP } from '../const/iframes'

const RouteView = {
	name: 'RouteView',
	render: (h) => h('router-view')
}

const routes = [{
  path: '/',
  component: () => import('@/views/Home.vue'),
  meta: { title: '首页', icon: 'area-chart' }
}, {
  path: '/vue',
  meta: { title: 'vue项目', icon: 'pie-chart' },
  component: RouteView,
  children: [
    {
      path: '/vue/page1',
      component: () => import('@/views/Page1.vue'),
      meta: { title: 'vue页面1' }
    }
  ]
}, {
  path: SUB_APP_BASIC_PATH_MAP.REACT,
  meta: { title: 'react项目', icon: 'bar-chart' },
  component: RouteView,
  children: [
    {
      path: `${SUB_APP_BASIC_PATH_MAP.REACT}/page1`,
      component: () => import('@/components/CusIframe.vue'),
      meta: { title: 'react页面1' }
    },
    {
      path: `${SUB_APP_BASIC_PATH_MAP.REACT}/page2`,
      component: () => import('@/components/CusIframe.vue'),
      meta: { title: 'react页面2' }
    }
  ]
}]

vue.use(VueRouter)
const router = new VueRouter({routes})
export { router, routes }
