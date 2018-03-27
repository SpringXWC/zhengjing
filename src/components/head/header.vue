<template>
<!-- 头部 -->
    <header class="header">
      <slot name="is-left"></slot>
      <span class="header-title" v-text="title"></span>
      <slot name="is-right"></slot>
    </header>

</template>
<script>
 export default{
   props:{
    title:{
      type:String,
      default:''
    },
   }
 }

</script>
<style lang="scss" scoped>
 .header{
   display: flex;
   align-items:center;
   height: 0.88rem;
   background-color:$defaultColor;
   .is-left{
     text-align: left;
   }
   .is-right{
     text-align: right;
   }
   .header-title{
        flex:1;
        text-align: center;
        font-size: 0.36rem;
        color:#fff;
     }
 }


</style>
