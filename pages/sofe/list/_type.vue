<template>
  <div class="app-layout layout-min-height">
    <div class="container">
      <div class="flex-box">
        <div class="app-sidebar">
          <p class="title">分类</p>
          <a-menu
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
                <a-switch v-model="open" />
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
                    :class="`f-col animation fadeInLeft delay-${index}`"
                  >
                    <soft-item :data="item" :show-more="false">
                      <template #title="scope">
                        <span class="version"> - {{ scope.data.Version }}</span>
                      </template>
                      <template #summary="scope">
                        <span class="size">
                          - {{ scope.data.Size }}{{ scope.data.Unit }}</span
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
          <div class="app-content__info"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper/swiper-bundle.min.js";
// import "swiper/swiper-bundle.css";
import softItem from "@/components/sofeList/item";
import {
  requestSofeNodeList,
  requestSofeAttr,
  requestSofeList
} from "@/api/soft";
export default {
  name: "sofe",
  layout: "layout",
  components: {
    softItem
  },
  data() {
    return {
      openKeys: ["all"],
      selectedKeys: [],
      tabs: [
        { title: "最新", value: "new" },
        { title: "热门", value: "hot" },
        { title: "推荐", value: "recommend" }
      ],
      active: "new",
      open: true,
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
      spinning: false
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
    }
  },
  computed: {
    currentTitle: function() {}
  },
  mounted() {
    this.getSofeList();
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
      this.getSofeList(pageNum)
    }
  }
};
</script>

<style></style>
