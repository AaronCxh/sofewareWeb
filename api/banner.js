import request from "@/utils/request";

export function requestBanner() {
  return request({
    url: "/include/getdata",
    params: {
      apiname: "getads"
    }
  });
}
