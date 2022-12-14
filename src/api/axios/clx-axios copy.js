/*
 * @Author: zhanghui rem486@qq.com
 * @Description: api封装配置
 */
// 全局引入vue-axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'
// import md5 from "js-md5"

Vue.use(VueAxios, axios)
let instance = axios.create()
const Cache = require("@/libs/store").default("localStorage");
import {
  Message,
  Modal
} from 'view-design'

//token
const getToken = () => {
  let user = Cache.get("6ateUser")
  if (!user) {
    return ""
  }
  return user.token || ""
}

// 过期时间
instance.defaults.timeout = 5 * 60 * 1000
instance.defaults.baseURL = $BaseUrl;

let loadRequestCount = 0
const showBtnLoading = () => {
  if (loadRequestCount === 0) store.commit('changeBtnLoading', true)
  loadRequestCount++
}
const hideBtnLoading = () => {
  if (loadRequestCount <= 0) return
  loadRequestCount--
  if (loadRequestCount === 0) setTimeout(() => {
    store.commit('changeBtnLoading', false)
  }, 800)
}

// 请求之前拦截
instance.interceptors.request.use(
  config => {
    return setAccount(config)
  },
  err => {
    // 关闭loading
    // hideBtnLoading()
    return Promise.reject(err)
  }
)
//  响应后拦截

const NETWORK_ERROR = "网络错误"
const NETWORK_ERROR_DATA = {
  data: {
    content: NETWORK_ERROR,
    message: NETWORK_ERROR,
    msg: NETWORK_ERROR,
  },
  type: 'error',
  message: NETWORK_ERROR,
  msg: NETWORK_ERROR
}

const LOGIN_ERROR = "登陆过期"
const LOGIN_ERROR_DATA = {
  data: {
    content: LOGIN_ERROR,
    message: LOGIN_ERROR,
    msg: LOGIN_ERROR,
  },
  type: 'error',
  message: LOGIN_ERROR,
  msg: LOGIN_ERROR
}

instance.interceptors.response.use((response) => {
  let {
    headers,
    data: {
      code,
      msg
    }
  } = response
  if (headers && headers['content-type'] && headers['content-type'].indexOf('application/octet-stream') != -1) {
    //文件流
    return response
  }
  if (code === 403) {
    Vue.prototype.$loading.close();
    store.commit("needRelogin") //重新登陆
    throw new Error("登陆过期")
  } else if (code === 500) {
    Vue.prototype.$loading.close();
    return Promise.reject(NETWORK_ERROR_DATA)
  } else if (code === -101) {
    //登陆过期
    Vue.prototype.$loading.close();
    store.commit("needRelogin") //重新登陆
    throw new Error("登陆过期")
    return Promise.reject(LOGIN_ERROR_DATA)
  } else if (code != 0) {
    if (msg)
      Message.error(msg)
  }
  return getAccount(response)
}, (error) => {
  Vue.prototype.$loading.close();
  if (error.response) {
    if (error.response.status == 403) {
      store.commit("needRelogin") //重新登陆
      throw new Error("登陆过期")

    } else if (error.response.status === 500) {
      return Promise.reject(NETWORK_ERROR_DATA)
    }
    return Promise.reject(error.response)
  } else if (error.request) {
    if (error.request.status == 403) {
      store.commit("needRelogin") //重新登陆
      throw new Error("登陆过期")

    } else if (error.request.status === 500) {
      return Promise.reject(NETWORK_ERROR_DATA)
    }
    return Promise.reject(error)
  } else {
    return Promise.reject(error)
  }

})

//文件流
function axiosFormPostDownloadFile(postData, url) {
  return instance.request({
    url: url,
    data: postData,
    method: 'post',
    responseType: 'blob',
    headers: {
      'responseType': 'blob'
    }
  })
}

//表单提交
function axiosFormPost(postData, url) {
  let formData = new URLSearchParams();
  //参数
  for (let key in postData) {
    formData.append(key, postData[key]);
  }
  return instance.post(url, formData)
}

