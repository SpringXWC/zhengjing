<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['value']
  }
</script>
<style lang="scss">
  .tabbar {
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 1.18rem;
    overflow: hidden;
    background-color: #fff;
    z-index: 9;
  }

</style>
