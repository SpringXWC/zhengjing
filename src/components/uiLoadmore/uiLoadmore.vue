<template>
  <div class="loadmorebox">
    <mt-loadmore
      :top-method="topMethod" :bottom-method="bottomMethod"
      @bottom-status-change="handleBottomChange" @top-status-change="handleTopChange"
      bottomPullText="上拉加载更多" bottomDropText="释放加载" :topDistance="50"
      :bottom-all-loaded="allLoaded"
      ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'loading'" class="dib">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </span>
        <span>{{topStatus === 'drop'?'释放更新':topStatus === 'loading'?'':'下拉刷新'}}</span>
      </div>
      <div class="list">
        <slot name="item"></slot>
        <div v-show="allLoaded">
          <slot name="nomore">
            <div slot="nomore" class="text-center">没有更多</div>
          </slot>
        </div>
      </div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>-->
        <span v-show="bottomStatus === 'loading'" class="dib">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </span>
        <span>{{bottomStatus === 'drop'?'释放加载更多':bottomStatus === 'loading'?'':'上拉加载更多'}}</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  /**
   * 加载更多 二次封装组件
   */
  export default {
    props: {
      pageSize: {
        type: Number,
        default: 10
      },
      topMethod: {
        type: Function
      },
      bottomMethod: {
        type: Function
      },

    },
    data() {
      return {
        bottomStatus: '',
        topStatus: '',
        allLoaded: false
      }
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      onAllLoadChange(bool) {
        this.allLoaded = bool
      },
      onTopLoaded() {
        this.$refs.loadmore.onTopLoaded();
      },
      onBottomLoaded() {
        this.$refs.loadmore.onBottomLoaded();
      }
    }
  };
</script>

<style scoped lang="scss">
  .loadmorebox {
    overflow-y: auto;
  }

  .mint-loadmore-bottom {
    text-align: center;
    .dib {
      display: inline-block;
    }
    .is-rotate {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      transform: rotate(180deg);
    }
  }
  .mint-loadmore .mint-spinner-triple-bounce > div {
    background-color: #7BC57A !important;
  }

</style>

