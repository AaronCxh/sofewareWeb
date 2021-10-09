import request from "@/utils/request";

/**
 * 获取留言列表
 * @param {{
 * pageIndex: Number,
 * pageSize: Number
 * }} params
 * @returns
 */
export function requestFeedBackList(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getfeedback",
      ...params
    }
  });
}

/**
 * 提交留言
 * @param {{
 *  nickname:string
 *  email:string
 *  content:string
 * }} params
 * @returns
 */
export function postFeedBack(params) {
  return request({
    url: "/include/getdata",
    method: "post",
    data: {
      apiname: "savefeedback",
      ...params
    }
  });
}
