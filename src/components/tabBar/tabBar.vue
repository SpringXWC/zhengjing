<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props:['value']
  }
</script>
<style lang="scss">
  .tabbar{
    display:flex;
    flex-direction:row;
    position: fixed;
    bottom: 0;
    width: 100%;
    height:0.98rem;
    overflow: hidden;
    background-color: #f6f6f6;

  }
  .tabbar::before{
    content:"";
    display: block;
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    border-top:0.01rem solid #999;
  }
</style>
