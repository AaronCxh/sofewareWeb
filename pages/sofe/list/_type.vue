<template>
  <div
    class="app-layout layout-min-height"
    :class="{ 'w-full': currentGrid == 3 }"
  >
    <div class="container">
      <div class="flex-box">
        <div class="app-sidebar">
          <div class="scrollabled">
            <p class="title">分类</p>
            <a-menu
              class="mb16"
              mode="inline"
              :open-keys="openKeys"
              :selectedKeys="selectedKeys"
              style="width: 100%"
              @openChange="onOpenChange"
              @click="onItemClick"
            >
              <a-sub-menu key="all">
                <div class="flex-box align-center" slot="title">
                  <span>全部软件</span>
                </div>
              </a-sub-menu>

              <a-sub-menu :key="node.Identifier" v-for="node in nodeList">
                <div class="flex-box align-center" slot="title">
                  <span>{{ node.NodeName }}</span>
                  <i class="iconfont">&#xe600;</i>
                </div>
                <a-menu-item
                  class="123465"
                  :key="subNode.Identifier"
                  v-for="subNode in node.nodeList"
                >
                  {{ subNode.NodeName }}
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
            <div class="mb24" v-for="(filter, index) in filterList">
              <p class="title">{{ filter.Name }}</p>
              <a-radio-group v-model="index == 0 ? lang : sys" class="my-radio-group">
                <a-radio
                  :value="item.AutoID"
                  v-for="item in filter.PropertyItemList"
                  :key="item.Name"
                >
                  {{ item.Name }}
                </a-radio>
              </a-radio-group>
            </div>
            <!-- <div class="mb24">
              <p class="title">语言</p>
              <a-radio-group v-model="lang">
                <a-radio
                  :value="item.AutoID"
                  v-for="item in filterList[1].PropertyItemList"
                  :key="item.Name"
                >
                  {{ item.Name }}
                </a-radio>
              </a-radio-group>
            </div> -->
          </div>
        </div>
        <div class="app-content">
          <div class="app-content__list">
            <div class="app-content__list--header">
              <div class="main-title">
                <h5>
                  系统清理 <span>({{ total }})</span>
                </h5>
              </div>
              <div class="menu">
                <a-tabs class="menu__list" v-model="active">
                  <a-tab-pane
                    :key="tab.value"
                    :tab="tab.title"
                    v-for="tab in tabs"
                  ></a-tab-pane>
                </a-tabs>
              </div>
              <div class="target-blank">
                <a-switch v-model="openNewWindow" />
                <span>
                  新窗口打开
                </span>
              </div>
              <div class="grid-change">
                <a
                  class="grid-action grid-1"
                  :class="{ active: currentGrid == 1 }"
                  @click="onChangeGrid(1)"
                ></a>
                <a
                  class="grid-action grid-2"
                  :class="{ active: currentGrid == 2 }"
                  @click="onChangeGrid(2)"
                ></a>
                <a
                  class="grid-action grid-3"
                  :class="{ active: currentGrid == 3 }"
                  @click="onChangeGrid(3)"
                ></a>
              </div>
            </div>
            <div class="app-content__list--body">
              <a-spin :spinning="spinning">
                <a-row
                  type="flex"
                  :class="{
                    'grid-row': currentGrid == 1,
                    'col-row': currentGrid != 1
                  }"
                >
                  <a-col
                    v-for="(item, index) in sofeList"
                    :key="item.AutoID"
                    :class="
                      `f-col animation fadeInLeft delay-${index} ${
                        index == currentActiveIndex ? 'active' : ''
                      }`
                    "
                  >
                    <soft-item
                      @click="onSelected"
                      :data="item"
                      :show-more="false"
                      :is-like="currentGrid != 3"
                    >
                      <template #title="scope">
                        <span class="version">{{ scope.data.Version }}</span>
                      </template>
                      <template #summary="scope">
                        <span class="size">
                          {{ scope.data.Size }}{{ scope.data.Unit }}</span
                        >
                      </template>
                      <template #extend="scope">
                        <div slot="extend" class="sofe-wrapper__item--extend">
                          <div class="download">
                            <i class="iconfont">&#xe6f9;</i>
                            {{ scope.data.DownloadCount }}
                          </div>
                          <div class="update">
                            <i class="iconfont">&#xe6ce;</i>
                            {{ scope.data.AutoTimeStamp }}
                          </div>
                        </div>
                        <div class="arrow" v-if="currentGrid != 1">
                          <i class="iconfont">&#xe604;</i>
                        </div>
                      </template>
                    </soft-item>
                  </a-col>
                </a-row>
              </a-spin>
              <a-pagination
                :total="total"
                :item-render="itemRender"
                @change="onChange"
                :pageSize="20"
              />
            </div>
          </div>
          <div class="app-content__info" v-if="currentGrid != 1">
            <div
              class="siderbar-apps border flex-box mb24"
              v-if="tabsActive == 0 && currentGrid == 2"
            >
              <div class="siderbar-apps__header">
                <h6>相关推荐</h6>
              </div>
              <div class="siderbar-apps__body">
                <a href="#" class="item">
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      data-src="https://cdn.macwk.com/public/uploads/_/originals/tencent-lemon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      腾讯柠檬 - 打造最强免费系统优化清理应用
                    </p>
                  </div>
                </a>
                <a href="#" class="item">
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      data-src="https://cdn.macwk.com/public/uploads/_/originals/tencent-lemon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      腾讯柠檬 - 打造最强免费系统优化清理应用
                    </p>
                  </div>
                </a>
                <a href="#" class="item">
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      data-src="https://cdn.macwk.com/public/uploads/_/originals/tencent-lemon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      腾讯柠檬 - 打造最强免费系统优化清理应用
                    </p>
                  </div>
                </a>
                <a href="#" class="item">
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      data-src="https://cdn.macwk.com/public/uploads/_/originals/tencent-lemon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      腾讯柠檬 - 打造最强免费系统优化清理应用
                    </p>
                  </div>
                </a>
                <a href="#" class="item">
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      data-src="https://cdn.macwk.com/public/uploads/_/originals/tencent-lemon-1.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      腾讯柠檬 - 打造最强免费系统优化清理应用
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div class="siderbar-apps border flex-box" v-if="currentGrid == 2">
              <div class="siderbar-apps__header pd0">
                <van-tabs v-model="tabsActive" class="my-tabs">
                  <van-tab title="本周热门">
                    <div class="siderbar-apps__body mh500">
                      <a
                        href="#"
                        class="hot-item"
                        v-for="(item, index) in hotList"
                        :key="index"
                      >
                        <div class="number">{{ index + 1 }}</div>
                        <div class="con">
                          <div class="name">
                            Downie
                          </div>
                          <div class="summary">
                            最好的视频下载器
                          </div>
                        </div>
                        <div class="cover">
                          <img
                            class="lazyload blur_img"
                            data-src="https://cdn.macwk.com/public/uploads/_/originals/downie-4-bs.png"
                            src="/assets/images/ball-loading.svg"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                  </van-tab>
                  <van-tab title="相关评论">
                    <div class="siderbar-apps__body mh500">
                      <a href="#" class="aboutComments-item">
                        <div class="top">
                          <div class="name">高远球</div>
                          <div class="text-muted f12">2021-10-09</div>
                        </div>
                        <div class="bottom">
                          <p>只有5.0和之前的版本是汉化的，6.X都是英文了</p>
                        </div>
                      </a>
                    </div>
                  </van-tab>
                </van-tabs>
              </div>
            </div>
            <template v-if="currentGrid == 3">
              <div class="pdetail-wrapper">
                <a-spin :spinning="sofeDetailLoading">
                  <div class="p-detail">
                    <div
                      class="device device-macbook-pro device-silver mb-7 device-spacegray"
                    >
                      <div class="device-frame">
                        <div class="swiper-container">
                          <div class="swiper-wrapper"></div>
                          <div class="swiper-btn button-prev">
                            <i class="iconfont">&#xe6d4;</i>
                          </div>
                          <div class="swiper-btn button-next">
                            <i class="iconfont">&#xe600;</i>
                          </div>
                        </div>
                      </div>
                      <div class="device-stripe"></div>
                      <div class="device-header"></div>
                      <div class="device-sensors"></div>
                      <div class="device-btns"></div>
                      <div class="device-power"></div>
                    </div>
                    <div class="text-center">
                      <h2>{{ sofeDetail.Title }}</h2>
                      <h5 class="text-muted mb24">
                        {{ sofeDetail.SubTitle }}
                      </h5>
                      <div class="flex-box info-box">
                        <div class="flex-item flex-box">
                          <i class="iconfont">&#xe60b;</i>
                          <div class="con">
                            <div class="zh">{{ sofeDetail.Language }}</div>
                            <div class="text-muted">软件语言</div>
                          </div>
                        </div>
                        <div class="flex-item flex-box">
                          <i class="iconfont">&#xe6dc;</i>
                          <div class="con">
                            <div class="zh">
                              {{ sofeDetail.Size }}{{ sofeDetail.Unit }}
                            </div>
                            <div class="text-muted">软件大小</div>
                          </div>
                        </div>
                        <div class="flex-item flex-box">
                          <i class="iconfont">&#xe652;</i>
                          <div class="con">
                            <div class="zh">
                              {{ sofeDetail.DownloadCount }}
                            </div>
                            <div class="text-muted">下载次数</div>
                          </div>
                        </div>
                        <div class="flex-item flex-box">
                          <i class="iconfont">&#xe773;</i>
                          <div class="con">
                            <div class="zh">
                              {{ sofeDetail.AutoTimeStamp }}
                            </div>
                            <div class="text-muted">更新时间</div>
                          </div>
                        </div>
                      </div>
                      <div class="button-group">
                        <button
                          class="button button-default"
                          @click="show = true"
                        >
                          立即下载
                        </button>
                        <router-link
                          target="_blank"
                          class="button button-default-reverse"
                          :to="`/sofe/${sofeDetail.AutoID}`"
                          >详细信息</router-link
                        >
                      </div>
                      <div class="summary text-muted">
                        {{ sofeDetail.Summary }}
                      </div>
                    </div>
                  </div>
                </a-spin>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <a-modal
      title="下载地址"
      :class="`my-amodal dark`"
      v-model="show"
      :footer="null"
      :closable="false"
    >
      <div class="download-list">
        <div
          class="download-list__item"
          v-for="item in sofeDetail.DownloadList"
        >
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
import softItem from "@/components/sofeList/item";
import {
  requestSofeNodeList,
  requestSofeAttr,
  requestSoftDetailByID,
  requestSofeList
} from "@/api/soft";
import { Tab, Tabs } from "vant";
window._swiper = null;
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
  name: "sofe",
  layout: "layout",
  components: {
    softItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      show: false,
      openKeys: ["all"],
      selectedKeys: [],
      tabs: [
        { title: "最新", value: "new" },
        { title: "热门", value: "hot" },
        { title: "推荐", value: "recommend" }
      ],
      active: "new",
      openNewWindow: true,
      sofeList: [
        { AutoID: 0 },
        { AutoID: 1 },
        { AutoID: 2 },
        { AutoID: 3 },
        { AutoID: 4 },
        { AutoID: 5 },
        { AutoID: 6 },
        { AutoID: 7 },
        { AutoID: 8 },
        { AutoID: 9 }
      ],
      currentGrid: 1,
      nodeList: [],
      spinning: false,
      tabsActive: 0,
      hotList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      aboutCommentList: [],
      currentActiveIndex: 0,
      sofeDetail: {},
      sofeDetailLoading: false,
      total: 0,
      filterList: [],
      lang: 0,
      sys: 0
    };
  },
  async asyncData(app) {
    // 获取一级栏目和二级栏目
    const [nodeRes, subNodeRes, sofeRes] = await Promise.all([
      requestSofeNodeList(),
      requestSofeNodeList(app.params.type),
      requestSofeList({
        pageIndex: 1,
        pageSize: 20,
        identifier: app.params.type
      })
    ]);
    return {
      nodeList: nodeRes.dataList.map(item => {
        item.nodeList = [];
        if (app.params.type != null && item.Identifier == app.params.type) {
          item.nodeList = subNodeRes.dataList;
        }
        return item;
      }),
      openKeys: [app.params.type],
      total: sofeRes.TotalCount,
      sofeList: sofeRes.dataList
    };
  },
  watch: {
    active: function() {
      this.getSofeList();
    },
    currentGrid: {
      handler: function(value) {
        const appWrapperEl = document.querySelector(".app-wrapper");
        if (!appWrapperEl) {
          return;
        }
        if (value == 3) {
          // this.initSwiper()
          this.getSofeDetail();
          appWrapperEl.classList.add("full-layout");
        } else {
          this.currentActiveIndex = 0;
          appWrapperEl.classList.remove("full-layout");
        }
      }
    }
  },
  computed: {
    currentTitle: function() {}
  },
  mounted() {
    this.getSofeList();
    requestSofeAttr().then(res => {
      console.log("sofeAttr", res);
      this.filterList = res.dataList;
    });
  },
  methods: {
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return (
          <a class="flex-box align-center">
            <i class="iconfont">&#xe6d4;</i>Previous
          </a>
        );
      } else if (type === "next") {
        return (
          <a class="flex-box align-center">
            Next<i class="iconfont">&#xe600;</i>
          </a>
        );
      }
      return originalElement;
    },
    async onOpenChange(openKeys) {
      console.log(openKeys);
      if (this.selectedKeys.length != 0) {
        this.selectedKeys = [];
      }
      const latestOpenKey = !openKeys.length
        ? this.openKeys[0]
        : openKeys[openKeys.length - 1];
      const [res] = await Promise.all([this.getNodeList(latestOpenKey)]);
      for (let i = 0; i < this.nodeList.length; i++) {
        if (this.nodeList[i].Identifier == latestOpenKey) {
          this.nodeList[i].nodeList = res.dataList;
          break;
        }
      }
      this.selectedKeys = [];
      this.openKeys = [latestOpenKey];
      this.getSofeList();
    },
    onChangeGrid(active) {
      if (active == this.currentGrid) {
        return;
      }
      this.currentGrid = active;
      if (active == 3) {
        this.currentActiveIndex = 0;
        this.sofeDetail = {};
        this.getSofeDetail();
      }
    },
    onItemClick({ item, key, keyPath }) {
      if (key == this.selectedKeys[0]) {
        return;
      }
      this.selectedKeys = [key];
      this.getSofeList();
    },
    getNodeList(key) {
      this.spinning = true;
      return requestSofeNodeList(key);
    },
    getSofeList(pageNum = 1) {
      this.spinning = true;
      return requestSofeList({
        pageIndex: pageNum,
        pageSize: 20,
        identifier: this.selectedKeys.length
          ? this.selectedKeys[0]
          : this.openKeys[0],
        filter: this.active,
        systemid: "",
        languageid: ""
      }).then(res => {
        this.sofeList = res.dataList;
        this.total = res.TotalCount;
        this.spinning = false;
        return res;
      });
    },
    onChange(pageNum) {
      this.getSofeList(pageNum);
    },
    onSelected(val) {
      const index = this.sofeList.indexOf(val);
      this.currentActiveIndex = index;
      this.getSofeDetail();
    },
    getSofeDetail() {
      this.sofeDetailLoading = true;
      requestSoftDetailByID(this.sofeList[this.currentActiveIndex].AutoID).then(
        res => {
          console.log("商品详情", res);
          this.sofeDetail = res;
          this.sofeDetailLoading = false;
          if (!window._swiper) {
            this.initSwiper();
          }
          setTimeout(() => {
            window._swiper.removeAllSlides();
            this.sofeDetail.PhotoList.forEach(item => {
              window._swiper.appendSlide(`<div
                                class="swiper-slide"
                              >
                                <img src="${item.Img}" alt="" />
                              </div>`);
              window._swiper.update();
            }, 500);
          });
        }
      );
    },
    initSwiper() {
      window._swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        }
      });
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

<style></style>
