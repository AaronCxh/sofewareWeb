<template>
  <div
    class="app-wrapper"
    v-infinite-scroll="onReachBottom"
    style="overflow:auto"
    :infinite-scroll-distance="100"
    :infinite-scroll-immediate="false"
  >
    <topbar></topbar>
    <navbar></navbar>
    <div class="main-wrapper">
      <nuxt></nuxt>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue";
import pageFooter from "../components/footer.vue";
import navbar from "../components/navbar.vue";
export default {
  name: "layout",
  components: {
    topbar,
    pageFooter,
    navbar
  },
  methods: {
    onReachBottom() {
      if (this.$route.matched[0].instances.default.onReachBottom) {
        return
      }
      const onReachBottom = this.$route.matched[0].instances.default
        .onReachBottom;
      typeof onReachBottom == "function" && onReachBottom();
    }
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100vh;
}
</style>
