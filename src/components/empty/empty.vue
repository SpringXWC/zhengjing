<template>
  <div class="empty">
    <img src="../../assets/img/iv_recharge_kong.png" alt="">
    <p v-text="text"></p>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      isshow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  /*无记录*/
  .empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 2.64rem;
      height: 2.4rem;
    }
    p {
      text-align: center;
      font-size: 0.28rem;
      color: $txtColorLight;
      padding-top: 0.45rem;
    }
  }


</style>
