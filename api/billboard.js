import request from '@/utils/request'
/**
 * 获取榜单软件
 * @param {{
 * pageIndex: Number,
 * pageSize: Number
 * }} params 
 * @param {{
 *  
 * }} options
 * @returns 
 */
export function requestBillboardList(params, options = {}) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getrecommendsoft",
      ...params
    },
    ...options
  })
}