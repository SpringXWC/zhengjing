<template>
  <div class="order">
    <header-Top title="预约订单">

    </header-Top>
    <ui-loadmore :pageSize="pageSize" :topMethod="loadTop" :bottomMethod="loadBottom"
                 ref="loadmore" class="loadmore">
      <div class="order-demo"  v-for="item in orderlist" slot="item" :class="{orderDemo:item.state=='未完成',orderDemos:item.state=='已完成'}">
        <div class="shop-name">{{item.name}}</div>

        <div class="phone-times">
          <span>{{item.tellnum}}</span>
          <span>我服务过{{item.number}}次</span>
        </div>
        <div class="subscribe">
          <span>预约时间：</span>
          <span>{{item.times}}</span>
        </div>
        <div class="num-people">
          <span>客人:</span>
          <span>{{item.mub}}位</span>

        </div>
        <div class="state">
           <div class="state-one">
              <div class="state-two"></div>
              <div class="state-text">已完成</div>
           </div>
        </div>
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
      headerTop,
    },
    data() {
      return {
        pageSize: 12,
        PageIndex:1,
        Date:new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate(),
        orderlist: [
          {
            tellnum: "13227121484",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "5",
            name: "宝安海雅店",
            state:"未完成"
          },
          {
            tellnum: "13227121484",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "15",
            name: "西乡海雅店",
            state: "已完成"
          },
          {
            tellnum: "13227122284",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "5",
            name: "固戍海雅店",
            state: "已完成"
          },
          {
            tellnum: "13227121484",
            number: "3",
            times: "2017-12-28 20:54 - 22:50",
            mub: "66",
            name: "南山海雅店",
            state: "已完成"
          },
          {
            tellnum: "18871214845",
            number: "2",
            times: "2017-12-28 20:54 - 22:50",
            mub: "5",
            name: "海南海雅店",
            state: "已完成"
          },

        ],
        orderlistQQ:[],//初始页面接收请求数据
        orderlistPP:[] //定义空数组接收分页请求
      }
    },
    methods: {

      loadTop() {
        // 加载更多数据
        // setTimeout(() => {
        //    this.PageIndex=1;
        //   this.requestHttp();
        //   this.$refs.loadmore.onAllLoadChange(false);// 若数据已全部获取完毕
        //   this.$refs.loadmore.onTopLoaded();
        // }, 1000)
      },
      loadBottom() {
        // 加载更多数据
       // setTimeout(() => {
       //
       //    this.PageIndex++;
       //    console.log(this.PageIndex)
       //    this.requestHttp()
       //
       //    let arr=this.orderlistPP
       //    console.log(this)
       //
       //   // this.orderlistQQ = this.orderlistQQ.concat(...arr)//将获取的当前页的数组拼接到原数组里
       //   if (this.orderlistQQ.length/this.PageIndex<= 12) {
       //     this.$refs.loadmore.onAllLoadChange(true);// 若数据已全部获取完毕
       //   }
       //    this.$refs.loadmore.onBottomLoaded();
       //  }, 500)
      },
      requestHttp(){
        let obj = {
          Query: {
            ChoseDate: new Date(this.Date).valueOf(),
            PageIndex: this.PageIndex,
            PageSize: this.pageSize
          },
          "BaseData": {
            "IP": this.state.BaseData.IP,
            "OS": this.state.BaseData.OS,
            "Sign": "",
            "Token": this.state.BaseData.Token
          }
        }
        obj.BaseData.Sign = this.md5(this.util.paramComputeMD5(obj, this.state.BaseData.secret))
        this.$http.post(this.state.BaseData.origin + "/501", obj).then((res) => {
          this.orderlistPP=res.data;
          console.log(this.orderlistPP)
        })
       }

    },
    mounted(){
      console.log(this.Date)

      let obj = {
        Query: {
          ChoseDate: new Date(this.Date).valueOf(),
          PageIndex: this.PageIndex,
          PageSize: this.pageSize
        },
        "BaseData": {
          "IP": this.state.BaseData.IP,
          "OS": this.state.BaseData.OS,
          "Sign": "",
          "Token": this.state.BaseData.Token
        }
      }
      obj.BaseData.Sign = this.md5(this.util.paramComputeMD5(obj, this.state.BaseData.secret))
      this.$http.post(this.state.BaseData.origin + "/501", obj).then((res) => {
        console.log(res.data)
         this.orderlistQQ=res.data;
      })
    }
  }
</script>

<style scoped lang="scss">
  .order {
    background: #F5FAF5;
    height: 100%;

  }

  .loadmore {
    top: 1.10rem;
    position: fixed;
    overflow: auto;
    bottom: 1.18rem;

  }

  .orderDemo {
    width: 6.9rem;
    position: relative;
    margin-left: 0.3rem;
    margin-top: 0.29rem;
    margin-bottom: 0.25rem;
    border-radius: 0.1rem;
    background: #FFFFFF;
    /*background: #F5FAF5;*/
  }
  .shop-name {
      font-size: 0.3rem;
      color: #101010;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      margin-left: 0.3rem;
      border-bottom: 0.01rem solid #EFEFEF;
  }
  .phone-times {
      margin-top: 0.3rem;
      font-size: 0.3rem;
      span {
        font-family: arial;
        margin-left: 0.3rem;
      }
      span:nth-of-type(1) {

        color: #83C582;
      }
  }
  .subscribe {
      margin-top: 0.35rem;
      margin-left: 0.3rem;
      span {
        font-size: 0.28rem;
        color: #B4B5B5;
      }
      span:nth-of-type(2) {
        color: #203736;
      }
  }
  .num-people {
      margin-top: 0.31rem;
      margin-left: 0.3rem;
      padding-bottom: 0.4rem;
      span {
        font-size: 0.28rem;
        color: #B4B5B5;
      }
      span:nth-of-type(2) {
        color: #203736;
      }

  }


  .orderDemos{
    width: 6.9rem;
    position: relative;
    margin-left: 0.3rem;
    margin-top: 0.29rem;
    margin-bottom: 0.25rem;
    border-radius: 0.1rem;
    background:#FFFFFF;
    opacity: 0.5;
  }
  .state {
    width: 1.2rem;
    height: 1.2rem;
    border: 0.01rem solid #83C582;
    position: absolute;
    right: 5%;
    top: 0.2rem;
    border-radius: 50%;
    display: none;
  }
  .orderDemos>.state{
    width: 1.2rem;
    height: 1.2rem;
    border: 0.01rem solid #83C582;
    position: absolute;
    right: 5%;
    top: 0.2rem;
    border-radius: 50%;
    display: block;
  }
  .state-one {
    width: 1rem;
    height: 1rem;
    border: 0.01rem solid #83C582;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    border-radius: 50%;
    position: relative;
  }
  .state-two{
    width: 0.8rem;
    height: 0.8rem;
    border: 0.01rem solid #83C582;
    border-radius: 50%;
    margin-left: 0.08rem;
    margin-top: 0.08rem;

  }
  .state-text{
    top: 0.32rem;
    width: 0.85rem;
    left: 0.04rem;
    height: 0.3rem;
    text-align: center;
    position: absolute;
    background: white;
    transform: rotate(330deg);
    color: #83C582;
  }




</style>
