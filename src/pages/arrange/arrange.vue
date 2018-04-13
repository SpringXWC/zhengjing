<!--排班-->
<!--suppress ALL -->
<template>
  <div class="ui-page">
    <header-top title="排班休假"></header-top>
    <div class="pg-btns groove-padd-md">
      <router-link to="/scheduleApply" class="btn">
        <mt-button type="primary" size="large">
          <i class="icon font_tuina icon-schedule"></i>&ensp;排班申请
        </mt-button>
      </router-link>
      <router-link to="holiday" class="btn">
        <mt-button type="primary" size="large">
          <i class="icon font_tuina icon-holiday"></i>&ensp;休假申请
        </mt-button>
      </router-link>
    </div>
    <div class="groove-padd-md">

      <div class="list-block ui-clip">
        <img src="./clip.png" class="clip" width="28" alt="">
        <ul class="nav-process groove-marg-md">
          <li class="list-item">
            <div class="text-primary">
              <span class="list-point text-primary"></span>
              <div class="ui-title">
                本周排班
              </div>
              <p class="text-primary">2016/03/03 - 2016/03/09</p>
              <p class="text-primary">晚班 10:00 - 22:00</p>
            </div>
          </li>
          <li class="list-item">
            <div>
              <span class="list-point"></span>
              <div class="ui-title">第二周排班</div>
              <p class="text-minor">2016/03/03 - 2016/03/09</p>
              <p class="text-minor">晚班 10:00 - 22:00</p>
            </div>
          </li>
          <li class="list-item">
            <div>
              <span class="list-point"></span>
              <div class="ui-title">第二周排班</div>
              <p class="text-minor">
                2016/03/03 - 2016/03/09
                <span class="fr text-warn">等待审核</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-block">
        <ul class="nav-process groove-marg-md">
          <li class="list-item">
            <div>
              <span class="list-point"></span>
              <div class="ui-title">
                我的申请
              </div>
              <p class="text-minor">2018/03/01 10:00 - 2018/03/04 22:00</p>
              <p class="text-primary">已通过</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/head/header'

  export default {
    components: {
      headerTop
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .ui-page {
    @include remCalc('font-size', 24px);
    height: 100%;
    padding-bottom: 1.2rem;
    overflow-y: auto;
    background-color: #f0f0f0 // #F5FAF5;
  }

  .mint-button--primary {
    background-color: $mainColor;
  }

  .list {
    line-height: .5rem;
    text-align: center;
  }

  .pg-btns {
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
    margin-bottom: .3rem;
    .btn {
      font-size: .3rem;
      width: pxTorem(334);
    }
    .mint-button {
      height: .9rem;
      font-size: inherit;
      border-radius: .1rem;
    }
  }

  //过程导航
  .nav-process {
    $leftdist: 0.15rem;
    $pointWidth: .1rem;
    $moveDistLeft: -$leftdist - $pointWidth/2;
    $moveDistTop: .16rem;

    @include clearfix();
    border-left: .01rem solid #EFEFEF;
    padding-left: $leftdist;
    .list-item {
      position: relative;
      &:first-child {
        .list-point {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: -$moveDistTop;
            width: $pointWidth;
            height: $moveDistTop;
            background-color: #fff;
          }
        }
      }
    }
    .list-point {
      position: absolute;
      left: $moveDistLeft;
      top: $moveDistTop;
      background: #EFEFEF;
      border-radius: 50%;
      width: $pointWidth;
      height: $pointWidth;
      &.text-primary {
        background-color: $mainColor;
        border-radius: 50%;
      }
    }
  }

  .ui-clip {
    position: relative;
  }

  .clip {
    position: absolute;
    right: .2rem;
    top: -0.12rem;
  }

  .list-block {
    border-radius: .1rem;
    background-color: #fff;
    padding-top: .4rem;
    padding-bottom: .4rem;
    margin-bottom: .2rem;
  }

  .list-item {
    margin-bottom: .4rem;
    line-height: .46rem;
    font-size: .28rem;
    &:last-child {
      margin-bottom: 0;
    }
    .ui-title {
      font-size: .3rem;
      margin-bottom: .12rem;
    }
  }
</style>
