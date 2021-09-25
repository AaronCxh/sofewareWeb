<template>
  <div class="app-wrapper">
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
import navbar from "../components/navbar.vue"
export default {
  components: {
    topbar,
    pageFooter,
    navbar
  }
};
</script>

<style></style>
