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

/**
 * 获取软件详情
 * @param {Number} id 
 * @returns 
 */
export function requestSoftDetailByID(id) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getsoftdetail",
      id: id
    }
  });
}

/**
 * 点赞
 */
export function postLikeIt(id) {
  return request({
    url: "/include/getdata",
    method: 'post',
    data: {
      apiname: "ding",
      id
    }
  });
}


/**
 * 获取相关软件
 * @param {Number} id 
 * @returns 
 */
export function requestRelevancySoftList(id) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getrelatedsoft",
      id
    }
  })
}