<template>
  <div class="ui-page">
    <header-top title="排班申请">
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
    <div v-if="rules.length">
      <div class="ui-cell groove-padd-md" :class="{'text-minor': item.disabled}" v-for="(item,idx) in rules"
           @click="toggleSelect(item)">
        <div>
          <span>{{ item.DateTypeName }}</span>：
          <span>{{new Date(item.DateTypeBegin) | time}}</span> -
          <span>{{new Date(item.DateTypeEnd) | time}}</span>
        </div>
        <i class="icon font_tuina icon-tick text-primary" v-if="item.ID === selectRule"></i>
      </div>
    </div>
    <div class="groove-padd-md fixed-bottom">
      <mt-button type="primary" class="ui-btn-success" :disabled="loading" size="large" @click.native="submit">
        <mt-spinner v-show="loading" :type="3" :size="24" color="#fff" class="spinner"></mt-spinner>
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
        calender: [],
        selectRule: null,
        //提交loading
        loading: false,
        rules: [
          /*          {
                    ID: 2,
                    DateTypeBegin: new Date(),
                    DateTypeEnd: new Date(),
                    DateTypeName: '早班'
                  },{
                    ID: 3,
                    DateTypeBegin: new Date(),
                    DateTypeEnd: new Date(),
                    DateTypeName: '早班'
                  }*/
        ]
      }
    },
    filters: {
      time(val) {
        return val ? formatDate(val, 'hh:mm') : ''
      },
      dateWeek(val) {
        return val ? formatDate(val, 'DD') : ''
      },
      getDate(val) {
        return val ? formatDate(val, 'dd') : ''
      }
    },
    created() {
      this.getArrangeList()
      //第三周日期数据
      let startTime = this.$route.query.startTime - 0
      startTime = startTime ? new Date(startTime) : new Date()
      for (var i = 0; i < 7; i++) {
        let time = new Date(new Date(startTime.valueOf()).setDate(startTime.getDate() + i))
        let obj = {
          value: time,
        }
        this.calender.push(obj)
      }
    },

    methods: {
      //切换选择
      toggleSelect(val) {
        if (val.disabled) {
          return
        }
        this.selectRule = val.ID
      },
      //提交申请
      submit() {
        if (this.selectRule == undefined) {
          Toast({
            message: '请选择时段',
            position: 'center',
            duration: 3000
          });
          return
        }
        let req = new this.RequestObject({
          begin: this.calender[0].value.valueOf(),
          end: this.calender[this.calender.length - 1].value.valueOf(),
          DateType: this.selectRule
        })
        this.loading = true
        this.$http.post(this.state.BaseData.origin + "/503", req.reqData).then((res) => {
          req.handleException(res.data)
          this.loading = false
          if (res.data.Basis.Status === 200) {
            Toast({
              message: res.data.Basis.Msg,
              position: 'center',
              duration: 2000
            });
            setTimeout(() => {
              this.$router.go(-1)
            }, 3000)
          }
        })

      },
      //获取排班时间数据
      getArrangeList() {
        let request = new this.RequestObject()
        this.$http.post(this.state.BaseData.origin + "/505", request.reqData).then((res) => {
          this.rules = res.data.Result
        })
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

  .spinner {
    vertical-align: middle;
    display: inline-block;
    position: relative;
    margin-top: -3px;
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
