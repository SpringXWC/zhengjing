<template>
  <div class="evaluateCon">
    <header-Top title="我的评价">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
      <ui-loadmore
        v-show="evaluateList"
        :pageSize="pageSize"
        :topMethod="loadTop"
        :bottomMethod="loadBottom"
        ref="loadmore" style="height:100%">
        <div class="evaluate" v-for="list in lists" slot="item">
          <div class="clearfix">
            <span class="evaluateTime">{{list.OrderTime}}</span>
            <span class="gradeNum">{{list.Score}}分</span>
          </div>
          <div class="telNum">
            {{list.Userid}}
          </div>
          <div class="evaluate-list">
           <div class="evaluateItem evaluateTop">预约门店：{{list.ClubName}}</div>
           <div class="evaluateItem">到店时间 ：{{list.ToStoreTime}}</div>
           <div class="evaluateItem">服务项目 ：{{list.MassageProductName}}</div>
          </div>
        </div>
        <div slot="nomore" class="text-center">没有更多</div>
      </ui-loadmore>
      <ui-Empty v-show="!evaluateList" text="暂无评价记录"></ui-Empty>
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
        evaluateList:true,
        pageSize: 15,
        lists: [
          {
            OrderTime: '2018-02-23 22:00:30',
            Userid: '1555555555',
            Score: '2',
            ClubName: '海雅',
            ToStoreTime: '2018-02-23 22:00:30',
            MassageProductName: '11111111',
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
          // {
          //   time: '2018-02-23 22:00:30',
          //   telNum: '1555555555',
          //   gradeNum: '2',
          //   address: '海雅',
          //   arrive: '2018-02-23 22:00:30',
          //   serve: '11111111',
          // },
          // {
          //   time: '2018-02-23 22:00:30',
          //   telNum: '1555555555',
          //   gradeNum: '2',
          //   address: '海雅',
          //   arrive: '2018-02-23 22:00:30',
          //   serve: '11111111',
          // },
        ]
      }

    },
    mounted() {

    },
    created() {
      this.getEvaluateWeeks();
    },
    methods: {
      getEvaluateWeeks() {
        let req = new this.RequestObject({
          PageIndex: 1,
          PageSize: 15,
        })
        this.$http.post(this.state.BaseData.origin + "/509", req.reqData).then((res) => {
          req.handleException(res.data)
          console.log(res.data)
        })
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
  .evaluateCon {
    height: 100%;
    background-color: $backgroundColor;
    overflow: auto;
    .evaluate {
      margin: 0.3rem 0.3rem;
      background-color: #fff;
      border-radius: 0.1rem;
      padding: 0.5rem 0.5rem;
      line-height: 1em;
      border:0.01rem solid #EFEFEF;
     div{
       .evaluateTime {
         color: $txtColorLight;
         font-size: 0.22rem;
       }
       .gradeNum {
         float: right;
         font-weight: bold;
         font-size: 0.36rem;
         color: $txtColorPrimary;
       }
     }
      .telNum {
          padding-top: 0.3rem;
          font-size: 0.3rem;
          color: $txtColor;

      }


      .evaluate-list{
        padding-top: 0.2rem;
        .evaluateTop {
        }
        .evaluateItem {
          line-height: 1em;
          color: $txtColor;
          font-size: 0.28rem;
          padding-top: 0.3rem;
        }
      }


    }
  }

</style>
