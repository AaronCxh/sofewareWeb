<template>
  <div class="billboard-layout layout-min-height">
    <div class="inner">
      <div class="hd">
        <h1>精彩软件推荐</h1>
        <p class="text-muted">你不能错过的 macOS 精彩软件合辑</p>
      </div>
      <div class="bd">
        <a-row :gutter="[30, 30]">
          <a-col :span="12" v-for="(item, index) in list" :key="index" :class="`animation fadeInLeft delay-${index}`">
            <billboard-item :data="item"></billboard-item>
          </a-col>
        </a-row>
        <a-spin :spinning="spinning"></a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import { requestBillboardList } from "@/api/billboard";
export default {
  name: "billboard",
  layout: "layout",
  components: {
    billboardItem: () => import("@/components/billboardItem")
  },
  data() {
    return {
      spinning: false,
      pageNum: 1,
      loading: true,
      list: [],
      buttontext: "加载中..",
      nomore: true
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(pageNum = 1) {
      this.spinning = true
      return new Promise(resolve => {
        this.loading = true;
        requestBillboardList({
          pageIndex: pageNum,
          pageSize: 4
        }).then(res => {
          this.spinning = false
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
            this.list =
              pageNum == 1 ? res.dataList : this.list.concat(res.dataList);
            this.nomore = false;
          } else {
            this.list = [];
            this.nomore = true;
          }
          resolve();
        });
      });
    },
    onReachBottom() {
      console.log('bbbbbbbb')
      this.pageNum != 0 && this.getList(this.pageNum + 1)
    }
  }
};
</script>

<style lang="scss" scoped>
.billboard-layout {
  padding: 32px 0;
  .ant-spin {
    margin-top: 32px;
  }
  .bd {
    min-height: 250px;
  }
  .inner {
    max-width: 1030px;
    padding: 0 15px;
    margin: 0 auto;
    .hd {
      text-align: center;
      padding: 32px 0;
      h1 {
        font-size: 42px;
        color: var(--color-fontColor);
        margin-bottom: 8px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}
.ant-spin {
  width: 100%;
}
</style>
