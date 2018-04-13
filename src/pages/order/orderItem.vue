<template>
  <div class="orderitem">
    <header-Top title="订单详情">
      <router-link to="order" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div class="order-state">
      <span>已完成</span>
      <span>订单来源：APP</span>
      <span>共消费15次</span>
    </div>

    <div class="order-item">
      <div class="order-item-num">
        <span>订单号：929292927246328</span>
        <span>已结算</span>
      </div>

      <div class="font-explan">
        <div class="image">
          <img src="../../assets/images/people.png"/>
        </div>
        <div class="explan-item">
          <span>预约门店：南山区店</span>
          <span>开始时间：2018/1/18/14:40</span>
          <span>服务项目：失眠头痛</span>
          <span>服务调理师：张小美  ￥2.5/分钟</span>
          <span>实付： ￥120.00</span>
        </div>
      </div>


    </div>
    <div class="oreder-explan">
      <div class="list">
        <span v-for="(item,index) in itemList" @click="pushto(index)"
              :class="{active:selectedIndex==index}">{{item}}</span>

      </div>

      <div class="describe" v-if="oneshow">
        <span>●</span> 请您在订单开始前5分钟在门口等候客户，准时提供服务。<br/><br/>
        <span>●</span> 请您提前准备号房间及时打开空调22℃ -26℃
      </div>
      <div class="describe" v-if="twoshow">
        <span>●</span> 请准备干黄草、高点、热敷包<br/><br/>
        <span>●</span> 查看客户档案，了解客户喜好和上次差评原因，并做好相应的准备
      </div>
      <div class="describe" v-if="threeshow">
        111111111
      </div>
      <div class="describe" v-if="fourshow">
        222222222
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '../../components/head/header'

  export default {
    components: {
      headerTop
    },
    data() {
      return {
        itemList: ["服务承诺", "服务任务", "调理方案", "查看档案"],
        oneshow: true,
        twoshow: false,
        threeshow: false,
        fourshow: false,
        selectedIndex: ''
      }
    },
    methods: {
      pushto(index) {
        if (index == 0) {
          this.oneshow = true;
          this.twoshow = false;
          this.threeshow = false;
          this.fourshow = false;
          this.selectedIndex = index
        }
        if (index == 1) {
          this.oneshow = false;
          this.twoshow = true;
          this.threeshow = false;
          this.fourshow = false;
          this.selectedIndex = index
        }
        if (index == 2) {
          this.oneshow = false;
          this.twoshow = false;
          this.threeshow = true;
          this.fourshow = false;
          this.selectedIndex = index
        }
        if (index == 3) {
          this.oneshow = false;
          this.twoshow = false;
          this.threeshow = false;
          this.fourshow = true;
          this.selectedIndex = index;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .orderitem {
    background: #F5FAF5;
    overflow-y: hidden;
  }

  .order-state {
    height: 0.9rem;
    background: #EDF6EC;
    span {
      margin-left: 0.6rem;
      font-size: 0.28rem;
      color: #83C582;
      line-height: 0.9rem;
    }
  }

  .order-item {
    width: 6.9rem;
    height: 4.34rem;
    background: #FFFFFF;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    .order-item-num {
      height: 0.89rem;
      border-bottom: 0.01rem solid #F5F5F5;
      span {
        line-height: 0.89rem;
        font-size: 0.3rem;
        color: #203736;
      }
      span:nth-of-type(1) {
        margin-left: 0.3rem;
      }
      span:nth-of-type(2) {
        margin-left: 1.2rem;
        color: #83C582;
      }
    }
    .font-explan {
      margin-top: 0.4rem;
      div {
        float: left;
      }
      .explan-item {
        display: flex;
        flex-direction: column;
        margin-left: 0.3rem;
        span {
          flex: 1;
          margin-bottom: 0.2rem;
          font-size: 0.28rem;
        }
      }
    }
  }

  .oreder-explan {

    height: 100%;
    background: #FFFFFF;
    margin-top: 0.33rem;
    .list {
      border-bottom: 1px solid #F5F5F5;
      span {
        display: inline-block;
        height: 0.89rem;
        margin-left: 0.5rem;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.99rem;
      }
    }
    .describe {
      margin-left: 0.34rem;
      font-size: 0.28rem;
      color: #B4B5B5;
      margin-top: 0.4rem;
      span {
        color: #83C582;
      }
    }
  }

  .active {
    color: #83C582;
    border-bottom: 0.06rem solid #83C582;
  }
</style>
