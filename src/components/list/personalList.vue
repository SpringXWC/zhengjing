<template>
    <div class="list">
      <span class="listTitle" v-text="listTitle"></span>
      <slot name="rightBtn"></slot>
    </div>
</template>

<script>
    export default {
        props:{
          listTitle:{
            type:String,
            default:''
          },
        }
    }
</script>

<style scoped lang="scss">
  .list{
    position: relative;
    height:0.7rem;
    line-height: 0.7rem;

    margin-bottom:0.3rem;
    background-color:#1f87c6;

    .listTitle{
      /*float:left;*/
      position: absolute;
      left:0.2rem;
      color:#000;
      font-size:0.16rem;
    }
    /*.is-right{*/
      /*!*float:right;*!*/
      /*position: absolute;*/
      /*right:0.3rem;*/
    /*}*/
  }
</style>
