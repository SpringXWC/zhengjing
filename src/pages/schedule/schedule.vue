<template>
  <div class="schedule">
    <header-Top title="我的日程安排">
      <router-link to="/remind" slot="right">
        <div>
          <i class="icon font_tuina icon-message"></i>
          <div class="icons">8</div>
        </div>
      </router-link>
    </header-Top>
    <div class="calendar">
      <table cellspacing="0">
        <tr>
          <td colspan="7" class="calendar-one" v-for="item in daylist">{{item.year}} 年 {{item.month}} 月</td>

        </tr>
        <tr class="calendar-two">
          <td>六</td>
          <td>日</td>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>

        </tr>
        <tr class="calendar-three">
          <td v-for="(val ,idx) in dayList" v-if="idx<7" @click="pushto(idx,val)" :class="{active:selectIndex==idx,
          lastselect:lastselect==val.date,noselect:noselect>val.date}"><span>{{val.date}}</span><span
            class="today">今</span>
          </td>
        </tr>
        <tr class="calendar-three" style="padding-bottom: 0.2rem">
          <td v-for="(val ,idx) in dayList" v-if="idx>=7" @click="pushto(idx,val)" :class="{active:selectIndex==idx,
          lastselect:lastselect==val.date}">{{val.date}}
          </td>
        </tr>
      </table>
    </div>

    <ui-loadmore :pageSize="pageSize"
                 :bottomMethod="loadBottom"
                 ref="loadmore" class="loadmore">
      <div class="order" slot="item">
        <ul>
          <li v-for="(item,idx) in datalist" :class="{mapselect:mapselect==item.state,setselect:setselect==item.state,
           getselect:getselect==item.state,firstindex:firstindex==idx,lastindex:lastindex==idx}">
            <span>{{item.datetime}}</span>
            <span>{{item.address}}</span>
            <span>{{item.state}}</span>
            <div class="dosh"></div>
            <div class="cover"></div>
          </li>
        </ul>

      </div>

      <div slot="nomore" class="text-center">没有更多</div>
    </ui-loadmore>
  </div>
</template>

<script>
  import headerTop from '../../components/head/header'
  import UiLoadmore from "../../components/uiLoadmore/uiLoadmore";

  export default {
    components: {
      UiLoadmore,
      headerTop
    },
    data() {
      return {
        pageSize: 5,
        datalist: [
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "服务中"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已预约"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"},
          {datetime: "15:30-16:30", address: "南山海雅酒店", state: "已完成"}
        ],
        dayList: [],
        daylist: [],
        selectIndex: '20',
        lastselect: '',
        noselect: '',
        mapselect: '已完成',
        setselect: '服务中',
        getselect: '已预约',
        firstindex: "0",
        lastindex: ''
      }
    },
    computed: {
      address: function () {
        return this.item.address.split(0, 5) + ".."
      }
    },
    methods: {
      getalender() {
        let today = new Date()
        let temp = new Date()
        let first = temp.setDate(today.getDate() - today.getDay() - 1)
        for (var i = 0; i < 14; i++) {
          temp = new Date(first);
          // console.log(temp)
          var time = temp.setDate(temp.getDate() + i)
          var setatime = new Date(time).getDate()
          if (setatime < 10) {
            var setatime = "0" + setatime;
          } else {
            var setatime = setatime
          }
          let day = {
            day: time,
            date: setatime


          }

          this.dayList.push(day);
        }
        this.lastselect = today.getDate();
        this.noselect = today.getDate();
        this.lastindex = this.datalist.length - 1;
      },
      pushto(idx, val) {
        this.selectIndex = idx;
        this.lastselect = ''
        if (val.date == new Date().getDate()) {
          this.lastselect = new Date().getDate()
        }
      },
      loadBottom() {
        // 加载更多数据
        setTimeout(() => {

          this.$refs.loadmore.onBottomLoaded();
        }, 500)
      }

    },
    created() {
      this.getalender()
      var datelist = new Date();
      var d1 = datelist.getFullYear();
      var d2 = datelist.getMonth() + 1;

      let day = {
        year: d1,
        month: d2

      }
      this.daylist.push(day)
    }
  }
</script>

<style scoped lang="scss">
  i {
    position: fixed;
    font-size: 0.5rem;
    color: #83C582;
    right: 0.2rem;
    top: 0.35rem;
  }

  .icons {
    width: 0.29rem;
    height: 0.29rem;
    background: #F6C262;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 0.29rem;
    position: fixed;
    right: 0.48rem;
    top: 0.3rem;
  }

  .today {
    display: none;
    font-size: 0.01rem;

    position: absolute;
    bottom: -0.26rem;
    right: 0.38rem;
    color: white;
  }

  .calendar-one {
    font-family: PingFang-SC-Medium;
    font-size: 0.28rem;
    text-align: center;
    color: #203736;
  }

  table {
    width: 6.86rem;
    height: 3.93rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.32rem;
    tr {
      flex: 1;
      display: flex;
      flex-direction: row;
      td {
        flex: 1;
        text-align: center;
        line-height: 0.88rem;
        position: relative;

      }
    }
  }

  .calendar {
    background: #FFFFFF;
    border-top: 1px solid #E5E5E5;
  }

  .calendar-two {
    font-size: 0.22rem;
    color: #B4B5B5;
  }

  .calendar-three {
    font-size: 0.3rem;
    color: #83C582;
  }

  .loadmore {
    width: 100%;
    position: fixed;
    overflow: auto;
    background: #F5FAF5;
    top: 5.03rem;
    bottom: 1.18rem;

  }

  ul > li {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 1.2rem;
    li:nth-of-type(1) span {
      border-left-color: #795da3;
    }
    span {
      flex: 1;
      font-size: 0.28rem;
      color: #203736;
      margin-left: 0.2rem;
      line-height: 1.2rem;
      text-align: center;

    }
    span:nth-of-type(3) {
      text-align: right;
      margin-right: 5%;
    }
    span:nth-of-type(2) {
      text-overflow: ellipsis;
      white-space: nowrap;

    }
    span:nth-of-type(1) {
      border-left: 0.01rem solid #E5E5E5;
    }
    .dosh {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      position: absolute;
      left: 0.17rem;
      bottom: 0.55rem;
    }
  }

  .firstindex {
    .cover {
      position: absolute;
      background: #F5FAF5;
      width: 0.2rem;
      height: 0.53rem;
      left: 0.1rem;
    }
  }

  .lastindex {
    .cover {
      position: absolute;
      background: #F5FAF5;
      width: 0.2rem;
      height: 0.53rem;
      left: 0.1rem;
      bottom: 0;
    }
  }

  .lastselect {
    color: white;
    background: #83C582;
    border-radius: 50%;
    box-shadow: 0 0 0 0.08rem #CDE8CD;
    .today {
      display: block;
    }
  }

  .active {
    color: white;
    background: #83C582;
    border-radius: 50%;
    box-shadow: 0 0 0 0.08rem #CDE8CD;
    z-index: 10;

  }

  .noselect {
    opacity: 0.3;
  }

  .mapselect {
    span {
      color: #B4B5B5;
    }
    .dosh {
      background: #B4B5B5;
    }
  }

  .setselect {
    span:nth-of-type(3) {
      color: #83C582;
    }
    .dosh {
      background: #83C582;
    }
  }

  .getselect {
    span:nth-of-type(3) {
      color: #83C582;
    }
    .dosh {
      background: #83C582;
    }
  }
</style>
