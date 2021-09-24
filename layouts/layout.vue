<template>
  <div class="app-wrapper">
    <topbar></topbar>
    <div class="main-wrapper">
      
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue";
import pageFooter from "../components/footer.vue";
export default {
  components: {
    topbar,
    pageFooter
  }
};
</script>

<style></style>
