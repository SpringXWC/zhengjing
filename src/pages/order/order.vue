<template>
  <div class="order">
    <header-Top title="预约订单">

    </header-Top>
    <ui-loadmore :pageSize="pageSize"
                 :topMethod="loadTop" :bottomMethod="loadBottom"
                 ref="loadmore" class="loadmore">
      <div class="order-demo" @click="pushto()" v-for="item in orderlist" slot="item">
        <div class="shop-name">{{item.name}}</div>
        <hr/>
        <div class="phone-times">
          <span>{{item.tellnum}}</span>
          <span>我服务过{{item.number}}次</span>
        </div>
        <div class="subscribe">
          <span>预约时间：</span>
          <span>{{item.times}}</span>
        </div>
        <div class="num-people">
          <span>客人:</span>
          <span>{{item.mub}}位</span>

        </div>
      </div>
      <div slot="nomore" class="text-center">没有更多</div>
    </ui-loadmore>
  </div>
</template>

<script>

  import headerTop from '../../components/head/header'
  import UiLoadmore from "../../components/uiLoadmore/uiLoadmore";

  export default {
    components: {
      UiLoadmore,
      headerTop,
    },
    data() {
      return {
        pageSize: 5,
        orderlist: [
          {tellnum: "13227121484", number: "2", times: "2017-12-28 20:54 - 22:50", mub: "5", name: "宝安海雅店"},
          {
            tellnum: "13227121484",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "15",
            name: "西乡海雅店",
            state: "已完成"
          },
          {
            tellnum: "13227122284",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "5",
            name: "固戍海雅店",
            state: "已完成"
          },
          {
            tellnum: "13227121484",
            number: "3",
            times: "2017-12-28 20:54 - 22:50",
            mub: "66",
            name: "南山海雅店",
            state: "已完成"
          },
          {
            tellnum: "18871214845",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "5",
            name: "海南海雅店",
            state: "已完成"
          },

        ],
      }
    },
    methods: {

      pushto() {
        this.$router.push("/orderItem")
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {

          this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        // 加载更多数据
        setTimeout(() => {

          this.$refs.loadmore.onBottomLoaded();
        }, 500)
      }
    }
  }
</script>

<style scoped lang="scss">
  .order {
    background: #F5FAF5;
    height: 100%;

  }

  .loadmore {
    top: 1.10rem;
    position: fixed;
    overflow: auto;
    bottom: 1.18rem;

  }

  .order-demo {
    width: 6.9rem;
    margin-left: 0.3rem;
    margin-top: 0.29rem;
    margin-bottom: 0.25rem;
    border-radius: 0.1rem;
    background: #FFFFFF;
    .shop-name {
      font-size: 0.3rem;
      color: #101010;
      padding-top: 0.3rem;
      margin-left: 0.3rem;
    }
    hr {
      margin-left: 0.14rem;
      border: 0.01rem solid #EFEFEF;
      opacity: 0.2;
      margin-top: 0.29rem;
    }
    .phone-times {
      margin-top: 0.3rem;
      font-size: 0.3rem;
      span {
        font-family: arial;
        margin-left: 0.3rem;
      }
      span:nth-of-type(1) {

        color: #83C582;
      }
    }
    .subscribe {
      margin-top: 0.35rem;
      margin-left: 0.3rem;
      span {
        font-size: 0.28rem;
        color: #B4B5B5;
      }
      span:nth-of-type(2) {
        color: #203736;
      }
    }
    .num-people {
      margin-top: 0.31rem;
      margin-left: 0.3rem;
      padding-bottom: 0.4rem;
      span {
        font-size: 0.28rem;
        color: #B4B5B5;
      }
      span:nth-of-type(2) {
        color: #203736;
      }

    }

  }


</style>