function axiosFormPostFile(postData, url) {
  let formData = new FormData();
  //参数
  for (let key in postData) {
    formData.append(key, postData[key]);
  }
  let token = getToken();

  formData.append('token', token);

  return instance.request({
    url: url,
    data: formData,
    method: 'post',
    contentType: "multipart/form-data"
  })
}

//加密参数
export const getParams = (params, isGet = false) => {
  let params_ = params
  if (params && typeof params == 'object') {
    params_ = {}
    const keys = Object.keys(params).filter(item => item != 'sign')
    //key映射表
    let keyMap = {}
    let keyMapBox = []
    if (keys.length > 1)
      keys.sort((a, b) => a.length - b.length)
    keys.forEach(key => {
      let value = params[key];
      if (isGet && value != null || !isGet) { //get舍弃值null的参数
        let key_ = key //.toLowerCase() //转小写，用ASCII排序
        keyMap[key_] = {
          key,
          value
        }
        keyMapBox.push(key_)
      }

    })

    keyMapBox = keyMapBox.sort()

    keyMapBox.forEach(key_ => {
      let key = keyMap[key_].key
      let value = keyMap[key_].value
      if (isGet && value || isGet && value === false || isGet && value === 0) {
        value += ""
        value = value.replace(/\s+/g, ""); //get 需要把空格过滤
      }
      if (key)
        params_[key] = value
    })
  }

  let p = (JSON.stringify(params_) + "reyzar")
  // // console.log("加密顺序 == 》", p);
  // return md5(p)
  return p
}


function axiosPost(postData, url) {
  if (!postData) postData = {}
  return instance.request({
    url: url,
    data: postData,
    method: 'post'
  })
}


function axiosGet(postData, url) {
  if (!postData) postData = {}
  return instance.request({
    url: url,
    params: postData,
    method: 'get'
  })
}

async function axiosDelete(postData, url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'DELETE',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(postData), // 数据 必须是字符串
      dataType: 'json', // 期望返回类型 json, xml
      processData: false, // 防止 data 被预处理
      success: function (data) {
        let rData = {
          data: data,
          type: 'success'
        }
        rData.body = data
        resolve(rData)
      },
      error: function (err) {
        reject(err)
      },
    });
  })
}

function download(url, params = {}, filename) {
  Message.warning('导出数据中')
  params.token = getToken();

  // console.log("导出 download === 》", url);
  let sign = getParams(params, true)
  // console.log("《 === download 导出", url);
  params.sign = sign
  return axios.get($BaseUrl + url, {
    params: params,
    responseType: 'arraybuffer',
  }).then((r) => {
    // console.log("r -- ", r);
    const content = r.data
    const blob = new Blob([content], {
      type: 'application/vnd.ms-excel'
    })
    if ('download' in document.createElement('a')) {
      const elink = document.createElement('a')
      elink.download = filename
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
      Message.success('导出成功')
    }

  }).catch((r) => {
    console.error(r);
    Message.error("操作失败")
  })
}

const getP = (data = {}) => {
  let token = getToken()
  data.token = token
  let keys = Object.keys(data)
  let p = "?"
  keys.forEach((item, index) => {
    if (item == 'code' || item == 'msg') return true
    if (index != 0) {
      p += "&"
    }
    p += item + "=" + data[item] || null
  })
  return p
}

function downloadGetZip(url, params, filename) {
  Message.warning({
    content: '正在导出数据，请稍候！',
    duration: 0
  })

  params.fileName = filename
  params.sign = getParams(params, true)


  // console.log("导出 downloadGetZip=== 》", url);
  url = $BaseUrl + '/' + url + getP(params)
  // console.log("《 === downloadGetZip 导出", url);

  Message.warning('导出数据中')
  window.open(url)
  setTimeout(function () {
    Message.destroy()
  }, 3000)
  return
}

