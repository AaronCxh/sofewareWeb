<template>
  <div class="item">
    <a :href="`#/sofe/${data.AutoID}`" class="" target="_blank"
      ><div class="flex-box align-center">
        <div class="box-icon mb-0 mr-4 delay-0">
          <img
            class="lazyload img"
            :data-src="data.Icon"
            src="~assets/images/ball-loading.svg"
          />
        </div>
        <div class="con">
          <h5 class="title">
            {{ data.Title }}
          </h5>
          <p class="text text-muted">
            {{ data.SubTitle }}
          </p>
        </div>
        <div>
          <button class="btn btn-link px-0">
            <i class="iconfont">&#xe6f8;</i>
          </button>
        </div></div
    ></a>
    <div class="box-body">
      <p class="text-muted summary">
        {{ data.Summary }}
      </p>
      <div class="swiper-container promo-wrapper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in data.PhotoList">
            <img
              :src="item.Img"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-btn button-prev">
          <i class="iconfont">&#xe6d4;</i>
        </div>
        <div class="swiper-btn button-next">
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
  
    this.initSwiper();
  },
  data() {
    return {};
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.item {
  background-color: #1c283b;
  padding: 16px;
  color: var(--color-fontColor);
  .box-icon {
    margin-right: 16px;
    img {
      width: 56px;
      height: 56px;
    }
  }
  .flex-box {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--borderColor);
  }
  .con {
    flex: 1;
    line-height: 1.9;
    .title {
      font-size: 20px;
      line-height: 1.3;
      color: var(--color-fontColor);
      margin: 0;
    }
    .text {
      font-size: 15px;
      margin: 0;
    }
  }
  .summary {
    font-size: 16px;
    line-height: 1.9;
    @include clamp(3);
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .promo-wrapper {
    margin: 16px 0 0;
  }
  .btn {
    .iconfont {
      font-size: 26px;
      font-weight: 300;
    }
  }
  a {
    &:hover {
      .title {
        color: var(--color-default);
      }
    }
  }
}
</style>
