import request from '@/utils/request'

/**
 * 文章详情
 * @param {Number} id 
 * @returns 
 */
export function requestArticleDetail(id) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getcontdetail",
      id
    }
  });
}