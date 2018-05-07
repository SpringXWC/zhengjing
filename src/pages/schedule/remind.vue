<template>
  <div class="remind">
    <header-Top title="系统消息">
      <router-link to="schedule" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div class="topRem" >
      <div class="topRem-one" @click="pushTO()" :class="{active:selectText=='上钟提醒'}">
          <i class="icon font_tuina icon-work"></i>
          <div ref="loadText">上钟提醒</div>
          <div class="topRem-two" v-if="clockState>0">{{clockState}}</div>
      </div>
      <div class="topRem-one" @click="pushTOO()" :class="{active:selectText=='订单消息'}">
        <i class="icon font_tuina icon-order"></i>
          <div ref="loadTexts">订单消息</div>
          <div class="topRem-two" v-if="clockState>0">{{orederState}}</div>
      </div>
      <div class="topRem-one"  @click="pushTOOO()" :class="{active:selectText=='排班排假'}">
        <i class="icon font_tuina icon-schedule"></i>
          <div ref="loadTextss">排班排假</div>
          <div class="topRem-two" v-if="clockState>0">{{scheduState}}</div>
      </div>


    </div>
    <ui-loadmore
      :topMethod="loadTop" :bottomMethod="loadBottom"
      ref="loadmore" class="loadmore">

      <div class="remind-item" v-for="p in remindlist" slot="item" v-if="oneshow">
        <div>{{p.name}}</div>
        <div>
           <span>{{p.tellnum}}</span><span>{{p.laterStart}}</span>
        </div>
        <div>
          <span class="top">预约门店:</span>
          <span class="bottom">{{p.shop}}</span>
        </div>
        <div>
          <span class="top">订单开始时间:</span>
          <span class="bottom">{{p.starttime}}</span>
        </div>
        <div>
          <span class="top">服务结束时间:</span>
          <span class="bottom">{{p.endtime}}</span>
        </div>
        <div>
          <span class="top">服务项目:</span>
          <span class="bottom">{{p.project}}</span>
        </div>
        <div :class="{changeState:p.state=='未读',changeStates:p.state=='已读'}">{{p.state}}</div>
      </div>

      <div class="remind-item" v-for="p in appointment" slot="item" v-if="twoshow">
        <div>{{p.name}}</div>
        <div>{{p.tellnum}}</div>
        <div>
          <span class="top">预约门店:</span>
          <span class="bottom">{{p.shop}}</span>
        </div>
        <div>
          <span class="top">订单开始时间:</span>
          <span class="bottom">{{p.starttime}}</span>
        </div>
        <div>
          <span class="top">服务结束时间:</span>
          <span class="bottom">{{p.endtime}}</span>
        </div>
        <div>
          <span class="top">服务项目:</span>
          <span class="bottom">{{p.project}}</span>
        </div>
        <div :class="{changeState:p.state=='未读',changeStates:p.state=='已读'}">{{p.state}}</div>
      </div>
      <div class="remind-items" v-for="p in schedulelist" slot="item" v-if="threeshow">
        <div>{{p.name}}</div>
        <div>{{p.date}}</div>
        <div>{{p.time}}</div>
        <div>{{p.schedule}}</div>
        <div :class="{changeState:p.state=='未读',changeStates:p.state=='已读'}">{{p.state}}</div>
      </div>

      <div slot="nomore" class="text-center">没有更多</div>
    </ui-loadmore>
  </div>

</template>

