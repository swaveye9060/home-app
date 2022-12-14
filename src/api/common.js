import {
  axiosPost,
  axiosGet,
} from './axios/clx-axios'

export const Api = {
  downloadFile: "/manage/system/file/downloadFile",
}

export default {
  /* 
   * xxx
   */
  downloadFile(params) {
    return axiosGet(params, Api.downloadFile)
  },

}