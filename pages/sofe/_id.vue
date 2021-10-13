<template>
  <div class="sofeDetail-wrapper layout-min-height">
    <template v-if="device != 'mobile'">
      <div class="sofeDetail-header">
        <div class="float">
          <img src="~assets/images/shape-1.svg" alt="" class="shape-1" />
          <img src="~assets/images/shape-55.svg" alt="" class="shape-2" />
          <img src="~assets/images/shape-56.svg" alt="" class="shape-3" />
          <img src="~assets/images/shape-57.svg" alt="" class="shape-4" />
          <img src="~assets/images/shape-58.svg" alt="" class="shape-5" />
          <img src="~assets/images/shape-59.svg" alt="" class="shape-6" />
          <img src="~assets/images/shape-60.svg" alt="" class="shape-7" />
          <img src="~assets/images/shape-61.svg" alt="" class="shape-8" />
          <img src="~assets/images/shape-62.svg" alt="" class="shape-9" />
          <img src="~assets/images/shape-10.svg" alt="" class="shape-10" />
          <img src="~assets/images/shape-11.svg" alt="" class="shape-11" />
        </div>
        <div class="container">
          <a-row :gutter="30" type="flex" align="middle">
            <a-col :xs="24" :sm="24" :lg="12">
              <div class="sofeDetail-header__left">
                <div class="flex-box">
                  <img :src="data.Icon" class="lazyload" />
                  <div class="con">
                    <div class="name">
                      {{ data.Title }} {{ data.Year }} {{ data.SubTitle }}
                      <!-- <span class="text-muted">{{ data.Year }} <template v-if="data.SubTitle">+ {{ data.SubTitle }}</template></span> -->
                    </div>
                    <div class="action-group">
                      <button
                        class="button button-default"
                        @click="show = true"
                      >
                        <i class="iconfont">&#xe6f8;</i>
                        立即下载
                      </button>
                      <button
                        class="button button-default-reverse"
                        :class="{ disabled: isLike }"
                        @click="onLike"
                      >
                        <i class="iconfont">&#xe6fa;</i>
                        {{ isLike ? "已赞" : "赞" }} ({{ likeCount }})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="24" :lg="12">
              <div class="sofeDetail-header__right promo-wrapper">
                <div class="swiper-container" id="detail-swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in data.PhotoList">
                      <img :src="item.Img" alt="" />
                    </div>
                  </div>
                  <div class="swiper-btn button-prev">
                    <i class="iconfont">&#xe6d4;</i>
                  </div>
                  <div class="swiper-btn button-next">
                    <i class="iconfont">&#xe600;</i>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="sofeDetail-body">
        <div class="container">
          <div class="sofe-inner">
            <div class="sofeDetail-info">
              <div class="sofeDetail-info__cell">
                <div class="box">
                  <div class="label text-muted">大小</div>
                  <div class="value">{{ data.Size }}</div>
                  <div class="suffix">{{ data.Unit }}</div>
                </div>
              </div>
              <div class="sofeDetail-info__cell">
                <div class="box">
                  <div class="label text-muted">下载</div>
                  <div class="value">{{ data.DownloadCount }}</div>
                  <div class="suffix">次</div>
                </div>
              </div>
              <div class="sofeDetail-info__cell">
                <div class="box">
                  <div class="label text-muted">语言</div>
                  <div class="value">{{ data.Language }}</div>
                  <div class="suffix">{{ data.Language_EN }}</div>
                </div>
              </div>
              <div class="sofeDetail-info__cell">
                <div class="box">
                  <div class="label text-muted">类别</div>
                  <div class="value">
                    <router-link
                      :to="{
                        name: 'sofe',
                        query: { nodeName: data.Identifier }
                      }"
                      class="text-muted"
                    >
                      {{ data.NodeName }} <i class="iconfont">&#xe63d;</i>
                    </router-link>
                  </div>
                  <div class="suffix">{{ data.Identifier }}</div>
                </div>
              </div>
              <div class="sofeDetail-info__cell">
                <div class="box">
                  <div class="label text-muted">更新时间</div>
                  <div class="value">{{ data.AutoTimeStamp }}</div>
                  <div class="suffix">{{ data.Week }}</div>
                </div>
              </div>
            </div>
            <div class="sofeDetail-content">
              <div class="step-read" v-if="false">
                <div class="container">
                  <div class="hd">
                    <div class="flex-box align-center">
                      <i class="dot"></i>
                      <h3>安装必读</h3>
                    </div>
                  </div>
                  <div class="bd">
                    <div class="tutorial-box">
                      <div>
                        <a
                          href="#/artilce/1"
                          target="_blank"
                          class="post-item"
                          style="background: linear-gradient(rgba(249, 56, 134, 0.3), rgba(255, 63, 116, 0.36), rgba(255, 73, 99, 0.42), rgba(255, 86, 82, 0.48), rgba(252, 100, 65, 0.54), rgba(245, 113, 49, 0.6)) 0% 0% / 100%;"
                          ><div class="post-item__content">
                            <h3 class="title">
                              ARM M1 应用闪退激活失效解决方法
                            </h3>
                            <div class="post-meta">
                              <div class="category">
                                新手教程
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#/artilce/1"
                          target="_blank"
                          class="post-item"
                          style="background: linear-gradient(rgba(0, 157, 223, 0.3), rgba(0, 154, 228, 0.36), rgba(0, 151, 233, 0.42), rgba(0, 147, 237, 0.48), rgba(0, 142, 241, 0.54), rgba(0, 138, 244, 0.6));"
                          ><div class="post-item__content">
                            <h3 class="title">
                              xxx.app 已损坏/来自身份不明的开发者解决方法
                            </h3>
                            <div class="post-meta">
                              <div class="category category--tools">
                                新手教程
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#/artilce/1"
                          target="_blank"
                          class="post-item"
                          style="background: linear-gradient(rgba(0, 157, 223, 0.3), rgba(0, 154, 228, 0.36), rgba(0, 151, 233, 0.42), rgba(0, 147, 237, 0.48), rgba(0, 142, 241, 0.54), rgba(0, 138, 244, 0.6));"
                          ><div class="post-item__content">
                            <h3 class="title">
                              xxx.app 已损坏/来自身份不明的开发者解决方法
                            </h3>
                            <div class="post-meta">
                              <div class="category category--tools">
                                新手教程
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="step-intro">
                <div class="container">
                  <div class="hd">
                    <div class="flex-box align-center">
                      <i class="dot"></i>
                      <h3>软件介绍/功能</h3>
                    </div>
                  </div>
                  <div class="bd">
                    <div class="soft-blockquote">
                      <p>
                        {{ data.Summary }}
                      </p>
                    </div>
                    <div class="rows-inner" v-html="data.Content"></div>
                    <div class="text-center">
                      <a
                        class="button button-default-reverse"
                        target="_blank"
                        :href="data.OfficialAddress"
                        >进入官方网站了解更多</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="step-relations">
                <div class="container">
                  <div class="hd">
                    <div class="flex-box align-center">
                      <i class="dot"></i>
                      <h3>相关软件</h3>
                    </div>
                  </div>
                  <div class="bd">
                    <a-row :gutter="20" type="flex">
                      <a-col
                        class="w-col"
                        v-for="(item, index) in list"
                        :key="index"
                      >
                        <a
                          target="_blank"
                          :href="`#/sofe/${item.AutoID}`"
                          class="sofe-wrapper__item border"
                        >
                          <div class="sofe-wrapper__image">
                            <div
                              class="shadow"
                              :style="{
                                backgroundImage: `url(${item.Icon})`
                              }"
                            ></div>
                            <img
                              :class="
                                `img lazyload blur_img animation delay-${index} `
                              "
                              :data-src="item.Icon"
                              src="~assets/images/ball-loading.svg"
                              alt=""
                            />
                          </div>
                          <div class="sofe-wrapper__item--con">
                            <div class="sofe-wrapper__item--version">
                              {{ item.Version }}
                            </div>
                            <div class="sofe-wrapper__item--name">
                              <span class="fw400">{{ item.Title }}</span>
                            </div>
                            <div class="sofe-wrapper__item--summary">
                              {{ item.SubTitle }}
                            </div>
                          </div>
                          <div class="sofe-wrapper__item--extend">
                            <div class="download">
                              <i class="iconfont">&#xe6f9;</i>
                              {{ item.DownloadCount }}
                            </div>
                            <div class="update">
                              <i class="iconfont">&#xe6ce;</i>
                              {{ item.AutoTimeStamp }}
                            </div>
                          </div>
                        </a>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <div class="">
          <img
            class="icon"
            :src="data.Icon"
            alt=""
          />
          <h3 class="">{{ data.Title }}</h3>
          <h5>{{ data.Version }}</h5>
          <div class="info-list">
            <span>
              <i class="iconfont">&#xe6dc;</i>{{ data.Size }} {{ data.Unit }}
            </span>
            <span
              ><i class="iconfont">&#xe6ce;</i>{{ data.AutoTimeStamp }}
            </span>
            <span><i class="iconfont">&#xe6fa;</i>{{ data.Ding }}</span>
          </div>
          <div class="button-group">
            <button class="button button-default" @click="show = true">立即下载</button>
          </div>
        </div>
        <div class="promo-wrapper">
          <div class="swiper-container" id="detail-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in data.PhotoList">
                <img class="img-responsive" :src="item.Img" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-btn button-prev">
              <i class="iconfont">&#xe6d4;</i>
            </div>
            <div class="swiper-btn button-next">
              <i class="iconfont">&#xe600;</i>
            </div>
          </div>
        </div>
        <div>
          <div class="title">软件介绍/功能</div>
          <div class="soft-blockquote"><p>{{ data.Summary }}</p></div>
        </div>
      </div>
    </template>
    <a-modal
      title="下载地址"
      :class="`my-amodal ${mode}`"
      v-model="show"
      :footer="null"
      :closable="false"
    >
      <div class="download-list">
        <div class="download-list__item" v-for="item in data.DownloadList">
          <img class="icon" :src="item.Icon" alt="" />
          <div class="con">
            <span
              class="title"
              @click="onDownLoad(item.DownloadUrl, item.ExtractCode)"
            >
              <b>{{ item.Name }}</b>
              <span
                >(提取码/密码：<i>{{ item.ExtractCode }}</i
                >)</span
              >
            </span>
            <div class="summary">{{ item.Remark }}</div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
