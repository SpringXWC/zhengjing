<template>
  <div class="ui-page">
    <header-top title="休假申请">
      <router-link to="arrange" slot="left">
        <i class="icon font_tuina icon-back"></i>
      </router-link>
    </header-top>
    <div class="calender">
      <div class="ui-cell groove-padd-md">
        <span class="text-primary">第三周排班</span>
      </div>
      <div class="one-week groove-padd-md">
        <div class="" v-for="item in calender">
          <div class="text-minor">{{item.value | dateWeek}}</div>
          <div class="text-primary">{{item.value | getDate}}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="ui-cell groove-padd-md" :class="{'text-minor': item.disabled}" v-for="(item,idx) in rules"
           @click="toggleSelect(item,idx)">
        <span>{{item.time}}</span>
        <i class="icon font_tuina icon-tick text-primary" v-if="idx === selectRule"></i>
      </div>
    </div>
    <div class="groove-padd-md fixed-bottom">
      <mt-button type="primary" class="ui-btn-success" size="large" @click.native="submit">
        提交申请
      </mt-button>
    </div>

  </div>

</template>

<script>
  import headerTop from '@/components/head/header'
  import {formatDate} from "../../../assets/base"
  import {Toast} from 'mint-ui'

  export default {
    components: {
      headerTop
    },
    data() {
      return {
        startTime: null,
        endTime: null,
        visible1: false,
        visible2: false,
        calender: [
          {value: new Date('2018/4/9')},
          {value: new Date('2018/4/10')},
          {value: new Date('2018/4/11')},
          {value: new Date('2018/4/12')},
          {value: new Date('2018/4/13')},
          {value: new Date('2018/4/14')},
          {value: new Date('2018/4/15')},
        ],
        selectRule: 0,
        rules: [
          {
            time: '早班：10:00 - 22:00',
            disabled: false,
          }, {
            time: '晚班：10:00 - 22:00',
            disabled: true,
          }, {
            time: '通班：10:00 - 22:00',
            disabled: false,
          }
        ]
      }

    },
    filters: {
      dateTime(val) {
        return val ? formatDate(val, 'yyyy年MM月dd日 hh:mm') : ''
      },
      dateWeek(val) {
        return val ? formatDate(val, 'DD') : ''
      },
      getDate(val) {
        return val ? formatDate(val, 'dd') : ''
      }
    },
    methods: {
      //切换选择
      toggleSelect(val, idx) {
        if(val.disabled){
          return
        }
        this.selectRule = idx
      },
      //验证
      validate() {
        if (!this.startTime) {
          Toast({
            message: '请选择时间',
            position: 'center',
            duration: 3000
          });
          return false
        }
        return true
      },
      //提交申请
      submit() {
        if (this.validate()) {
          /*this.$http.post('/', {
            params: {
              time1: this.startTime,
              time2: this.endTime
            }
          }).then(function (res) {
            console.log(res)
          })*/
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .ui-page {
    @include remCalc('font-size', 24px);
    height: 100%;
    overflow-y: auto;
    background-color: #F5FAF5;
  }

  .ui-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height: 1rem;
    font-size: .3rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
    &:first-child {
      margin-top: .5rem;
    }
    &:last-child {
      margin-bottom: .5rem;
    }
  }

  .calender {
    margin-top: .5rem;
    margin-bottom: .5rem;
    line-height: .5rem;
    background: #fff;
    .ui-cell {
      font-size: .36rem;
      border-bottom: .02rem solid #EFEFEF;
    }
    .one-week {
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: .22rem;
      padding-top: .1rem;
      padding-bottom: .3rem;
    }
    .text-primary {
      font-size: .3rem;
    }
  }

  .fixed-bottom {
    position: absolute;
    bottom: .3rem;
    left: 0;
    right: 0;
  }

  .mint-button {
    height: 1.1rem;
    font-size: .4rem;
    border-radius: .1rem;
  }

  .ui-btn-success {
    background: $mainColor;
  }
</style>
