<template>
  <div class="tutorial-list"> 
    <a-row :gutter="[20,20]">
      <a-col :class="`animation fadeInLeft delay-${index}`" :sm="24" :lg="12" v-for="(item, index) in data" :key="item.AutoID">
        <router-link :to="`artilce/${item.AutoID}`" class="tutorial-list__item border">
          <img class="lazyload blur_img" data-src="https://cdn.macwk.com/public/uploads/_/originals/jetbrains-400-300-1.jpg" alt="">
          <div class="tutorial-list__con">
            <div class="tutorial-list__item--title">Adobe 系列软件安装及激活异常说明</div>
            <div class="tutorial-list__item--time">2021-09-04</div>
          </div>
          <div class="tutorial-list__item--more">
            <i class="iconfont">&#xe604;</i>
          </div>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  :root {
    --tutorialItem: #121A26;

  }
  @import '@/scss/var/var';
  @import '@/scss/mixins/mixins';
  @include b(tutorial-list) {
    @include e(item) {
      padding: 20px;
      background: var(--tutorialItem);
      display: flex;
      align-items: center;
      color: var(--sofeItemColor);
      &:hover {
        .tutorial-list__item--title {
          color: $color-default;
        }
        .tutorial-list__item--time {
          color: var(--sofeItemColor);
        }
        .tutorial-list__item--more {
          color: $color-default;
        }
      }
      img {
        width: 144px;
        height: 100px;
        margin-right: 38px;
      }
      @include e(con) {
        flex: 1;
      }
      @include m(title) {
        color: inherit;
        font-size: 20px;
        margin-bottom: 8px;
        transition: all 0.3s;
        @include clamp(2);
      }
      @include m(time) {
        color: inherit;
        opacity: 0.7;
        font-size: 16px;
      }
      @include m(more) {
        flex: 0 0 80px;
        text-align: right;
        transition: all 0.3s;
      }
    }
  }

</style>