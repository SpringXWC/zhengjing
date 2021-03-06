/* eslint-disable no-useless-escape */
/**
 * url解析
 * @param url
 * @return {{source: *, protocol: string, host: string, port: string, query: string, params, file: string | *, hash: string, path: string, relative: string | *, segments: string[]}}
 */
function urlParse(url) {
  var a = document.createElement('a')
  a.href = url
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      var ret = {}
      let seg = a.search.replace(/^\?/, '').split('&')
      let len = seg.length
      let i = 0
      let s
      for (; i < len; i++) {
        if (!seg[i]) {
          continue
        }
        s = seg[i].split('=')
        ret[s[0]] = s[1]
      }
      return ret
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [undefined, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [undefined, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  }
}

/**
 * cookie
 * @type {{set: function(*, *=, *), get: function(*), del: function(*)}}
 */
var cookie = {
  set: (cName, value, expiredays) => {
    var exdate = new Date()
    exdate.setTime(exdate.getTime() + expiredays)
    document.cookie = cName + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + '; path=/;'
  },
  get: (name) => {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  },
  del: (name) => {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    document.cookie = name + '=;expires=' + exp.toGMTString() + '; path=/;'
  }
}

/**
 * 时间格式化
 * @param date
 * @param fmt 'yyyy-MM-dd 星期D'
 * @return {*}
 */
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  let weekzh = ['日', '一', '二', '三', '四', '五', '六']
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'D+': date.getDay(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    let str = o[k] + ''
    let flag = new RegExp(`(${k})`).test(fmt)
    if (flag) {
      if (RegExp.$1.indexOf('D') !== -1) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 3) ? week[Number(str)] : (RegExp.$1.length === 2) ? weekzh[Number(str)] : str)
      } else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : str.padStart(2, '0'))
      }
    }
  }
  return fmt
}

//客户端类型 ios = 2 android= 3
const OSTYPE = {
  IOS: 2,
  ANDROID: 3
}

//调用iosAPP接口
function appInterfaceLoadURL(url) {
  var iFrame;
  iFrame = document.createElement("iframe");
  iFrame.setAttribute("src", url);
  iFrame.setAttribute("style", "display:none;");
  iFrame.setAttribute("height", "0px");
  iFrame.setAttribute("width", "0px");
  iFrame.setAttribute("frameborder", "0");
  document.body.appendChild(iFrame);
  // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
  iFrame.parentNode.removeChild(iFrame);
  iFrame = null;
}

let nativeIt = {
  loginOut() {
    let osType = cookie.get('OS')
    if (osType && Number(osType) === OSTYPE.IOS) {
      //ios
      appInterfaceLoadURL("dtt://loginOut")
    } else if (Number(osType) === OSTYPE.ANDROID) {
      //android
      try {
        window.JSInterface.loginOut()
      } catch (err) {
        //错误
        console.log(err)
      }
    }
    cookie.del("OS")
    cookie.del("IP")
    cookie.del("Token")
  }
}

/**
 * @description obj排序的函数
 * @param obj
 * @return {string}
 */
function objKeySort(obj) {
  let newkey = Object.keys(obj).sort();
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  let newObj = {};
  let str = ""
  for (let i = 0; i < newkey.length; i++) {//遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj;//返回排好序的新对象
}

/**
 * @description query参数key(全小写)值排序 => 取所有key对应的 value (value之间用 ^ 分割)
 * @param obj {Object} 请求参数
 * @param str {string} 秘钥
 * @return {String} 返回需要加密的字符串
 */
function paramComputeMD5(obj, str) {
  let data = {}
  for (let key in obj.Query) {
    data[key.toLowerCase()] = obj.Query[key]
  }
  data = objKeySort(data)
  let keys = Object.keys(data)
  let paramStr = ''
  for (let i = 0; i < keys.length; i++) {
    paramStr += data[keys[i]] + (i < keys.length - 1 ? '^' : '')
  }
  paramStr += str
  return paramStr
}

var util = {urlParse, cookie, formatDate, nativeIt, OSTYPE, paramComputeMD5}
export {urlParse, cookie, formatDate, nativeIt, OSTYPE, paramComputeMD5}
export default util
