<template>
  <div class="layout-min-height">
    <div class="privacy-section">
      <div class="container">
        <div class="privacy-inner sofe-inner">
          <div class="content">
            <div class="container">
              <h1>隐私政策</h1>
              <div class="artilce-richText" v-html="data.Content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestSiteConfig } from "@/api/app";
export default {
  name: "privacy",
  layout: "layout",
  async asyncData() {
    let data = await requestSiteConfig("privacy");
    return { data };
  },
  data() {
    return {
      data: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.privacy-inner {
  margin: 32px 0;
  border: 1px solid var(--borderColor);
  box-shadow: 0 30px 48px rgba(9, 13, 19, 0.5);
  .content {
    background-color: var(--darkBackgroundColor);
    padding: 24px 0;
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 150px;
    color: var(--color-fontColor);
    margin-bottom: 0;
  }
}
</style>
