<template>
  <div class="settings">
    <header-Top title="设置">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div class="setting">
      <div class="settingTop">
        <i class="font_tuina icon-logo"></i>
      </div>
      <div class="culture">
        <h2>正经推拿文化</h2>
        <div>
          <p>主张：能祛痛的推拿</p>
          <p>愿景：追寻健康人生</p>
          <p>事业：专业亚健康调养共享平台</p>
          <p>方法：传承祖传按摩推拿</p>
        </div>
        <div class="contact">
          <h2>联系我们</h2>
          <div>
            <p>官方微信：正经推拿亚健康调养</p>
            <p>官方微博：正经推拿亚健康调养</p>
            <p>客服热线：400-200-300</p>
            <p>官方网站：http://www.zhengjingmassage.com</p>
          </div>
        </div>
      </div>
      <div  class="exitSpan" @click="masking">退出账户</div>
    </div>
  </div>
</template>

<script>
  import headerTop from '../../../components/head/header'
  import {nativeIt} from '@/assets/base'
  import { MessageBox } from 'mint-ui';
  export default {
    components: {
      headerTop
    },
    data() {
      return {

      }
    },
    methods: {
      masking() {
        MessageBox.confirm('是否确认退出账户?').then(action => {
          //掉原生应用的退出及清除cookie
          nativeIt.loginOut()
        });
      }
    }
  }

</script>

<style scoped lang="scss">
  .settings {
    background-color: #fff;
    height: 100%;
    overflow: auto;
    .setting {
      .settingTop {
        text-align: center;
        padding-top: 0.7rem;
        .icon-logo{
          color:$txtColorPrimary;
          font-size: 2.2rem;
        }
      }
      .culture {
        padding: 0.75rem 0 0 0.45rem;
        h2 {
          font-size: 0.36rem;
          color:$txtColorPrimary;
          font-weight: normal;
        }
        div {
          padding-top: 0.3rem;
          p {
            font-size: 0.28rem;
            padding-top: 0.1rem;
            color:#294E4F;
            &:first-child{
              padding-top:0;
            }
          }
        }
        .contact{
          padding-top: 0.6rem;
          padding-bottom: 1.05rem;
        }
      }
      .exit {
        text-align: center;
        .mint-popup {
          width: 4rem;
          height: 2rem;
          border-radius: 0.1rem;
          p {
            padding: 0.3rem 0.3rem;
            font-size: 0.24rem;
          }
          .btn {
            padding: 0.2rem 0.3rem;
            text-align: center;
            span {
              padding: 0.2rem 0.7rem;
              width: 0.2rem;
              height: 0.2rem;
              line-height: 0.2rem;
              border: 0.01rem solid #000;
              font-size: 0.16rem;

            }
          }
          .exitImg {
            position: absolute;
            top: 0.1rem;
            right: 0.2rem;
          }
        }
      }
      .exitSpan {
        position: relative;
        bottom:0.3rem;
        height: 1.1rem;
        line-height: 1.1rem;
        width: 92%;
        margin:0 0.3rem;
        text-align: center;
        background-color: #EDF6EC;
        border-radius: 0.05rem;
        color: $txtColorPrimary;
        font-size: 0.4rem;
      }
      }
  }
</style>
