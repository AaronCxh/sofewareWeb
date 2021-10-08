<template>
  <div class="layout-main layout-min-height">
    <div class="container">
      <div class="sofe-inner">
        <div class="container">
          <div class="section-title">
            <a-row type="flex" align="middle" class="h150">
              <a-col :span="24">
                <h4>留言反馈 <span>(1504 条)</span></h4>
              </a-col>
            </a-row>
          </div>
          <div class="bd">
            <div class="comments">
              <div class="comments-form">
                <form>
                  <a-row>
                    <a-col :span="12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="iconfont">&#xe6dd;</i>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="昵称"
                        />
                      </div>
                    </a-col>
                    <a-col :span="12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="iconfont">&#xe6db;</i>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="邮箱"
                        />
                      </div>
                    </a-col>
                  </a-row>
                  <textarea
                    rows="5"
                    placeholder="应用需求及应用推荐请移步到左上角【提交应用】处..."
                    class="form-control"
                  ></textarea>
                </form>
                <div class="comments-action-bar">
                  <button class="button button-default">提交</button>
                </div>
              </div>
              <ul class="comments-list">
                <li class="item">
                  <a href="#" class="avatar">
                    <img src="~assets/images/ball-loading.svg" alt="" />
                  </a>
                  <div class="list-body">
                    <div class="flex-box align-center">
                      <span class="name">jindezan</span>
                      <span class="text-muted">
                        <span class="f12 mr12">黑龙江伊春铁力市的网友</span>
                        <span class="f12">chrome 94.0.4606.61</span>
                      </span>
                    </div>
                    <small class="time">
                      2021-09-28 05:36
                    </small>
                    <div class="content mb32">
                      <div class="text-light-dark">
                        麻烦快点拉我进群，好几天了
                      </div>
                      <ul class="comment-child list mt-5">
                        <li class="item">
                          <a class="avatar">
                            <img
                              src="https://cdn.macwk.com/assets/images/logo.svg"
                              class="circle"
                            />
                          </a>
                          <div class="list-body">
                            <div class="flex-box align-center">
                              <span class="text-muted f12">MacWk管理员</span>
                            </div>
                            <div class="content text-muted">
                              发邮件给你你也不看也不回，加你QQ要回答你的特长是什么，怎么才能联系到你啊？😅😂😅
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="item">
                  <a href="#" class="avatar">
                    <img src="~assets/images/ball-loading.svg" alt="" />
                  </a>
                  <div class="list-body">
                    <div class="flex-box align-center">
                      <span class="name">jindezan</span>
                      <span class="text-muted">
                        <span class="f12 mr12">黑龙江伊春铁力市的网友</span>
                        <span class="f12">chrome 94.0.4606.61</span>
                      </span>
                    </div>
                    <small class="time">
                      2021-09-28 05:36
                    </small>
                    <div class="content mb32">
                      <div class="text-light-dark">
                        麻烦快点拉我进群，好几天了
                      </div>
                      <ul class="comment-child list mt-5">
                        <li class="item">
                          <a class="avatar">
                            <img
                              src="https://cdn.macwk.com/assets/images/logo.svg"
                              class="circle"
                            />
                          </a>
                          <div class="list-body">
                            <div class="flex-box align-center">
                              <span class="text-muted f12">MacWk管理员</span>
                            </div>
                            <div class="content text-muted">
                              发邮件给你你也不看也不回，加你QQ要回答你的特长是什么，怎么才能联系到你啊？😅😂😅
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestFeedBackList, postFeedBack } from "@/api/feedback";
export default {
  layout: "layout",
  name: "feedback",
  data() {
    return {
      feedBackList: []
    };
  },
  async asyncData() {
    const feedBackList = await requestFeedBackList({
      pageIndex: 1,
      pageSize: 10
    });
    return { feedBackList: feedBackList };
  }
};
</script>

<style lang="scss" scoped>
  
</style>