import { mapGetters } from "vuex";
import {
  requestSoftDetailByID,
  postLikeIt,
  requestRelevancySoftList
} from "@/api/soft";

function copy(txt) {
  return new Promise(resolve => {
    let transfer = document.createElement("input");
    document.body.appendChild(transfer);
    transfer.value = txt;
    transfer.focus();
    transfer.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    transfer.blur();
    document.body.removeChild(transfer);
    resolve();
  });
}
export default {
  name: "sofeDetail",
  layout: "layout",
  data() {
    return {
      list: [],
      show: false,
      data: {},
      likeCount: 0,
      isLike: false
    };
  },
  computed: {
    ...mapGetters(["mode", "device"])
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    })
    this.getDetail();
    this.getRelevancySoftList();
  },
  methods: {
    getRelevancySoftList() {
      requestRelevancySoftList(this.$route.params.id).then(res => {
        this.list = res.dataList;
      });
    },
    getDetail() {
      requestSoftDetailByID(this.$route.params.id).then(res => {
        console.log("软件详情", res);
        this.data = res;
        this.likeCount = res.Ding;
      });
    },
    initSwiper() {
      new Swiper("#detail-swiper", {
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      });
    },
    handleOk() {
      console.log("确定");
    },
    handleCancel() {},
    onLike() {
      if (!this.isLike) {
        this.likeCount += 1;
        this.isLike = true;
        postLikeIt(this.$route.params.id).then(res => {
          console.log(res);
        });
      } else {
        this.$message.warn({
          content: h => {
            return h("div", "您已经点赞过了哦");
          },
          duration: 3
        });
      }
    },
    onDownLoad(url, code) {
      copy(code).then(() => {
        this.$message.info({
          content: h => {
            return h("div", { class: "test-class" }, [
              `提取码「${code}」复制成功，到下载页面的密码/提取码输入框粘贴即可。`,
              h(
                "a",
                {
                  attrs: {},
                  on: {
                    click: this.onWinOpen.bind(this, url)
                  }
                },
                "点我下载"
              )
            ]);
          },
          duration: 3
        });
      });
      this.onWinOpen(url);
    },
    onWinOpen(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
:root {
  --sofeDetailBgColor: #1c283b;
}
.sofeDetail-wrapper {
  padding: 24px 0 0;
  overflow: hidden;
  .sofeDetail-header {
    position: relative;
    padding: 24px 0;
    .shape-1 {
      position: absolute;
      top: 21%;
      right: 22%;
      animation: animationFramesTwo 13s linear infinite;
    }
    .shape-2 {
      position: absolute;
      top: 27%;
      left: 7%;
      animation: animationFramesFour 25s linear infinite alternate;
    }
    .shape-3 {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: animationFramesThree 35s linear infinite alternate;
    }
    .shape-4 {
      position: absolute;
      top: 70%;
      right: 3%;
      animation: animationFramesFour 20s linear infinite alternate;
    }
    .shape-5 {
      position: absolute;
      bottom: 2%;
      right: 28%;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-6 {
      position: absolute;
      bottom: 3%;
      left: 38%;
      animation: animationFramesFour 20s linear infinite alternate;
    }
    .shape-7 {
      position: absolute;
      left: 4%;
      bottom: 4%;
      animation: animationFramesOne 17s linear infinite;
    }
    .shape-8 {
      position: absolute;
      left: 4%;
      top: 60%;
      animation: animationFramesOne 20s linear infinite alternate;
    }
    .shape-9 {
      position: absolute;
      top: 22%;
      left: 41%;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-10 {
      top: 2%;
      right: 2%;
      position: absolute;
      animation: animationFramesOne 15s linear infinite;
    }
    .shape-11 {
      position: absolute;
      top: 6%;
      right: 4%;
      animation: animationFramesOne 15s linear infinite;
    }
    .sofeDetail-header__left {
      padding: 8px;
      .name {
        margin-bottom: 16px;
        font-size: 34px;
        color: $color-fontColor;
        span {
          font-size: 18px;
          margin-left: 8px;
          // vertical-align: 4px;
        }
      }
      img {
        width: 128px;
        height: 127px;
        margin-right: 12px;
      }
      .action-group {
        .button {
          border-radius: 44px;
          height: 44px;
          font-size: 16px;
          font-weight: 600;
          .iconfont {
            font-weight: 100;
            font-size: 22px;
            margin-right: 5px;
            line-height: 1;
          }
        }
        .button-default {
          min-width: 200px;
          .iconfont {
            color: #fff;
          }
        }
        .button-default-reverse {
          min-width: 166px;
          margin-left: 15px;
          .iconfont {
            color: var(--color-default);
            transition: all 0.3s;
          }
          &:hover {
            background: $color-default;
            color: #fff;
            .iconfont {
              color: #fff;
            }
          }
          &.disabled {
            opacity: 0.65;
          }
        }
      }
    }
    .sofeDetail-header__right {
      .swiper-container {
        max-width: 576px;
        margin: 0 auto;
      }
      img {
        border: 2px solid #121212;
        border-radius: 2px;
        max-height: 360px;
        max-width: 576px;
      }
    }
  }
}

.sofeDetail-info {
  display: flex;
  border-bottom: 1px solid var(--borderColor);
  .sofeDetail-info__cell {
    flex: 0 0 (100% / 5);
    .box {
      margin: 16px 0;
      text-align: center;
      color: rgba($color: $color-fontColor, $alpha: 0.9);
      line-height: 1.9;
      border-right: 1px solid var(--borderColor);
      .label {
        font-size: 10px;
      }
      .value {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.45;
        opacity: 0.7;
        a {
          opacity: 1;
          .iconfont {
            font-weight: 400;
          }
          &:hover {
            color: var(--color-default) !important;
            .iconfont {
              color: inherit;
            }
          }
        }
      }
      .suffix {
        letter-spacing: 2px;
        font-size: 10px;
        opacity: 0.7;
      }
    }
  }
}
.step-read {
  padding: 48px 0 0;
  margin-bottom: 24px;
}
.step-intro {
  // background-image: linear-gradient(135deg, #192536, #182232 30%, #16202f);
  padding: 80px 0 100px;
  position: relative;
  border-top: 1px solid var(--borderColor);
  @at-root .hd {
    .flex-box {
      height: 150px;
    }
    .dot {
      position: relative;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background: #c6fdf3;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        width: 21px;
        height: 21px;
        background: #55ebd0;
        transform: translate(-50%, -50%);
      }
    }
    h3 {
      font-size: 28px;
      color: $color-fontColor;
      margin-bottom: 0;
      margin-left: 34px;
    }
  }
  .bd {
    @at-root .soft-blockquote {
      position: relative;
      border-left: 0;
      padding: 85px 0 30px;
      width: 700px;
      margin: 0 auto;
      font-size: 18px;
      text-indent: 38px;
      line-height: 2;
      p {
        margin: 0 0 20px;
        line-height: 30px;
        &:first-child {
          margin-bottom: 40px;
          line-height: 2;
        }
      }
    }
    .row {
      padding: 80px 0;
      margin-bottom: 12px;
      border-bottom: 1px solid var(--borderColor);
      .img {
        border-radius: 5px;
        max-width: 100%;
      }
      .con {
        padding-right: 16px;
        .title {
          font-size: 30px;
          color: $color-fontColor;
          font-weight: 300;
          margin-bottom: 8px;
        }
        .summary {
          font-size: 16px;
          line-height: 1.9;
          opacity: 0.7;
        }
      }
    }
    .rows-inner {
      .row {
        &:nth-child(even) {
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
    .button {
      height: 65px;
      border-radius: 65px;
      min-width: 266px;
      margin-top: 60px;
    }
  }
}
.step-relations {
  border-top: 1px solid var(--borderColor);
  padding: 48px 32px;
  background: #172131;
  .hd {
    .flex-box {
      height: 150px;
    }
    .dot {
      position: relative;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background: #c6fdf3;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        width: 21px;
        height: 21px;
        background: #55ebd0;
        transform: translate(-50%, -50%);
      }
    }
    h3 {
      font-size: 28px;
      color: $color-fontColor;
      margin-bottom: 0;
      margin-left: 34px;
    }
  }
}
</style>

<style lang="scss" scoped>
.sofe-wrapper__item {
  background: rgba($color: #172131, $alpha: 0.9);
  &:hover {
    background-color: #172131;
    box-shadow: 0 0 36px rgba(9, 13, 19, 0.4);
  }
}
</style>
