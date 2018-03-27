import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import schedule from '../pages/schedule/schedule'
import order from '../pages/order/order'
import arrange from '../pages/arrange/arrange'
import personal from '../pages/personal/personal'
import client from '../pages/personal/client/client'
import evaluate from '../pages/personal/evaluate/evaluate'
import statement from '../pages/personal/statement/statement'

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
    {path:'/client',component: client},
    {path:'/evaluate',component: evaluate},
    {path:'/statement',component: statement},
  ]
})
