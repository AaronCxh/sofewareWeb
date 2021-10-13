import request from '@/utils/request'

/**
 * 专题栏目
 */
export function requestSpecial() {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getspecialnode"
    },
  })
}

/**
 * 获取专题软件列表
 * @param {{
 * pageIndex: Number,
 * pageSize: Number,
 * identifier: String,
 * systemid: Number
 * }} params
 * @returns 
 */
export function requestSpecialListByID(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getspecialsoft",
      ...params
    }
  })
}

/**
 * 获取系统类型
 */
export function requestSystem() {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getsystem"
    }
  });
}

/**
 * 获取年份属性
 * @param {*} params 
 */
export function requestYearFilter(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getyear"
    }
  });
}