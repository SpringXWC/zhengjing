// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import '../rem/rem'
import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'
import './assets/common/css/base.scss'
import '../node_modules/mint-ui/lib/style.css'


Vue.use(Mint);
Vue.prototype.$http = axios
Vue.config.productionTip = false

window.APP = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//是否后退
APP.isBack = false
