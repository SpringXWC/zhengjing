<template>
  <div>
    <header-Top title="个人中心">

    </header-Top>
    <div class="personalCon">
      <div class="personal">
        <div class="personalTop clearfix">
          <div class="userImg">
            <img src="../../assets/images/userImg.png" alt="" >
          </div>
          <div class="message">
            <span class="userName">姓名：{{userName}}</span>
            <span class="money">￥{{money}}/分钟</span>
            <p class="skill">擅长调理：推拿、足疗、艾灸、刮痧、拔罐</p>
            <p class="grade">评价：{{gradeNum}}分  {{amount}}单</p>
          </div>
        </div>
        <div class="personalBot">
          <div class="personalBot-l">本月收入</div>
          <div class="personalBot-r">
            <span>￥{{income}}</span>/
            <span>{{currentAmount}}单</span>
          </div>
        </div>
      </div>
      <div class="listTitle">
        <router-link to="client">
          <personal-List listTitle="我的客户">
            <img src="../../assets/images/rightBtn.png" alt="" slot="rightBtn" class="rightBtn">
          </personal-List>
        </router-link>
        <router-link to="evaluate">
          <personal-List listTitle="我的评价">
            <img src="../../assets/images/rightBtn.png" alt="" slot="rightBtn" class="rightBtn">
          </personal-List>
        </router-link>
        <router-link to="statement">
          <personal-List listTitle="我的报表">
            <img src="../../assets/images/rightBtn.png" alt="" slot="rightBtn" class="rightBtn">
          </personal-List>
        </router-link>
      </div>

    </div>

  </div>

</template>

<script>
  import headerTop from '../../components/head/header'
  import personalList from '../../components/list/personalList'
    export default {
        components:{
          headerTop,
          personalList
        },
      data(){
          return{
            userName:'李大帅',
            money:'2.5',
            gradeNum:'4.9',
            amount:'6441',
            income:'57823.32',
            currentAmount:'113'
          }
      }
    }
</script>

<style scoped lang="scss">
  .personalCon{
     padding:0.2rem 0.3rem 0;
    .personal{
      border-radius:0.2rem;
      background-color:#f0f0f0;
      padding-bottom:0.6rem ;
      .personalTop{
        .userImg{
          float:left;
          margin:0.2rem 0.1rem 0.3rem 0.3rem;
           img{
            width:1rem;
             @include remCalc('height', 100px);
            border-radius:50%;
          }
        }
        .message{
          float:left;

          .userName{
            color:#ccc;
            font-size:0.24rem;
          }
          .money{
            color:orangered;
            font-size:0.24rem;
          }
          .grade{
            color:#ccc;
            font-size:0.14rem;
            padding-top: 0.2rem;
          }
          .skill{
            text-overflow: ellipsis;
            color:#ccc;
            font-size:0.20rem;

          }
        }
      }
      .personalBot{
        border-top:0.01rem dashed #ccc;
        margin:0 0.3rem;
        .personalBot-l{
          float:left;
          color:#ccc;
          font-size: 0.24rem;
          margin-top:0.1rem;
        }
        .personalBot-r{
          float:right;
          color:#ccc;
          font-size: 0.24rem;
          margin-top:0.1rem;
        }
      }
    }
    .rightBtn{
      position:absolute;
      top:0.2rem;
      right:0.2rem;
    }
    .listTitle{
      margin-top:0.5rem
    }
  }
</style>
