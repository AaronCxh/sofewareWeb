<template>
  <div class="billboard-layout layout-min-height">
    <div class="inner">
      <div class="hd">
        <h1>精彩软件推荐</h1>
        <p class="text-muted">你不能错过的 macOS 精彩软件合辑</p>
      </div>
      <a-row :gutter="[30,30]">
        <a-col :span="12" v-for="(item, index) in list" :key="index">
          <billboard-item :data="item"></billboard-item>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
// import billboardItem from '@/components/billboardItem'
export default {
  name: "billboard",
  layout: "layout",
  components: {
    billboardItem: () => import('@/components/billboardItem')
  },
  data() {
    return {
      list: [{},{},{},{},{},{}]
    };
  }
};
</script>

<style lang="scss">
.billboard-layout {
  padding-top: 32px;
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
</style>
