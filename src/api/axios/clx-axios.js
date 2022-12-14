/* 
 * Author: ye9060
 * 2022-12-13
 * [api封装]
 */

import axios from 'axios'

// ---
let instance = axios.create()
// instance.defaults.baseURL = $BaseUrl;

/* 
 * 封装请求接口方法
 */
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


export {
  axiosPost,
  axiosGet
}