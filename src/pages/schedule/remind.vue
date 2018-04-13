<template>
  <div class="remind">
    <header-Top title="系统消息">
      <router-link to="schedule" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <ui-loadmore
      :topMethod="loadTop" :bottomMethod="loadBottom"
      ref="loadmore" class="loadmore">

      <div class="remind-item" v-for="p in remindlist" slot="item">
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
      </div>

      <div class="remind-items" v-for="p in schedulelist" slot="item">
        <div>{{p.name}}</div>
        <div>{{p.date}}</div>
        <div>{{p.time}}</div>
        <div>{{p.schedule}}</div>
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
      headerTop
    },
    data() {
      return {

        remindlist: [
          {
            name: "上钟提醒",
            tellnum: "159****9205  20分钟后开始服务",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟"
          },
          {
            name: "新预约提醒",
            tellnum: "159****9205",
            shop: "南山海雅百货",
            starttime: "2018-02-25 21:20:00",
            endtime: "2018-02-26 21:00:00",
            project: "失眠头痛/40分钟"
          },

        ],
        schedulelist: [
          {name: "排班审批通过", date: "本周排班", time: "2018/02/24-2018/03/02", schedule: "早班 10:00-22:00"},
          {name: "排班审未批通过", date: "第二周排班", time: "2018/02/24-2018/03/02", schedule: "晚班 10:00-22:00"},
          {name: "请假审批通过", date: "李大帅 于2018/2/23  10:3e0-11:30", time: "请假(调休)已通过审批"},
        ]
      }

    },
    methods: {
      loadTop() {
        // 加载更多数据
        setTimeout(() => {

          // this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
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

<style lang="scss" scoped>
  .loadmore {
    position: fixed;
    bottom: 0;
    top: 1.1rem;
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
    border-radius: 0.1rem;
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
      color: #F6C262;
      padding-top: 0.3rem;
    }
    div:nth-of-type(2) {
      font-size: 0.3rem;
      color: #F6C262;
      padding-bottom: 0.2rem;
      padding-top: 0.1rem;
    }
    div:nth-of-type(6) {
      padding-bottom: 0.25rem;
    }
  }

  .remind-items {
    width: 6.9rem;
    font-size: 0.28rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 0.1rem;
    background: #FFFFFF;
    margin-bottom: 0.2rem;
    div {
      margin-top: 0.25rem;
      margin-left: 0.51rem;
    }
    div:nth-of-type(1) {
      font-size: 0.36rem;
      color: #83C582;
      padding-top: 0.2rem;
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
</style>
