<template>
  <div>
    <!--中间内容部分-->
    <router-view/>
    <!--底部tabbar-->
    <div class="is-fixed">
      <tabbar v-model="select">
        <tabbar-item v-for="(item,idx) in tabs" :id="item.id" isRouter :key="idx">
          <i class="icon font_tuina" :class="item.icon" slot="icon-normal"></i>
          {{item.name}}
        </tabbar-item>
      </tabbar>
    </div>

  </div>
</template>
<script>
  import tabbar from '../components/tabBar/tabBar';
  import tabbarItem from '../components/tabBar/tabBarItem';

  export default {
    components: {
      tabbar,
      tabbarItem,
    },
    data() {
      return {
        select: 'schedule',
        tabs: [
          {
            id: 'schedule',
            name: "日程",
            icon: 'icon-schedule'
          }, {
            id: 'order',
            name: "订单",
            icon: 'icon-order',
          }, {
            id: 'arrange',
            name: "排班",
            icon:'icon-arrange'
          }, {
            id: 'personal',
            name: "我的",
            icon: 'icon-my'
          },
        ]
      };
    },
    watch: {
      '$route'(to, from) {
        this.updatedSelect()
      }
    },
    methods: {
      //更新选择按钮
      updatedSelect() {
        let pId = this.$route.path.slice(1);
        this.tabs.forEach((val) => {
          if (val.id === pId) {
            this.select = pId
          }
        })
      }
    },
    mounted() {
      this.updatedSelect()
    }
  }
</script>
<style lang="scss" scoped>
  .mint-header .mint-header-title {
    font-size: 0.36rem;
  }
</style>
