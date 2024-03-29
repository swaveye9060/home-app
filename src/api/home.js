import {
  axiosPost,
  axiosGet,
} from './axios/clx-axios'

export const Api = {
  /* 
   * 主页
   */
  getAllDevice: "/manage/cloud/getAllDevice", // 查询所有设备 get

  /* 
   * 网器方案
   */
  getDevTypeInfo: "/manage/cloud/getDevTypeInfo", // 根据type查询所有设备类型 get
  getDevByTypeId: "/manage/cloud/getDevByTypeId", // 根据设备类型id，查询设备 get

  getInfoByDevId: "/manage/cloud/getInfoByDevId", // 根据设备id,查询设备详细介绍信息 get
  getDevPic: "/manage/cloud/getDevPic", // 设备轮播图 get
  getInfoMoreByType: "/manage/cloud/getInfoMoreByType", // 根据type级联查出详情信息 get

  getDocumentCenter: "/manage/cloud/getDocumentCenter", // 查询文档中心 get

}

export default {
  /* 
   * 主页
   */
  getAllDevice(params) {
    return axiosGet(params, Api.getAllDevice)
  },

  /* 
   * 网器方案
   */
  getDevTypeInfo(params) {
    return axiosGet(params, Api.getDevTypeInfo)
  },
  getDevByTypeId(params) {
    return axiosGet(params, Api.getDevByTypeId)
  },
  getInfoByDevId(params) {
    return axiosGet(params, Api.getInfoByDevId)
  },
  getDevPic(params) {
    return axiosGet(params, Api.getDevPic)
  },
  getInfoMoreByType(params) {
    return axiosGet(params, Api.getInfoMoreByType)
  },
  getDocumentCenter(params) {
    return axiosGet(params, Api.getDocumentCenter)
  },

}