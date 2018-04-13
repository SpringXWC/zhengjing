import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'

import schedule from '../pages/schedule/schedule'//日程安排
import order from '../pages/order/order' //订单
import arrange from '../pages/arrange/arrange'//休假申请
import personal from '../pages/personal/personal' //个人中心

import holiday from '../pages/arrange/holiday/holiday'  //休假申请
import scheduleApply from '../pages/arrange/scheduleApply/scheduleApply'  //排班申请


import client from '../pages/personal/client/client'
import evaluate from '../pages/personal/evaluate/evaluate'
import statement from '../pages/personal/statement/statement'
import redPacket from '../pages/personal/redPacket/redPacket'
import redPacketItem from '../pages/personal/redPacket/redPacketItem/redPacketItem'
import income from '../pages/personal/income/income'
import setting from '../pages/personal/setting/setting'
import orderItem from '../pages/order/orderItem'
import remind from '../pages/schedule/remind'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {path:'/',redirect: 'schedule'},
        {path:'/schedule',component: schedule},
        {path:'/order',component: order},
        {path:'/arrange',component: arrange},
        {path:'/personal',component: personal},
      ]
    },
    {path:'/holiday',component: holiday},
    {path:'/scheduleApply',component: scheduleApply},
    {path:'/client',component: client},
    {path:'/evaluate',component: evaluate},
    {path:'/statement',component: statement},
    {path:'/orderItem',component: orderItem},
    {path:'/redPacket',component: redPacket},
    {path:'/redPacketItem',component: redPacketItem},
    {path:'/income',component:income},
    {path:'/setting',component:setting},
    {path:'/remind',component:remind},


  ]
})
