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
import md5 from 'blueimp-md5'
import util from './assets/base'

Vue.use(Mint);
Vue.prototype.$http = axios
Vue.prototype.md5 = md5
Vue.config.productionTip = false
// 常用方法库
Vue.prototype.util = util

//是否为开发环境
let devEnv = true;

// 全局数据
let state = {
  BaseData: {},
  dev: {}
}
//设置接口 host
state.BaseData.origin = !devEnv ? '192.168.1.6:9002' : ''
// state.BaseData.origin = !devEnv ? 'http://www.zhengjingchina.com' : ''

Vue.prototype.state = state
Vue.prototype.RequestObject = RequestObject

window.APP = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
//是否后退
APP.isBack = false

//请求对象
function RequestObject(params) {
  this.reqData = {
    BaseData: {
      IP: state.BaseData.IP,
      OS: state.BaseData.OS,
      Sign: "",
      Token: state.BaseData.Token
    }
  }
  params && (this.reqData.Query = params)
  this.reqData.BaseData.Sign = md5(util.paramComputeMD5(this.reqData, state.BaseData.secret))

}

//处理错误
RequestObject.prototype.handleException = (res, callback) => {
  //102 登录失效
  if (res.Basis.Status === 102) {
    util.nativeIt.loginOut()
  }
  callback && callback()
}

