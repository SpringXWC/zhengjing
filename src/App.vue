<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="page-router"/>
    </transition>
  </div>
</template>

<script>
  import {cookie} from "./assets/base";

  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route'(to, from) {
        this.transitionName = APP.isBack ? 'slide-right' : 'slide-left';
        APP.isBack = false
      }
    },
    mounted() {
      //OS ios APP == 2  android APP == 3
      let osType = this.$route.query.OS
      if (osType) {
        cookie.set('OS', osType)
      }
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
