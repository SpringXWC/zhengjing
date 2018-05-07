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
        <p>{{MonthIncome}}</p>
      </div>
      <div class="currentAmount">
        <p>本月订单（单）</p>
        <p>{{MonthCount}}</p>
      </div>
    </div>
    <div class="firstCol" v-show="incomeList">
      <ui-loadmore
        :pageSize="pageSize"
        :topMethod="loadTop"
        :bottomMethod="loadBottom"
        ref="loadmore" style="height:100%">
        <div class="income" v-for="item in list" slot="item">
          <div class="incomelist" :style="{'width':item.width}">
            <div class="clearfix">
              <div class="incomelist-time">{{item.CreateTime}}</div>
              <div class="incomelist-money">{{item.OrderAmount}}</div>
            </div>
          </div>
        </div>
      </ui-loadmore>
    </div>
    <ui-Empty v-show="!incomeList" text="暂无收入记录"></ui-Empty>
  </div>
</template>

<script>
  import headerTop from "../../../components/head/header"
  import uiLoadmore from '../../../components/uiLoadmore/uiLoadmore'
  import uiEmpty from '../../../components/empty/empty'

  export default {
    components: {
      headerTop,
      uiLoadmore,
      uiEmpty
    },
    data() {
      return {
        incomeList: true,
        type: 2,
        pageSize: 15,
        MonthIncome: null,
        MonthCount: null,
        list: []
      }
    },
    created() {
        this.MonthIncome = this.$route.query.MonthIncome, //本月收入
        this.MonthCount = this.$route.query.MonthCount, //本月订单量
        this.getIncomeWeeks();
        // if(this.MonthCount == "" || 0){
        //   this.incomeList =false;
        // }
    },
    mounted() {

    },
    methods: {
      // 获取数据
      getIncomeWeeks() {
        let req = new this.RequestObject({
          PageIndex: 1,
          PageSize: 15
        })
        this.$http.post(this.state.BaseData.origin + "/510", req.reqData).then((res) => {
          req.handleException(res.data)
          console.log(res.data)
          res.data.Result = [
            {
              width:"70%",
              CreateTime:'2016/02/08',
              OrderAmount:'230.00',
            }, {
              CreateTime:'2016/02/08',
              OrderAmount:'230.00',
            }, {
              CreateTime:'2016/02/08',
              OrderAmount:'230.00',
            }, {
              CreateTime:'2016/02/08',
              OrderAmount:'230.00',
            },
          ]
          // let arr = []
          // for (let j = 0; j < res.data.Result.length; j++) {
          //   arr.push(res.data.Result[j].OrderAmount);
          // }
          // let maxOrderAmount = Math.max(...arr)
          //
          // for (let i = 0; i < res.data.Result.length; i++) {
          //   res.data.Result[i].CreateTime = this.util.formatDate(new Date(res.data.Result[i].CreateTime), "yyyy/MM/dd")
          //   res.data.Result[i].OrderAmount = res.data.Result[i].OrderAmount.toFixed(2);
          //   let width = (res.data.Result[i].OrderAmount / maxOrderAmount) * 100 - 10
          //   res.data.Result[i].width = (width <= 42 ? 42 : width) + '%'
          // }

          this.list = res.data.Result
        })
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.PageIndex = 1;
          this.getIncomeWeeks();
          this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        // 加载更多数据
        setTimeout(() => {
          this.PageIndex++;
          let arr = [];
          for (let i = 0;  this.list < 15; i++) {
            arr.push(this.list[i]);
          }
          this.list =  this.list.concat(...arr)
          if (this.list.length / this.PageIndex <= 15) {
            this.$refs.loadmore.onAllLoadChange(true);// 若数据已全部获取完毕
          }
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
      margin-bottom: 0.6rem;
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
        margin-bottom: 0.2rem;
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
    .empty{
      transform: translate(-50%);
    }
  }
</style>
