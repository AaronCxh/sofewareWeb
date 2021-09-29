import axios from "axios";
import store from "@/store";
import { isObject } from "lodash";
let count = 0;
const messageList = [
  "取消成功",
  "修改成功",
  "操作成功",
  "添加成功",
  "删除成功",
  "回复成功",
  "复制成功",
  "删除分类成功",
  "操作成功！",
  "赠送成功",
  "更新成功",
  "删除文件成功",
  "修改优惠券成功",
  "添加优惠券成功",
  "添加限时活动成功",
  "修改限时活动成功",
  "添加满减活动成功",
  "修改满减活动成功",
  "添加拼团活动成功",
  "修改拼团活动成功",
  "添加秒杀活动成功",
  "修改秒杀活动成功",
  "设置成功",
  "配置成功"
];
// create an axios instance
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? '' : "/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.transformRequest = [
      function(data) {
        let ret = "";
        for (const it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.lastIndexOf("&"));
        return ret;
      }
    ];
    // do something before request is sent
    if (store.getters.moduleId) {
      config.data["moduleId"] = store.getters.moduleId;
    }
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log("request.error", error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    const config = response.config;
    // if the custom code is not 20000, it is judged as an error.
    switch (res.status) {
      case 40000:
        if (count <= 0) {
          count++;
          MessageBox.confirm("登录已超时，请重新登录", "提示", {
            confirmButtonText: "确定",
            showCancelButton: false,
            type: "warning",
            callback() {
              count--;
              store.dispatch("user/resetToken").then(() => {
                location.reload();
              });
            }
          });
        }
        return Promise.reject("登录超时");
      case 30000: // 无权限
        return Promise.reject("无权限");
      default:
        if (isObject(res) && res.ret !== "success") {
          Message({
            message: res.msg || "请求失败",
            type: "error",
            duration: 3 * 1000
          });
          console.error(response);
          return Promise.reject(res.msg);
        } else {
          if (
            config.showMessage === undefined &&
            messageList.indexOf(res.msg.trim()) !== -1
          ) {
            Message({
              message: res.msg,
              type: "success",
              duration: 2 * 1000
            });
          }
          return res;
        }
    }
  },
  error => {
    console.error(error); // for debug
    // if (error != 'Network Error') {
    //   Message({
    //     message: error.msg || '网络请求超时',
    //     type: 'error',
    //     duration: 3 * 1000
    //   })
    // }
    return Promise.reject(error);
  }
);

export default service;
