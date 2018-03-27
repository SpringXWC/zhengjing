<template>
    <div>
      <header-Top title="我的报表">
        <router-link to="personal">
          <router-link to="personal" slot="is-left" class="return">
            <img src="../../../assets/images/return.png" alt="" class="returnImg" >
          </router-link>
        </router-link>
      </header-Top>
      <div>我的报表</div>
    </div>
</template>

<script>
  import headerTop from '../../../components/head/header'
    export default {
        components:{
          headerTop
        }
    }
</script>

<style scoped lang="scss">
  .returnImg{
    position: absolute;
    top:0.3rem;
    left:0.3rem;
  }
</style>
