<template>
  <div class="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-sider>
        <div class="logo"/>
        <cus-menu/>
      </a-layout-sider>
      <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '100%', marginTop: '16px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        vue project ©2022 Created by huhu
      </a-layout-footer>
    </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
  components: { CusMenu: () => import('./CusMenu.vue') }
}
</script>

<style lang="less" scoped>
  .basicLayout {
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
</style>
