<template>
  <div
    class="app-layout layout-min-height"
    :class="{ 'w-full': currentGrid == 3 }"
  >
    <div class="container">
      <div class="flex-box" v-if="device != 'mobile'">
        <div class="app-sidebar">
          <div class="scrollabled">
            <p class="title" v-if="!searchKey">分类</p>
            <a-menu
              v-if="!searchKey"
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
              <a-radio-group
                :value="index == 0 ? sys : lang"
                class="my-radio-group"
                @change="onRadioChange(index == 0 ? 'sys' : 'lang', $event)"
              >
                <a-radio :value="0">
                  全部
                </a-radio>
                <a-radio
                  :value="item.AutoID"
                  v-for="item in filter.PropertyItemList"
                  :key="item.Name"
                >
                  {{ item.Name }}
                </a-radio>
              </a-radio-group>
            </div>
          </div>
        </div>
        <div class="app-content">
          <div class="app-content__list">
            <div class="app-content__list--header">
              <div class="main-title">
                <h5>
                  {{ title }} <span>({{ total }})</span>
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
            <div class="search-bar" v-if="searchKey.length">
              共为您找到 <span class="text">{{ total }}</span>
              款和
              <a-tag
                v-for="(tag, index) in tags"
                :key="tag"
                closable
                @close="() => handleClose(tag)"
              >
                {{ tag }}
              </a-tag>
              相关的软件
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
                    :key="`a${item.AutoID}`"
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
                <div class="empty" v-if="!sofeList.length">暂无数据</div>
              </a-spin>
              <a-pagination
                v-if="sofeList.length"
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
                <router-link
                  target="_blank"
                  :to="`/${item.Type}/${item.AutoID}`"
                  class="item"
                  v-for="item in relatedSoftList"
                  :key="`b${item.AutoID}`"
                >
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      src="~assets/images/ball-loading.svg"
                      :data-src="item.Icon"
                      alt=""
                    />
                  </div>
                  <div class="flex-1">
                    <p>
                      {{ item.Title }}
                    </p>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="siderbar-apps border flex-box" v-if="currentGrid == 2">
              <div class="siderbar-apps__header">
                <h6>本周热门</h6>
              </div>
              <div class="siderbar-apps__body mh500">
                <router-link
                  :to="`/sofe/${item.AutoID}`"
                  target="_blank"
                  class="hot-item"
                  v-for="(item, index) in hotList"
                  :key="`h${item.AutoID}`"
                >
                  <div class="number">{{ index + 1 }}</div>
                  <div class="con">
                    <div class="name">
                      {{ item.Title }}
                    </div>
                    <div class="summary">
                      {{ item.SubTitle }}
                    </div>
                  </div>
                  <div class="cover">
                    <img
                      class="lazyload blur_img"
                      :data-src="item.Icon"
                      src="~assets/images/ball-loading.svg"
                      alt=""
                    />
                  </div>
                </router-link>
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
      <div v-else>
        <div class="app-content__list--header">
          <div class="main-title">
            <h5>
              {{ title }} <span>({{ total }})</span>
            </h5>
          </div>
        </div>
        <div class="app-content__list--body">
          <a-spin :spinning="spinning">
            <a-row type="flex" class="col-row">
              <a-col
                v-for="(item, index) in sofeList"
                :key="`a${item.AutoID}`"
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
                    <span class="version"
                      ><i>-</i> {{ scope.data.Version }}</span
                    >
                  </template>
                  <template #extend="scope">
                    <div class="arrow">
                      <i class="iconfont">&#xe604;</i>
                    </div>
                  </template>
                </soft-item>
              </a-col>
            </a-row>
            <div class="empty" v-if="!sofeList.length">暂无数据</div>
          </a-spin>
          <van-pagination class="my-mpagination" @change="onChange" v-model="currentPage" :items-per-page="20" :total-items="total" mode="simple" />
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
  requestSofeList,
  requestRelatedSoftList,
  requestWeekHot
} from "@/api/soft";
import { Pagination  } from "vant";
import { mapGetters } from "vuex";
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
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      currentPage: 1,
      tags: [],
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
      hotList: [],
      aboutCommentList: [],
      currentActiveIndex: 0,
      sofeDetail: {},
      sofeDetailLoading: false,
      total: 0,
      filterList: [],
      lang: 0,
      sys: 0,
      searchKey: "",
      relatedSoftList: []
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
    $route: {
      handler: function(value) {
        console.log(value);
        this.searchKey = value.query.search || "";
        this.tags = [value.query.search];
        this.getSofeList();
      },
      immediate: true
    },
    active: function() {
      this.getSofeList();
    },
    currentGrid: {
      handler: function(value) {
        const appWrapperEl = document.querySelector(".app-wrapper");
        if (!appWrapperEl) {
          return;
        }
        if (value == 2) {
          this.initAsideData();
        } else if (value == 3) {
          appWrapperEl.classList.add("full-layout");
        } else {
          this.currentActiveIndex = 0;
          appWrapperEl.classList.remove("full-layout");
        }
      }
    }
  },
  computed: {
    title: function() {
      let result = "全部软件";
      for (let i = 0; i < this.nodeList.length; i++) {
        const element = this.nodeList[i];
        if (element.Identifier == this.openKeys[0]) {
          result = element.NodeName;
          if (this.selectedKeys.length) {
            for (let j = 0; j < element.nodeList.length; j++) {
              if (element.nodeList[j].Identifier == this.selectedKeys[0]) {
                result = element.nodeList[j].NodeName;
              }
            }
          }
        }
      }
      return result;
    },
    ...mapGetters(["device"])
  },
  mounted() {
    this.getSofeList();
    requestSofeAttr().then(res => {
      console.log("sofeAttr", res);
      this.filterList = res.dataList;
    });
  },
  methods: {
    async initAsideData() {
      const [rRes, hRes] = await Promise.all([
        requestRelatedSoftList(),
        requestWeekHot()
      ]);
      this.relatedSoftList = rRes.dataList;
      this.hotList = hRes.dataList;
    },
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
      if (active != 3 && window._swiper != null) {
        window._swiper.destroy();
        window._swiper = null;
      }
      this.currentGrid = active;
      this.getSofeList();
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
        identifier: this.searchKey
          ? "all"
          : this.selectedKeys.length
          ? this.selectedKeys[0]
          : this.openKeys[0],
        filter: this.active,
        systemid: this.sys,
        languageid: this.lang,
        key: this.searchKey
      }).then(res => {
        this.sofeList = res.dataList;
        this.total = res.TotalCount;
        this.spinning = false;
        this.currentActiveIndex = 0;
        if (this.currentGrid == 3) {
          this.getSofeDetail();
        }
        return res;
      });
    },
    onChange(pageNum) {
      console.log(pageNum)
      this.currentPage = pageNum
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
              console.log("PhotoList", item);
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
    },
    onRadioChange(key, e) {
      console.log(key, e);
      this[key] = e.target.value;
      this.getSofeList();
    },
    handleClose(val) {
      console.log(val);
      this.tags = [];
      this.$router.push({
        path: "/sofe/list/all"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  padding: 32px 0;
  text-align: center;
  opacity: 0.5;
}
</style>
