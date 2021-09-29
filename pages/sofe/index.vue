<template>
  <div class="app-layout layout-min-height">
    <div class="container">
      <div class="flex-box">
        <div class="app-sidebar">
          <p class="title">分类</p>
          <a-menu
            mode="inline"
            :open-keys="openKeys"
            style="width: 100%"
            v-model="defaultOpenKeys"
            @openChange="onOpenChange"
          >
            <a-sub-menu key="全部软件">
              <div class="flex-box align-center" slot="title">
                <span>全部软件</span>
              </div>
            </a-sub-menu>
            <a-sub-menu key="系统工具">
              <div class="flex-box align-center" slot="title">
                <span>系统工具</span><i class="iconfont">&#xe600;</i>
              </div>
              <a-menu-item key="系统清理">
                系统清理
              </a-menu-item>
              <a-menu-item key="系统优化">
                系统优化
              </a-menu-item>
              <a-menu-item key="系统增强">
                系统增强
              </a-menu-item>
              <a-menu-item key="数据恢复">
                数据恢复
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="应用软件">
              <div class="flex-box align-center" slot="title">
                <span>应用软件</span><i class="iconfont">&#xe600;</i>
              </div>
              <a-menu-item key="书籍阅读">
                书籍阅读
              </a-menu-item>
              <a-menu-item key="文本处理">
                文本处理
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
        <div class="app-content">
          <div class="app-content-header">
            <div class="main-title">
              <h5>系统清理 <span>(36)</span></h5>
            </div>
            <div class="menu">
              <a-tabs class="menu__list" v-model="active">
                <a-tab-pane
                  :key="tab.title"
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
          </div>
          <div class="app-content-body">
            <a-row :gutter="20">
              <a-col
                :xs="12"
                :sm="12"
                :lg="6"
                :xxl="4"
                v-for="item in sofeList"
                :key="item.AutoID"
              >
                <soft-item :data="item" :show-more="false">
                  <template #extend>
                    <div slot="extend" class="sofe-wrapper__item--extend">
                      <div class="download">
                        <i class="iconfont">&#xe6f9;</i>
                        260911
                      </div>
                      <div class="update">
                        <i class="iconfont">&#xe6ce;</i>
                        09-04
                      </div>
                    </div>
                  </template>
                </soft-item>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper/swiper-bundle.min.js";
// import "swiper/swiper-bundle.css";
import softItem from "@/components/sofeList/item";
export default {
  name: "sofe",
  layout: "layout",
  components: {
    softItem
  },
  data() {
    return {
      rootSubmenuKeys: ["全部软件", "系统工具", "应用软件"],
      openKeys: ["全部软件"],
      defaultOpenKeys: [],
      tabs: [
        { title: "最新" },
        { title: "下载" },
        { title: "评论" },
        { title: "专题" },
        { title: "榜单" }
      ],
      active: "下载",
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
      ]
    };
  },
  mounted() {},
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>

<style></style>
