<template>
  <div class="redPacketConent">
    <header-Top title="我收到的红包" :redCol="true">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
      <div slot="right" class="selectList" @click="getValue">
        <span>{{label}}年 <i class="font_tuina icon-arrow-down"></i></span>
      </div>
    </header-Top>
    <div class="redPacket">
      <div class="redPacketName">
        <span>共收到红包（元）</span>
      </div>
      <div class="totalMoney">
        <span>{{TipsAmount}}</span>
      </div>
    </div>
    <div class="list" v-show="redPacketList">
      <ui-loadmore
        :pageSize="pageSize"
        :topMethod="loadTop"
        :bottomMethod="loadBottom"
        ref="loadmore" style="height:100%">
        <div class="moneyList clearfix" v-for="(item,idx) in moneyList" :key="idx" slot="item">
          <div class="moneyListCon">{{item.CreateTime}}</div>
          <div class="money">{{item.Amount}}元</div>
        </div>
      </ui-loadmore>
    </div>
    <ui-Empty v-show="!redPacketList" text="暂无红包记录"></ui-Empty>
    <div :class="{'show':close}">
      <mt-popup
        v-model="showpopup"
        :closeOnClickModal='false'
        position="bottom">
        <div class="popBtn">
          <span class="cancel" @click="cancel">取消</span>
          <span class="confirm" @click="confirm">确定</span>
        </div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
  import headerTop from '../../../components/head/header'
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
        pageSize: 15,
        TipsAmount: null,
        close: true,
        showpopup: false,
        label: null,
        // date: null,
        redPacketList: true,
        slots: [
          {
            selected: 0,
            values: [],
          },
        ],

        moneyList: [
          // {CreateTime: '2018-02-08 21:12:00', Amount: '233'},
          // {CreateTime: '2018-02-08 21:12:00', Amount: '233'},
          // {CreateTime: '2018-02-08 21:12:00', Amount: '233'},

        ]
      }
    },
    created() {
      let date = new Date().getFullYear()
      let time = Number(this.$route.query.CreateTime)
      while (time <= date) {
        this.slots[0].values.unshift(time++);
      }
      if(this.slots[0].values.length == 0){
        this.slots[0].values[0] = new Date().getFullYear()
      }
      this.label = this.slots[0].values[0];
      this.getRedPacketWeeks();
    },
    methods: {
      // 获取数据
      getRedPacketWeeks() {
        let req = new this.RequestObject({
          PageIndex: 1,
          PageSize: 15,
        })
        this.$http.post(this.state.BaseData.origin + "/508", req.reqData).then((res) => {
          req.handleException(res.data)
          console.log(res.data)
          this.TipsAmount = res.data.Result.TipsAmount.toFixed(2);
          // if (this.TipsAmount == 0.00 || "") {
          //   this.redPacketList = false;
          // }
          for (let i = 0; i < res.data.Result.ResponseTechTips.length; i++) {
            res.data.Result.ResponseTechTips[i].CreateTime = this.util.formatDate(new Date(res.data.Result.ResponseTechTips[i].CreateTime), "yyyy/MM/dd  hh:mm:ss")
            res.data.Result.ResponseTechTips[i].Amount = res.data.Result.ResponseTechTips[i].Amount.toFixed(2);
          }
          this.moneyList = res.data.Result.ResponseTechTips
        })
      },
      // 弹窗显示隐藏
      cancel() {
        this.close = true;
      },
      confirm() {
        this.label = this.slots[0].selected;
        this.close = true;
      },
      getValue() {
        this.close = false;
        this.showpopup = true
      },
      onValuesChange(picker, values) {
        this.slots[0].selected = values[0];
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },
      loadTop() {
        // 加载更多数据
        setTimeout(() => {
          this.PageIndex = 1;
          this.getRedPacketWeeks();
          this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        // 加载更多数据
        // let _this = this;
        setTimeout(() => {
          // if (this.moneyList.length > this.pageSize) {
          //   this.$refs.loadmore.onAllLoadChange(true);
          // } else {

          let arr = []
          for (let i = 0; i < this.PageSize; i++) {
            arr.push(this.moneyList[i])
          }
          this.moneyList = this.moneyList.concat(...arr)

          // 若当前页数据少于 每页数量则 没有更多数据
          let flag = this.moneyList.length < this.pageSize ? true : false
          this.$refs.loadmore.onAllLoadChange(flag);

          // }
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
        padding: 0.45rem 0.45rem;
        font-size: 0.16rem;
        background-color: #fff;
        border-radius: 0.1rem;
        z-index: 100;
        .moneyListCon {
          float: left;
          color: $txtColor;
          font-size: 0.28rem;
          padding-top: 0.1rem;
        }
        .money {
          float: right;
          font-size: 0.36rem;
          color: #FF6050;
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
    }
    .empty {
      transform: translate(-50%, 30%);
    }
  }

  /*选择年限弹窗样式*/
  .popBtn {
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px #eaeaea;
    .cancel, .confirm {
      display: inline-block;
      width: 50%;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #26a2ff;
    }
  }

  .show {
    display: none;
  }


</style>
