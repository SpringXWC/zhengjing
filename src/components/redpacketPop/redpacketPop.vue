<template>
  <div :class="{'is-show':show}" @click.self="exit" class="page-model">
    <div class="redPacketPop">
      <img src="../../assets/img/iv_hongbao.png" alt="" class="hongbao">
      <router-link to="redpacketItem" class="chaihongbao">
        <img src="../../assets/img/iv_hongbao_chai.png" alt="" >
      </router-link>
      <i class="font_tuina icon-popup-close" @click="exit"></i>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      exit() {
        this.show = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-model {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    text-align: center;
    background: rgba(0,0,0,.5);
    .redPacketPop {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .hongbao{
      width: 6.57rem;
        margin-bottom: .5rem;
    }
    .icon-popup-close{
      margin-top: .5rem;
      font-size: 0.7rem;
      color: #fff;

    }
    .chaihongbao {
      position: absolute;
      top: 3.95rem;
      left: 0;
      width: 100%;
      img {
        width: 2rem;
      }
    }
  }

  .is-show {
    display: none;
  }
</style>
