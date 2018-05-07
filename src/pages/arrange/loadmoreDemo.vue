<!--排班-->
<!--suppress ALL -->
<template>
  <div class="ui-page">
    <header-top title="排班休假"></header-top>

    <ui-loadmore
      :pageSize="pageSize"
      :topMethod="loadTop" :bottomMethod="loadBottom"
      ref="loadmore" style="height: 6rem">

      <div slot="item" v-for="(listItem,idx) in list" class="text-center" style="line-height: .5rem">{{listItem}}</div>

    </ui-loadmore>
  </div>
</template>

<script>
  import uiLoadmore from '@/components/uiLoadmore/uiLoadmore'
  import headerTop from '@/components/head/header'

  export default {
    components: {
      headerTop,
      uiLoadmore
    },
    data() {
      return {
        list: [0, 1, 2, 3, 35, 5, 65, 68, 98],
        pageSize: 15,
      }
    },
    methods: {
      loadTop() {
        // 下拉刷新
        setTimeout(() => {
          this.list = []
          for (let i = 0; i < this.pageSize; i++) {
            this.list.push(i)
          }
          this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        // 加载更多数据
        setTimeout(() => {
          if (this.list.length > 40) {
            this.$refs.loadmore.onAllLoadChange(true);// 若数据已全部获取完毕

          } else {
            let arr = []
            for (let i = 0; i < this.pageSize; i++) {
              arr.push(this.list.length + i)
            }
            this.list = this.list.concat(...arr)
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
  .ui-page {
    @include remCalc('font-size', 24px);
    height: 100%;
    padding-bottom: 1.2rem;
    overflow-y: auto;
    background-color: #f0f0f0 // #F5FAF5;
  }

  .mint-button--primary {
    background-color: $mainColor;
  }

  .list {
    line-height: .5rem;
    text-align: center;
  }

</style>
