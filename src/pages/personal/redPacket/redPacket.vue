<template>
  <div class="redPacketConent">
    <header-Top title="我收到的红包" :redCol="true">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
      <div slot="right" class="selectList">
        <span @click="getTime">{{label}}年 <i class="font_tuina icon-arrow-down"></i></span>
        <div :class="{'show':isShow}" class="liText">
          <ul>
            <li class="bgk" v-for="(item,$index) in options" :value="item.value" :label="item.label"
                @click="getValue(options,$index)">{{item.label}}
            </li>
          </ul>
        </div>
      </div>
    </header-Top>
    <div class="redPacket">
      <div class="redPacketName">
        <span>共收到红包（元）</span>
      </div>
      <div class="totalMoney">
        <span>{{totalMoney}}</span>
      </div>
    </div>
    <div class="list">
      <ui-loadmore
        :pageSize="pageSize"
        :topMethod="loadTop"
        :bottomMethod="loadBottom"
        ref="loadmore" style="height:100%">
        <div class="moneyList clearfix" v-for="(item,idx) in moneyList" :key="idx" slot="item">
          <div class="moneyListCon">
            <p>{{item.userTel}}</p>
            <p class="moneyListTim">
              <span>{{item.date}}</span>
              <span>{{item.time}}</span>
            </p>
          </div>
          <div class="money">{{item.money}}元</div>
        </div>
        <div slot="nomore" class="text-center">没有更多</div>
      </ui-loadmore>
      <!--<div class="empty">-->
      <!--<img src="../../../assets/img/iv_recharge_kong.png" alt="">-->
      <!--<p>暂无红包记录</p>-->
      <!--</div>-->
    </div>

  </div>
</template>

<script>
  import headerTop from '../../../components/head/header'
  import uiLoadmore from '../../../components/uiLoadmore/uiLoadmore'

  export default {
    components: {
      headerTop,
      uiLoadmore
    },
    data() {
      return {
        pageSize: 15,
        totalMoney: '1314.00',
        isShow: true,
        label: '2018',
        options: [
          {label: '2018', value: '1'},
          {label: '2017', value: '2'},
          {label: '2016', value: '3'},
        ],
        moneyList: [
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
          {userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'},
        ]
      }
    },
    methods: {
      getTime() {
        this.isShow = false;
      },
      getValue(options, $index) {
        for (let i = 0; i < options.length; i++) {
          this.index = $index;
          if (this.index == i) {
            this.label = this.options[i].label;
          }
        }
        this.isShow = true;
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.moneyList = [];
          for (let i = 0; i < this.pageSize.length; i++) {
            this.moneyList.push({userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'})
            console.log(this.moneyList);
          }
          this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        // 加载更多数据
        setTimeout(() => {
          if (this.moneyList.length > 40) {
            this.$refs.loadmore.onAllLoadChange(true);
          } else {
            let arr = []
            for (let i = 0; i < this.pageSize; i++) {
              arr.push({userTel: '122222222', date: '2018-02-08', time: '21:12:00', money: '233'})
            }
            this.moneyList = this.moneyList.concat(...arr)
            //若当前页数据少于 每页数量则 没有更多数据
            this.$refs.loadmore.onAllLoadChange(arr.length < this.pageSize ? true : false);
          }

          this.$refs.loadmore.onBottomLoaded();
        }, 500)
      }
    }
  }
</script>

<style scoped lang="scss">
  .redPacketConent {
    background: url("../../../assets/img/bghongbao.png") no-repeat;
    background-size: 100% 6.03rem;
    background-color: $backgroundColor;
    overflow: auto;
    .redPacket {
      .redPacketName {
        text-align: center;
        padding-top: 1.23rem;
        padding-bottom: 0.7rem;
        span {
          color: #FFF8D4;
          font-size: 0.28rem;
        }
      }
      .totalMoney {
        line-height: 1em;
        text-align: center;

        span {
          color: #FDF1B1;
          font-size: 0.9rem;
        }
      }

    }
    .list {
      position: fixed;
      bottom: 0;
      top: 6rem;
      width: 100%;
      .moneyList {
        margin: 0.2rem 0.3rem 0.3rem;
        padding: 0.42rem 0.45rem;
        font-size: 0.16rem;
        background-color: #fff;
        border-radius: 0.1rem;
        .moneyListCon {
          float: left;
          p:nth-child(1) {
            font-size: 0.24rem;
            color: $txtColorPrimary;
          }
          .moneyListTim {
            color: $txtColor;
            font-size: 0.28rem;
            padding-top: 0.1rem;
          }
        }
        .money {
          float: right;
          padding-top: 0.15rem;
          font-size: 0.36rem;
          color: #FF6050;
        }
      }
      .empty {
        margin: 1.1rem 0 0 2.4rem;
        text-align: center;
        img {
          width: 2.64rem;
          height: 2.4rem;
        }
        p {
          font-size: 0.28rem;
          color: $txtColorLight;
          padding-top: 0.45rem;
        }
      }
    }
    /*筛选*/
    .selectList {
      margin-right: .2rem;
      span {
        color: #fff;
        font-size: 0.3rem;
      }
      .show {
        display: none;
      }
      .liText {
        color: #fff;
        font-size: 0.3rem;
        position: relative;
        ul {
          position: absolute;
          top: 0;
          left: 0;

          li {
            padding: 0.1rem 0.3rem;
            background: #FF6050;

          }

        }
      }
    }
  }


</style>
