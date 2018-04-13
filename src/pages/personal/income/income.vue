<template>
  <div class="incomeCon">
    <header-Top title="我的收入">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div class="incomeTitle clearfix">
      <div class="money">
        <p>本月收入（元）</p>
        <p>{{incomeMoney}}</p>
      </div>
      <div class="currentAmount">
        <p>本月订单（单）</p>
        <p>{{currentAmount}}</p>
      </div>
    </div>
    <div class="firstCol">
      <ui-loadmore
        :pageSize="pageSize"
        :topMethod="loadTop"
        :bottomMethod="loadBottom"
        ref="loadmore" style="height:100%">
        <div class="income" v-for="item in list" slot="item">
          <div class="incomelist" :style="{'width':item.width}">
            <div class="clearfix">
              <div class="incomelist-time">{{item.date}}</div>
              <div class="incomelist-money">{{item.incomelistMoney}}</div>
            </div>
          </div>
        </div>
        <div slot="nomore" class="text-center">没有更多</div>
      </ui-loadmore>
    </div>
  </div>
</template>

<script>
  import headerTop from "../../../components/head/header"
  import uiLoadmore from '../../../components/uiLoadmore/uiLoadmore'
  export default {
    components: {
      headerTop,
      uiLoadmore
    },
    data() {
      return {
        pageSize:15,
        incomeMoney: '5782.32',
        currentAmount: '113',
        list: [
          {
            width: '50%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
          {
            width: '50%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
          {
            width: '50%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
          {
            width: '60%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
          {
            width: '80%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
          {
            width: '70%',
            date: '2012/03/02',
            incomelistMoney: '132.00'
          },
        ]

      }
    },
    methods:{
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
  .incomeCon {
    background-color: $backgroundColor;
    overflow: auto;
    .incomeTitle {
      border-top: 0.01rem solid #EFEFEF;
      background-color: #fff;
      padding: 0.67rem 1rem;
      color: #294E4F;
      font-size: 0.28rem;
      margin-bottom: 0.4rem;
      .money {
        float: left;
        text-align: center;
        p:nth-child(2) {
          color: $txtColorPrimary;
          font-size: 0.4rem;
          padding-top: 0.3rem;
        }
      }
      .currentAmount {
        float: right;
        text-align: center;
        p:nth-child(2) {
          padding-top: 0.3rem;
          color: $txtColorPrimary;
          font-size: 0.4rem;
        }
      }
    }
    .firstCol {
      .income {
        background-color: #fff;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        .incomelist {
          background-color: $txtColorLight;
          padding: 0.2rem;
          div {
            color: #fff;
            .incomelist-time {
              float: left;
              font-size: 0.28rem;
            }
            .incomelist-money {
              float: right;
              font-size: 0.3rem;
            }
          }
        }
        &:first-child div {
          background-color: $txtColorPrimary;
        }
      }
    }
  }
</style>
