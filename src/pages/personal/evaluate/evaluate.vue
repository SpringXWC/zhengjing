<template>
  <div class="evaluateCon">
    <header-Top title="我的评价">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <ui-loadmore
      :pageSize="pageSize"
      :topMethod="loadTop"
      :bottomMethod="loadBottom"
      ref="loadmore" style="height:100%">
      <div class="evaluate" v-for="list in lists" slot="item">
        <div class="evaluateTime">{{list.time}}</div>
        <div class="clearfix">
          <span class="telNum">{{list.telNum}}</span>
          <span class="gradeNum">{{list.gradeNum}}分</span>
        </div>
        <div class="evaluateItem evaluateTop">预约门店：{{list.address}}</div>
        <div class="evaluateItem">到店时间 ：{{list.arrive}}</div>
        <div class="evaluateItem">服务项目 ：{{list.serve}}</div>
      </div>
      <div slot="nomore" class="text-center">没有更多</div>
    </ui-loadmore>
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
        pageSize: 10,
        lists: [
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
          {
            time: '2018-02-23 22:00:30',
            telNum: '1555555555',
            gradeNum: '2',
            address: '海雅',
            arrive: '2018-02-23 22:00:30',
            serve: '11111111',
          },
        ]
      }

    },
    methods: {
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
  .evaluateCon {
    height: 100%;
    background-color: $backgroundColor;
    overflow: auto;
    .evaluate {
      margin: 0.3rem 0.3rem;
      background-color: #fff;
      border-radius: 0.2rem;
      padding: 0.5rem 0.5rem;
      .evaluateTime {
        color: $txtColorLight;
        font-size: 0.22rem;
      }
      div {
        .telNum {
          padding-top: 0.35rem;
          float: left;
          font-size: 0.3rem;
          color: $txtColor;
        }
        .gradeNum {
          float: right;
          font-weight: bold;
          font-size: 0.36rem;
          color: $txtColorPrimary;
        }
      }
      .evaluateTop {
        padding-top: 0.5rem;

      }
      .evaluateItem {
        line-height: 1em;
        color: $txtColor;
        font-size: 0.28rem;
        padding-top: 0.3rem;
      }
    }
  }

</style>
