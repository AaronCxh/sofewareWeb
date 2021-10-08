import request from "@/utils/request";

/**
 * 获取关于/联系/隐私
 * @param {'about'|'contact'|'privacy'} identifier 
 * @returns 
 */
export function requestSiteConfig(identifier) {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getdefaultcontent",
      identifier: identifier
    }
  });
}
