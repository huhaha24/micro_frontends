<template>
  <a-menu
    mode="inline"
    theme="dark"
    :openKeys="openKeys"
    :selectedKeys="[$route.path]"
    @openChange="openChange"
  >
    <template v-for="item in routes">
      <a-menu-item :key="item.path" v-if="!item.children">
        <router-link :to="item.path">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>

      <a-sub-menu v-else :key="item.path">
        <template slot="title">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </template>
        
        <template v-for="subItem in item.children">
          <a-menu-item :key="subItem.path">
            <router-link :to="subItem.path">{{ subItem.meta.title }}</router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
import { routes } from '@/config/router.config.js'

export default {
  name: 'CusMenu',
  data () {
    return { 
      routes,
      openKeys: []
    }
  },
  methods: {
    openChange (openKeys) {
      this.openKeys = openKeys
    }
  },
  mounted () {
    const params = window.location.hash.split('/')
    if (params.length > 2) {
      this.openKeys = [`/${params[1]}`]
    }
  }
}
</script>

<style>

</style>