<script>
  import headerTop from '../../components/head/header'
  import UiLoadmore from "../../components/uiLoadmore/uiLoadmore"
  export default {
    components: {
      UiLoadmore,
      headerTop
    },
    data() {
      return {
        remindlist: [
          {
            name: "上钟提醒",
            tellnum: "159****9205",
            laterStart:"20分钟后开始服务",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"未读"
          },
          {
            name: "上钟提醒",
            tellnum: "159****9205",
            laterStart:"20分钟后开始服务",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"未读"
          },
          {
            name: "上钟提醒",
            tellnum: "159****9205",
            laterStart:"20分钟后开始服务",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"已读"
          },
        ],
        appointment:[
          {
            name: "新预约提醒",
            tellnum: "159****9205",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"未读"
          },
          {
            name: "新预约提醒",
            tellnum: "159****9205",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"已读"
          },
          {
            name: "新预约提醒",
            tellnum: "159****9205",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟",
            state:"已读"
          },
        ],
        schedulelist: [
          {name: "排班审批通过", date: "本周排班", time: "2018/02/24-2018/03/02", schedule: "早班 10:00-22:00",state:"未读"},
          {name: "排班审未批通过", date: "第二周排班", time: "2018/02/24-2018/03/02", schedule: "晚班 10:00-22:00",state:"未读"},
          {name: "请假审批通过", date: "李大帅 于2018/2/23  10:3e0-11:30", time: "请假(调休)已通过审批",state:"未读"},
          {name: "请假审批通过", date: "李大帅 于2018/2/23  10:3e0-11:30", time: "请假(调休)已通过审批",state:"已读"},
        ],
        PageIndex:1,
        pageSize:12,
        selectText:'上钟提醒',
        oneshow:true,
        twoshow:false,
        threeshow:false,
        clockState:0,
        orederState:0,
        scheduState:0

      }

    },
    methods: {
      pushTO(){
        this.selectText=this.$refs.loadText.innerText
          this.oneshow=true
        this.twoshow=false
        this.threeshow=false

      },
      pushTOO(){
        this.selectText=this.$refs.loadTexts.innerText
        this.twoshow=true
        this.oneshow=false
        this.threeshow=false
      },
      pushTOOO(){

        this.selectText=this.$refs.loadTextss.innerText
        this.threeshow=true
        this.twoshow=false
        this.oneshow=false
      },
      loadTop() {
        this.PageIndex=1;
        console.log(this.PageIndex)
        // 加载更多数据
        setTimeout(() => {

          // this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        this.PageIndex=this.PageIndex+1;

        // 加载更多数据
        setTimeout(() => {

          this.$refs.loadmore.onBottomLoaded();
        }, 500)
      }
    },
    mounted(){
      let clockArr=[];
      let orederArr=[];
      let scheduleArr=[];
        for(let i=0;i<this.remindlist.length;i++){
          if(this.remindlist[i].state=='未读'){
            clockArr.push(this.remindlist[i].state)

          }
        }
      for(let i=0;i<this.appointment.length;i++){
        if(this.appointment[i].state=='未读'){
          orederArr.push(this.appointment[i].state)

        }
      }
      for(let i=0;i<this.schedulelist.length;i++){
        if(this.schedulelist[i].state=='未读'){
          scheduleArr.push(this.schedulelist[i].state)

        }
      }
        this.clockState=clockArr.length;
        this.orederState=orederArr.length;
        this.scheduState=scheduleArr.length;
        let indexState=this.scheduState+this.orederState+this.clockState;


    }

  }
</script>

<style lang="scss" scoped>
  .loadmore {
    position: fixed;
    bottom: 0;
    top: 3rem;
    overflow: auto;
  }

  .remind {
    background: #F5FAF5;
    height: 100%;
  }

  .remind-item {
    width: 6.9rem;
    font-size: 0.28rem;
    margin-left: 0.3rem;
    margin-top: 0.29rem;
    margin-bottom: 0.3rem;
    border-radius: 0.1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 0.6rem;
    background: #FFFFFF;
    div {
      flex: 1;
      margin-left: 0.51rem;
      .top {
        color: #B4B5B5;
      }
      .bottom {
        margin-left: 0.24rem;
      }
    }
    div:nth-of-type(1) {
      font-size: 0.36rem;
      color: #83C582;
      padding-top: 0.3rem;
    }
    div:nth-of-type(2) {
      font-size: 0.3rem;
      color: #83C582;
      padding-bottom: 0.2rem;
      padding-top: 0.1rem;
      span:nth-of-type(2){
        margin-left: 0.4rem;
      }
    }
    div:nth-of-type(6) {
      padding-bottom: 0.25rem;
    }
  }
  .changeState{
    position: absolute;
    font-size: 0.3rem;
    right: 7%;
    top:0.3rem;
    color: #F6C262;
  }
  .changeStates{
    position: absolute;
    font-size: 0.3rem;
    right: 7%;
    top:0.3rem;
    color: #83C582;
  }
  .remind-items {
    width: 6.9rem;
    font-size: 0.28rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 0.1rem;
    background: #FFFFFF;
    margin-bottom: 0.3rem;
    position: relative;
    div {
     line-height: 0.6rem;
      margin-left: 0.51rem;
    }
    div:nth-of-type(1) {
      font-size: 0.36rem;
      color: #83C582;
      padding-top: 0.3rem;
    }
    div:nth-of-type(2) {
      font-size: 0.3rem;
    }
    div:nth-of-type(3) {
      color: #B4B5B5;
    }
    div:nth-of-type(4) {
      padding-bottom: 0.2rem;
      color: #B4B5B5;
    }
  }
  .topRem{
    height: 2rem;
    display: flex;

    flex-direction: row;
    position: relative;
    div{
      flex:1;
    }
    .topRem-one{
        padding-top: 0.5rem;
        text-align: center;
        color: #B4B5B5;
       i{
         font-size: 0.8rem;
       }
        div{
          font-size: 0.26rem;
        }
       .topRem-two{
          position: absolute;
         color: white;
         background: #F6C262;
         top: 0.6rem;
        margin-left:18%;
         font-size: 0.2rem;
         border-radius: 50%;
         width: 0.4rem;
         height: 0.4rem;
         text-align: center;
         line-height: 0.4rem;
       }
    }
  }
  .active{
     i{
       font-size: 0.8rem;
       color: #83C582;
     }
    div{
      font-size: 0.26rem;
      color: #83C582;
    }
  }
</style>
