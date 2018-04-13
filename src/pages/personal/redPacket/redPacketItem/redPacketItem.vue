<template>
  <div class="redPacketItem">
    <header-Top title="打赏红包" :redCol="true">
      <div slot="left" @click="getBack" class="ui-text">关闭</div>
      <router-link slot="right" to="redPacket" class="record">
        <div>红包记录</div>
      </router-link>
    </header-Top>
    <div class="award">
      <div class="awardName">
        <span>用户评价满意红包（元）</span>
      </div>
      <div class="totalMoney">
        <span>{{totalMoney}}</span>
      </div>
    </div>
    <div class="user">
      <div class="userImg">
        <img :src="imgUrl" alt="">
      </div>
      <p>已存入账户，可直接查看</p>
    </div>
  </div>
</template>

<script>
import headerTop from '../../../../components/head/header'
    export default {
      components:{
        headerTop
      },
      data(){
        return{
          totalMoney:'14.00',
          imgUrl:require('../../../../assets/images/userImg.png')
        }
      },
      methods:{
        getBack(){
          this.$router.back(-1);
        }
      }
    }
</script>

<style lang="scss">
  .redPacketItem{
    background:url("../../../../assets/img/bghongbao.png")no-repeat;
    background-size:100% 6.03rem;
    background-color:$backgroundColor;
    overflow: auto;
    .ui-text {
      margin-left: .2rem;
    }
    .record{
      color:#fff;
      margin-right: .2rem;
    }
    .award{
      .awardName{
        text-align: center;
        padding-top: 1.23rem;
        padding-bottom: 0.7rem;
        span{
          color:#FFF8D4;
          font-size: 0.28rem;
        }
      }
      .totalMoney{
        line-height: 1em;
        text-align: center;
        span{
          color:#FDF1B1;
          font-size: 0.9rem;
        }
      }

    }
    .user{
      text-align: center;
      .userImg{
        position: relative;
          width: 1.7rem;
          height: 1.7rem;
        img{
          position: absolute;
          top:0.75rem;
          left:2.89rem;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      p{
        color:$txtColorLight;
        font-size: 0.28rem;
        padding-top:1.4rem;
      }
    }

  }


</style>
