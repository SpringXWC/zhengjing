<template>
  <div class="personalSet">
    <!--头部-->
    <header-Top title="个人中心">
      <router-link to="setting" slot="right">
        <i class="font_tuina icon-setting"></i>
      </router-link>
    </header-Top>
    <!--个人资料-->
    <div class="personalCon">
      <div class="personal">
        <div class="personalTop clearfix">
          <div class="userImg">
            <img :src="ImgUrl" alt="" >
          </div>
          <div class="message">
            <p class="userName">{{Name}}</p>
            <p class="money">￥{{UnitPrice}} / 分钟</p>
            <p class="skill">擅长：{{ServeFlag}}</p>
            <p class="grade">
              <span>评价：{{Score}}分</span>
              <span>{{OrderCount}}单</span>
            </p>
          </div>
        </div>
      </div>
      <div class="personalBot" @click="goIncome(MonthIncome,MonthCount)">
          <span>本月订单收入：</span>
          <span>￥{{MonthIncome}}</span>
          <span> / </span>
          <span>{{MonthCount}}单</span>
          <i class="font_tuina icon-arrow-right"></i>
      </div>
      <div class="listTitle">
        <router-link v-for="(list,idx) in lists" :to="list.routerName == 'redPacket'?list.routerName+'?CreateTime='+CreateTime : list.routerName" :key="idx">
          <personal-List :listTitle="list.title" >
            <i class="font_tuina icon-arrow-right" slot="rightBtn"></i>
          </personal-List>
        </router-link>
      </div>
    </div>
    <redpacket-Pop :v-show="redpacketPopShow"></redpacket-Pop>
  </div>

</template>

<script>
  import headerTop from '../../components/head/header'
  import personalList from '../../components/list/personalList'
  import redpacketPop from '../../components/redpacketPop/redpacketPop'
    export default {
        components:{
          headerTop,
          personalList,
          redpacketPop
        },
      data(){
        return{
          redpacketPopShow:true,
          ImgUrl:null,
          Name:null,
          ServeFlag:null,
          UnitPrice:null,
          Score:null,
          OrderCount:null,
          MonthIncome:null,
          MonthCount:null,
          CreateTime:null,
          lists:[
            {routerName:'client',title:'我的客户'},
            {routerName:'evaluate',title:'我的评价'},
            {routerName:'statement',title:'我的报表'},
            {routerName:'redPacket',title:'我获得的红包'},
          ]
        }
      },
      mounted() {
      },
      methods:{
          // 获取数据
        getPersonalWeeks() {
          let req = new this.RequestObject()
          this.$http.post(this.state.BaseData.origin + "/506", req.reqData).then((res) => {
            req.handleException(res.data)
            console.log(res.data)
            this.ImgUrl = res.data.Result.ImgUrl == "" ? require('../../assets/img/iv_default.png'):res.data.Result.ImgUrl;
            this.Name = res.data.Result.Name;
            this.UnitPrice = res.data.Result.UnitPrice;
            // this.ServeFlag = res.data.Result.ServeFlag;
            res.data.Result.ServeFlag ='我的客户我的客户我的客户我的客户我的客户我的客户我的客户我的客户我的客户我的客户我的客户';
            this.ServeFlag = res.data.Result.ServeFlag;
            this.Score = res.data.Result.Score;
            this.OrderCount = res.data.Result.OrderCount;
            this.MonthIncome = res.data.Result.MonthIncome.toFixed(2);
            this.MonthCount = res.data.Result.MonthCount;
            this.CreateTime = this.util.formatDate(new Date(res.data.Result.CreateTime),"yyyy")
          })
        },
        //将本月订单收入两个参数传入incom页面
        goIncome(MonthIncome,MonthCount) {
          this.$router.push({
            path:"/income",
            query:{
              MonthIncome:MonthIncome,
              MonthCount: MonthCount
            }
          })
        },

      },
      created() {
          this.getPersonalWeeks();
      }
    }
</script>

<style scoped lang="scss">

  .personalSet{
    padding-bottom:1.2rem;
    background-color: $backgroundColor;
    height: 100%;
    overflow: auto;
    .icon-setting{
      color:$txtColorPrimary;
      font-size:0.45rem;
    }
  .personalCon{
     padding:0.3rem 0.3rem 0;
    .personal{
      line-height: 1em;
      border-top-left-radius: 0.1rem;
      border-top-right-radius: 0.1rem;
      background-color:$mainColor;
      .personalTop{
        padding-bottom: 0.5rem;
        .userImg{
          width: 1.42rem;
          height: 1.42rem;
          float:left;
          img{
            width: 100%;
            height: 100%;
            border-radius:50%;
            margin:0.42rem 0 0 0.3rem;
            box-sizing: border-box;
            border: 0.04rem solid #fff;
          }
        }
        .message{
          width: 4.8rem;
          margin-left:0.6rem;
          float: left;
          .userName{
            padding-top: 0.5rem;
            color:#fff;
            font-size:0.36rem;
          }
          .money{
            color:#fff;
            font-size:0.28rem;
            padding-top: 0.4rem;
            span{
              color:#fff;
              font-size:0.28rem;
            }
          }
          .grade{
            color:#fff;
            font-size:0.24rem;
            padding-top: 0.3rem;
            span:nth-child(1){
              padding-right:0.2rem;
            }
          }
          .skill{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color:#fff;
            font-size:0.24rem;
            padding-top:0.3rem;
            padding-right: 0.2rem;
          }
        }
      }
    }
    .personalBot{
      height: 1rem;
      line-height: 1rem;
      background-color:#EDF6EC;
      border-bottom-left-radius:0.1rem;
      border-bottom-right-radius:0.1rem;
      padding:0 0.3rem;
      box-shadow: 0rem 0.16rem 0.24rem 0rem rgba(76, 150, 75, 0.12);
      span{
        color:$txtColorPrimary;
        font-size: 0.28rem;
      }
      .icon-arrow-right{
        float: right;
        color:$txtColorPrimary;
        font-size:0.22rem ;
      }
    }

    .listTitle{
      margin-top:0.6rem;
      .icon-arrow-right{
        color:#DCDCDD;
        font-size:0.22rem ;
        position:absolute;
        right:0.3rem;
      }
    }
  }
  }
</style>