function updata(url, params) {
  params = getParams(params)
  return axios.post($BaseUrl + url, params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

//新窗口打开
function newWindowsOpen(url, p = {}) {
  Message.info('准备下载中，请稍候')
  // console.log("url === >", url);
  p.token = getToken()
  p.sign = getParams(p, true)
  let p_ = getP(p);
  // console.log("< === url", url);

  const a = document.createElement('a'); // 创建a标签
  let n = new Date().getTime().toString()
  let fileName = p.fileName || n;

  let url_ = $BaseUrl + url + p_;
  url_ = url_.replace($BaseUrl + $BaseUrl, $BaseUrl)

  const useNewWindow = () => {
    window.open(url_)
    console.error(new Error('尝试用新窗口打开下载'));
  }

  try {
    let alink = document.createElement('a');
    alink.style.display = 'none';
    alink.download = fileName; //下载后文件名
    alink.href = url_;
    document.body.appendChild(alink);
    alink.click();
    document.body.removeChild(alink); //下载完成移除元素

    URL.revokeObjectURL(url_); //释放掉blob对象
  } catch (error) {
    console.error(error);
    useNewWindow()
  }
}


import crypto from "@/libs/crypto"
//账号解密
function getAccount(response) {
  //用户名加密解密，因为涉及到权限，所以在拦截这里修改
  if (response.data.data) {
    if (response.data.data.length) {
      response.data.data.forEach(item => {
        if (item.account) {
          let account = crypto.Decrypt(item.account)
          item.account = account || item.account
        }
      })
    }
    if (response.data.data.account) {
      let account = crypto.Decrypt(response.data.data.account)
      response.data.data.account = account || response.data.data.account
    }
  }

  if (response.data.user && response.data.user.account) {
    let account = crypto.Decrypt(response.data.user.account)
    response.data.user.account = account || response.data.user.account
  }
  return response.data
}

//账号加密
function setAccount(config) {
  //console.log("url === > ", config.url);
  let token = getToken()
  if (config.data) {
    if (config.data.pageSize) {
      config.data.limit = config.data.pageSize
    }
    //适应某些后台
    if (config.data.limit) {
      config.data.pageSize = config.data.limit
    }
    if (config.data.pageNum) {
      config.data.page = config.data.pageNum
    }
    if (config.data.account) {
      config.data.account = crypto.Encrypt(config.data.account)
    }

    //用户名加密解密，因为涉及到权限，所以在拦截这里修改
    //用户搜索
    if (config.url == '/system/user/getUserList' && config.data.type == 4 && config.data.search) {
      config.data.search = crypto.Encrypt(config.data.search) || config.data.search
    }

    config.data.token = token;
    // let keys = Object.keys(config.data)
    // keys.forEach(key => {
    //   config.data[key] = config.data[key] || config.data[key] === 0 ? config.data[key] : ""
    // })
    config.data.sign = getParams(config.data)

  }
  if (config.params) {
    if (config.params.pageSize) {
      config.params.limit = config.params.pageSize
    }
    if (config.params.pageNum) {
      config.params.page = config.params.pageNum
    }

    //用户名加密解密，因为涉及到权限，所以在拦截这里修改
    if (config.params.account) {
      config.params.account = crypto.Encrypt(config.params.account)
    }
    config.params.token = token;
    // let keys = Object.keys(config.params)
    // keys.forEach(key => {
    //   config.params[key] = config.params[key] || config.params[key] === 0 ? config.params[key] : ""
    // })
    config.params.sign = getParams(config.params, true)

  }
  //console.log("< === url", config.url);

  return config
}


export {
  instance,
  axiosPost,
  axiosGet,
  axiosFormPost,
  axiosDelete,
  axiosFormPostFile,
  axiosFormPostDownloadFile,
  getToken,
  download,
  downloadGetZip,
  updata,
  Modal,
  newWindowsOpen
}