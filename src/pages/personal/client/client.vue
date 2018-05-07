<template>
  <div class="client">
    <header-Top title="我的客户">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div>
      <mt-navbar v-model="selected" class="clearfix">
        <mt-tab-item v-for="(tab,idx) in tabs" :id="tab.id" :key="idx">
          <p class="tabNum">{{tab.tabNum}}</p>
          <p class="tabMenu">{{tab.tabMenu}}</p>
        </mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item v-for="(item,idx) in ids" :id="item.id" :key="idx" style="height: 100%;">
          <ui-loadmore
            :pageSize="item.pageSize"
            :topMethod="loadTop"
            :bottomMethod="loadBottom"
            ref="loadmore" style="height:100%">
            <div slot="item" v-for="list in item.items" class="clearfix">
              <span>{{list.Userid}}</span>
              <span class="service">我服务过 <i>{{list.Num}}</i>次</span>
              <i class="font_tuina icon-collect" :class="{'isActive':list.CollectFlag}"></i>
            </div>
          </ui-loadmore>
        </mt-tab-container-item>
      </mt-tab-container>
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
        selected: 'client',

        // active: true,
        tabs: [],
        ids: [
          {
            id: 'client',
            allLoaded: false,
            // pageSize: 15,
            items: [
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              // {telNum: "13222222222", Num: '3333'},
              // {telNum: "13222222222", Num: '3333'},
              // {telNum: "13222222222", Num: '3333'},
              // {telNum: "13222222222", Num: '3333'},
            ]
          },
          {
            id: 'collect',
            allLoaded: false,
            // pageSize: 15,
            items: [
              {Userid: "132668315997777", Num: '333355', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              // {telNum: "13222222222", Num: '33'},
              // {telNum: "13222222222", Num: '33'},
              // {telNum: "13222222222", Num: '33'},
              // {telNum: "13222222222", Num: '33'},
              // {telNum: "13222222222", Num: '33'},
            ],
          },
          {
            id: 'cancel',
            allLoaded: false,
            // pageSize: 15,
            items: [
              {Userid: "13266831599000", Num: '3333222', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              {Userid: "13266831599", Num: '3333', CollectFlag: false},
              // {telNum: "13222222222", Num: '3'},
              // {telNum: "13222222222", Num: '3'},
              // {telNum: "13222222222", Num: '2'},
              // {telNum: "13222222222", Num: '4'},
              // {telNum: "13222222222", Num: '1'},
              // {telNum: "13222222222", Num: '6'},
              // {telNum: "13222222222", Num: '8'},
              // {telNum: "13222222222", Num: '4'},
            ],
          },
        ],

      }
    },
    mounted(){

    },
    created() {
      this.getClientWeeks();
    },
    methods: {
      // 请求数据
        getClientWeeks() {
        let req = new this.RequestObject({
          PageIndex:1,
          PageSize:15,
          type:2
        })
        this.$http.post(this.state.BaseData.origin + "/507", req.reqData).then((res) => {
          req.handleException(res.data)
          console.log(res.data)
          this.tabs = [
            {id: 'client', tabMenu: '我的客户', tabNum: res.data.Result.MyClient},
            {id: 'collect', tabMenu: '收藏我', tabNum: res.data.Result.CollectCount},
            {id: 'cancel', tabMenu: '取消收藏', tabNum: res.data.Result.NoCollectCount}
          ]
        })
      },
      currentTabIdx() {
        let i = 0
        switch (this.selected) {
          case 'client':
            i = 0;
            break;
          case 'collect':
            i = 1;
            break;
          case 'cancel':
            i = 2;
            break;
        }
        return i
      },
      loadTop() {
        let i = this.currentTabIdx()
        let list = this.ids[i]
        // 加载更多数据
        setTimeout(() => {
          let arr = []
          for (let idx = 0; idx < 15; idx++) {
            // arr.push({telNum: "13222222222", Num: parseInt(Math.random() * 10)})
          }
          list.items = arr
          this.$refs.loadmore[i].onAllLoadChange(false);// 若数据已全部获取完毕
          this.$refs.loadmore[i].onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        let i = this.currentTabIdx()
        let list = this.ids[i]

        // 加载更多数据
        setTimeout(() => {
          let arr = []
          for (let idx = 0; idx < 15; idx++) {
            // arr.push({telNum: "13222222222", Num: parseInt(Math.random() * 10)})
          }
          list.items = list.items.concat(...arr)
          if (list.items.length > 30) {
            this.$refs.loadmore[i].onAllLoadChange(true);// 若数据已全部获取完毕
          }
          this.$refs.loadmore[i].onBottomLoaded();
        }, 500)
      }
    }
  }
</script>

<style scoped lang="scss">
  .client {
    box-sizing: border-box;
  }

  .mint-navbar {
    padding-top: 0.25rem;
    background-color: #F5FAF5;
  }

  .mint-navbar .mint-tab-item {
    color: $txtColor;
    /*-webkit-tap-highlight-color: rgba(0,0,0,0);*/
  }

  .mint-navbar .mint-tab-item.is-selected {
    background-color: #fff;
    color: $txtColorPrimary;
    border-bottom: 0;
    padding-bottom: 0.65rem;
    border-radius: 0.1rem;

  }

  .tabNum {
    padding-bottom: 0.36rem;
    font-size: 0.36rem;
    font-weight: bold;
  }

  .tabMenu {
    font-size: 0.3rem;
  }

  .mint-tab-container-item {
    padding: 0 0.3rem;

    div{

      padding-bottom: 0.68rem;
        span {
          font-size: 0.28rem;
          color: $txtColor;
          i {
            font-style: normal;
            color: $txtColorPrimary;

          }
        }
        .service {
          padding-left: 0.5rem;
        }
        .icon-collect {
          padding-top:0.05rem;
          float: right;
          color: $txtColorPrimary;
          font-size: 0.36rem;

        }

        .isActive {
          display: none;
        }
      &:first-child{
        padding-top: 0.4rem;
      }
      }
    }




</style>
