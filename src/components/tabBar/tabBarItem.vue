<template>
    <a href="javascript:void(0)" class="tabbar-item" :class="{'isActive':isActive}" @click="goToRouter">
      <span class="tabbar-item-icon" v-show="!isActive">
        <slot name="icon-normal"></slot>
      </span>
        <span class="tabbar-item-icon" v-show="isActive">
        <slot name="icon-active"></slot>
      </span>
      <span class="tabbar-item-text">
        <slot></slot>
      </span>
    </a>

</template>
<script>
  export default{
    props:{
      id:{
        type:String
      },
       isRouter:{
         type:Boolean,
         default:false
      }
    },
    computed:{
      isActive(){
        if(this.$parent.value === this.id){
          return true;
        }
      },
    },
      methods:{
        goToRouter(){
          this.$parent.$emit("input",this.id);
          if(this.isRouter){
            this.$router.push(this.id)
          }
        }
      },
  }
</script>
<style lang="scss" scoped>
  .tabbar-item{
    flex:1;
    text-align: center;
    .tabbar-item-icon{
      display: block;
      img{
        margin-top:-0.85rem;
        width: 0.48rem;
        height: 0.48rem;
      }
    }
    .tabbar-item-text{
      display: block;
      font-size:0.2rem;
      color:#999;
      margin-top:-0.7rem;
    }
    &.isActive{
      .tabbar-item-text{
        color:#1f87c6;
      }
    }
  }
</style>
