import request from '@/utils/request'

/**
 * 首页精品软件
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
 * 首页获取教程文章
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


/**
 * 获取装机必备
 * @returns 
 */
export function requestBibeiSoftList() {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getnecessarysoft"
    }
  });
}


/**
 * 获取软件栏目
 * @param {String} key
 * @returns 
 */
export function requestSofeNodeList(key) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getsoftnode",
      identifier: key
    }
  })
}

/**
 * 获取软件属性
 */
export function requestSofeAttr() {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getsoftproperty"
    }
  });
}

/**
 * 获取软件
 * @param {{
 * pageIndex: Number
 * pageSize: Number
 * identifier: String
 * systemid: Number
 * languageid: Number
 * key: String
 * filter: '最新'|'下载'|'推荐'
 * }} params 
 * @returns 
 */
export function requestSofeList(params) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getsoft",
      ...params
    }
  });
}
