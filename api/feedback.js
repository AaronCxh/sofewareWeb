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
 *  nickname： String
 *  email: String
 *  content: String
 * }} params
 * @returns
 */
export function postFeedBack(params) {
  return request({
    url: "/include/getdata",
    data: {
      apiname: "getnecessarysoft",
      ...params
    }
  });
}
