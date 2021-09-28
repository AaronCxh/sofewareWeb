<template>
  <div class="bibei-wrapper layout-min-height">
    <div class="container">
      <div class="">
        <a-row :gutter="[20,20]">
          <a-col :span="12" :md="8" :lg="6" :xl="4">
            <a href="#" class="item"></a>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layout"
};
</script>

<style lang="scss">
.bibei-wrapper {
  padding: 32px 0 80px;
}
</style>
