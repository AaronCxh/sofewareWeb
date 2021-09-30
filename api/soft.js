import request from '@/utils/request'

/**
 * 精品软件
 * @param {{
 *  filter: 'new'|'hot'|'recommend'
 * }} params 
 * @returns 
 */
export function requestRecommendSoftList(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getindexsoft",
      ...params
    }
  });
}

/**
 * 获取教程文章
 * @param {{
 *  filter: 'new'|'recommend'
 * }} params 
 * @returns 
 */
export function requestRecommendArticle(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getindexcontent",
      ...params
    }
  });
}