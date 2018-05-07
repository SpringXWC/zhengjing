<template>
  <div class="ui-page">
    <header-top title="休假申请">
      <router-link to="arrange" slot="left">
        <i class="icon font_tuina icon-back"></i>
      </router-link>
    </header-top>
    <div>
      <div class="ui-cell groove-padd-md" :class="{'text-primary': visible1}" @click="open('picker1')">
        <span>开始时间</span>
        <span v-if="sTime">{{sTime | dateTime}}</span>
        <span v-else class="text-minor">请选择</span>
      </div>
      <div class="ui-cell groove-padd-md" :class="{'text-primary': visible2}" @click="open('picker2')">
        <span>结束时间</span>
        <span v-if="eTime">{{eTime | dateTime}}</span>
        <span v-else class="text-minor">请选择</span>
      </div>
    </div>
    <div class="ui-tips groove-padd-md">
      <div class="ui-title">温馨提示:</div>
      <p>1.已有客人预约时间不能申报请假</p>
      <p>2.紧急情况临时请假请联系人事部</p>
    </div>
    <div class="groove-padd-md fixed-bottom">
      <mt-button type="primary" class="ui-btn-success" :disabled="loading" size="large" @click.native="submit">
        <mt-spinner v-show="loading" :type="3" :size="24" color="#fff" class="spinner"></mt-spinner>
        提交申请
      </mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="startTimeStart"
      :startDate="new Date()"
      :closeOnClickModal="false"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      hour-format="{value} 时"
      minute-format="{value} 分"
      @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      v-model="endTimeStart"
      :closeOnClickModal="false"
      :startDate="sTime || new Date()"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      hour-format="{value} 时"
      minute-format="{value} 分"
      @visible-change="handleVisibleChange"
      @confirm="handleChange"
    >
    </mt-datetime-picker>
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
        startTimeStart: new Date(),
        sTime: null,
        endTimeStart: null,
        eTime: null,
        visible1: false,
        visible2: false,
        loading: false
      }
    },
    filters: {
      dateTime(val) {
        return val ? formatDate(val, 'yyyy年MM月dd日 hh:mm') : ''
      }
    },
    methods: {
      //打开时间选择器
      open(picker) {
        if (picker === 'picker1') {
          this.visible1 = true
          this.startTimeStart = this.sTime || new Date()

        } else if (picker === 'picker2') {
          this.visible2 = true
          this.endTimeStart = this.eTime || this.sTime || new Date()
        }
        this.$refs[picker].open();
      },
      //时间选择器确认
      handleChange(value) {
        if (this.visible1) {
          this.sTime = value
          if (this.eTime && this.sTime > this.eTime) {
            this.eTime = null
          }
          this.endTimeStart = this.sTime
        }
        if (this.visible2) {
          this.eTime = value
        }
      },
      handleVisibleChange(isVisible) {
        if (!isVisible) {
          this.visible1 = false
          this.visible2 = false
        }
      },
      //验证
      validate() {
        if (!this.sTime) {
          Toast({
            message: '请开始选择时间',
            position: 'center',
            duration: 3000
          });
          return false
        }
        if (!this.eTime) {
          Toast({
            message: '请结束选择时间',
            position: 'center',
            duration: 3000
          });
          return false
        }
        if (this.eTime.valueOf() <= this.sTime.valueOf()) {
          Toast({
            message: '结束时间应小于开始时间',
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
          let req = new this.RequestObject({
            begin: this.sTime.valueOf(),
            end: this.eTime.valueOf(),
            DateType: "-1"
          })
          this.loading = true
          this.$http.post(this.state.BaseData.origin + "/504", req.reqData).then((res) => {
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
          }).catch(err => {
            console.log(err)
          })
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

  .ui-tips {
    @include clearfix();
    background: #EDF6EC;
    color: #83C582;
    font-size: .24rem;
    padding-top: .2rem;
    padding-bottom: .2rem;
    p {
      margin-bottom: .1rem;
    }
    .ui-title {
      font-size: .28rem;
      margin-top: .05rem;
      margin-bottom: .15rem;
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
