<!--排班-->
<!--suppress ALL -->
<template>
  <div class="ui-page">
    <header-top title="排班休假"></header-top>
    <div class="pg-btns groove-padd-md">
      <div @click="toScheduleApply" class="btn">
        <mt-button type="primary" size="large">
          <i class="icon font_tuina icon-schedule"></i>&ensp;排班申请
        </mt-button>
      </div>
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
          <li class="list-item" v-for="(item,idx) in weeks">
            <div :class="{'text-primary':idx==0}">
              <span class="list-point" :class="{'text-primary':idx==0}"></span>
              <div class="ui-title" v-if="idx == 0">
                本周排班
              </div>
              <div class="ui-title" v-else>
                第{{textNum[idx+1]}}周排班
              </div>
              <p :class="{'text-minor':item.WorkType == -1}">
                {{item.WorkDate1 | date("yyyy/MM/dd")}} -
                {{item.WorkDate2 | date("yyyy/MM/dd")}}
                <span class="fr text-warn" v-if="item.WorkType == -1">等待审核</span>
              </p>
              <p v-if="item.WorkType != -1">
                {{dateRules[item.WorkType].DateTypeName}}
                {{dateRules[item.WorkType].DateTypeBegin | date("hh:mm")}} -
                {{dateRules[item.WorkType].DateTypeEnd | date("hh:mm")}}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-block" v-if="hasScheduling">
        <ul class="nav-process groove-marg-md">
          <li class="list-item" v-for="(item ,idx) in record" v-if="item.ApplyType == 1">
            <div>
              <span class="list-point"></span>
              <div class="ui-title">
                排班申请
              </div>
              <p class="text-minor">
                {{item.Being | date('yyyy/MM/dd')}} -
                {{item.End | date('yyyy/MM/dd')}}
              </p>
              <p class="text-minor">
                {{dateRules[item.WorkType].DateTypeName}}
                {{dateRules[item.WorkType].DateTypeBegin | date("hh:mm")}} -
                {{dateRules[item.WorkType].DateTypeEnd | date("hh:mm")}}
              </p>
              <p class="text-primary">{{item.IsApprove | auditStatus}}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="list-block" v-if="hasVacation">
        <ul class="nav-process groove-marg-md">
          <li class="list-item" v-for="(item ,idx) in record" v-if="item.ApplyType == 2">
            <div>
              <span class="list-point"></span>
              <div class="ui-title">
                休假申请
              </div>
              <p class="text-minor">
                {{item.Being | date('yyyy/MM/dd hh:mm')}} -
                {{item.End | date('yyyy/MM/dd hh:mm')}}
              </p>
              <p class="text-primary">{{item.IsApprove | auditStatus}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/head/header'
  import {formatDate} from "../../assets/base";

  export default {
    components: {
      headerTop
    },
    data() {
      return {
        weeks: [],
        textNum: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        //休假记录
        record: [],
        //是否有休假申请记录
        hasVacation: false,
        //是否有排班申请记录
        hasScheduling: false,
        //
        dateRules: []
      }
    },
    filters: {
      date(time, str) {
        return time ? formatDate(new Date(time), str) : ''
      },
      auditStatus(val) {
        let str = ""
        switch (val) {
          case 0:
            str = '待审核';
            break;
          case 1:
            str = '已通过';
            break;
          case 2:
            str = '未通过';
            break;
          default:
            str = ""
        }
        return str
      }
    },
    methods: {
      getArrangeWeeks() {
        let req = new this.RequestObject()
        //获取排班类型
        this.$http.post(this.state.BaseData.origin + "/505", req.reqData).then((res) => {
          this.dateRules = res.data.Result

          //获取最近的周排班
          this.$http.post(this.state.BaseData.origin + "/502", req.reqData).then((res) => {
            req.handleException(res.data)
            let week3 = {}
            if (res.data.Basis.Status == 200) {
              let data = res.data.Result
              this.weeks = data
              this.weeks.push({
                "WorkDate": this.weeks[this.weeks.length - 1].WorkDate + 3600 * 1000 * 24 * 7,
                "WorkType": -1
              })
              this.weeks.forEach((val, i, arr) => {
                arr[i].WorkDate1 = val.WorkDate - 3600 * 1000 * 24 * 8
                arr[i].WorkDate2 = val.WorkDate - 3600 * 1000 * 24 * 2
              })
            }

            /*            this.weeks = [{
                          "CreateTime": 1524807765890,
                          "ID": 7,
                          "WorkDate": 1524931200000,
                          "WorkerID": 6,
                          "WorkType": 1
                        }, {
                          "CreateTime": 1524807765890,
                          "ID": 14, "WorkDate": 1525536000000, "WorkerID": 6, "WorkType": 0
                        }]*/

          })

          //获取 最近的排班,休假申请
          this.$http.post(this.state.BaseData.origin + "/511", req.reqData).then((res) => {
            req.handleException(res.data)
            let data = res.data
            if (data.Basis.Status == 200) {
              this.record = data.Result
              this.hasScheduling = this.record.some(val => val.ApplyType == 1)
              this.hasVacation = this.record.some(val => val.ApplyType == 2)
            }
          })
        })
      },
      toScheduleApply() {
        if (!this.weeks.length) {
          return
        }
        this.$router.push({
          path: '/scheduleApply',
          query: {
            startTime: this.weeks[this.weeks.length - 1].WorkDate1
          }
        })
      }
    },
    created() {
      this.getArrangeWeeks()
    }
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
