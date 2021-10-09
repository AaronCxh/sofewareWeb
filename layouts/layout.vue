<template>
    <!-- style="overflow:auto"
    v-infinite-scroll="onReachBottom" -->
  <div
    :class="`app-wrapper device-${device}`"
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
import { mapGetters } from 'vuex'
export default {
  name: "layout",
  components: {
    topbar,
    pageFooter,
    navbar
  },
  computed: {
    ...mapGetters(['device'])
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
