<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="page-router"/>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    created() {
      let cookie = this.util.cookie
      //OS ios APP == 2  android APP == 3
      let osType = this.$route.query.OS || cookie.get('OS')
      if (osType) {
        cookie.set('OS', osType)
        this.state.BaseData.OS = osType
      }
      //token
      let token = this.$route.query.Token || cookie.get('Token')
      if (token) {
        cookie.set('Token', token)
        this.state.BaseData.Token = token
      }
      //ip
      let ip = cookie.get('IP') || "127.0.0.1"
      if (ip) {
        cookie.set('IP', ip)
        this.state.BaseData.IP = ip
      }

      // 私钥
      this.state.BaseData.secret = '9ol.)P:?3edc$RFV5tgb'

    },
    watch: {
      '$route'(to, from) {
        this.transitionName = APP.isBack ? 'slide-right' : 'slide-left';
        APP.isBack = false
      }
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss" scoped>

  .page-router {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all .3s ease-in-out;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    transform: translate3d(-100%, 0, 0);
  }
</style>
