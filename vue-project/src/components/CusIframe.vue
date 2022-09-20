<template>
  <div class="react-iframe">
    <iframe ref="iframe" :src="base"></iframe>
  </div>
</template>

<script>
import { SUB_APP_BASIC_PATH_MAP } from '../const/iframes'
const NODE_ENV = process.env.NODE_ENV

const MESSAGE_TYPE = {
  ROUTER: 'ROUTER'
}

export default {
  name: 'CusIframe',
  data () {
    return {
      path: '',
      base: NODE_ENV === 'development' ? `//localhost:1314${SUB_APP_BASIC_PATH_MAP.REACT}` : SUB_APP_BASIC_PATH_MAP.REACT
    }
  },

  watch: {
    '$route': {
      handler () {
        this.getSubPath()
        if (this.path) {
          // 监听路由的改变，通知子应用切换页面
          this.$nextTick(() => {
            this.$refs.iframe.contentWindow.postMessage({
              type: MESSAGE_TYPE.ROUTER,
              data: {
                path: `${SUB_APP_BASIC_PATH_MAP.REACT}${this.path}`
              }
            }, '*')
          })
        }
      }
    }
  },

  mounted () {
    this.getSubPath()
    if (this.path) {
      this.$refs.iframe.contentWindow.location.replace(`${this.base}${this.path}`)
      window.addEventListener('message', this.getMessage)
    }
  },

  methods: {
    getMessage (m) {
      const { type } = m.data
      switch (type) {
        case MESSAGE_TYPE.ROUTER:
          break
        default:
          break
      }
    },

    getSubPath () {
      const { path } = this.$route
      this.path = path && path.split('react').length ? path.split('react')[1] : ''
    }
  },

  beforeDestory () {
    window.removeEventListener('message', this.getMessage)
  }
}
</script>

<style lang="less" scoped>
  .react-iframe {
    iframe {
      border: 0;
      width: 100%;
      min-height: 79vh;
    }
  }
</style>