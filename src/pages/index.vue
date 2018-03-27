
<template>
  <div>
    <!--中间内容部分-->
    <router-view/>
    <!--底部tabbar-->
    <tabbar v-model="select">
      <tabbar-item id="schedule" isRouter>
        <img src="../assets/images/homePage.png" slot="icon-normal">
        <img src="../assets/images/homePage_select.png" slot="icon-active">
        日程
      </tabbar-item>
      <tabbar-item id="order" isRouter>
        <img src="../assets/images/service.png" slot="icon-normal">
        <img src="../assets/images/service_select.png" slot="icon-active">
        订单
      </tabbar-item>
      <tabbar-item id="arrange" isRouter>
        <img src="../assets/images/message.png" slot="icon-normal">
        <img src="../assets/images/message_select.png" slot="icon-active">
        排版
      </tabbar-item>
      <tabbar-item id="personal" isRouter>
        <img src="../assets/images/personal.png" slot="icon-normal">
        <img src="../assets/images/personal_select.png" slot="icon-active">
        我的
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import tabbar from '../components/tabBar/tabBar';
  import tabbarItem from '../components/tabBar/tabBarItem';
  export default{
    components:{
      tabbar,
      tabbarItem,
    },
    data(){
      return{
        select:'schedule'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mint-header .mint-header-title{
    font-size:0.36rem;
  }
</style>
