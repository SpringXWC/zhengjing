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
            <img :src="imgUrl" alt="" >
          </div>
          <div class="message">
            <p class="userName">{{userName}}</p>
            <p class="money">￥{{money}} / 分钟</p>
            <p class="skill">擅长：推拿、足疗、艾灸、刮痧、拔罐</p>
            <p class="grade">评价：{{gradeNum}}分  {{amount}}单</p>
          </div>
        </div>
      </div>
        <div class="personalBot">
          <router-link to="income">
            <span>本月收入：</span>
            <span>￥{{incomeMoney}}</span>
            <span> / </span>
            <span>{{currentAmount}}单</span>
            <i class="font_tuina icon-arrow-right"></i>
          </router-link>
        </div>
      <div class="listTitle">
        <router-link v-for="(list,idx) in lists" :to="list.routerName" :key="idx">
          <personal-List :listTitle="list.title">
            <i class="font_tuina icon-arrow-right" slot="rightBtn"></i>
          </personal-List>
        </router-link>
      </div>
    </div>
    <!--<redpacket-Pop></redpacket-Pop>-->
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
            imgUrl:require('../../assets/images/userImg.png'),
            userName:'李大帅',
            money:'2.5',
            gradeNum:'4.9',
            amount:'6441',
            incomeMoney:'57823.32',
            currentAmount:'113',
            lists:[
              {routerName:'client',title:'我的客户'},
              {routerName:'evaluate',title:'我的评价'},
              {routerName:'statement',title:'我的报表'},
              {routerName:'redPacket',title:'我获得的红包'},
            ]
          }
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
      font-size:0.4rem;
    }
  .personalCon{
     padding:0.3rem 0.3rem 0;
    .personal{
      line-height: 1em;
      border-top-left-radius:0.2rem;
      border-top-right-radius:0.2rem;
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
            margin:0.65rem 0 0 0.3rem;
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
            padding-top: 0.3rem;
            span{
              color:#fff;
              font-size:0.28rem;
            }
          }
          .grade{
            color:#fff;
            font-size:0.24rem;
            padding-top: 0.3rem;
          }
          .skill{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color:#fff;
            font-size:0.24rem;
            padding-top:0.3rem;
          }
        }
      }
    }
    .personalBot{
      height: 1rem;
      line-height: 1rem;
      background-color:#EDF6EC;
      border-bottom-left-radius:0.2rem;
      border-bottom-right-radius:0.2rem;
      padding:0 0.3rem;
      box-shadow:0 0.08rem #DEECDE;
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
        top:0.05rem;
        right:0.3rem;
      }
    }
  }
  }
</style>
