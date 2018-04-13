<template>
  <a href="javascript:void(0)" class="tabbar-item" :class="{'text-primary':isActive,'text-minor': !isActive}"
     @click="goToRouter">
      <span class="tabbar-item-icon">
        <slot name="icon-normal"></slot>
      </span>

    <span class="tabbar-item-text">
        <slot></slot>
      </span>
  </a>

</template>
<script>
  export default {
    props: {
      id: {
        type: String
      },
      isRouter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isActive() {
        if (this.$parent.value === this.id) {
          return true;
        }
      },
    },
    methods: {
      goToRouter() {
        this.$parent.$emit("input", this.id);
        if (this.isRouter) {
          this.$router.push(this.id)
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    transition: color .3s;
    .tabbar-item-icon {
      font-size: .46rem;
    }
    .tabbar-item-text {
      display: block;
      font-size: 0.24rem;
    }
    &.text-minor{
      color: #DCDCDD;
    }
  }
</style>
