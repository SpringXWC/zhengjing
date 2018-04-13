<template>
  <div class="headerCon">
    <header class="header is-fixed" :class="{'is-redCol':redCol,'is-defaultCol':defaultCol}">
      <div class="headerRutern is-left" @click="back">
        <slot name="left"></slot>
      </div>
      <span class="header-title" v-text="title"></span>
      <div class="headerRutern is-right">
        <slot name="right"></slot>
      </div>
    </header>
  </div>

</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      redCol: {
        type: Boolean,
        default: false
      },
      defaultCol: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      back() {
        APP.isBack = true
      }
    },
    mounted() {
      document.title = this.title;
    }
  }
</script>
<style lang="scss">
  .headerCon {
    padding-bottom: 1.1rem;
    .header {
      display: flex;
      align-items: center;
      height: 1.1rem;
      color: #fff;
      a {
        display: inline-block;
      }
      .headerRutern {
        align-items: stretch;
        position: relative;
        &.is-left {
          flex: 1;
          text-align: left;
          margin-left: 0.1rem;
          .icon-back {
            color: $txtColorPrimary;
            font-size: 0.4rem;
          }
        }
        &.is-right {
          flex: 1;
          text-align: right;
          margin-right: 0.1rem;
        }
        a > .font_tuina {
          padding: .2rem;
        }
      }
      .header-title {
        flex: 4;
        text-align: center;
        font-size: 0.4rem;
        color: #689768;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      &.is-defaultCol {
        background-color: #fff;
      }
      &.is-redCol {
        background-color: #FF6050;
        .header-title{
          flex: 2;
        }
        .header-title {
          color: #fff;
        }
        .is-left {
          font-size: 0.3rem;
          .icon-back {
            color: #fff;
          }
        }
        .is-right {
          font-size: 0.3rem;
          color: #fff;
        }
      }
      &.is-fixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
      }
    }
  }

</style>
