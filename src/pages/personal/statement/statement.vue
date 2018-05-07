<template>
  <div class="statementContent">
    <header-Top title="我的报表">
      <router-link to="personal" slot="left">
        <i class="font_tuina icon-back"></i>
      </router-link>
    </header-Top>
    <div class="statement" v-for="item in statements" v-show="statementList">
      <div class="statementHead clearfix">
        <span>{{item.statementName}}</span>
        <span>{{item.statementNum}}位技师中排名</span>
      </div>
      <h2>名次：{{item.ranking}}</h2>
      <div class="statementCon">
        <table>
          <tr>
            <td></td>
            <td>{{item.num1}}</td>
            <td>{{item.num2}}</td>
            <td>{{item.num3}}</td>
          </tr>
          <tr>
            <td>{{item.collectNum}}</td>
            <td>{{item.collectNum1}}</td>
            <td>{{item.collectNum2}}</td>
            <td>{{item.collectNum3}}</td>
          </tr>
          <tr>
            <td>{{item.cancelNum}}</td>
            <td>{{item.cancelNum1}}</td>
            <td>{{item.cancelNum2}}</td>
            <td>{{item.cancelNum3}}</td>
          </tr>
          <tr>
            <td>{{item.allNum}}</td>
            <td>{{item.allNum1}}</td>
            <td>{{item.allNum2}}</td>
            <td>{{item.allNum3}}</td>
          </tr>
          <tr class="show">
            <td>{{item.purshase}}</td>
            <td>{{item.purshase1}}</td>
            <td>{{item.purshase2}}</td>
            <td>{{item.purshase3}}</td>
          </tr>
        </table>
      </div>
    </div>
    <ui-Empty v-show="!statementList" text="暂无报表记录"></ui-Empty>
  </div>
</template>

<script>
  import headerTop from '../../../components/head/header'
  import uiEmpty from '../../../components/empty/empty'

  export default {
    components: {
      headerTop,
      uiEmpty
    },
    data() {
      return {
        statementList:true,
        statements: [
          {
            statementName: '收藏报表',
            statementNum: '111',
            ranking: '1',
            num1: '12月',
            num2: '1月',
            num3: '2月',
            collectNum: '收藏数',
            collectNum1: '1111',
            collectNum2: '1111',
            collectNum3: '1111',
            cancelNum: '取消收藏数',
            cancelNum1: '55',
            cancelNum2: '66',
            cancelNum3: '77',
            allNum: '全部',
            allNum1: '88',
            allNum2: '99',
            allNum3: '222',
          },
          {
            statementName: '评价报表',
            statementNum: '111',
            ranking: '1',
            num1: '12月',
            num2: '1月',
            num3: '2月',
            collectNum: '好评数',
            collectNum1: '1111',
            collectNum2: '1111',
            collectNum3: '1111',
            cancelNum: '差评数',
            cancelNum1: '55',
            cancelNum2: '66',
            cancelNum3: '77',
            allNum: '评价总数',
            allNum1: '88',
            allNum2: '99',
            allNum3: '222',
          },
          {
            show: true,
            statementName: '订货渠道',
            statementNum: '111',
            ranking: '1',
            num1: '12月',
            num2: '1月',
            num3: '2月',
            collectNum: '微信',
            collectNum1: '1111',
            collectNum2: '1111',
            collectNum3: '1111',
            cancelNum: '400',
            cancelNum1: '55',
            cancelNum2: '66',
            cancelNum3: '77',
            allNum: '门店',
            allNum1: '88',
            allNum2: '99',
            allNum3: '222',
            purshase: '团购',
            purshase1: '88',
            purshase2: '99',
            purshase3: '222',
          },
          {
            statementName: '回头率报表',
            statementNum: '111',
            ranking: '1',
            num1: '12月',
            num2: '1月',
            num3: '2月',
            collectNum: '好评数',
            collectNum1: '1111',
            collectNum2: '1111',
            collectNum3: '1111',
            cancelNum: '差评数',
            cancelNum1: '55',
            cancelNum2: '66',
            cancelNum3: '77',
            allNum: '评价总数',
            allNum1: '88',
            allNum2: '99',
            allNum3: '222',
          },
          {
            statementName: '流失率报表',
            statementNum: '111',
            ranking: '1',
            num1: '12月',
            num2: '1月',
            num3: '2月',
            collectNum: '好评数',
            collectNum1: '1111',
            collectNum2: '1111',
            collectNum3: '1111',
            cancelNum: '差评数',
            cancelNum1: '55',
            cancelNum2: '66',
            cancelNum3: '77',
            allNum: '评价总数',
            allNum1: '88',
            allNum2: '99',
            allNum3: '222',
          },

        ]
      }
    },
    methods: {}


  }
</script>

<style scoped lang="scss">
  .statementContent {
    background-color: $backgroundColor;
    overflow: auto;
    div:nth-child(1) {
      margin-top: 0.1rem;
    }

    .statement {
      margin: 0.2rem 0.3rem 0.2rem 0.3rem;
      padding-bottom: 0.5rem;
      border-radius: 0.1rem;
      background-color: #fff;
      border:0.01rem solid #EFEFEF;

      .statementHead {
        border-bottom: 1px dashed #EFEFEF;
        margin: 0 0.3rem;
        padding: 0.3rem 0;
        span:nth-child(1) {
          color: $txtColor;
          font-size: 0.3rem;
          float: left;
          &:before {
            display: block;
            content: " ";
            height: 0.3rem;
            width: 0.1rem;
            background-color: $txtColorPrimary;
            float: left;
            border-radius: 0.2rem;
            margin-right: 0.2rem;
            margin-top: 0.07rem;
          }
        }
        span:nth-child(2) {
          color: $txtColorLight;
          font-size: 0.24rem;
          float: right;
          padding-top: 0.05rem;
        }
      }
      h2 {
        text-align: center;
        font-size: 0.3rem;
        color: $txtColorPrimary;
        padding: 0.3rem 0;
        font-weight: normal;
      }
      .statementCon {
        padding: 0 0.5rem;


        table {
          border-radius:0.1rem;
          overflow:hidden;
          width: 100%;
          color: $txtColorLight;
          font-size: 0.28rem;
          border: 0.01rem solid #EFEFEF;
          border-collapse: collapse;
          tr {

            td {
              border-bottom: 0.01rem solid #EFEFEF;
              text-align: center;
              &:nth-child(1) {
                width: 2.35rem;
                height: 0.88rem;
                padding-left: 0.3rem;
                text-align: left;
                color: $txtColor;
                /*border-top-left-radius:0.1rem;*/
              }
              /*td:first-child,*/
              /*td:nth-child(2),*/
              /*td:nth-child(3),*/
              /*td:last-child{!*设置table表格每列底部边框*!*/
                /*!*border-bottom: 2px solid #eaeaea;*!*/

              /*}*/

            }
            &:last-child{
              td ,th{
                border-bottom:none;
              }
            }
            &:nth-child(1) {

              color: $txtColor;
            }

          }

        }
      }
    }
  }


</style>
