<template>
  <div class="sofe-wrapper__list">
    <a-row :gutter="20">
      <!-- <transition type="animation" appear mode="out-out"  name="leftIn" v-for="(item, index) in data" :key="item.id"> -->
        <a-col :class="`animation fadeInLeft delay-${index}`" v-for="(item, index) in data" :xs="12" :sm="8" :lg="6" :xxl="4" :key="item.AutoID">
          <sofe-item :data="item" :index="index"></sofe-item>
        </a-col>
      <!-- </transition> -->
    </a-row>
  </div>
</template>

<script>
import sofeItem from "./item";
export default {
  components: {
    sofeItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";

@include b(sofe-wrapper) {
  @include e(list) {
    .ant-col {
      transition: all 1.1s;
    }
  }
  @include e(item) {
    background-color: var(--sofeItembackgroundColor);
    position: relative;
    width: 100%;
    border-radius: 5px;
    padding: 25px 25px 20px;
    display: block;
    overflow: hidden;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out, translateY 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(84, 81, 81, 0.15);
      z-index: 1;
      .sofe-wrapper__item--con {
        color: $color-default;
      }
      .img {
        transform: scale(1.1);
      }
      .shadow {
        transform: scale(1);
      }
    }
    .img {
      width: 72px;
      height: 72px;
      animation-name: vanishInSmall;
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease-in-out, translateY 0.3s ease-in-out;
    }
    .shadow {
      --size: 92px;
      width: var(--size);
      height: var(--size);
      position: absolute;
      top: -10px;
      left: -10px;
      background-image: var(--img);
      border-radius: 55px;
      opacity: 1;
      transform: scale(0) translateX(-50%);
      filter: blur(20px) opacity(70%);
      z-index: -1;
      transition-delay: 0.05s;
      transition: transform 0.3s ease-in-out;
      background-size: cover;
      background-repeat: no-repeat;
    }
    @include e(image) {
      position: relative;
    }
    @include m(con) {
      position: relative;
      padding: 25px 5px 35px;
      height: 150px;
      color: var(--sofeItemColor);
    }
    @include m(version) {
      font-size: 15px;
      line-height: 1.9;
      opacity: 0.4;
      color: var(--sofeItemColor);
    }
    @include m(name) {
      color: inherit;
      font-size: 20px;
      @include nowrap();
      margin-bottom: 4px;
    }
    @include m(summary) {
      font-size: 15px;
      color: var(--sofeItemColor);
      @include nowrap();
      opacity: 0.4;
    }
    @include m(more) {
      position: absolute;
      bottom: 0;
      left: 0;
      .iconfont {
        color: inherit;
        font-size: 16px;
      }
    }
  }
}
</style>

<style lang="scss">

.leftIn-enter {
  transform: translateX(-50px);
  opacity: 0;
}


</style>
