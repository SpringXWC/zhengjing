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
    height:1rem;
    line-height: 1rem;
    margin-bottom:0.2rem;
    background-color:#fff;

    .listTitle{
      /*float:left;*/
      position: absolute;
      left:0.2rem;
      color:$txtColor;
      font-size:0.3rem;
    }
    /*.is-right{*/
      /*!*float:right;*!*/
      /*position: absolute;*/
      /*right:0.3rem;*/
    /*}*/
  }
</style>
