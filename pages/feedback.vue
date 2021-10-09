<template>
  <div class="layout-main layout-min-height">
    <div class="container">
      <div class="feedback-inner sofe-inner">
        <div class="container">
          <div class="section-title">
            <a-row type="flex" align="middle" class="h150">
              <a-col :span="24">
                <h4>留言反馈 <span>({{total}} 条)</span></h4>
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
                          v-model="nickName"
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
                          v-model="email"
                        />
                      </div>
                    </a-col>
                  </a-row>
                  <textarea
                    rows="5"
                    placeholder="应用需求及应用推荐请移步到左上角【提交应用】处..."
                    class="form-control"
                    v-model="content"
                  ></textarea>
                </form>
                <div class="comments-action-bar">
                  <button class="button button-default" @click="onSubmit">
                    提交
                  </button>
                </div>
              </div>
              <ul class="comments-list">
                <li class="item" v-for="item in list">
                  <!-- <a href="#" class="avatar">
                    <img class="lazyload img" :data-src="item." src="~assets/images/ball-loading.svg" alt="" />
                  </a> -->
                  <div class="list-body">
                    <div class="flex-box align-center">
                      <span class="name">{{ item.NickName }}</span>
                      <span class="text-muted">
                        <span class="f12 mr12">{{ item.Address }}</span>
                      </span>
                    </div>
                    <small class="time">
                      {{ item.AutoTimeStamp }}
                    </small>
                    <div class="content mb32">
                      <div class="text-light-dark">
                        {{ item.Content }}
                      </div>
                      <ul
                        class="comment-child list mt-5"
                        v-if="item.ReplyList.length"
                      >
                        <li class="item" v-for="subItem in item.ReplyList">
                          <a class="avatar">
                            <img
                              src="~assets/images/admin.png"
                              class="circle"
                            />
                          </a>
                          <div class="list-body">
                            <div class="flex-box align-center">
                              <span class="text-muted f12">{{
                                subItem.NickName
                              }}</span>
                            </div>
                            <div class="content text-muted">
                              {{ subItem.Content }}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <a-pagination :total="total" :item-render="itemRender" @change="onChange" :pageSize="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestFeedBackList, postFeedBack } from "@/api/feedback";
import { validEmail } from "@/utils/validate";
export default {
  layout: "layout",
  name: "feedback",
  data() {
    return {
      nickName: "",
      email: "",
      content: "",
      spinning: false,
      pageNum: 1,
      loading: true,
      list: [],
      buttontext: "加载中..",
      nomore: true,
      total: 0
    };
  },
  async asyncData() {
    const res = await requestFeedBackList({
      pageIndex: 1,
      pageSize: 10
    });
    console.log("feedBackList", res);
    return {
      list: res.dataList,
      total: res.TotalCount,
      pageNum:
        res.TotalCount - res.PageSize * (res.PageIndex - 1) <= res.PageSize
          ? 0
          : res.PageIndex
    };
  },
  methods: {
    onSubmit() {
      if (!this.nickName) {
        this.$message.error("请输入昵称");
      } else if (!validEmail(this.email)) {
        this.$message.error("请输入正确邮箱地址");
      } else if (this.content.length < 2) {
        this.$message.error("评论内容不能小于2个字");
      } else {
        postFeedBack({
          nickname: this.nickName,
          email: this.email,
          content: this.content
        }).then(res => {
          console.log(res);
          this.$message.info(res.msg, 1.5);
          if (res.ret == "success") {
            this.nickName = "";
            this.content = "";
            this.email = "";
          }
        });
      }
    },
    getList(pageNum = 1) {
      this.spinning = true;
      return new Promise(resolve => {
        this.loading = true;
        requestFeedBackList({
          pageIndex: pageNum,
          pageSize: 10
        }).then(res => {
          this.spinning = false;
          if (
            res.TotalCount - res.PageSize * (res.PageIndex - 1) <=
            res.PageSize
          ) {
            this.buttontext = "暂无更多数据";
            this.pageNum = 0;
            this.loading = false;
          } else {
            this.buttontext = "加载中..";
            this.pageNum = res.PageIndex;
            this.loading = true;
          }
          if (res.TotalCount > 0) {
            this.list = res.dataList;
            this.nomore = false;
          } else {
            this.list = [];
            this.nomore = true;
          }
          resolve();
        });
      });
    },
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a class="flex-box align-center"><i class="iconfont">&#xe6d4;</i>Previous</a>;
      } else if (type === "next") {
        return <a class="flex-box align-center">Next<i class="iconfont">&#xe600;</i></a>;
      }
      return originalElement;
    },
    onChange(pageNum) {
      this.getList(pageNum)
    }
  }
};
</script>

<style lang="scss" scoped>
  .feedback-inner {
    padding: 24px 0;
    margin: 0;
  }
</style>
